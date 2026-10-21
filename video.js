// Vídeos instrutivos: MP4/WebM e legendas SRT convertidas para WebVTT no navegador.
(function () {
    "use strict";

    const carregamentos = new Set();
    const urlsDeLegendas = new Set();

    function resolverArquivo(caminho, tipo = "video") {
        if (typeof caminho !== "string") return null;
        const partes = caminho.trim().normalize("NFC").split("/");
        const nome = partes.join("/");
        const pastaValida = partes[0] === "videos" || (tipo === "legenda" && partes[0] === "legendas");
        const formatoValido = tipo === "legenda" ? /\.srt$/i.test(nome) : /\.(mp4|webm)$/i.test(nome);
        if (partes.length < 2 || !pastaValida || !formatoValido
            || partes.some(parte => !parte || parte === "." || parte === "..")
            || /[\\?#%<>]/.test(nome)) return null;
        const base = new URL(document.baseURI);
        const url = new URL(partes.map(encodeURIComponent).join("/"), base);
        return url.origin === base.origin ? url.href : null;
    }

    function converterSrt(texto) {
        const srt = String(texto || "").replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
        const marca = /^(\d{2}:\d{2}:\d{2}[,.]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[,.]\d{3})(?:\s+.*)?$/;
        const blocos = srt.trim().split(/\n\s*\n/);
        const legendas = [];
        const transcricao = [];
        blocos.forEach(bloco => {
            const linhas = bloco.trim().split("\n");
            const indice = /^\d+$/.test(linhas[0]?.trim() || "") ? 1 : 0;
            const tempos = linhas[indice]?.trim().match(marca);
            if (!tempos) return;
            const fala = linhas.slice(indice + 1).join("\n").trim();
            if (!fala) return;
            const inicio = tempos[1].replace(",", ".");
            const fim = tempos[2].replace(",", ".");
            const partes = inicio.split(/[:.]/).map(Number);
            const segundos = partes[0] * 3600 + partes[1] * 60 + partes[2] + partes[3] / 1000;
            legendas.push(`${inicio} --> ${fim}\n${fala}`);
            transcricao.push({
                segundos,
                tempo: inicio.slice(0, 8),
                texto: fala.replace(/<[^>]*>/g, "")
            });
        });
        if (!legendas.length) throw new Error("Arquivo SRT sem tempos válidos.");
        return { vtt: `WEBVTT\n\n${legendas.join("\n\n")}\n`, transcricao };
    }

    // Permite compartilhar o resultado preservando o vídeo e o instante exato.
    function analisarDestinoVideo(secao = "") {
        const match = String(secao).match(/^(guia-video-[1-9]\d*)@(\d+(?:\.\d{1,3})?)$/);
        if (!match) return null;
        const segundos = Number(match[2]);
        return Number.isFinite(segundos) && segundos >= 0 && segundos < 86400
            ? { id: match[1], segundos }
            : null;
    }

    function destacarTrechoDaTranscricao(figura, detalhes, segundos) {
        const itens = Array.from(detalhes.querySelectorAll("li[data-tempo-segundos]"));
        if (!itens.length) return;
        let indiceMaisProximo = 0;
        let menorDistancia = Infinity;
        itens.forEach((item, indice) => {
            const distancia = Math.abs(Number(item.dataset.tempoSegundos) - segundos);
            if (distancia < menorDistancia) { menorDistancia = distancia; indiceMaisProximo = indice; }
        });
        itens.forEach((item, indice) => {
            const encontrado = indice === indiceMaisProximo;
            item.classList.toggle("video-transcricao-encontrado", encontrado);
            const botao = item.querySelector("button");
            if (encontrado) botao?.setAttribute("aria-current", "true");
            else botao?.removeAttribute("aria-current");
        });
        detalhes.open = true;
        const resumo = detalhes.querySelector("summary");
        if (resumo) resumo.textContent = `Transcrição aberta no trecho ${itens[indiceMaisProximo].querySelector("button")?.textContent || ""}`;
    }

    function posicionarVideoNoTrecho(figura, segundos) {
        const video = figura?.querySelector?.("video");
        if (!video || !Number.isFinite(segundos) || segundos < 0) return false;
        figura.dataset.tempoBusca = String(segundos);
        const aplicarTempo = () => {
            if (!video.isConnected) return;
            try {
                video.currentTime = Number.isFinite(video.duration)
                    ? Math.min(segundos, video.duration) : segundos;
                video.pause();
            } catch (erro) {
                console.warn("Não foi possível posicionar o vídeo:", erro);
            }
        };
        if (video.readyState >= 1) aplicarTempo();
        else video.addEventListener("loadedmetadata", aplicarTempo, { once: true });
        const detalhes = figura.querySelector("details.video-transcricao");
        if (detalhes) destacarTrechoDaTranscricao(figura, detalhes, segundos);
        return true;
    }

    function criarTranscricao(trechos, video) {
        const detalhes = document.createElement("details");
        detalhes.className = "video-transcricao";
        const resumo = document.createElement("summary");
        resumo.textContent = "Ler transcrição do vídeo";
        detalhes.appendChild(resumo);
        const lista = document.createElement("ol");
        trechos.forEach(trecho => {
            const item = document.createElement("li");
            item.dataset.tempoSegundos = String(trecho.segundos);
            const tempo = document.createElement("button");
            tempo.type = "button";
            tempo.className = "video-transcricao-tempo";
            tempo.textContent = trecho.tempo;
            tempo.setAttribute("aria-label", `Reproduzir a partir de ${trecho.tempo}`);
            tempo.addEventListener("click", () => {
                video.currentTime = trecho.segundos;
                video.play().catch(() => {});
            });
            const fala = document.createElement("span");
            fala.textContent = trecho.texto;
            item.append(tempo, fala);
            lista.appendChild(item);
        });
        detalhes.appendChild(lista);
        return detalhes;
    }

    async function adicionarLegenda(figura, video, caminho) {
        const url = resolverArquivo(caminho, "legenda");
        const status = document.createElement("p");
        status.className = "video-legenda-status";
        figura.appendChild(status);
        if (!url) {
            status.textContent = "Legenda inválida: informe um .srt na pasta videos/ ou legendas/.";
            return;
        }
        const controlador = new AbortController();
        carregamentos.add(controlador);
        status.textContent = "Carregando legendas…";
        try {
            const resposta = await fetch(url, { signal: controlador.signal });
            if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
            const resultado = converterSrt(await resposta.text());
            if (!video.isConnected || controlador.signal.aborted) return;
            const enderecoTemporario = URL.createObjectURL(new Blob([resultado.vtt], { type: "text/vtt" }));
            urlsDeLegendas.add(enderecoTemporario);
            const faixa = document.createElement("track");
            faixa.kind = "captions";
            faixa.label = "Português";
            faixa.srclang = "pt-BR";
            faixa.src = enderecoTemporario;
            faixa.default = true;
            faixa.addEventListener("load", () => { faixa.track.mode = "showing"; }, { once: true });
            video.appendChild(faixa);
            const detalhes = criarTranscricao(resultado.transcricao, video);
            figura.appendChild(detalhes);
            if (figura.dataset.tempoBusca !== undefined) {
                destacarTrechoDaTranscricao(figura, detalhes, Number(figura.dataset.tempoBusca));
            }
            status.remove();
        } catch (erro) {
            if (!controlador.signal.aborted && video.isConnected) {
                console.warn("Legendas SRT indisponíveis:", erro);
                status.textContent = "Legendas e transcrição indisponíveis no momento.";
            }
        } finally {
            carregamentos.delete(controlador);
        }
    }

    function renderizarVideosDoArtigo(container) {
        container.querySelectorAll("pre > code.language-video").forEach((codigo, indice) => {
            const configuracao = {};
            codigo.textContent.split(/\r?\n/).forEach(linha => {
                const dado = linha.match(/^\s*(arquivo|legenda|titulo)\s*:\s*(.*?)\s*$/i);
                if (dado) configuracao[dado[1].toLowerCase()] = dado[2];
            });
            const url = resolverArquivo(configuracao.arquivo);
            if (!url) {
                const aviso = document.createElement("p");
                aviso.className = "video-legenda-status";
                aviso.textContent = "Vídeo não disponível: confira o arquivo MP4/WebM em videos/.";
                codigo.parentElement.replaceWith(aviso);
                return;
            }

            const titulo = configuracao.titulo
                || configuracao.arquivo.split("/").pop().replace(/\.(mp4|webm)$/i, "");
            const figura = document.createElement("figure");
            figura.className = "video-contextual";
            figura.id = `guia-video-${indice + 1}`;
            const video = document.createElement("video");
            video.controls = true;
            video.playsInline = true;
            video.preload = "metadata";
            video.setAttribute("aria-label", titulo);
            const fonte = document.createElement("source");
            fonte.src = url;
            fonte.type = /\.webm$/i.test(configuracao.arquivo) ? "video/webm" : "video/mp4";
            video.appendChild(fonte);
            const link = document.createElement("a");
            link.href = url;
            link.textContent = "Abrir vídeo";
            video.appendChild(link);
            figura.appendChild(video);
            const legendaVisual = document.createElement("figcaption");
            legendaVisual.textContent = titulo;
            figura.appendChild(legendaVisual);
            codigo.parentElement.replaceWith(figura);
            if (configuracao.legenda) adicionarLegenda(figura, video, configuracao.legenda);
        });
    }

    function limpar() {
        carregamentos.forEach(controlador => controlador.abort());
        carregamentos.clear();
        urlsDeLegendas.forEach(url => URL.revokeObjectURL(url));
        urlsDeLegendas.clear();
    }

    window.GuiaVideos = {
        renderizarVideosDoArtigo, limpar, converterSrt, resolverArquivo,
        analisarDestinoVideo, posicionarVideoNoTrecho
    };
})();
