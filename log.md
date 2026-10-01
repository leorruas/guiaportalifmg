# Registro de mudanças

## 2026-08-29

- Adicionada a busca global à lateral de leitura dos artigos. A busca da página inicial e a da sidebar agora permanecem sincronizadas, permitindo iniciar uma nova consulta sem voltar ao início.
- Adicionada a mesma busca global à navbar fixa, sincronizada com os campos da página inicial e da sidebar.

## 2026-08-27

- Reorganizados os blocos "Galeria" e "Citação" no procedimento "Sou editor e quero montar conteúdo com blocos": movidos do final da página para a seção de blocos de estrutura e informação, com subtítulos próprios e contextualizados com a configuração de imagens.
- Posicionado o logo do Instituto Federal de Minas Gerais de forma exclusiva acima da barra de pesquisa no desktop e ao lado esquerdo do título "guia do portal" em dispositivos móveis, com tamanho ampliado e tipografia proporcional; removida a repetição no título textual.
- Centralizado o alinhamento visual das capturas contextuais no layout dos artigos, incluindo imagem e legenda, sem alterar os arquivos de mídia.
- Reposicionada a captura do menu Configurações no procedimento de administrador sobre grupos e permissões, colocando a imagem junto do passo que orienta abrir Configurações e localizar Grupos e Coleções.
- Repetido o link do repositório `https://github.com/leorruas/guiaportalifmg` em cada prompt específico do artigo sobre uso de IA, para que qualquer bloco copiado isoladamente mantenha o contexto do guia.
- Adicionado botão de cópia aos blocos de prompt no artigo sobre uso de IA como apoio ao guia; os exemplos foram marcados como blocos `prompt` para a interface exibir a ação “Copiar prompt”.
- Adicionada, em Comece aqui, a orientação para usar ChatGPT, Gemini, Claude ou outro assistente como apoio ao trabalho com o Guia do Portal IFMG, com prompt para apontar ao repositório, usos por tarefa e cuidados sobre validação, permissões e dados sensíveis; atualizada a página “Como utilizar este guia” para apontar ao novo artigo.

## 2026-08-18

- Adicionado, em Fundamentos de Arquitetura da Informação e Encontrabilidade, o critério de arquitetura rasa: agrupar informações relacionadas antes de criar páginas, identificar os casos que justificam separação e validar a estrutura com testes. Incluídas referências diretas da Nielsen Norman Group sobre hierarquias rasas e profundas e heurísticas de usabilidade.
- Adicionada à interface publicada do guia a navegação lateral “Neste artigo”, inspirada na implementação do projeto PUC: ela é gerada pelos títulos H2 de cada artigo, rola até a seção selecionada, destaca a seção em leitura e fica oculta em telas menores.

## 2026-08-17

- Tornado obrigatório, para documentos de curso, o título com tipo do documento, nome completo do curso e campus; ano, período ou versão são incluídos apenas quando disponíveis na referência, para evitar conflitos entre unidades e versões.
- Removido o atalho redundante para exemplos visuais de blocos; as capturas permanecem junto dos respectivos procedimentos em “Sou editor e quero montar conteúdo com blocos”.
- Estabelecido o padrão obrigatório de títulos completos para documentos, com exemplos para calendário, horários, atendimento docente, monitoria, progressão parcial e estágio; esclarecida a diferença entre o título do documento e o rótulo de um botão CTA.
- Incluídas regras para documentos recorrentes, como horários, monitoria e progressão parcial: substituir a versão vigente quando necessário, criar nova versão apenas quando a anterior precisa permanecer e remover documentos sem uso ou valor histórico.
- Documentado o uso do bloco Link único como CTA: Cartão é o estilo recomendado para a ação principal, enquanto Padrão fica reservado a ações secundárias; incluídas capturas de configuração e resultado publicado dos dois estilos.
- Atualizado o procedimento de Editor para adicionar ou atualizar documento, com regras de título descritivo, escolha da coleção, criação governada de coleções e tags consistentes.
- Incluída uma captura contextual do formulário de documento para mostrar onde preencher título, coleção e tags.

## 2026-08-12

