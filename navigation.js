(() => {
    function rotaDoArtigo(artigo) {
        return String(artigo?.sourcePath || "")
            .replace(/^.*guia-do-portal\//, "")
            .replace(/\.md$/i, "");
    }

    function rotaDoPerfil(categoria) {
        return `#/perfil/${encodeURIComponent(categoria)}`;
    }

    function rotaComSecao(artigo, secao) {
        const rota = `#/${rotaDoArtigo(artigo).split("/").map(encodeURIComponent).join("/")}`;
        return secao ? `${rota}#${encodeURIComponent(secao)}` : rota;
    }

    function normalizarDestinoObsidian(valor) {
        return decodeURIComponent(String(valor || ""))
            .trim()
            .replace(/\\/g, "/")
            .replace(/\.md$/i, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase("pt-BR")
            .replace(/:/g, " -")
            .replace(/\s+/g, " ");
    }

    function idDaSecaoObsidian(secao) {
        return normalizarDestinoObsidian(secao)
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");
    }

    function resolverLinkObsidian(destino, artigos = []) {
        const [caminhoBruto, secaoBruta] = String(destino || "").split(/#(.+)/, 2);
        const caminho = normalizarDestinoObsidian(caminhoBruto);
        const artigo = artigos.find(item => {
            const caminhoFonte = decodeURI(item.sourcePath || item.path || "").replace(/\.md$/i, "");
            const caminhosPossiveis = [
                item.titulo,
                caminhoFonte,
                caminhoFonte.replace(/^.*guia-do-portal\//, ""),
                caminhoFonte.split("/").at(-1)
            ];
            return caminhosPossiveis.some(candidato => normalizarDestinoObsidian(candidato) === caminho);
        });

        if (!artigo) return null;
        const secao = secaoBruta ? idDaSecaoObsidian(secaoBruta) : "";
        return { artigo, href: rotaComSecao(artigo, secao) };
    }

    window.GuiaNavegacao = Object.freeze({
        rotaDoArtigo,
        rotaDoPerfil,
        rotaComSecao,
        normalizarDestinoObsidian,
        idDaSecaoObsidian,
        resolverLinkObsidian
    });
})();
