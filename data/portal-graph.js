(() => {
    const nodes = [
        {
                "id": "https://portal.ifmg.edu.br/",
                "url": "https://portal.ifmg.edu.br/",
                "title": "Home",
                "description": "Página inicial do Portal IFMG."
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/",
                "url": "https://portal.ifmg.edu.br/institucional/",
                "title": "Institucional"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/",
                "url": "https://portal.ifmg.edu.br/estudantes/",
                "title": "Estudantes"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/",
                "url": "https://portal.ifmg.edu.br/servidores/",
                "title": "Servidores"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/",
                "url": "https://portal.ifmg.edu.br/comunidade/",
                "title": "Comunidade"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "title": "Acesso à Informação"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/quem-somos/",
                "url": "https://portal.ifmg.edu.br/institucional/quem-somos/",
                "title": "Quem somos"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/ensino/",
                "url": "https://portal.ifmg.edu.br/institucional/ensino/",
                "title": "Ensino"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/pesquisa-inovacao/",
                "url": "https://portal.ifmg.edu.br/institucional/pesquisa-inovacao/",
                "title": "Pesquisa & Inovação"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/extensao/",
                "url": "https://portal.ifmg.edu.br/institucional/extensao/",
                "title": "Extensão"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/educacao-a-distancia/",
                "url": "https://portal.ifmg.edu.br/institucional/educacao-a-distancia/",
                "title": "Educação a Distância"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/internacional/",
                "url": "https://portal.ifmg.edu.br/institucional/internacional/",
                "title": "Internacional"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/desenvolvimento-institucional/",
                "url": "https://portal.ifmg.edu.br/institucional/desenvolvimento-institucional/",
                "title": "Desenvolvimento Institucional"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/gestao-de-pessoas/",
                "url": "https://portal.ifmg.edu.br/institucional/gestao-de-pessoas/",
                "title": "Gestão de Pessoas"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/planejamento-e-infraestrutura/",
                "url": "https://portal.ifmg.edu.br/institucional/planejamento-e-infraestrutura/",
                "title": "Administração & Planejamento"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/tecnologia-da-informacao/",
                "url": "https://portal.ifmg.edu.br/institucional/tecnologia-da-informacao/",
                "title": "Tecnologia da Informação"
        },
        {
                "id": "https://portal.ifmg.edu.br/institucional/governanca/",
                "url": "https://portal.ifmg.edu.br/institucional/governanca/",
                "title": "Governança"
        }
];

    const edges = [
        {
                "source": "https://portal.ifmg.edu.br/",
                "target": "https://portal.ifmg.edu.br/institucional/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/",
                "target": "https://portal.ifmg.edu.br/estudantes/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/",
                "target": "https://portal.ifmg.edu.br/servidores/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/",
                "target": "https://portal.ifmg.edu.br/comunidade/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/quem-somos/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/ensino/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/pesquisa-inovacao/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/extensao/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/educacao-a-distancia/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/internacional/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/desenvolvimento-institucional/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/gestao-de-pessoas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/planejamento-e-infraestrutura/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/tecnologia-da-informacao/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/institucional/",
                "target": "https://portal.ifmg.edu.br/institucional/governanca/",
                "type": "estrutura"
        }
];

    window.PortalGraphData = Object.freeze({
        version: 1,
        nodes: Object.freeze(nodes),
        edges: Object.freeze(edges)
    });
})();