- Criado o vault independente do Guia do Portal IFMG, com o guia, referências necessárias e configuração visual do Obsidian alinhada ao vault `novo portal`.
- Definida a sincronização obrigatória de alterações materiais com o repositório canônico `leorruas/guiaportalifmg`.
- Adicionada a interface estática inspirada no projeto PUC, ligada à árvore e aos conteúdos do repositório `leorruas/guiaportalifmg` no GitHub.
- Reorganizado o guia em pastas por papel (Gestor, Administrador, Moderador e Editor) e em uma pasta de Fundamentos; as notas de papel passaram a usar títulos no formato “Sou [papel] e quero …”.
- Centralizadas as referências que permanecem no vault de origem e formalizada a regra de navegação, rotulagem e validação de links antes de commits.
- Configurada a `00 - Inbox/` como espaço local, excluído do GitHub, para organizar decisões pendentes da adaptação do manual do IFRN.
- Removida a página de referências do projeto de origem; a entrada por tarefa foi substituída pela orientação `Como utilizar este guia` em `00 - Comece aqui`.
- A interface web passou a listar apenas as notas publicáveis do guia, sem criar a categoria `Geral`; a página inicial do guia permanece como entrada de navegação do vault.
- Simplificada a estrutura pública do guia para seis entradas: Comece por aqui, Gestor, Administrador, Moderador, Editor e Fundamentos. Removidas a página inicial redundante e a lista de contingência herdada do projeto PUC.
- Iniciada a adaptação operacional do manual IFRN por papel: gestor encaminha demandas; editor cria e edita no escopo do grupo e envia para moderação; moderador revisa e decide no escopo do grupo; administrador configura grupos e permissões de páginas e coleções.
- Expandida a adaptação em procedimentos passo a passo para blocos, busca e menus, comentários, histórico, publicação, agendamento, documentos, imagens, coleções e organização de páginas.
- Ajustada a publicação no GitHub Pages para excluir as notas Markdown do processamento Jekyll; a interface continua carregando as notas diretamente do repositório, sem depender da renderização Jekyll.
- Corrigida a navegação de wikilinks na interface web e adicionados procedimentos para escolha de tipo de página, publicação de notícias e processos seletivos com documentos.
- Corrigida a interpretação de callouts na interface web para manter o texto do aviso no corpo, com títulos em tipografia mais discreta e sem caixa alta forçada.
- Estruturados os acessos cumulativos: moderador reúne procedimentos de editor e moderação no escopo do grupo; administrador reúne procedimentos de editor, moderação e configuração administrativa.
- Ampliada a cobertura do manual IFRN: adicionados glossário, FAQ, navegação, tipos de conteúdo, blocos, ciclo de edição e moderação, mídia, coleções e cadastros acessórios.
- Incluídas sínteses operacionais autocontidas das tarefas de editor na pasta de Moderador e das tarefas de Editor e Moderador na pasta de Administrador.
- Extraídas 48 capturas do Manual de Uso do Portal Institucional dos Institutos Federais para `imagens/manual-ifrn/` e incorporadas às orientações de navegação, notícias, processos seletivos, moderação, coleções e blocos; criada uma página visual de referência para os blocos.
- Ajustada a interface web para limitar e enquadrar as imagens do manual, preservando a leitura em telas menores.
- Adotado um padrão de explicação em linguagem direta: cada procedimento passa a apresentar finalidade, passos, resultado esperado, exemplos ou comparações simples e limites de permissão, sem citar a metodologia que inspira essa abordagem.
- Corrigida a exibição das capturas no Obsidian: as notas agora incorporam arquivos locais de `imagens/manual-ifrn/`; a interface web converte essas incorporações para a cópia versionada no GitHub.
- Reduzido o tamanho do título principal da interface de `4em` para `3em`, preservando a hierarquia visual com menor impacto na tela.
- Movidas as capturas para a pasta visível `imagens/manual-ifrn/`, pois diretórios iniciados por ponto não são adequados para a indexação de anexos no Obsidian; ampliadas as explicações de tarefas centrais com objetivo, analogias, exemplos e critérios simples de conclusão.
- Reordenadas as categorias da interface: Comece aqui, Administrador, Editor, Moderador, Gestor e Fundamentos.
- Redistribuídas as capturas do manual para os passos a que se referem — navegação, edição, comentários, moderação, agendamento e cada bloco de conteúdo — e convertida a antiga galeria visual em um atalho para o procedimento contextual.
- Corrigido o mapeamento de imagens da notícia e do processo seletivo e reposicionadas as capturas que ainda estavam agrupadas após os passos, incluindo tipo de página, status, pré-visualização, verificações e coleções.
- Ajustada a ordem dos papéis na interface para Administrador, Moderador, Editor e Gestor.
- Revisadas as páginas de Comece aqui e Administrador com explicações por propósito, exemplo, passo, evidência de conclusão e imagens ao lado da ação demonstrada; esta é a primeira parte da revisão integral de linguagem e contexto visual do guia.
- Revisadas todas as páginas de Moderador com exemplos de decisão, explicações de comentários, status, coleções, busca, notícia e processo seletivo, além de capturas posicionadas junto das ações correspondentes.
- Revisadas todas as páginas de Editor com exemplos de escolha de tipo, notícia, processo seletivo, busca, coleções, comentários, revisão e blocos; as imagens foram posicionadas junto às instruções que demonstram e os artigos-resumo passaram a indicar resultados verificáveis.
- Concluída a revisão integral com a página de Gestor e os seis Fundamentos: cada conceito recebeu tradução para situação prática, exemplo de decisão e teste simples de aplicação, preservando os critérios técnicos e as referências já existentes.
- Registradas alterações locais: identificadas as capturas que mostram a renderização de blocos, removida a conexão de KPIs com SEO e normalizado o estilo dos callouts na interface.
- Reforçada a regra de acesso cumulativo: a página de Moderador agora repete procedimentos essenciais de Editor, e a página de Administrador repete as tarefas de Editor e Moderador antes das configurações administrativas.
- Reduzida a entrelinha do título de artigo na interface para manter títulos longos mais compactos quando quebram em duas linhas.
- Iniciada a ampliação dos procedimentos por tipo de página: adicionados guias operacionais para editar a homepage (Administrador), criar ou editar campus (Moderador) e criar página institucional, curso, colegiado, link, programa e projeto (Editor). As permissões foram adaptadas ao modelo de grupos do IFMG, preservando a restrição administrativa da homepage e o escopo do moderador para campus.
- Ampliados os procedimentos de mídia e coleções: editor passou a ter roteiros específicos para adicionar e atualizar imagens e documentos; moderador recebeu o roteiro cumulativo de revisão desses itens; administrador recebeu orientação sobre criação de coleções, subcoleções, permissões e herança de acesso.
- Detalhada a estrutura de processos seletivos e cursos: moderador passou a ter procedimento para criar a pasta de processos seletivos; editor e moderador passaram a preencher processo seletivo com subtipo, edital, etapas, coleção e vínculo com cursos; administrador recebeu o procedimento para configurar tipos, subtipos e etapas de processos, além de eixos tecnológicos, modalidades e categorias de curso.
- Ampliada a cobertura de notícias: administrador passou a ter procedimento para criar a pasta de notícias e definir sua ordenação e permissões; o roteiro de Editor passou a distinguir imagem de destaque de imagem de conteúdo e a explicar chapéu, subtítulo e etiquetas.
- Consolidada a entrada do guia com atalhos por tarefa e atualizadas as páginas de apresentação de Editor e Administrador para apontar aos novos procedimentos específicos, tornando a cobertura completa do manual mais fácil de localizar.
- Adicionado, em Comece aqui, o procedimento de primeiro acesso ao Wagtail: entrada em `portal.ifmg.edu.br/admin` com credenciais do SUAP, solicitação de grupo e permissões a administrador, e novo login para validar o acesso liberado.
- Esclarecida a distinção no primeiro acesso: não conseguir entrar após autenticar no SUAP indica que a pessoa ainda precisa ser cadastrada como usuária do Wagtail; entrar sem ver a área necessária indica ajuste de permissões.
- Reordenada a árvore publicada por fluxo de trabalho em cada perfil, sem renomear arquivos nem alterar wikilinks: Comece aqui inicia pelo primeiro acesso; Editor segue da criação à moderação; Moderador acumula edição antes da decisão; Administrador reúne as tarefas cumulativas e, depois, as configurações estruturais.
- Reordenado o artigo de primeiro acesso dentro de Comece aqui para a posição `00`, com atualização dos wikilinks de entrada e do glossário.
- Renumerados os artigos de Administrador, Moderador e Editor pela sequência de trabalho do respectivo perfil; removida a ordenação artificial mantida no JavaScript da interface, preservando os wikilinks após a atualização dos caminhos.
- 2026-08-13: Corrigida a compatibilidade de acentuação entre Windows e macOS: restaurada a árvore `04 - Governança & Manuais/` em NFC, removida a duplicata local com mojibake após comparação de hashes, adicionada `.gitattributes` para texto UTF-8/LF e criado `scripts/validar-nomes-nfc.ps1` para validar nomes antes de novos commits.
- Documentado o preenchimento de ícones dos módulos Informação, Links, Definições e Estatística: a pessoa deve selecionar o ícone no Google Icons e colar somente o valor de `Icon name` copiado do painel lateral direito.
- Formalizada a regra editorial para imagens do guia: cada captura deve permanecer ao lado do passo ou conceito que demonstra, com legenda orientadora, e não agrupada fora do contexto de uso.
- Inseridas capturas contextuais no guia de blocos para orientar a escolha e cópia de `Icon name` no Google Icons; também incluída a captura e a regra de marcação de **Exibir nos menus** na aba Promover.
- Aprimorada a navegação da interface a partir das implementações do projeto PUC: adicionadas rotas compartilháveis por artigo, histórico do navegador, breadcrumbs de início e perfil, e cartões de artigo anterior/próximo seguindo a numeração dos arquivos do vault.
- 2026-08-26: Refinada a interface do guia com ícones neutros de traço, descrições dos perfis, faixa de contexto do artigo, imagens com legenda e ampliação, links compartilháveis para artigos e seções, filtro do sumário e navegação que pode abrir em nova aba.
- 2026-08-26: Adicionada a imagem institucional enviada como capa do guia e criado tema claro/escuro com alternância manual, preferência inicial do sistema e paleta verde derivada da própria capa.
- 2026-08-26: Refinada a busca: termos com menos de três letras agora orientam a pessoa a detalhar a tarefa; resultados priorizam títulos correspondentes, mantêm uma ordem de perfis coerente, exibem contagem e limitam título e trecho para não vazar dos cartões.
- 2026-08-26: Ajustado o modo escuro após revisão visual: removida a base verde, restaurada a combinação grafite/preto com azul como acento e mantido o verde na capa e no modo claro.
- 2026-08-26: Substituída a lista expansível de áreas por cards de perfil; cada perfil agora abre uma rota própria com descrição e catálogo das ações disponíveis, que levam diretamente aos procedimentos correspondentes.
- 2026-08-26: Recomposta a capa para preservar a imagem institucional completa: o hero agora separa texto e imagem, usando ajuste proporcional em vez de recorte de fundo.
- 2026-08-26: Corrigido o contraste do botão Pesquisar no modo claro, que agora usa a cor de destaque e mantém texto branco ao passar o cursor.
- 2026-08-26: Refinado o tema: o modo escuro voltou à base grafite e passou a usar verde amigável somente como cor de destaque; no modo claro, callouts, textos auxiliares e estados de interação receberam cores legíveis.
- 2026-08-26: Simplificados os rótulos exibidos na interface: perfis usam a forma “sou [papel] e…” e ações/títulos removem a repetição do papel, exibindo diretamente “quero [ação]”.
- 2026-08-26: Adicionada uma cópia editada da capa, sem a estrela no canto inferior direito e com área verde ampliada ao redor da marca; a imagem original foi preservada no vault.
- 2026-08-26: Os perfis passaram a compartilhar a mesma linguagem visual verde, com diferenciação por ícone, nome e conteúdo; a tentativa de cores distintas por papel foi retirada para preservar a unidade institucional.
- 2026-08-26: Reorganizada a entrada da interface: a busca ganhou um campo integrado e orientado por exemplo, enquanto os perfis passaram a ficar em uma seção alternativa intitulada “sou...”, com uma explicação curta do caminho por papel.
- 2026-08-26: Refinada a leitura de perfis e artigos: títulos de procedimentos deixaram de usar caixa alta e ganharam contraste principal com marcadores verdes discretos; o cabeçalho de cada perfil passou a organizar seu contexto em um bloco próprio.
- 2026-08-26: Concluído o acabamento responsivo da interface: cartões, cabeçalhos, busca e navegação receberam ajustes para telas compactas, além de foco visível consistente para teclado nos dois temas.
- 2026-08-26: Contextualizada a saída dos artigos: o botão final agora apresenta as outras ações do papel correspondente e retorna diretamente ao catálogo daquele perfil, em vez de voltar genericamente para a busca.
- 2026-08-26: Corrigida a transição para artigos para ocultar também a seção de perfis durante a leitura.
- 2026-08-26: Reforçado o isolamento da página inicial: busca e escolha de perfil ficam ocultas por CSS durante a leitura de perfil ou artigo, evitando que reapareçam em navegação direta.
- 2026-08-26: Reorganizada a entrada por intenção: “Comece aqui” e “Fundamentos” agora aparecem juntos como orientações antes da escolha “sou...”, que ficou reservada aos papéis de trabalho.
- 2026-08-26: Corrigido o contraste do botão Pesquisar no modo claro; seu rótulo agora permanece branco sobre o fundo verde do campo de busca.
- 2026-08-26: Iniciada a reconstrução editorial da interface a partir da direção visual selecionada: removidos o hero e a imagem de capa da home; entrada, busca e índice passaram a usar fundo contínuo, tipografia, filetes e uma única cor de destaque.
- 2026-08-26: Aplicada a linguagem editorial às páginas internas: perfis passaram a ser sumários numerados e artigos perderam caixas, fundos e rótulos redundantes, mantendo divisores, tipografia e o verde apenas como sinal de navegação.
- 2026-08-26: Refinada a composição editorial: a busca foi deslocada para a lateral do masthead em telas amplas, ganhou altura menor e respiro interno; retiradas a divisória vertical e a abertura da home nas páginas internas; “Comece aqui” e “Fundamentos” receberam resumos mínimos para contextualização.
- 2026-08-26: A pesquisa passou a usar a mesma estrutura editorial do índice: resultados agrupados por assunto, numerados e apresentados em linhas, sem cartões, fundos preenchidos ou cantos arredondados. As listas de perfil também receberam escala tipográfica maior e separadores simples para priorizar a leitura.
- 2026-08-26: Registrada a checagem visual da reconstrução editorial em `design-qa.md`, incluindo página inicial, busca, perfil, artigo e tela compacta.
- 2026-08-26: No modo claro, o fundo editorial foi ajustado para branco puro. Os links de retorno ao papel e de navegação entre artigos passaram a não usar sublinhado, preservando os links contextuais do conteúdo com seu tratamento próprio.
- 2026-08-26: Reforçada a hierarquia do índice da capa: os números das seções passaram a usar peso tipográfico em negrito.
- 2026-08-26: Redesenhado o checklist: cada item passou a ter uma linha de leitura própria, caixa de seleção com contraste nos dois temas e estado concluído visualmente identificável; as caixas deixaram de ser desabilitadas e a linha inteira passou a marcar ou desmarcar a tarefa.
- 2026-08-29: Corrigida a escala dos títulos internos: h1, h2, h3 e níveis seguintes agora têm tamanhos e espaçamentos progressivos, preservando o marcador azul editorial.
- 2026-08-29: Busca global consolidada na navbar no padrão do PUC; removido o campo global duplicado da sidebar, mantendo somente o filtro de seções.
- 2026-08-29: Adicionados resumos aos perfis de administrador, moderador, editor e gestor no índice inicial.
- 2026-08-31: Adicionado o fundamento “Comunicação pública, transparência e participação”, com critérios aplicáveis ao portal e conexões para linguagem simples, arquitetura da informação, escrita e publicação de notícias. O conteúdo adapta o material público do vault Concursos ao contexto operacional do guia.
- 2026-08-31: Retirada do artigo de comunicação pública a seção interna que explicava a origem do material de estudo, preservando o texto como fundamento autônomo do guia.
- 2026-08-31: Ampliado o checklist de moderação para incluir nomes, versões e coleções de arquivos e imagens, texto alternativo, exposição de dados, vigência, links e critérios visíveis antes de anexos.
- 2026-08-31: Incluído no checklist de moderação um link direto para o procedimento de manutenção de imagens e documentos ao revisar nomes e versões de arquivos.
- 2026-08-31: Substituída a listagem dependente da API pública do GitHub por um índice local publicado com o guia, evitando que as pastas desapareçam quando o limite de requisições da API é atingido.
- 2026-08-31: Corrigida a leitura do índice local para obter o conteúdo Markdown pela versão bruta do repositório, pois o GitHub Pages não publica os arquivos do vault como páginas estáticas.
- 2026-08-31: Pesquisa do guia passou a ignorar acentos, combinar todas as palavras informadas e priorizar correspondências mais próximas no título e na categoria antes de resultados apenas no conteúdo.
- 2026-08-31: Resultados encontrados apenas no corpo de um artigo agora abrem diretamente na seção ou no trecho que contém os termos pesquisados.
- 2026-08-31: A busca passou a informar quando o índice ainda está sendo preparado e ganhou atalhos: Cmd/Ctrl+K foca o campo e Esc limpa a consulta ativa.
- 2026-08-31: Adicionados filtros de resultados por perfil (administrador, moderador, editor e gestor), com o estado inicial “todos” e contagem atualizada para cada recorte.
- 2026-08-31: Corrigido o contraste dos filtros de perfil no hover e no estado selecionado; o texto agora permanece escuro e legível sobre o fundo verde.
- 2026-08-31: Ajustada a disposição dos filtros de perfil para manter os cinco controles em uma única linha em telas amplas, com reorganização em duas colunas em telas compactas.
- 2026-09-02: Wikilinks internos agora são convertidos em rotas reais do guia no GitHub Pages, preservando os mesmos vínculos no Obsidian e permitindo abrir, copiar ou navegar pelos artigos na web.
- 2026-08-31: Os procedimentos de upload de imagens e documentos passaram a apontar para a orientação de nomes claros, versões identificáveis e organização de arquivos.

