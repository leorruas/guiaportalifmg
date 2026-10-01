(() => {
    function normalizarTextoParaBusca(texto = "") {
        return String(texto)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase("pt-BR");
    }

    function termosDaBusca(termoBusca) {
        return normalizarTextoParaBusca(termoBusca)
            .replace(/[^\p{L}\p{N}]+/gu, " ")
            .trim()
            .split(/\s+/)
            .filter(Boolean);
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
        const consulta = normalizarTextoParaBusca(termoBusca).trim();
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

        if (artigo.metadados?.tipo === "tarefa") pontos += 4;

        return pontos;
    }

    function ranquearArtigos(artigos, termoBusca) {
        const termo = String(termoBusca || "").trim();
        const termos = termosDaBusca(termo);

        return artigos
            .filter(artigo => artigo?.metadados?.estado !== "absorver")
            .filter(artigo => contemTodosOsTermos(textoIndexavelDoArtigo(artigo), termos))
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


    function aliasCorrespondenteBusca(artigo, termoBusca) {
        const consulta = normalizarTextoParaBusca(termoBusca).trim();
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
        const consulta = normalizarTextoParaBusca(termoBusca).trim();
        const termos = termosDaBusca(termoBusca);
        const campos = extrairCamposDeBusca(artigo);

        if (campos.tituloAcao.includes(consulta) || contemTodosOsTermos(campos.tituloAcao, termos)) {
            return { tipo: "titulo", rotulo: "correspondência no título" };
        }

        const alias = aliasCorrespondenteBusca(artigo, termoBusca);
        if (alias) {
            return { tipo: "alias", rotulo: `termo relacionado: ${alias}` };
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

        return { tipo: "conteudo", rotulo: "correspondência no conteúdo" };
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
        calcularPontuacaoBusca,
        ranquearArtigos,
        motivoCorrespondenciaBusca,
        rotuloPerfilMinimo
    });
})();
