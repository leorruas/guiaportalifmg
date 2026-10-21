(() => {
    function normalizarTextoParaBusca(texto = "") {
        return String(texto)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase("pt-BR");
    }

    // Perguntas completas usam palavras de ligação que não descrevem a tarefa.
    // Conservamos os termos de ação ("criar", "editar", "publicar") e voltamos
    // à consulta original quando ela contém somente palavras de apoio.
    const palavrasDeApoioBusca = new Set([
        "a", "as", "o", "os", "um", "uma", "uns", "umas",
        "de", "da", "do", "das", "dos", "em", "no", "na", "nos", "nas",
        "para", "pra", "por", "pelo", "pela", "pelos", "pelas",
        "com", "e", "ou", "que", "qual", "quais", "como", "onde",
        "eu", "me", "meu", "minha", "isso", "esse", "essa",
        "posso", "pode", "podemos", "preciso", "quero", "gostaria",
        "faco", "fazer", "consigo"
    ]);

    function termosDaBusca(termoBusca) {
        const termos = normalizarTextoParaBusca(termoBusca)
            .replace(/[^\p{L}\p{N}]+/gu, " ")
            .trim()
            .split(/\s+/)
            .filter(Boolean);
        const termosSignificativos = termos.filter(termo => !palavrasDeApoioBusca.has(termo));
        return termosSignificativos.length ? termosSignificativos : termos;
    }

    function consultaNormalizadaBusca(termoBusca) {
        return termosDaBusca(termoBusca).join(" ");
    }

    function contemTodosOsTermos(texto, termos) {
        const textoNormalizado = normalizarTextoParaBusca(texto);
        return termos.every(termo => textoNormalizado.includes(termo));
    }

    function aliasesDoArtigo(artigo) {
        return Array.isArray(artigo?.metadados?.aliases)
            ? artigo.metadados.aliases.join(" ")
            : "";
    }

    function textoIndexavelDoArtigo(artigo) {
        return `${artigo.titulo} ${artigo.categoria} ${aliasesDoArtigo(artigo)} ${artigo.conteudo}`;
    }

    // Descobre legendas pelos blocos de vídeo reais do artigo.
    function extrairReferenciasVideosBusca(markdown = "") {
        return [...String(markdown).matchAll(/```video\s*\n([\s\S]*?)\n```/g)]
            .map((bloco, indice) => {
                const campos = {};
                bloco[1].split("\n").forEach(linha => {
                    const match = linha.match(/^\s*(arquivo|legenda|titulo)\s*:\s*(.*?)\s*$/i);
                    if (match) campos[match[1].toLowerCase()] = match[2];
                });
                return { ...campos, indice: indice + 1 };
            })
            .filter(video => video.arquivo && video.legenda);
    }

    function encontrarCorrespondenciaLegendaBusca(artigo, consulta) {
        const termos = termosDaBusca(consulta);
        if (!termos.length) return null;
        for (const video of artigo.transcricoes || []) {
            if (!contemTodosOsTermos(video.texto, termos)) continue;
            let melhor = 0;
            let pontuacao = -1;
            (video.trechos || []).forEach((trecho, indice) => {
                const texto = normalizarTextoParaBusca(trecho.texto);
                const acertos = termos.filter(termo => texto.includes(termo)).length;
                if (acertos > pontuacao) { melhor = indice; pontuacao = acertos; }
            });
            const trechos = video.trechos || [];
            const atual = trechos[melhor];
            if (!atual) continue;
            const contexto = trechos.slice(Math.max(0, melhor - 1), melhor + 2)
                .map(trecho => trecho.texto.replace(/\s+/g, " ").trim())
                .join(" ");
            return {
                indice: video.indice,
                legenda: video.legenda,
                titulo: video.titulo,
                tempo: atual.tempo,
                segundos: atual.segundos,
                trecho: contexto.slice(0, 240)
            };
        }
        return null;
    }

    function removerFrontmatterBusca(markdown) {
        if (!markdown) return "";
        return markdown.replace(/^---[\s\S]*?---\s*/, "");
    }

    function tituloDaAcaoBusca(titulo = "") {
        return String(titulo)
            .replace(/^\d+\s*-\s*/, "")
            .replace(/^sou\s+(administrador|moderador|editor|gestor)\s+e\s*/i, "");
    }

    function extrairCamposDeBusca(artigo) {
        const conteudo = removerFrontmatterBusca(artigo.conteudo || "");
        const linhas = conteudo.split("\n");
        const headings = linhas
            .filter(linha => /^#{2,6}\s+/.test(linha))
            .map(linha => linha.replace(/^#{2,6}\s+/, ""))
            .join(" ");

        const corpoSemTitulo = linhas
            .filter((linha, indice) => !(indice === 0 && /^#\s+/.test(linha)))
            .join("\n");

        const introducao = corpoSemTitulo
            .replace(/!\[\[[^\]]+\]\]/g, " ")
            .replace(/\[\[[^\]|]+(?:\|([^\]]+))?\]\]/g, "$1")
            .replace(/[#*_`~>\[\]]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 700);

        const tituloAcao = tituloDaAcaoBusca(artigo.titulo);
        const aliases = Array.isArray(artigo?.metadados?.aliases)
            ? artigo.metadados.aliases
            : [];

        return {
            titulo: normalizarTextoParaBusca(artigo.titulo),
            tituloAcao: normalizarTextoParaBusca(tituloAcao),
            aliases: aliases.map(normalizarTextoParaBusca),
            aliasesTexto: normalizarTextoParaBusca(aliases.join(" ")),
            categoria: normalizarTextoParaBusca(artigo.categoria),
            headings: normalizarTextoParaBusca(headings),
            introducao: normalizarTextoParaBusca(introducao),
            corpo: normalizarTextoParaBusca(conteudo)
        };
    }

    function somarPorTermos(textoNormalizado, termos, pesoPorTermo, limite) {
        const encontrados = termos.filter(termo => textoNormalizado.includes(termo)).length;
        return Math.min(encontrados * pesoPorTermo, limite);
    }

    function calcularPontuacaoBusca(artigo, termoBusca, termos = termosDaBusca(termoBusca)) {
        const consulta = consultaNormalizadaBusca(termoBusca)
        const campos = extrairCamposDeBusca(artigo);
        let pontos = 0;

        if (campos.tituloAcao === consulta) pontos += 140;
        else if (campos.tituloAcao.includes(consulta)) pontos += 105;
        else if (campos.titulo.includes(consulta)) pontos += 85;

        if (campos.aliases.some(alias => alias === consulta)) {
            pontos += 200;
        } else if (termos.length > 1 && campos.aliases.some(alias => alias.includes(consulta))) {
            pontos += 95;
        }

        if (contemTodosOsTermos(campos.tituloAcao, termos)) pontos += 70;
        pontos += somarPorTermos(campos.tituloAcao, termos, 14, 56);

        if (termos.length > 1 && contemTodosOsTermos(campos.aliasesTexto, termos)) pontos += 62;
        pontos += somarPorTermos(campos.aliasesTexto, termos, 12, 48);

        if (campos.headings.includes(consulta)) pontos += 38;
        if (contemTodosOsTermos(campos.headings, termos)) pontos += 28;
        pontos += somarPorTermos(campos.headings, termos, 6, 24);

        if (campos.introducao.includes(consulta)) pontos += 30;
        if (contemTodosOsTermos(campos.introducao, termos)) pontos += 22;
        pontos += somarPorTermos(campos.introducao, termos, 5, 20);

        if (campos.categoria.includes(consulta)) pontos += 18;
        if (contemTodosOsTermos(campos.categoria, termos)) pontos += 12;

        if (campos.corpo.includes(consulta)) pontos += 10;
        if (contemTodosOsTermos(campos.corpo, termos)) pontos += 6;

        // Pontuação complementar: expressão coesa, não palavras espalhadas.
        if (termos.length >= 2) {
            pontos += pontuarProximidadeBusca(campos.tituloAcao, termos, 40);
            pontos += Math.max(0, ...campos.aliases.map(alias => pontuarProximidadeBusca(alias, termos, 38)));
            pontos += pontuarProximidadeBusca(campos.headings, termos, 18);
        }
        if (artigo.metadados?.tipo === "tarefa") pontos += 4;

        return pontos;
    }


    // Dar destaque a palavras da consulta próximas e na mesma sequência.
    function pontuarProximidadeBusca(textoNormalizado, termos, maximo = 35) {
        if (termos.length < 2) return 0;
        const palavras = normalizarTextoParaBusca(textoNormalizado).match(/[\p{L}\p{N}]+/gu) || [];
        let menorIntervalo = Infinity;
        for (let i = 0; i < palavras.length; i++) {
            if (!palavras[i].includes(termos[0])) continue;
            let posicao = i, completo = true;
            for (const termo of termos.slice(1)) {
                let proxima = -1;
                for (let j = posicao + 1; j < palavras.length && j <= i + termos.length + 5; j++) {
                    if (palavras[j].includes(termo)) { proxima = j; break; }
                }
                if (proxima < 0) { completo = false; break; }
                posicao = proxima;
            }
            if (completo) menorIntervalo = Math.min(menorIntervalo, posicao - i + 1);
        }
        return Number.isFinite(menorIntervalo)
            ? Math.max(0, maximo - Math.max(0, menorIntervalo - termos.length) * 7)
            : 0;
    }

    // Mostrar a descrição editorial, sem expor blocos técnicos nem markup.
    function resumoDoArtigoBusca(artigo) {
        const descricao = String(artigo?.metadados?.descricaoLista || "").trim();
        if (descricao) return descricao;
        const markdown = removerFrontmatterBusca(artigo?.conteudo || "")
            .replace(/```[\s\S]*?```/g, " ")
            .replace(/!\[\[[^\]]+\]\]/g, " ");
        const paragrafo = markdown.split(/\n\s*\n/)
            .map(bloco => bloco.trim())
            .find(bloco => bloco && !/^(?:#|>|-|\d+\.|\[\[|!\[)/.test(bloco)) || "";
        return paragrafo
            .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
            .replace(/\[\[([^\]]+)\]\]/g, "$1")
            .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
            .replace(/[*_`~#]/g, "")
            .replace(/\s+/g, " ").trim().slice(0, 210);
    }

    // Quando não há acerto, propor tarefas reais por título e aliases, sem IA.
    function sugerirResultadosBusca(artigos, consulta, limite = 4) {
        const termos = [...new Set(termosDaBusca(consulta).filter(termo => termo.length >= 4))];
        if (!termos.length || limite <= 0) return [];
        return artigos
            .filter(artigo => artigo?.metadados?.estado !== "absorver")
            .map(artigo => {
                const titulo = tituloDaAcaoBusca(artigo.titulo);
                const aliases = Array.isArray(artigo.metadados?.aliases) ? artigo.metadados.aliases : [];
                const palavras = [...new Set([titulo, ...aliases].flatMap(palavrasParaFuzzy))];
                let coincidencias = 0, pontuacao = 0;
                for (const termo of termos) {
                    const exato = palavras.some(palavra => palavra.includes(termo)
                        || (palavra.length >= 4 && termo.includes(palavra)));
                    const aproximado = !exato && termo.length >= 6 && palavras.some(palavra =>
                        Math.abs(palavra.length - termo.length) <= 2
                        && distanciaEdicaoLimitada(termo, palavra, 2) <= 2);
                    if (exato || aproximado) {
                        coincidencias++;
                        pontuacao += exato ? 5 : 2;
                    }
                }
                return { artigo, coincidencias, pontuacao };
            })
            .filter(item => item.coincidencias > 0)
            .sort((a,b) => b.coincidencias - a.coincidencias
                || b.pontuacao - a.pontuacao
                || calcularPontuacaoBusca(b.artigo, consulta) - calcularPontuacaoBusca(a.artigo, consulta)
                || a.artigo.titulo.localeCompare(b.artigo.titulo, "pt-BR", {numeric:true}))
            .slice(0, limite).map(item => item.artigo);
    }

    function palavrasParaFuzzy(texto = "") {
        return normalizarTextoParaBusca(texto)
            .replace(/[^\p{L}\p{N}]+/gu, " ")
            .trim()
            .split(/\s+/)
            .filter(Boolean);
    }

    function distanciaEdicaoLimitada(a, b, limite = 1) {
        if (a === b) return 0;
        if (!a || !b || Math.abs(a.length - b.length) > limite) return limite + 1;

        let anterior = Array.from({ length: b.length + 1 }, (_, indice) => indice);

        for (let i = 1; i <= a.length; i++) {
            const atual = [i];
            let menorDaLinha = atual[0];

            for (let j = 1; j <= b.length; j++) {
                const custo = a[i - 1] === b[j - 1] ? 0 : 1;
                const valor = Math.min(
                    anterior[j] + 1,
                    atual[j - 1] + 1,
                    anterior[j - 1] + custo
                );
                atual[j] = valor;
                menorDaLinha = Math.min(menorDaLinha, valor);
            }

            if (menorDaLinha > limite) return limite + 1;
            anterior = atual;
        }

        return anterior[b.length];
    }

    function candidatosFuzzyDoArtigo(artigo) {
        const candidatos = [];
        const adicionar = (texto, peso, origem) => {
            palavrasParaFuzzy(texto).forEach(palavra => {
                if (palavra.length >= 5) candidatos.push({ palavra, peso, origem });
            });
        };

        adicionar(tituloDaAcaoBusca(artigo.titulo), 170, "titulo");

        const aliases = Array.isArray(artigo?.metadados?.aliases)
            ? artigo.metadados.aliases
            : [];
        aliases.forEach(alias => {
            const palavras = palavrasParaFuzzy(alias);
            const peso = palavras.length === 1 ? 190 : 150;
            palavras.forEach(palavra => {
                if (palavra.length >= 5) candidatos.push({ palavra, peso, origem: "alias" });
            });
        });

        return candidatos;
    }

    function correspondenciasFuzzyDoArtigo(artigo, termos) {
        const textoExato = normalizarTextoParaBusca(textoIndexavelDoArtigo(artigo));
        const candidatos = candidatosFuzzyDoArtigo(artigo);
        const aproximadas = [];

        for (const termo of termos) {
            if (textoExato.includes(termo)) continue;
            if (termo.length < 5) return null;

            let melhor = null;
            for (const candidato of candidatos) {
                const distancia = distanciaEdicaoLimitada(termo, candidato.palavra, 1);
                if (distancia > 1) continue;

                const pontuacao = candidato.peso - (distancia * 10);
                if (!melhor || pontuacao > melhor.pontuacao) {
                    melhor = { ...candidato, distancia, pontuacao, termo };
                }
            }

            if (!melhor) return null;
            aproximadas.push(melhor);

            // Fuzzy é apenas recuperação de um erro isolado, não correção ampla da consulta.
            if (aproximadas.length > 1) return null;
        }

        return aproximadas.length ? aproximadas : null;
    }

    function ranquearExatos(artigos, termo, termos) {
        return artigos
            .map(artigo => ({
                artigo,
                pontuacao: calcularPontuacaoBusca(artigo, termo, termos)
            }))
            .sort((a, b) => {
                return b.pontuacao - a.pontuacao
                    || a.artigo.titulo.localeCompare(b.artigo.titulo, "pt-BR", { numeric: true });
            })
            .map(resultado => resultado.artigo);
    }

    function ranquearArtigos(artigos, termoBusca) {
        const termo = String(termoBusca || "").trim();
        const termos = termosDaBusca(termo);
        const canonicos = artigos.filter(artigo => artigo?.metadados?.estado !== "absorver");

        const exatos = canonicos
            .filter(artigo => contemTodosOsTermos(textoIndexavelDoArtigo(artigo), termos));

        // As correspondências no texto do artigo vêm primeiro; legendas
        // apenas ampliam o conjunto de resultados sem reordenar as tarefas.
        const somenteLegenda = canonicos.filter(artigo =>
            !exatos.includes(artigo) && encontrarCorrespondenciaLegendaBusca(artigo, termo)
        );
        if (exatos.length || somenteLegenda.length) {
            return [
                ...ranquearExatos(exatos, termo, termos),
                ...ranquearExatos(somenteLegenda, termo, termos)
            ];
        }

        return canonicos
            .map(artigo => {
                const correspondencias = correspondenciasFuzzyDoArtigo(artigo, termos);
                if (!correspondencias) return null;

                const bonusFuzzy = correspondencias.reduce(
                    (total, correspondencia) => total + correspondencia.pontuacao,
                    0
                );

                return {
                    artigo,
                    pontuacao: calcularPontuacaoBusca(artigo, termo, termos) + bonusFuzzy
                };
            })
            .filter(Boolean)
            .sort((a, b) => {
                return b.pontuacao - a.pontuacao
                    || a.artigo.titulo.localeCompare(b.artigo.titulo, "pt-BR", { numeric: true });
            })
            .map(resultado => resultado.artigo);
    }


    function aliasCorrespondenteBusca(artigo, termoBusca) {
        const consulta = consultaNormalizadaBusca(termoBusca)
        const termos = termosDaBusca(termoBusca);
        const aliases = Array.isArray(artigo?.metadados?.aliases)
            ? artigo.metadados.aliases
            : [];

        return aliases.find(alias => normalizarTextoParaBusca(alias) === consulta)
            || (termos.length > 1
                ? aliases.find(alias => normalizarTextoParaBusca(alias).includes(consulta))
                : "")
            || aliases.find(alias => contemTodosOsTermos(alias, termos))
            || "";
    }

    function motivoCorrespondenciaBusca(artigo, termoBusca) {
        const consulta = consultaNormalizadaBusca(termoBusca)
        const termos = termosDaBusca(termoBusca);
        const campos = extrairCamposDeBusca(artigo);

        if (campos.tituloAcao.includes(consulta) || contemTodosOsTermos(campos.tituloAcao, termos)) {
            return { tipo: "titulo", rotulo: "correspondência no título" };
        }

        const alias = aliasCorrespondenteBusca(artigo, termoBusca);
        if (alias) {
            return { tipo: "alias", rotulo: `termo relacionado: ${alias}` };
        }

        const aproximadas = correspondenciasFuzzyDoArtigo(artigo, termos);
        if (aproximadas?.length) {
            return {
                tipo: "aproximacao",
                rotulo: `correspondência aproximada: ${aproximadas[0].palavra}`
            };
        }

        if (campos.headings.includes(consulta) || contemTodosOsTermos(campos.headings, termos)) {
            return { tipo: "secao", rotulo: "correspondência em uma seção" };
        }

        if (campos.introducao.includes(consulta) || contemTodosOsTermos(campos.introducao, termos)) {
            return { tipo: "introducao", rotulo: "correspondência na introdução" };
        }

        if (campos.categoria.includes(consulta) || contemTodosOsTermos(campos.categoria, termos)) {
            return { tipo: "categoria", rotulo: "correspondência no perfil" };
        }

        const legenda = encontrarCorrespondenciaLegendaBusca(artigo, termoBusca);
        if (legenda) return { tipo: "transcricao", rotulo: `no vídeo: ${legenda.titulo} · ${legenda.tempo}` };

        return { tipo: "conteudo", rotulo: "correspondência no conteúdo" };
    }

    function extrairSecoesBusca(markdown = "") {
        const secoes = [];
        const ids = new Set();
        let cerca = null;
        for (const linha of removerFrontmatterBusca(markdown).split("\n")) {
            const codigo = linha.match(/^\s*(`{3,}|~{3,})/);
            if (codigo) {
                if (!cerca) cerca = codigo[1][0];
                else if (codigo[1][0] === cerca) cerca = null;
                continue;
            }
            if (cerca) continue;
            const heading = linha.match(/^(#{2,6})\s+(.+?)(?:\s+#+)?$/);
            if (heading) {
                const titulo = heading[2].replace(/[*_`]/g, "").trim();
                const base = normalizarTextoParaBusca(titulo)
                    .replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")
                    || `secao-${secoes.length + 1}`;
                let id = base;
                let numero = 2;
                while (ids.has(id)) id = `${base}-${numero++}`;
                ids.add(id);
                secoes.push({ titulo, id, nivel: heading[1].length, conteudo: "" });
            } else if (secoes.length) {
                // Imagens e seus caminhos não são texto de orientação.
                secoes.at(-1).conteudo += ` ${linha.replace(/!\[\[[^\]]+\]\]/g, " ")}`;
            }
        }
        return secoes;
    }

    function encontrarSecaoBusca(artigo, consulta) {
        const termos = termosDaBusca(consulta);
        if (!termos.length) return null;
        const secoes = extrairSecoesBusca(artigo.conteudo);
        const titulo = secoes.find(secao => contemTodosOsTermos(secao.titulo, termos));
        if (titulo) return titulo;
        // Uma busca pelo assunto geral do artigo deve continuar abrindo o início.
        if (contemTodosOsTermos(tituloDaAcaoBusca(artigo.titulo), termos)) return null;
        return secoes.find(secao => contemTodosOsTermos(`${secao.titulo} ${secao.conteudo}`, termos)) || null;
    }

    function rotuloPerfilMinimo(artigo) {
        const meta = artigo.metadados || {};
        if (meta.tipo === "referencia" || meta.perfilMinimo === "todos") return "referência";
        if (meta.tipo === "visao") return `visão de ${meta.perfilMinimo}`;
        if (meta.perfilMinimo === "gestor") return "gestor";
        return meta.perfilMinimo ? `perfil mínimo: ${meta.perfilMinimo}` : artigo.categoria.toLowerCase();
    }

    window.GuiaBusca = Object.freeze({
        normalizarTextoParaBusca,
        termosDaBusca,
        contemTodosOsTermos,
        textoIndexavelDoArtigo,
        extrairReferenciasVideosBusca,
        encontrarCorrespondenciaLegendaBusca,
        calcularPontuacaoBusca,
        pontuarProximidadeBusca,
        resumoDoArtigoBusca,
        sugerirResultadosBusca,
        ranquearArtigos,
        motivoCorrespondenciaBusca,
        rotuloPerfilMinimo,
        extrairSecoesBusca,
        encontrarSecaoBusca
    });
})();