## 2026-10-01 — Auditoria de conteúdo do Guia do Portal: fase 1

- Criada a auditoria `04 - Governança & Manuais/auditoria-guia-do-portal-fase-1.md` com o inventário dos 59 artigos atuais do guia.
- Classificados tarefa principal, perfil mínimo, sobreposições e encaminhamento preliminar de cada artigo.
- Registrada a hierarquia operacional `editor → moderador → administrador` como critério da auditoria, sem alterar ainda os procedimentos publicados.
- Identificados dez grupos prioritários de consolidação para a fase 2, incluindo criação/edição de páginas, busca/menu, mídia/coleções, blocos e revisão/publicação.

## 2026-10-01 — Arquitetura canônica do Guia do Portal: fase 2

- Criado `04 - Governança & Manuais/auditoria-guia-do-portal-fase-2-tarefas-canonicas.md` com a arquitetura canônica derivada da auditoria da fase 1.
- Separadas visões de papel, tarefas canônicas e referências transversais.
- Definida a herança `editor → moderador → administrador` sem duplicação de procedimentos nos perfis superiores.
- Mapeados os artigos que serão absorvidos, divididos ou reduzidos na consolidação posterior.
- Registradas duas lacunas de cobertura: procedimentos próprios para Evento e Comunicado.
- Registradas pendências de permissão em agendamento e cadastros auxiliares para validação antes da consolidação editorial.

