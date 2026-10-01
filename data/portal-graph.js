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
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/",
                "url": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/",
                "title": "Como ingressar no IFMG"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/assistencia-estudantil/",
                "url": "https://portal.ifmg.edu.br/estudantes/assistencia-estudantil/",
                "title": "Assistência Estudantil"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/nucleos-de-apoio/",
                "url": "https://portal.ifmg.edu.br/estudantes/nucleos-de-apoio/",
                "title": "Núcleos de Apoio"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/egressos/",
                "url": "https://portal.ifmg.edu.br/estudantes/egressos/",
                "title": "Egressos"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/bibliotecas/",
                "url": "https://portal.ifmg.edu.br/estudantes/bibliotecas/",
                "title": "Bibliotecas"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/httpsportaldesenvifmgedubrcomunidadesuporte-suap/",
                "url": "https://portal.ifmg.edu.br/estudantes/httpsportaldesenvifmgedubrcomunidadesuporte-suap/",
                "title": "Como abrir um chamado (Solicitar ajuda • SUAP)"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/sugestoes-criticas-e-elogios/",
                "url": "https://portal.ifmg.edu.br/estudantes/sugestoes-criticas-e-elogios/",
                "title": "Sugestões, Críticas e Elogios"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "url": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "title": "+ informações para estudantes"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/normativas-manuais/",
                "url": "https://portal.ifmg.edu.br/servidores/normativas-manuais/",
                "title": "Normativas & Manuais"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/licencas/",
                "url": "https://portal.ifmg.edu.br/servidores/licencas/",
                "title": "Licenças"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/remocao-redistribuicao/",
                "url": "https://portal.ifmg.edu.br/servidores/remocao-redistribuicao/",
                "title": "Remoção & Redistribuição"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/teletrabalho-trabalho-remoto/",
                "url": "https://portal.ifmg.edu.br/servidores/teletrabalho-trabalho-remoto/",
                "title": "Teletrabalho / Trabalho Remoto"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/reconhecimento-de-saberes-e-competencias-rsc-tae/",
                "url": "https://portal.ifmg.edu.br/servidores/reconhecimento-de-saberes-e-competencias-rsc-tae/",
                "title": "Reconhecimento de Saberes e Competências (RSC) - TAE"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/cppd-comissao-permanente-de-pessoal-docente/",
                "url": "https://portal.ifmg.edu.br/servidores/cppd-comissao-permanente-de-pessoal-docente/",
                "title": "CPPD - Comissão Permanente de Pessoal Docente"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/cis-comissao-interna-de-supervisao-da-carreira-tae/",
                "url": "https://portal.ifmg.edu.br/servidores/cis-comissao-interna-de-supervisao-da-carreira-tae/",
                "title": "CIS - Comissão Interna de Supervisão da Carreira TAE"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/noticias/",
                "url": "https://portal.ifmg.edu.br/servidores/noticias/",
                "title": "Notícias para servidores"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/solicitar-ajuda-suap/",
                "url": "https://portal.ifmg.edu.br/servidores/solicitar-ajuda-suap/",
                "title": "Como abrir um chamado (Solicitar ajuda • SUAP)"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/sugestoes-criticas-e-elogios/",
                "url": "https://portal.ifmg.edu.br/servidores/sugestoes-criticas-e-elogios/",
                "title": "Sugestões, Críticas e Elogios"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/mais/",
                "url": "https://portal.ifmg.edu.br/servidores/mais/",
                "title": "+ informações para servidores"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/institucional/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/institucional/",
                "title": "Institucional"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/acoes-programas/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/acoes-programas/",
                "title": "Ações & Programas"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/",
                "title": "Participação Social"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/auditorias/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/auditorias/",
                "title": "Auditorias"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/convenios-e-transferencias/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/convenios-e-transferencias/",
                "title": "Convênios e Transferências"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/receitas-despesas/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/receitas-despesas/",
                "title": "Receitas & Despesas"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/licitacoes-contratos/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/licitacoes-contratos/",
                "title": "Licitações & Contratos"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/servidores/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/servidores/",
                "title": "Servidores"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/informacoes-classificadas/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/informacoes-classificadas/",
                "title": "Informações Classificadas"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/servico-de-informacao-ao-cidadao-sic/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/servico-de-informacao-ao-cidadao-sic/",
                "title": "Serviço de Informação ao Cidadão (SIC)"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/dados-abertos/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/dados-abertos/",
                "title": "Dados Abertos"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/sancoes-administrativas/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/sancoes-administrativas/",
                "title": "Sanções Administrativas"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/ferramentas-e-aspectos-tecnologicos/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/ferramentas-e-aspectos-tecnologicos/",
                "title": "Ferramentas e Aspectos Tecnológicos"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/",
                "title": "Sugestões, Críticas e Elogios"
        },
        {
                "id": "https://www.ifmg.edu.br/portal/ouvidoria",
                "url": "https://www.ifmg.edu.br/portal/ouvidoria",
                "title": "Ouvidoria",
                "description": "Destino comum para sugestões, críticas e elogios."
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
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/assistencia-estudantil/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/nucleos-de-apoio/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/egressos/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/bibliotecas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/httpsportaldesenvifmgedubrcomunidadesuporte-suap/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/sugestoes-criticas-e-elogios/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/normativas-manuais/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/licencas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/remocao-redistribuicao/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/teletrabalho-trabalho-remoto/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/reconhecimento-de-saberes-e-competencias-rsc-tae/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/cppd-comissao-permanente-de-pessoal-docente/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/cis-comissao-interna-de-supervisao-da-carreira-tae/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/noticias/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/solicitar-ajuda-suap/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/sugestoes-criticas-e-elogios/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/servidores/mais/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/institucional/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/acoes-programas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/auditorias/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/convenios-e-transferencias/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/receitas-despesas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/licitacoes-contratos/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/servidores/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/informacoes-classificadas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/servico-de-informacao-ao-cidadao-sic/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/dados-abertos/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/sancoes-administrativas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/ferramentas-e-aspectos-tecnologicos/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/sugestoes-criticas-e-elogios/",
                "target": "https://www.ifmg.edu.br/portal/ouvidoria",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/sugestoes-criticas-e-elogios/",
                "target": "https://www.ifmg.edu.br/portal/ouvidoria",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/",
                "target": "https://www.ifmg.edu.br/portal/ouvidoria",
                "type": "redireciona"
        }
];

    window.PortalGraphData = Object.freeze({
        version: 1,
        nodes: Object.freeze(nodes),
        edges: Object.freeze(edges)
    });
})();
