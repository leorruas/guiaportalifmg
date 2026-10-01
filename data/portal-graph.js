(() => {
    const nodes = [
        {
            id: "https://portal.ifmg.edu.br/",
            url: "https://portal.ifmg.edu.br/",
            title: "Home",
            description: "Página inicial do Portal IFMG."
        },
        {
            id: "https://portal.ifmg.edu.br/institucional/",
            url: "https://portal.ifmg.edu.br/institucional/",
            title: "Institucional"
        },
        {
            id: "https://portal.ifmg.edu.br/estudantes/",
            url: "https://portal.ifmg.edu.br/estudantes/",
            title: "Estudantes"
        },
        {
            id: "https://portal.ifmg.edu.br/servidores/",
            url: "https://portal.ifmg.edu.br/servidores/",
            title: "Servidores"
        },
        {
            id: "https://portal.ifmg.edu.br/comunidade/",
            url: "https://portal.ifmg.edu.br/comunidade/",
            title: "Comunidade"
        },
        {
            id: "https://portal.ifmg.edu.br/acesso-a-informacao/",
            url: "https://portal.ifmg.edu.br/acesso-a-informacao/",
            title: "Acesso à Informação"
        }
    ];

    const edges = [
        { source: "https://portal.ifmg.edu.br/", target: "https://portal.ifmg.edu.br/institucional/", type: "estrutura" },
        { source: "https://portal.ifmg.edu.br/", target: "https://portal.ifmg.edu.br/estudantes/", type: "estrutura" },
        { source: "https://portal.ifmg.edu.br/", target: "https://portal.ifmg.edu.br/servidores/", type: "estrutura" },
        { source: "https://portal.ifmg.edu.br/", target: "https://portal.ifmg.edu.br/comunidade/", type: "estrutura" },
        { source: "https://portal.ifmg.edu.br/", target: "https://portal.ifmg.edu.br/acesso-a-informacao/", type: "estrutura" }
    ];

    window.PortalGraphData = Object.freeze({
        version: 1,
        nodes: Object.freeze(nodes),
        edges: Object.freeze(edges)
    });
})();