## 2026-10-01 — Hierarquia de perfis no modelo do guia: fase 3

- Adicionada em `script.js` uma camada transitória de metadados canônicos com identificador, tipo de conteúdo, perfil mínimo e estado de absorção, baseada nas decisões da fase 2.
- Implementada a herança `editor → moderador → administrador` nas páginas de perfil: moderador passa a acumular tarefas de editor e administrador acumula tarefas de editor e moderador.
- As páginas de perfil agora separam visão do papel e tarefas por nível de responsabilidade, sem duplicar artigos já marcados para absorção.
- A busca deixa de exibir artigos marcados para absorção e o filtro por perfil passa a considerar tarefas herdadas; o algoritmo de ranking permanece inalterado nesta fase.
- Adicionados estilos para os agrupamentos de tarefas herdadas.
- Mantidos fisicamente todos os Markdown atuais; nenhuma consolidação editorial ou exclusão de artigo foi realizada.
- Durante a validação foi corrigido um erro de sintaxe nos templates da nova navegação de perfis.

## 2026-10-01 — Consolidação editorial: criar e editar páginas

- Consolidado o grupo de criação e edição de páginas em `04 - Sou editor/24 - Sou editor e quero criar ou editar uma página.md`, que passa a concentrar o procedimento comum herdado por editor, moderador e administrador.
- Reduzidos os antigos procedimentos `03 - Sou moderador/02` e `02 - Sou administrador/03` a páginas curtas de encaminhamento para a tarefa canônica, preservando links antigos sem manter cópias do passo a passo.
- Reescrito `04 - Sou editor/18` para focar em status, pré-visualização, verificações e acompanhamento do fluxo; o trecho de edição passa a apontar para a tarefa canônica.
- Removidas de E18 as instruções de agendamento/publicação, mantendo essas ações na camada de moderação até validação específica das permissões reais do Portal IFMG.
- Mantidos os arquivos absorvidos fisicamente no repositório como compatibilidade de navegação; eles continuam ocultos dos perfis e da busca pelo modelo canônico implementado na fase anterior.

## 2026-10-01 — Consolidação editorial: busca e menu

- Consolidado o procedimento de busca e menu em `04 - Sou editor/17 - Sou editor e quero configurar busca e menu de uma página.md`, agora referência comum para editor, moderador e administrador.
- Reduzido `03 - Sou moderador/07` a uma página de encaminhamento para a tarefa canônica, preservando compatibilidade de links sem duplicar o passo a passo.
- Reescrito `02 - Sou administrador/11` como página de transição: metadados e menu apontam para E17; ordenação estrutural aponta para A10; permissões apontam para A07.
- Separadas explicitamente configuração editorial de encontrabilidade, ordenação de páginas e gestão de permissões.
- Mantida A10 sem consolidação adicional nesta etapa porque sua parte de coleções será tratada no bloco específico de mídia e coleções.
- Validados os wikilinks dos arquivos alterados e confirmada a sintaxe atual do `script.js`.

## 2026-10-01 — Consolidação editorial: imagens, documentos e coleções

- Consolidada a manutenção de imagens em `04 - Sou editor/12 - Sou editor e quero adicionar ou atualizar uma imagem.md`, incluindo nomenclatura, acessibilidade, impacto de substituição e limite de coleção.
- Mantido `04 - Sou editor/13 - Sou editor e quero adicionar ou atualizar um documento.md` como referência canônica de documentos, removendo a dependência de uma página de moderador para regras de nomenclatura e ligando criação/acesso de coleção à tarefa administrativa correta.
- Reescrito `04 - Sou editor/14 - Sou editor e quero organizar documentos e imagens em coleções.md` para tratar apenas do uso de coleções já autorizadas.
- Reduzidos `03 - Sou moderador/05` e `03 - Sou moderador/06` a páginas de encaminhamento para as tarefas canônicas herdadas de editor.
- Consolidada a administração de coleções em `02 - Sou administrador/08 - Sou administrador e quero criar uma coleção e definir seus acessos.md`, separando criação, hierarquia e permissões do uso cotidiano de mídia.
- Ajustado `02 - Sou administrador/10` para manter a ordenação de páginas como procedimento próprio e encaminhar administração de coleções para A08.
- Reduzido `02 - Sou administrador/12` a uma página de encaminhamento para imagem, documento, uso de coleção e administração de coleção.
- Reescrito `04 - Sou editor/22` como página de transição que separa tarefas de mídia das configurações administrativas de cadastros, evitando sugerir que editor pode alterar cadastros auxiliares.
- Validados os wikilinks dos nove arquivos alterados, eliminada a dependência das tarefas canônicas de mídia em páginas de moderador e confirmada a sintaxe do `script.js`.

## 2026-10-01 — Consolidação editorial: blocos de conteúdo

- Consolidado o uso de blocos em `04 - Sou editor/15 - Sou editor e quero montar conteúdo com blocos.md`, que passa a ser a referência canônica herdada por editor, moderador e administrador.
- Incorporados a E15 os procedimentos de adicionar, mover, duplicar e remover blocos que estavam repetidos em E16.
- Mantidos em E15 os critérios de escolha, exemplos de configuração e visualização dos diferentes tipos de bloco.
- Reduzido `04 - Sou editor/16 - Sou editor e quero usar blocos para montar uma página.md` a uma página de encaminhamento para E15, preservando links antigos sem manter uma segunda versão do procedimento.
- Removido o link circular de E15 para E16; a navegação final agora retorna à tarefa canônica de criar ou editar uma página.
- Validados os wikilinks, anexos e a sintaxe atual do `script.js`.

## 2026-10-01 — Consolidação editorial: revisão e publicação

- Mantido `03 - Sou moderador/08 - Sou moderador e quero revisar e aprovar conteúdos.md` como visão do papel de moderador, com checklist e responsabilidades, sem repetir procedimentos completos nem apontar para páginas absorvidas.
- Consolidada a revisão editorial em `03 - Sou moderador/09 - Sou moderador e quero revisar e decidir uma publicação.md`, separando aprovação/devolução da ação técnica de alterar o estado público da página.
- Consolidado `03 - Sou moderador/11 - Sou moderador e quero publicar, despublicar ou agendar uma página.md` como referência canônica para publicação, despublicação, agendamento e expiração.
- Reduzido `02 - Sou administrador/04 - Sou administrador e quero revisar e publicar conteúdo.md` a uma página de encaminhamento para as tarefas herdadas de moderador.
- Reduzido `03 - Sou moderador/12 - Sou moderador e quero publicar uma notícia ou processo seletivo.md` a uma página de transição: criação aponta para as tarefas de editor; revisão e publicação apontam para M09 e M11.
- Reforçada a distinção entre a pergunta editorial “o conteúdo está pronto?” e a decisão operacional “este conteúdo deve estar visível agora?”.
- Validados wikilinks, anexos, ausência de referências absorvidas em M08 e sintaxe atual do `script.js`.

## 2026-10-01 — Consolidação editorial: notícia e processo seletivo

- Corrigido o papel do editor em notícia: o conteúdo canônico passa a se chamar “criar e preparar uma notícia”, deixando explícito que o editor envia para moderação e não decide a publicação.
- Corrigido o papel do editor em processo seletivo: o conteúdo canônico passa a se chamar “criar e atualizar um processo seletivo e seus documentos”.
- Ajustado o procedimento de processo seletivo para que editor use coleções já autorizadas e solicite criação ou ajuste ao administrador quando a estrutura não existir.
- Mantidos os nomes físicos dos arquivos E10 e E11 para preservar rotas e backlinks antigos; adicionados `tituloCanonico` aos metadados para que perfil, busca, artigo e navegação exibam os novos títulos.
- Alterado o carregamento dos artigos para priorizar `tituloCanonico` quando disponível, sem mudar o `sourcePath` usado pelas rotas existentes.
- Validados os wikilinks, anexos, títulos canônicos e a sintaxe atual do `script.js`.

