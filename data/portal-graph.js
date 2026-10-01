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
                "title": "Sugestões, críticas e elogios / Ouvidoria",
                "description": "Destino canônico para sugestões, críticas, elogios e acesso à Ouvidoria."
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/processo-seletivo/",
                "url": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/processo-seletivo/",
                "title": "Processo Seletivo"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/reserva-de-vagas-cotas/",
                "url": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/reserva-de-vagas-cotas/",
                "title": "Reserva de Vagas (Cotas)"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/suporte-suap/",
                "url": "https://portal.ifmg.edu.br/comunidade/suporte-suap/",
                "title": "Como abrir um chamado (Solicitar ajuda • SUAP)",
                "description": "Destino comum para suporte e abertura de chamados no SUAP."
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/hubs-de-inovacao-do-ifmg/",
                "url": "https://portal.ifmg.edu.br/comunidade/hubs-de-inovacao-do-ifmg/",
                "title": "Hubs de Inovação do IFMG"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/empresas-juniores-e-empreendedorismo/",
                "url": "https://portal.ifmg.edu.br/comunidade/empresas-juniores-e-empreendedorismo/",
                "title": "Empresas Juniores e Empreendedorismo"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/bibliotecas/",
                "url": "https://portal.ifmg.edu.br/comunidade/bibliotecas/",
                "title": "Bibliotecas"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/-ifmg-cursos-livres-e-gratuitos/",
                "url": "https://portal.ifmg.edu.br/comunidade/-ifmg-cursos-livres-e-gratuitos/",
                "title": "+ IFMG • Cursos livres e gratuitos"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/espacosculturais/",
                "url": "https://portal.ifmg.edu.br/comunidade/espacosculturais/",
                "title": "Espaços Técnico-Culturais do IFMG"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/",
                "url": "https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/",
                "title": "Comunicação / Imprensa"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/sugestoes-criticas-e-elogios/",
                "url": "https://portal.ifmg.edu.br/comunidade/sugestoes-criticas-e-elogios/",
                "title": "Sugestões, Críticas e Elogios"
        },
        {
                "id": "https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/identidade-visual-e-manuais-marca-do-ifmg/",
                "url": "https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/identidade-visual-e-manuais-marca-do-ifmg/",
                "title": "Identidade Visual e Manuais (Marca do IFMG)"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/auxilios-assistencia/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/auxilios-assistencia/",
                "title": "Auxílios & Assistência"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/wellhub-gympass/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/wellhub-gympass/",
                "title": "Wellhub / Gympass"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/horario-especial-de-estudante-para-servidores/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/horario-especial-de-estudante-para-servidores/",
                "title": "Horário Especial para Servidores"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/programa-de-apoio-financeiro-a-graduacao-e-pos-graduacao/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/programa-de-apoio-financeiro-a-graduacao-e-pos-graduacao/",
                "title": "Programa de Apoio Financeiro à Graduação e Pós-Graduação"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/exames-medicos-periodicos/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/exames-medicos-periodicos/",
                "title": "Exames Médicos Periódicos"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/licencas/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/licencas/",
                "title": "Licenças"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/ifmg/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/ifmg/",
                "title": "+IFMG"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/incentivo-a-qualificacao/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/incentivo-a-qualificacao/",
                "title": "Incentivo à Qualificação"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/orientacoes-para-posse-no-ifmg/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/orientacoes-para-posse-no-ifmg/",
                "title": "Orientações para posse no IFMG"
        },
        {
                "id": "https://portal.ifmg.edu.br/servidores/guia/registro-de-atestado-medico-ou-odontologico/",
                "url": "https://portal.ifmg.edu.br/servidores/guia/registro-de-atestado-medico-ou-odontologico/",
                "title": "Registro de atestado médico ou odontológico"
        },
        {
                "id": "https://mais.ifmg.edu.br/maisifmg/",
                "url": "https://mais.ifmg.edu.br/maisifmg/",
                "title": "+IFMG — cursos de curta duração"
        },
        {
                "id": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/conselho-superior-consup/",
                "url": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/conselho-superior-consup/",
                "title": "Conselho Superior (CONSUP)"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/guia/empresas-juniores-e-empreendedorismo/",
                "url": "https://portal.ifmg.edu.br/estudantes/guia/empresas-juniores-e-empreendedorismo/",
                "title": "Empresas Juniores e Empreendedorismo"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/guia/hubs-de-inovacao-do-ifmg/",
                "url": "https://portal.ifmg.edu.br/estudantes/guia/hubs-de-inovacao-do-ifmg/",
                "title": "Hubs de Inovação do IFMG"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/guia/ifmg/",
                "url": "https://portal.ifmg.edu.br/estudantes/guia/ifmg/",
                "title": "+IFMG"
        },
        {
                "id": "https://portal.ifmg.edu.br/estudantes/guia/assistencia-estudantil/",
                "url": "https://portal.ifmg.edu.br/estudantes/guia/assistencia-estudantil/",
                "title": "Assistência Estudantil"
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
                "source": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/",
                "target": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/processo-seletivo/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/",
                "target": "https://portal.ifmg.edu.br/estudantes/como-ingressar-no-ifmg/reserva-de-vagas-cotas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/",
                "target": "https://portal.ifmg.edu.br/comunidade/suporte-suap/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/",
                "target": "https://portal.ifmg.edu.br/comunidade/suporte-suap/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/suporte-suap/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/hubs-de-inovacao-do-ifmg/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/empresas-juniores-e-empreendedorismo/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/bibliotecas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/-ifmg-cursos-livres-e-gratuitos/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/espacosculturais/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/",
                "target": "https://portal.ifmg.edu.br/comunidade/sugestoes-criticas-e-elogios/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/sugestoes-criticas-e-elogios/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/sugestoes-criticas-e-elogios/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/sugestoes-criticas-e-elogios/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/bibliotecas/",
                "target": "https://portal.ifmg.edu.br/comunidade/bibliotecas/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/",
                "target": "https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/identidade-visual-e-manuais-marca-do-ifmg/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/auxilios-assistencia/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/wellhub-gympass/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/horario-especial-de-estudante-para-servidores/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/programa-de-apoio-financeiro-a-graduacao-e-pos-graduacao/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/exames-medicos-periodicos/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/licencas/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/ifmg/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/incentivo-a-qualificacao/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/orientacoes-para-posse-no-ifmg/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/guia/registro-de-atestado-medico-ou-odontologico/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/guia/licencas/",
                "target": "https://portal.ifmg.edu.br/servidores/licencas/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/guia/ifmg/",
                "target": "https://portal.ifmg.edu.br/comunidade/-ifmg-cursos-livres-e-gratuitos/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/cppd-comissao-permanente-de-pessoal-docente/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/servidores/cis-comissao-interna-de-supervisao-da-carreira-tae/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/assistencia-estudantil/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/comunidade/hubs-de-inovacao-do-ifmg/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/comunidade/empresas-juniores-e-empreendedorismo/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/nucleos-de-apoio/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://mais.ifmg.edu.br/maisifmg/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/conselho-superior-consup/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/conselho-superior-consup/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/servidores/mais/",
                "target": "https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/conselho-superior-consup/",
                "type": "link"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/guia/empresas-juniores-e-empreendedorismo/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/guia/hubs-de-inovacao-do-ifmg/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/guia/ifmg/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/-informacoes-para-estudantes/",
                "target": "https://portal.ifmg.edu.br/estudantes/guia/assistencia-estudantil/",
                "type": "estrutura"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/guia/empresas-juniores-e-empreendedorismo/",
                "target": "https://portal.ifmg.edu.br/comunidade/empresas-juniores-e-empreendedorismo/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/guia/hubs-de-inovacao-do-ifmg/",
                "target": "https://portal.ifmg.edu.br/comunidade/hubs-de-inovacao-do-ifmg/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/guia/ifmg/",
                "target": "https://portal.ifmg.edu.br/comunidade/-ifmg-cursos-livres-e-gratuitos/",
                "type": "redireciona"
        },
        {
                "source": "https://portal.ifmg.edu.br/estudantes/guia/assistencia-estudantil/",
                "target": "https://portal.ifmg.edu.br/estudantes/assistencia-estudantil/",
                "type": "redireciona"
        }
];

    window.PortalGraphData = Object.freeze({
        version: 1,
        nodes: Object.freeze(nodes),
        edges: Object.freeze(edges)
    });
})();
