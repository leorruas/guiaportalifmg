window.TreinamentoConteudo = [
  {
    "id": "comum-objetivo",
    "track": "comum",
    "title": "Informação que ajuda a agir",
    "lead": "O trabalho termina quando a pessoa encontra, entende e consegue usar a informação.",
    "points": [
      "Defina para quem é a página e qual necessidade ela resolve.",
      "Use uma fonte confirmada e identifique quem mantém o conteúdo.",
      "Combine quem acompanha a informação depois da publicação."
    ],
    "task": "Escolha uma demanda real da sua área. Quem precisa dela e o que precisa fazer?",
    "check": "Você consegue explicar público, necessidade e próxima ação em uma frase.",
    "ref": "24",
    "img": null,
    "limits": null
  },
  {
    "id": "comum-estrutura",
    "track": "comum",
    "title": "Encontre o lugar antes de criar",
    "lead": "A árvore do portal mostra onde cada conteúdo pertence.",
    "points": [
      "Página-pai reúne páginas-filhas. Blocos organizam o conteúdo dentro de uma página.",
      "Coleções guardam documentos e imagens; não são pastas de páginas.",
      "Nos campi, Cursos, Processos seletivos e Eventos são menus fixos. Consulte o mapa."
    ],
    "task": "Localize sua área e diga o caminho completo até uma página existente.",
    "check": "A página pertence ao campus ou setor responsável; você não criou uma cópia para contornar acesso.",
    "ref": "mapa",
    "img": null,
    "limits": null
  },
  {
    "id": "comum-papeis",
    "track": "comum",
    "title": "Quem prepara, quem revisa, quem configura",
    "lead": "As responsabilidades são cumulativas: editor → moderador → administrador.",
    "points": [
      "Editor prepara o conteúdo e encaminha para revisão.",
      "Moderador herda a edição, revisa e decide a publicação no escopo autorizado.",
      "Administrador herda essas tarefas e configura acessos, coleções e cadastros."
    ],
    "task": "Você precisa de uma coleção nova. Quem deve receber a solicitação?",
    "check": "O administrador. Ter uma página para editar não concede permissão para criar coleções.",
    "ref": "colecao",
    "img": null,
    "limits": [
      "Todos os perfis trabalham somente no escopo autorizado.",
      "Mudanças que exigem código, banco ou servidor vão para a equipe técnica."
    ]
  },
  {
    "id": "comum-painel",
    "track": "comum",
    "title": "Entre e reconheça a etapa do trabalho",
    "lead": "A tela inicial reúne acompanhamento e tarefas de revisão.",
    "points": [
      "Entre pelo painel com suas credenciais institucionais.",
      "“Suas páginas e snippets em um fluxo de trabalho” mostra conteúdos em acompanhamento.",
      "“Aguardando sua revisão” indica entregas que você pode revisar conforme seu acesso."
    ],
    "task": "Encontre uma página pela busca ou pela árvore e confira seu estado.",
    "check": "Você sabe quem precisa agir agora; aguardar moderação ainda não é estar publicado.",
    "ref": "encontrar",
    "img": "tela-inicial-fluxo-revisao.png",
    "limits": null
  },
  {
    "id": "editor-papel",
    "track": "editor",
    "title": "O editor prepara páginas institucionais",
    "lead": "Prepare páginas de serviço no seu escopo e envie para moderação.",
    "points": [
      "Crie e edite páginas na área autorizada.",
      "Use blocos e arquivos das coleções permitidas.",
      "Configure os campos de busca/menu disponíveis, responda correções e envie para moderação."
    ],
    "task": "Planeje a página institucional da Biblioteca a partir da página-pai autorizada.",
    "check": "A Página está na seção correta, contém informações confirmadas e aguarda revisão.",
    "ref": "papel-editor",
    "img": null,
    "limits": [
      "Você não decide publicação, agendamento ou retirada do ar neste fluxo: procure o moderador.",
      "Você não cria coleções, grupos, permissões, cadastros ou pasta de notícias: procure o administrador."
    ]
  },
  {
    "id": "editor-planejar",
    "track": "editor",
    "title": "Prepare conteúdo e busca juntos",
    "lead": "Planeje a página institucional da Biblioteca antes de usar o Wagtail.",
    "points": [
      "Defina público, fonte, responsável e ação principal.",
      "Prepare título, texto, ordem dos blocos, links e arquivos.",
      "Prepare tag de título, slug e meta descrição; use 140–155 caracteres como referência editorial."
    ],
    "task": "Prepare serviços, horários, contatos e metadados da página da Biblioteca.",
    "check": "Informações confirmadas e título, estrutura e metadados compreensíveis.",
    "ref": "24",
    "img": null,
    "limits": null
  },
  {
    "id": "editor-texto",
    "track": "editor",
    "title": "Texto com uma ordem clara",
    "lead": "Use títulos para organizar a leitura e a barra para aplicar a formatação.",
    "points": [
      "Selecione um trecho para abrir a barra; use o alfinete para fixar ou desafixar.",
      "Use H2 para seções principais e H3 para subdivisões.",
      "Na primeira menção, escreva o nome completo e a sigla. Evite simular títulos com negrito."
    ],
    "task": "Organize o conteúdo da Biblioteca usando H2 “Serviços” e H3 “Empréstimo de livros”.",
    "check": "A subdivisão usa H3 dentro da seção H2 e não foi simulada apenas com negrito.",
    "ref": "blocos",
    "img": "barra-edicao-flutuante.png",
    "limits": null
  },
  {
    "id": "editor-blocos",
    "track": "editor",
    "title": "Escolha o bloco pela necessidade",
    "lead": "Texto simples é suficiente quando explica bem a tarefa.",
    "points": [
      "Link único no estilo Cartão: chamada principal com descrição e ação.",
      "Tabela: comparação de dados; é possível colar células do Excel ou de outra tabela.",
      "Cards: caminhos relacionados. Chapéu é o texto de tema acima do título."
    ],
    "task": "Escolha o bloco para a ação principal “Acessar o catálogo” na página da Biblioteca.",
    "check": "Use Link único no estilo Cartão com descrição do catálogo, rótulo de ação e destino conferido.",
    "ref": "blocos",
    "img": "link-unico-cartao-publicado.png",
    "limits": null
  },
  {
    "id": "editor-arquivos",
    "track": "editor",
    "title": "Arquivos fáceis de encontrar",
    "lead": "Escolha a coleção e um título que diferencie assunto, curso, campus e período.",
    "points": [
      "Selecione a coleção autorizada antes de enviar o arquivo.",
      "Use palavras com espaços no título do cadastro; não copie nomes como IMG_9382.",
      "Antes de substituir um arquivo, confira onde ele é reutilizado."
    ],
    "task": "Dê um título ao calendário da graduação de um campus para 2027.",
    "check": "“Calendário acadêmico — Cursos de graduação — 2027 — Campus …” identifica o arquivo.",
    "ref": "documentos",
    "img": null,
    "limits": [
      "Se faltar coleção ou acesso, solicite ao administrador.",
      "Se a versão anterior precisa continuar válida ou como histórico, confirme o tratamento com a moderação."
    ]
  },
  {
    "id": "editor-imagens",
    "track": "editor",
    "title": "Imagem, enquadramento e acessibilidade",
    "lead": "A imagem precisa funcionar no contexto em que será lida.",
    "points": [
      "Nas páginas institucionais, escolha formato e alinhamento conforme a leitura e confira o resultado em telas menores.",
      "Imagem informativa precisa de texto alternativo; marque decorativa somente quando não acrescentar informação.",
      "Título da imagem, texto alternativo e legenda têm funções diferentes. Confira o contexto e o enquadramento."
    ],
    "task": "Selecione uma imagem informativa da Biblioteca e descreva o que ela comunica naquele contexto.",
    "check": "O texto alternativo informa o essencial, o título ajuda a encontrar a imagem no painel e o enquadramento foi conferido.",
    "ref": "imagens",
    "img": "imagem-formatos-texto.png",
    "limits": null
  },
  {
    "id": "editor-colecao",
    "track": "editor",
    "title": "Recursivo e tipo de arquivo são escolhas diferentes",
    "lead": "Onde buscar e o que exibir são configurações independentes.",
    "points": [
      "Recursivo inclui os arquivos das subcoleções.",
      "Mostrar imagens e Mostrar documentos escolhem os tipos apresentados.",
      "Ordenar documentos por upload usa a data de envio, que pode ser diferente da data do documento."
    ],
    "task": "Você escolheu “Arcos • Notícias” e os PDFs estão em “2027”. Como incluí-los?",
    "check": "Marque Recursivo e Mostrar documentos, ou selecione diretamente a subcoleção 2027.",
    "ref": "blocos",
    "img": "../manual-ifrn/image5.png",
    "limits": null
  },
  {
    "id": "editor-menus",
    "track": "editor",
    "title": "Busca e menus precisam de conferência",
    "lead": "Criar uma página na árvore não garante sua presença no menu.",
    "points": [
      "Preencha os metadados de Promover e marque Exibir nos menus quando adequado.",
      "Confira o caminho pelas páginas-pai.",
      "Na página-pai, escolha Exibição do menu interno: Lateral, Cards ou Links."
    ],
    "task": "Confira como a página institucional da Biblioteca pode ser encontrada.",
    "check": "O caminho está completo e os rótulos explicam os destinos.",
    "ref": "menus",
    "img": "exibicao-menu-interno.png",
    "limits": null
  },
  {
    "id": "editor-enviar",
    "track": "editor",
    "title": "Confira antes de enviar",
    "lead": "A revisão começa com uma entrega preparada.",
    "points": [
      "Pré-visualize em computador, tablet e celular.",
      "Leia os avisos de Verificações e revise acessibilidade manualmente.",
      "Salve e envie para moderação; confirme o estado."
    ],
    "task": "Envie a página institucional da Biblioteca para moderação.",
    "check": "A página aguarda moderação, com links, datas, imagens e fonte conferidos.",
    "ref": "enviar",
    "img": null,
    "limits": [
      "Se não entender uma pendência, procure o moderador.",
      "Se faltar a opção de envio por configuração ou acesso, procure o administrador."
    ]
  },
  {
    "id": "editor-corrigir",
    "track": "editor",
    "title": "Corrija a página devolvida",
    "lead": "O comentário deve orientar uma alteração verificável.",
    "points": [
      "Leia a pendência no campo ou bloco indicado.",
      "Corrija, responda quando necessário, salve e reenvie.",
      "Editar/remover comentários próprios é diferente de resolver uma pendência; nenhuma dessas ações publica a página."
    ],
    "task": "Responda à devolução: “Confirme e informe o horário de atendimento às sextas-feiras”.",
    "check": "O horário confirmado aparece na mesma página; a resposta identifica a correção e a página foi reenviada.",
    "ref": "corrigir",
    "img": null,
    "limits": null
  },
  {
    "id": "editor-pratica",
    "track": "editor",
    "title": "A página da Biblioteca está pronta para revisão?",
    "lead": "Síntese de uma página institucional de serviço.",
    "points": [
      "Título, serviços, horários, contatos e responsável institucional confirmados.",
      "Seções e blocos organizados, links úteis e documentos vigentes conferidos.",
      "Metadados preenchidos, prévia revisada e página enviada para moderação."
    ],
    "task": "Prepare a página da Biblioteca, com serviços, horários, contatos e links.",
    "check": "A Página foi pré-visualizada, tem informações confirmadas e está em moderação.",
    "ref": "enviar",
    "img": null,
    "limits": null
  },
  {
    "id": "moderador-papel",
    "track": "moderador",
    "title": "Seu papel como moderador",
    "lead": "Revisar a entrega e cuidar de seu estado público são responsabilidades diferentes.",
    "points": [
      "Você herda as tarefas de editor no escopo autorizado.",
      "Pode revisar, aprovar ou devolver com uma orientação objetiva.",
      "Pode publicar, agendar ou retirar do ar quando o fluxo e seu acesso permitirem."
    ],
    "task": "Uma entrega precisa de uma coleção nova. Você resolve na revisão?",
    "check": "Encaminhe a criação ao administrador antes de concluir o fluxo.",
    "ref": "papel-moderador",
    "img": null,
    "limits": [
      "Você não administra grupos, permissões, coleções, privacidade de coleções ou cadastros auxiliares.",
      "Procure o administrador para esses ajustes e para impedimentos de configuração."
    ]
  },
  {
    "id": "moderador-noticias",
    "track": "moderador",
    "title": "Distribuir notícias em outras pastas",
    "lead": "Jornalistas com perfil Moderador ou superior escolhem como distribuir notícias.",
    "points": [
      "Copiar sem Alias: página independente.",
      "Copiar com Alias: página vinculada às alterações futuras da original.",
      "Linkar em outra pasta: distribuição entre pastas de notícias, acompanhada em Solicitações."
    ],
    "task": "Como jornalista Moderador, compare Copiar, Alias e Linkar em outra pasta.",
    "check": "O destino e o fluxo de distribuição estão corretos e foram conferidos no Wagtail.",
    "ref": "noticias",
    "img": "noticia-escolher-pastas.png",
    "limits": null
  },
  {
    "id": "moderador-revisao",
    "track": "moderador",
    "title": "Revise como alguém de fora da equipe",
    "lead": "A página deve se sustentar sem explicação de quem a escreveu.",
    "points": [
      "Confira fonte, finalidade, localização e vigência.",
      "Revise clareza, títulos, links, imagens, documentos e metadados.",
      "Percorra a prévia e confira a ação principal em telas menores."
    ],
    "task": "Revise a página da Biblioteca recebida do editor: encontre horários ou contatos não confirmados.",
    "check": "As pendências indicam exatamente o trecho, a informação a confirmar e o resultado esperado.",
    "ref": "revisar",
    "img": null,
    "limits": null
  },
  {
    "id": "moderador-devolver",
    "track": "moderador",
    "title": "Devolva com uma orientação que possa ser atendida",
    "lead": "Diga o problema e o resultado esperado no ponto correspondente.",
    "points": [
      "Prefira “Informe a data final da inscrição neste parágrafo”.",
      "Evite “Melhorar texto”, que não explica o que corrigir.",
      "Quando a página voltar, confira a mudança e registre a decisão seguinte."
    ],
    "task": "Registre uma devolução caso a página da Biblioteca não informe o horário de atendimento às sextas-feiras.",
    "check": "O editor sabe onde corrigir e qual dado precisa confirmar com o campus.",
    "ref": "comentarios",
    "img": null,
    "limits": null
  },
  {
    "id": "moderador-publicar",
    "track": "moderador",
    "title": "Pronto para publicar não significa publicar agora",
    "lead": "Escolha o estado conforme a decisão editorial e a vigência.",
    "points": [
      "Publicar: tornar a versão aprovada visível agora.",
      "Agendar: preparar a publicação para a data definida.",
      "Despublicar: retirar a versão do ar conforme orientação de vigência."
    ],
    "task": "A oficina deve ser divulgada na próxima semana. Explique o encaminhamento.",
    "check": "O estado e as datas estão corretos; confirme a página pública quando a publicação ocorrer.",
    "ref": "publicar",
    "img": null,
    "limits": [
      "Atue somente nas páginas autorizadas.",
      "Ação ausente ou estado inesperado: encaminhe caminho, estado atual e resultado desejado ao administrador."
    ]
  },
  {
    "id": "moderador-campus",
    "track": "moderador",
    "title": "Revise o campus pelo modelo compartilhado",
    "lead": "Preserve a estrutura e os destinos que pertencem à Reitoria.",
    "points": [
      "Campus, Vida acadêmica, Vida funcional e Projetos organizam conteúdos locais e links.",
      "Cursos, Processos seletivos e Eventos são menus fixos.",
      "Confira os vínculos SUAP e os links para Reitoria, Moodle e outros sistemas."
    ],
    "task": "Localize no grafo o caminho de atendimento das coordenações.",
    "check": "Ele leva a Campus > Servidores e contatos; não precisa de uma segunda cópia do conteúdo.",
    "ref": "mapa",
    "img": null,
    "limits": null
  },
  {
    "id": "moderador-pratica",
    "track": "moderador",
    "title": "Como a decisão editorial é registrada",
    "lead": "A página pode ser aprovada, devolvida para ajuste ou encaminhada para publicação.",
    "points": [
      "Receba a oficina preparada pelo editor.",
      "Registre uma pendência específica e confira a nova entrega.",
      "Decida o estado e combine quem acompanhará a vigência."
    ],
    "task": "Revise a página da Biblioteca enviada pelo editor, devolva uma correção objetiva e confira a resposta.",
    "check": "A correção foi conferida na mesma página e a decisão editorial ficou registrada.",
    "ref": "revisar",
    "img": null,
    "limits": null
  },
  {
    "id": "administrador-papel",
    "track": "administrador",
    "title": "Seu papel como administrador",
    "lead": "Configure as condições para cada equipe trabalhar no lugar correto.",
    "points": [
      "Você herda edição e moderação, respeitando as responsabilidades de cada área.",
      "Configura grupos, permissões, coleções, cadastros e estruturas administrativas.",
      "Distingue problema de configuração de falha que exige manutenção técnica."
    ],
    "task": "Classifique: falta de acesso, coleção ausente e erro persistente na criação.",
    "check": "Acesso e coleção são configuração; a falha pode exigir a equipe técnica.",
    "ref": "papel-admin",
    "img": null,
    "limits": [
      "Não altere conteúdo ou acesso de outra área sem combinar com os responsáveis.",
      "Código, banco, servidor e falhas da integração dependem da equipe técnica."
    ]
  },
  {
    "id": "administrador-acessos",
    "track": "administrador",
    "title": "Conceda o acesso necessário à tarefa",
    "lead": "Página e coleção têm permissões próprias.",
    "points": [
      "Confirme a equipe, a área, as páginas e as ações necessárias.",
      "Configure o grupo e confira o alcance sobre subpáginas e subcoleções.",
      "Valide o resultado com uma pessoa do grupo."
    ],
    "task": "O editor acessa a página, mas não encontra o documento. O que conferir?",
    "check": "Confira a coleção e suas permissões, além das permissões de página.",
    "ref": "permissoes",
    "img": null,
    "limits": null
  },
  {
    "id": "administrador-colecoes",
    "track": "administrador",
    "title": "Crie coleções para uso recorrente",
    "lead": "A estrutura deve facilitar a localização e a manutenção dos arquivos.",
    "points": [
      "Confirme finalidade, responsável e grupos que precisam trabalhar ali.",
      "Notícias por campus: “[Campus] • Notícias”, preferencialmente com subcoleções anuais.",
      "Renomear, especialmente mudando a ordem alfabética, pode causar falhas na criação de outras coleções."
    ],
    "task": "Planeje a coleção de notícias do campus para 2027 antes de criar.",
    "check": "Não existe uma coleção equivalente; nome, hierarquia e grupos estão definidos.",
    "ref": "colecao",
    "img": null,
    "limits": [
      "Se a criação falhar, confira se o item chegou a ser criado e registre o erro.",
      "Não exclua ou renomeie outras coleções para tentar resolver; encaminhe à equipe responsável."
    ]
  },
  {
    "id": "administrador-privacidade",
    "track": "administrador",
    "title": "Quem gerencia e quem visualiza são decisões distintas",
    "lead": "O botão de olho controla a privacidade dos documentos.",
    "points": [
      "Público; senha compartilhada; usuários logados; grupos específicos.",
      "Restrições alcançam subcoleções; restringir Root pode afetar todos os documentos.",
      "Essa privacidade se aplica a documentos, não protege imagens."
    ],
    "task": "Uma área precisa restringir um conjunto de documentos. Qual coleção deve ser avaliada?",
    "check": "A coleção específica e suas subcoleções; conferir o acesso autorizado e sem login. Não usar Root por conveniência.",
    "ref": "colecao",
    "img": "colecao-opcoes-privacidade.png",
    "limits": null
  },
  {
    "id": "administrador-estrutura",
    "track": "administrador",
    "title": "Configurações que afetam várias páginas",
    "lead": "Trate estruturas compartilhadas separadamente da edição do conteúdo.",
    "points": [
      "A pasta de notícias organiza onde jornalistas com perfil Moderador ou superior criam notícias.",
      "Cadastros auxiliares devem usar classificações institucionais confirmadas.",
      "Homepage, ordem de páginas e acessos exigem avaliação do alcance da mudança."
    ],
    "task": "Uma solicitação mistura texto, coleção e permissão. Separe as entregas por responsável.",
    "check": "O editor recebe uma estrutura pronta e sabe o que pode fazer nela.",
    "ref": "permissoes",
    "img": null,
    "limits": null
  },
  {
    "id": "administrador-pratica",
    "track": "administrador",
    "title": "O ambiente preparado para a equipe",
    "lead": "O editor precisa encontrar a página e os arquivos certos; a moderação deve funcionar.",
    "points": [
      "Confirme páginas e coleções necessárias ao editor e ao moderador.",
      "Valide o acesso com os perfis envolvidos.",
      "Se houver falha técnica, encaminhe página, ação, erro e resultado esperado."
    ],
    "task": "Execute uma conferência de acesso no ambiente de treinamento.",
    "check": "Cada perfil consegue concluir sua parte e os impedimentos têm responsável definido.",
    "ref": "permissoes",
    "img": null,
    "limits": null
  }
];