## 2026-10-01 — Consolidação editorial: escolha e catálogo de tipos

- Consolidado `04 - Sou editor/03 - Sou editor e quero escolher o tipo de página.md` como referência canônica para escolher o tipo de conteúdo, com título canônico “Escolher o tipo de conteúdo”.
- Incorporado a E03 o catálogo que antes estava duplicado em `04 - Sou editor/21 - Sou editor e quero criar cada tipo de conteúdo.md`, incluindo finalidade, perfil mínimo e destino para cada procedimento específico.
- Reduzido E21 a uma página de encaminhamento para E03, preservando links antigos sem manter um segundo catálogo.
- Mantidas e explicitadas as lacunas de documentação específica para Evento e Comunicado; enquanto não houver artigos próprios, E03 fornece orientação mínima e encaminha para o procedimento geral de criação/edição.
- Atualizado `03 - Sou moderador/04` para apontar diretamente para a tarefa canônica de processo seletivo em vez da página M12 já absorvida.
- Adicionado `tituloCanonico` para E03 sem alterar o nome físico do arquivo nem sua rota.
- Substituída a tabela inicial por seções, evitando conflito entre o separador `|` dos wikilinks e a sintaxe de tabelas Markdown no pipeline atual do site.
- Validados wikilinks, anexos, ausência de referência a M12 absorvido, estado de E21 e sintaxe atual do `script.js`.

## 2026-10-01 — Consolidação editorial: ciclo de edição e comentários

- Reescrito `04 - Sou editor/18 - Sou editor e quero editar, verificar e acompanhar uma página.md` para tratar somente de verificação, status, pré-visualização, histórico e identificação do próximo responsável; título canônico passa a “Verificar e acompanhar uma página”.
- Reescrito `04 - Sou editor/19 - Sou editor e quero responder comentários e atualizar uma página.md` para concentrar a correção de páginas devolvidas; título canônico passa a “Responder comentários e corrigir uma página”.
- Reescrito `04 - Sou editor/20 - Sou editor e quero enviar conteúdo para moderação.md` como etapa exclusiva de passagem do rascunho para a revisão, apontando para E18 antes do envio e E19 quando houver devolução.
- Reescrito `03 - Sou moderador/10 - Sou moderador e quero acompanhar comentários e histórico.md` como tarefa própria de registrar pendências e acompanhar correções; título canônico atualizado para refletir essa ação.
- Ajustado `03 - Sou moderador/09` para encaminhar o registro de pendências ao fluxo canônico de comentários em M10, evitando repetir o procedimento dentro da revisão editorial.
- Preservados os nomes físicos dos arquivos e suas rotas; a interface usa os novos títulos via `tituloCanonico`.
- Validados wikilinks, anexos, títulos canônicos e sintaxe do `script.js`.

## 2026-10-01 — Consolidação editorial: visões de papel e herança

- Consolidado `04 - Sou editor/01 - Sou editor e quero criar e atualizar conteúdos.md` como visão única do papel de editor, corrigindo a regra de que editor usa coleções autorizadas e não cria coleções nem define permissões.
- Reduzido `03 - Sou moderador/01 - Sou moderador e quero executar as tarefas de editor.md` a uma página de encaminhamento para a visão de moderador; a herança de tarefas passa a depender da arquitetura do guia, não de um procedimento duplicado.
- Mantido `03 - Sou moderador/08 - Sou moderador e quero revisar e aprovar conteúdos.md` como visão canônica do moderador, com atualização do atalho para a tarefa canônica de pendências e correções.
- Consolidado `02 - Sou administrador/01 - Sou administrador e quero gerir acessos e configurações.md` como visão única do administrador, destacando apenas tarefas administrativas próprias e a herança de editor e moderador.
- Reduzido `02 - Sou administrador/02 - Sou administrador e quero executar as tarefas de editor e moderador.md` a uma página de encaminhamento para a visão de administrador.
- Atualizado `00 - Comece aqui/01 - Como utilizar este guia.md` para explicar a hierarquia cumulativa `editor → moderador → administrador`, manter gestor fora dessa cadeia e substituir atalhos para E21/E22 já absorvidos por tarefas canônicas atuais.
- Validados wikilinks, anexos, ausência de referências a páginas absorvidas nessas portas de entrada, coerência do mapa de papéis e sintaxe atual do `script.js`.

## 2026-10-01 — Consolidação editorial: estrutura administrativa

- Revisadas as tarefas estruturais restantes de administrador e moderador: homepage, pasta de notícias, grupos/permissões, coleções, cadastros, ordenação de páginas, campus e pasta de processos seletivos.
- Ajustado `02 - Sou administrador/05 - Sou administrador e quero editar a homepage.md` para remover o retorno a A02, já absorvido, e apontar para a visão canônica do administrador.
- Ajustado `02 - Sou administrador/06 - Sou administrador e quero criar uma pasta de notícias.md` para separar criação da estrutura e configuração de acesso; permissões passam a apontar para A07.
- Consolidado `02 - Sou administrador/10 - Sou administrador e quero organizar páginas e coleções.md` como tarefa exclusiva de reordenação estrutural de páginas; o título canônico passa a “Reordenar páginas”. Coleções, metadados e permissões são encaminhados às tarefas próprias.
- Ajustado `03 - Sou moderador/03 - Sou moderador e quero criar ou editar um campus.md` para não sugerir que o moderador crie estruturas reservadas ao administrador e para remover o retorno a M01, já absorvido.
- Ajustado `03 - Sou moderador/04 - Sou moderador e quero criar uma pasta de processos seletivos.md` para separar criação da pasta e configuração de permissões; eventuais ajustes de acesso passam a apontar para A07.
- Mantidos A07, A08 e A09 como tarefas administrativas canônicas distintas: grupos/permissões, coleções/acessos e cadastros auxiliares.
- Validados wikilinks, anexos, ausência de referências a páginas absorvidas nesse conjunto, metadados canônicos e sintaxe atual do `script.js`.

## 2026-10-01 — Metadados canônicos e aliases de busca

- Criado `data/guide-metadata.js` como fonte única do modelo canônico do guia, retirando de `script.js` os mapas de hierarquia, categoria/perfil e metadados explícitos dos artigos.
- Estruturados nos metadados os campos `id`, `tipo`, `perfilMinimo`, `estado`, `destino`, `tituloCanonico` e `aliases`, conforme aplicável.
- Mantidos em `script.js` apenas os comportamentos que consomem esses dados, como herança de perfil, filtro de páginas absorvidas e renderização.
- Atualizado `index.html` para carregar `data/guide-metadata.js` antes de `script.js`, com nova versão de cache.
- A busca passa a considerar `aliases` no texto indexável sem alterar ainda o algoritmo de ranking. Foram adicionadas formas alternativas de procura como `pdf`, `tirar do ar`, `home`, `permissão`, `notícia` e `edital`.
- Corrigido o alias singular `permissão` após teste de regressão mostrar que apenas a forma plural não cobria a consulta esperada.
- Validados sintaxe dos dois arquivos JavaScript, ordem de carregamento, ausência do modelo canônico duplicado em `script.js`, IDs sem duplicação, aliases em formato consistente e consultas básicas de regressão.

## 2026-10-01 — Correção do catálogo: comunicado não é tipo de página

- Corrigido `04 - Sou editor/03 - Sou editor e quero escolher o tipo de página.md` para retirar Comunicado do catálogo de tipos do Portal.
- Mantido “comunicado” como demanda editorial pesquisável: E03 agora orienta a escolher um tipo existente pela finalidade, com encaminhamento para Notícia, Página institucional ou atualização do conteúdo ao qual o aviso pertence.
- Evento permanece como tipo de conteúdo sem procedimento próprio e passa a apontar explicitamente para a tarefa geral de criar ou editar uma página enquanto essa lacuna não é coberta.
- Ajustado `04 - Sou editor/21 - Sou editor e quero criar cada tipo de conteúdo.md` para não registrar Comunicado como lacuna de procedimento.
- Atualizada a auditoria da fase 2 para registrar apenas Evento como lacuna de cobertura e corrigir a decisão canônica sobre Comunicado.
- Mantidos os links diretos já existentes do catálogo para os procedimentos específicos de Página institucional, Notícia, Processo seletivo, Curso, Colegiado, Link, Programa, Projeto, Campus e pastas estruturais.

## 2026-10-01 — Ranking ponderado da busca

- Substituído o ranking ordinal da busca por uma pontuação ponderada de relevância, mantendo a exigência de que todos os termos da consulta existam em algum ponto indexável do artigo.
- O ranking passa a considerar, em ordem de força: correspondência no título da ação, aliases, headings, introdução, categoria e corpo; o corpo recebe peso baixo para evitar favorecer artigos longos por repetição.
- Correspondências exatas de alias recebem peso alto, enquanto correspondência parcial em alias é usada apenas para consultas com duas ou mais palavras.
- Mantidos ocultos os artigos marcados como absorvidos e preservados os filtros de perfil já existentes.
- Criado `data/search-regression.json` com 14 consultas e o ID esperado em primeiro lugar, incluindo notícia, processo seletivo, imagem, PDF, menu, busca, tirar do ar, permissão, homepage, editar página, coleção, criar coleção, comentários e envio para moderação.
- Um teste inicial revelou que a consulta genérica `coleção` priorizava indevidamente a tarefa administrativa `criar coleção`; os pesos de aliases curtos foram ajustados para diferenciar uso cotidiano de administração.
- Validados com conteúdo real os principais pares ambíguos: notícia × pasta de notícias; processo seletivo × pasta de processos; coleção × criar coleção; permissão × permissão de coleção; menu × reordenar páginas; comentários do editor × comentários de moderação; envio para moderação × criação de notícia.
- O corpus completo de 14 consultas também foi validado em título/aliases, e a sintaxe final de `script.js` permanece válida.

## 2026-10-01 — Apresentação da relevância na busca

- Alterada a apresentação dos resultados para preservar a ordem global calculada pelo ranking; a interface deixa de reagrupar os resultados por categoria depois da ordenação.
- Cada resultado passa a exibir o perfil mínimo ou o tipo de referência e um motivo resumido da correspondência: título, termo relacionado/alias, seção, introdução, perfil ou conteúdo.
- Consultas encontradas apenas por alias, como `pdf`, mostram o alias como motivo e usam o início do artigo como trecho, evitando um excerto sem correspondência visível.
- A numeração dos resultados passa a refletir a posição global de relevância, sem reiniciar por perfil/categoria.
- Os filtros por perfil continuam preservados e operam sobre a lista já ranqueada.
- Atualizado o estilo da busca para mostrar metadados de relevância sem transformar os resultados em cartões ou pílulas.
- Atualizadas as versões de cache de `style.css` e `script.js` em `index.html`.
- Validada a sintaxe de `script.js`, a manutenção da ordem global e o corpus de regressão de 14 consultas, que continua com 14/14 casos esperados no topo em título/aliases.

## 2026-10-01 — Correção de inicialização da home

- Corrigida uma colisão de escopo global introduzida ao extrair os metadados para `data/guide-metadata.js`.
- O arquivo de metadados declarava `niveisDePerfil`, `perfilPorCategoria` e `metadadosCanonicos` como `const` no escopo global; `script.js` declarava os mesmos identificadores ao consumir `window.GuiaMetadata`, causando erro de redeclaração no navegador e interrompendo a renderização dinâmica da home.
- Encapsulado `data/guide-metadata.js` em uma IIFE, mantendo apenas `window.GuiaMetadata` como API pública para `script.js`.
- Atualizada a versão de cache do arquivo de metadados em `index.html` para forçar o navegador a carregar a correção.

## 2026-10-01 — Loader linear na navegação

- Adicionado loader linear inspirado no leitor do repositório `puc`, exibido durante a carga inicial da home e nas transições para home, perfis e artigos.
- A linha do loader usa `var(--accent-blue)`, acompanhando automaticamente a cor de destaque do Guia do Portal nos temas escuro e claro.
- Mantido o comportamento de progresso parcial até a tela terminar de montar, seguido de conclusão e desaparecimento, com duração mínima curta para evitar flashes em transições rápidas.
- Adicionado fallback de segurança para encerrar o loader em caso de falha e tratamento de `prefers-reduced-motion`.
- Aplicado o tema salvo antes da primeira pintura para que o loader inicial use o fundo e o destaque corretos desde a abertura.

## 2026-10-01 — Índice automático dos artigos do guia

- Criado `data/guide-index.json` como índice publicado dos artigos do `guia-do-portal`, com 59 arquivos Markdown e sem timestamp para manter diffs determinísticos.
- Criado `scripts/generate-guide-index.mjs`, que percorre recursivamente a pasta do guia, valida caminhos em Unicode NFC, ordena os artigos e gera o índice.
- O gerador aceita `--check` para validar se o JSON versionado corresponde exatamente à árvore atual, sem reescrever arquivos.
- Criado o workflow `.github/workflows/validate-guide-index.yml` para executar essa validação em mudanças na pasta do guia, no índice, no gerador ou no próprio workflow.
- Removida de `script.js` a lista manual `arquivosDoGuia`; a interface passa a carregar `data/guide-index.json` com `cache: no-store` e derivar título, categoria e URL a partir dos caminhos gerados.
- Adicionada mensagem visível na home quando o índice inicial não puder ser carregado, evitando uma falha silenciosa com perfis vazios.
- Preservada a versão de cache do loader já existente e incrementado apenas o sufixo do `script.js` para forçar o navegador a receber a nova lógica.
- Validação final confirmou correspondência exata entre os 59 Markdown da árvore e os 59 itens do índice, ausência da lista manual, sintaxe válida do `script.js`, validação NFC útil e gatilhos completos do workflow.

## 2026-10-01 — Remoção de retornos manuais dos artigos

- Removidos sete wikilinks finais usados apenas como navegação de retorno em artigos de Comece aqui, administrador, moderador e editor.
- Retirados rótulos como “Voltar às configurações administrativas”, “Voltar ao papel de administrador”, “Voltar ao papel de moderador”, “Voltar ao papel de editor” e equivalentes.
- Mantidos links finais que representam próxima etapa real do fluxo, como enviar para moderação, revisar, reordenar ou continuar um procedimento relacionado.
- Atualizado `AGENTS.md` para deixar a navegação de retorno sob responsabilidade da interface e evitar a reintrodução desses links nos Markdown.

## 2026-10-01 — Índice contextual na navbar

- Mantido “guia do portal” como retorno direto à página inicial.
- O link “índice” da navbar passa a ser contextual: durante a leitura de um artigo, abre o perfil/categoria ao qual o artigo pertence.
- Na home e nas páginas de perfil, “índice” continua apontando para o índice geral de perfis.
- Atualizados `href`, `aria-label` e estado interno do link para manter navegação por clique e destino semântico coerentes.
- Preservado o comportamento de abrir links modificados com teclado ou clique intermediário.

## 2026-10-01 — Modularização conservadora: motor de busca

- Criado `search.js` como módulo isolado para o motor de busca, encapsulado em IIFE e expondo somente `window.GuiaBusca`.
- Movidas para o módulo as responsabilidades puras de normalização, tokenização, verificação de termos, texto indexável, pontuação ponderada, motivo da correspondência e rótulo de perfil mínimo.
- Mantidos em `script.js` a renderização, os filtros, os event listeners, a abertura de artigos e toda a inicialização da interface; nenhuma lógica de DOM foi movida nesta etapa.
- `script.js` passa a consumir uma API pequena de `window.GuiaBusca`, sem manter uma segunda implementação do ranking.
- Adicionado fallback básico no `script.js`: se `search.js` não carregar, a home continua inicializando e a busca degrada para uma ordenação simples em vez de derrubar a página inteira.
- Atualizado `index.html` para carregar `search.js` entre os metadados e o script principal. Uma versão de cache concorrente do script principal (`indice-contextual-v1`) foi preservada e apenas incrementada para `indice-contextual-v2`, sem sobrescrever essa linha de trabalho.
- Validados sintaxe de `search.js` e `script.js`, ordem de carregamento, ausência das funções duplicadas no script principal, fallback não fatal e o corpus de regressão de 14 consultas, que permanece com 14/14 resultados esperados no topo em título/aliases.
- Revalidados com conteúdo real os pares mais ambíguos (notícia/pasta de notícias, coleção/criar coleção, permissão/permissão de coleção e comentários de editor/moderação), sem alteração do ranking esperado.

## 2026-10-01 — Modularização conservadora: navegação e links internos

- Criado `navigation.js` como módulo isolado de utilidades puras de navegação, encapsulado em IIFE e expondo somente `window.GuiaNavegacao`.
- Extraídas de `script.js` as funções determinísticas de rota de artigo, rota de perfil, rota com seção, normalização de destinos Obsidian, geração de ID de seção e resolução de wikilinks.
- Mantidos em `script.js` todos os efeitos de interface: `abrirArtigo`, `abrirPerfil`, `tratarRotaDaUrl`, `history.pushState`, `window.location`, scroll, listeners e manipulação do DOM.
- A resolução de wikilinks no módulo recebe explicitamente a lista de artigos; `script.js` preserva um pequeno adaptador para fornecer `todosOsArtigos` sem acoplar o módulo ao estado global da interface.
- Adicionado fallback básico de navegação em `script.js`; se `navigation.js` não carregar, rotas e links internos continuam funcionando em vez de interromper a inicialização da home.
- Atualizado `index.html` para carregar os scripts na ordem `guide-metadata.js → search.js → navigation.js → script.js`, com incremento do cache do script principal para `indice-contextual-v3` e preservação da linha de trabalho concorrente do índice contextual.
- Validadas sintaxe e ordem de carregamento e executados testes de rota/resolução para os 59 artigos do índice, usando caminho completo, caminho relativo, nome de arquivo e título exibido para cada um.

## 2026-10-01 — Ajustes de contraste e navegação sequencial

- Corrigida a navegação entre artigos para usar uma única linha superior e uma linha inferior contínua na grade, evitando a quebra visual quando existe apenas “próximo artigo”.
- Removida a mudança de fundo no hover e foco do campo de busca da navbar; o campo permanece transparente e mantém texto e placeholder legíveis.
- Corrigido o contraste dos filtros de perfil da busca: o estado ativo e o hover usam a cor de destaque no fundo e a cor de fundo do tema no texto, inclusive no tema claro.
- Em telas estreitas, o marcador vazio usado para posicionar um único “próximo artigo” deixa de ocupar uma linha própria.
- Atualizada a versão de cache de `style.css` em `index.html`.

## 2026-10-01 — Hierarquia de títulos nos perfis e artigos

- Renomeados os três textos de visão dos perfis editoriais para “o papel do editor”, “o papel do moderador” e “o papel do administrador”, evitando apresentar a visão geral como se fosse uma tarefa.
- Atualizados os H1 correspondentes nos Markdown sem renomear arquivos ou rotas.
- O leitor de artigos passa a remover o primeiro H1 do corpo quando ele corresponde ao título do documento já exibido no cabeçalho da interface, evitando repetição visual do título.
- A verificação considera tanto o título canônico quanto o nome original do arquivo, preservando compatibilidade com artigos cujo título de exibição foi refinado sem renomear o Markdown.
- Atualizadas as versões de cache de `guide-metadata.js` e `script.js`.

## 2026-10-01 — Regressão automatizada da busca

- Centralizado em `search.js` o pipeline completo de ranking por meio de `GuiaBusca.ranquearArtigos()`, incluindo exclusão de páginas absorvidas, cobertura de todos os termos, pontuação e desempate por título.
- Atualizado `script.js` para consumir essa função diretamente; a interface e os testes deixam de manter implementações paralelas do ranking.
- Mantido um fallback básico em `script.js` caso o módulo avançado de busca não carregue, preservando a inicialização da home.
- Criado `scripts/test-search-regression.mjs`, que carrega os mesmos módulos usados pelo site, lê os 59 Markdown listados em `data/guide-index.json`, aplica os metadados canônicos e executa os casos de `data/search-regression.json`.
- O teste verifica também IDs canônicos duplicados e falha com os três primeiros resultados e respectivas pontuações quando o topo esperado muda.
- Criado `.github/workflows/validate-search.yml`, executado em mudanças nos artigos, índice, metadados, corpus de regressão, motor de busca, script principal, teste ou no próprio workflow.
- A primeira execução real do GitHub Actions concluiu com sucesso: `14/14` consultas com o resultado esperado no topo e corpus de `59` artigos do índice publicado.
- Atualizadas somente as versões de cache de `search.js` e `script.js` em `index.html`, preservando as versões concorrentes já existentes para metadados, navegação e a linha `titulo-unico` do script principal.

## 2026-10-01 — Prompts de IA com verificação, imagens e blocos

- Ampliado o artigo “Como usar uma IA como apoio para trabalhar com este guia” com uma regra transversal de não inferência: quando faltar informação necessária, a IA deve perguntar antes de continuar.
- Todos os prompts passam a orientar pesquisa em fonte oficial ou confiável quando a informação puder ter mudado, com indicação de fonte, link e data quando disponíveis.
- Adicionada a distinção entre informação confirmada no guia, confirmada em fonte externa e informação que ainda precisa de confirmação; quando a vigência não estiver clara, a IA deve apresentar a evidência e pedir confirmação ao usuário.
- Adicionado um prompt para preparar imagens para publicação, explicando texto alternativo em linguagem simples, diferenciando descrição e legenda e tratando imagens complexas.
- Adicionado um prompt para sugerir blocos do Wagtail a partir do conteúdo, usando apenas blocos documentados, justificando sua função e preservando texto simples como padrão quando não houver ganho claro.
- Reforçada a orientação para que assistentes sem acesso à internet não afirmem ter pesquisado ou verificado informações externas.

## 2026-10-01 — Fuzzy conservador para erros de digitação

- Adicionado em `search.js` um fallback fuzzy que só é acionado quando a busca exata não retorna nenhum artigo.
- A recuperação aproximada aceita no máximo uma palavra divergente por consulta, exige termos com pelo menos cinco caracteres e usa distância de edição máxima igual a 1.
- A comparação fuzzy é limitada às palavras do título da ação e dos aliases; o corpo do artigo não participa da aproximação, reduzindo falsos positivos.
- Consultas exatas continuam usando o ranking ponderado original sem qualquer alteração de ordem.
- Resultados aproximados recebem motivo explícito `correspondência aproximada` na interface e não tentam saltar para uma ocorrência literal inexistente dentro do artigo.
- Acrescentados seis casos ao corpus de regressão: `notica`, `permisao`, `despubicar`, `processo seletvo`, `editar pagna` e `colecao`.
- A execução real do GitHub Actions concluiu com sucesso: `20/20` consultas com o resultado esperado no topo, avaliando os `59` artigos do índice publicado.
- Atualizadas somente as versões de cache de `search.js` e `script.js` em `index.html`, preservando as linhas concorrentes `perfil-visao`, `navigation-module` e `titulo-unico`.

## 2026-10-01 — Fechamento da lacuna editorial de Evento

- Confirmado pela auditoria existente que apenas `Evento` era uma lacuna de procedimento; `Comunicado` não é um tipo de página do Portal e permanece tratado em E03 como finalidade editorial encaminhada para Notícia, Página institucional ou atualização de conteúdo existente.
- Criado `04 - Sou editor/23 - Sou editor e quero criar um evento.md` como tarefa canônica `task-event-create`, ocupando o número livre 23 da sequência de editor.
- O procedimento de Evento reutiliza a mecânica canônica de criação/edição de páginas e cobre apenas decisões específicas: quando usar Evento, informações mínimas para o público, confirmação da fonte, tratamento de data/local/participação, revisão e envio para moderação.
- O texto evita inferir nomes ou existência de campos específicos do Wagtail: orienta usar os campos efetivamente apresentados pelo formulário e solicitar confirmação quando informações essenciais estiverem ausentes ou conflitantes.
- Atualizado E03 para apontar diretamente ao novo procedimento e removida a indicação de que Evento não possuía orientação própria.
- Movido o alias `evento` de `task-content-type-choose` para `task-event-create`; `comunicado` permanece como alias da tarefa de escolher o tipo de conteúdo.
- Atualizados `data/guide-metadata.js`, `data/guide-index.json` e `data/search-regression.json`; o corpus agora inclui `evento`, `criar evento` e `comunicado`.
- Validada a integridade dos wikilinks modificados e a correspondência exata do índice com a árvore do repositório.
- GitHub Actions confirmou `guide-index OK: 60 artigos` e `23/23` consultas de busca com o resultado esperado no topo, avaliando os `60` artigos publicados.
- Atualizada a versão de cache de `guide-metadata.js` em `index.html` para disponibilizar imediatamente o novo metadado de Evento.

## 2026-10-01 — Perfil mínimo no contexto das tarefas

- O bloco de contexto abaixo do título dos procedimentos deixa de repetir apenas “Sou editor”, “Sou moderador” ou “Sou administrador”.
- Em tarefas operacionais, o bloco passa a mostrar o perfil mínimo exigido pelos metadados e explica que o acesso ao Wagtail precisa estar configurado, no mínimo, com esse perfil.
- A regra respeita a hierarquia cumulativa editor → moderador → administrador: uma tarefa de editor continua indicando editor como requisito mínimo mesmo quando aberta a partir do perfil de moderador ou administrador.
- Páginas de visão, fundamentos, orientações gerais e o papel de gestor mantêm o contexto editorial anterior, já que gestor não precisa operar o Wagtail.
- Atualizada a versão de cache de `script.js` em `index.html`.

## 2026-10-01 — Consolidação das regras do AGENTS.md

- Atualizado `AGENTS.md` para refletir a arquitetura final do Guia do Portal após a consolidação editorial e técnica.
- Formalizada a regra de uma única tarefa canônica por ação e a herança cumulativa `editor → moderador → administrador`, mantendo gestor fora dessa cadeia.
- Registradas regras para páginas absorvidas, IDs estáveis, `tituloCanonico`, aliases e separação entre visão de papel e procedimento operacional.
- Definidas as responsabilidades de `data/guide-metadata.js`, `search.js`, `navigation.js` e `script.js`, incluindo encapsulamento em IIFE/namespace explícito para evitar colisões no escopo global.
- Documentada a ordem de carregamento `metadados → busca → navegação → script principal`, a necessidade de versionar cache no `index.html` após alterações em arquivos carregados pelo navegador e a preferência por fallback não fatal para módulos auxiliares.
- Formalizados os comandos de validação `node scripts/generate-guide-index.mjs --check` e `node scripts/test-search-regression.mjs`, além da obrigação de manter o índice gerado e o corpus de regressão atualizados.
- Registradas as restrições atuais do fuzzy: somente fallback sem resultado exato, no máximo uma palavra divergente, termo com pelo menos cinco caracteres, distância máxima 1 e comparação limitada a título/aliases.
- Reforçada a regra de não inferir campos, permissões ou comportamento do Wagtail quando a evidência disponível for insuficiente; nesses casos, deve-se pedir confirmação ou consultar fonte oficial identificada.
- Revisão final confirmou a presença das salvaguardas de canonicidade, hierarquia, metadados, índice, regressão, modularização, cache, fuzzy e não inferência.

## 2026-10-01 — Correção de overflow na navegação entre artigos

- Corrigido o vazamento horizontal do título de “próximo artigo” na navegação sequencial.
- As duas colunas passam a usar `minmax(0, 1fr)`, permitindo que cada célula encolha dentro da largura disponível.
- Os links de navegação passam a usar `box-sizing: border-box` e `min-width: 0`, evitando que o padding do cartão aumente sua largura além da coluna.
- Rótulo e título podem quebrar linha dentro do próprio cartão quando necessário.
- No mobile, a coluna única também usa `minmax(0, 1fr)`.
- Atualizada a versão de cache de `style.css` em `index.html`.

## 2026-10-01 — Smoke test técnico do artefato publicado

- Validado o workflow final `pages build and deployment`: etapas de build, relatório de status e deploy concluíram com sucesso.
- Baixado e inspecionado o artefato `github-pages` gerado pelo próprio GitHub Pages, em vez de assumir que a árvore da branch correspondia ao pacote publicado.
- Confirmada no artefato a presença de `index.html`, `style.css`, `script.js`, `search.js`, `navigation.js`, `data/guide-metadata.js` e `data/guide-index.json`.
- Confirmados `60` artigos em `data/guide-index.json` e a presença do novo procedimento de Evento no índice publicado; os Markdown são lidos em tempo de execução do repositório bruto e não precisam integrar o artefato do Pages.
- Validada a sintaxe dos JavaScripts publicados e a existência de todos os assets locais referenciados pelo `index.html`.
- Executadas `240` verificações de rota/resolução de links para os `60` artigos publicados (caminho completo, caminho relativo, nome do arquivo e título), com `0` falhas; a rota de Evento e rota de perfil também foram verificadas.
- Mantida como evidência complementar a validação automatizada anterior de busca: `23/23` consultas corretas sobre os `60` artigos.
- Identificado um resíduo não funcional: `script.js` ainda procura o elemento `btn-pesquisar`, ausente do HTML atual, mas o listener é protegido por verificação de existência; não houve alteração apenas para remover esse código morto.
- O ambiente de navegação utilizado nesta revisão não conseguiu acessar diretamente a URL pública do GitHub Pages; portanto, esta etapa é um smoke técnico do pacote publicado e dos workflows, não uma validação visual/interativa em navegador real.

## 2026-10-01 — POC do mapa da estrutura do Portal

- Criada a página `00 - Comece aqui/04 - Mapa da estrutura do Portal.md` como referência transversal do guia.
- Criado `data/portal-graph.js` como dataset curado do mapa, iniciando com 6 páginas: Home, Institucional, Estudantes, Servidores, Comunidade e Acesso à Informação.
- Registradas 5 relações do tipo `estrutura`, todas partindo da Home para os cinco caminhos de primeiro nível informados pelo usuário.
- Criado `portal-graph.js` como módulo opcional: inicializa somente quando o artigo contém `[data-portal-graph]`, carrega Cytoscape sob demanda e trata falhas localmente sem interromper o restante do manual.
- A POC inclui busca por título/URL, recentralização, painel de detalhes ao selecionar um nó e link para abrir a página real do Portal.
- Integrado o componente ao renderizador de artigos por meio de `GuiaGrafoPortal.renderizarSePresente()`, sem tornar o grafo dependência obrigatória da home.
- Adicionados estilos responsivos para o grafo e ampliada apenas a largura do artigo que contém o componente.
- Adicionado metadado canônico `ref-portal-map` com aliases `mapa do portal`, `grafo`, `estrutura do portal` e `arquitetura do portal`.
- Atualizados `data/guide-index.json` e `data/search-regression.json`; o guia passa a ter `61` artigos e o corpus de busca `25` consultas.
- GitHub Actions confirmou `guide-index OK: 61 artigos` e `25/25` consultas com o resultado esperado no topo.
- Atualizado `AGENTS.md` com as regras de manutenção incremental do mapa: URL como identidade, relações somente confirmadas, tipos explícitos de aresta, prevenção de duplicatas e Cytoscape como dependência carregada sob demanda.

