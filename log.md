# Registro de mudanças

## 2026-10-02

- Adicionada a imagem contextual em formato WebP `imagens/guias-contextuais/configuracao-pagina-link.webp`, apresentando o formulário de preenchimento e configuração de página do tipo Link no Wagtail.
- Substituída, no procedimento `Criar um link de redirecionamento`, a captura dos campos do Link pela imagem `configuracao-pagina-link.webp`, posicionada após as orientações de preenchimento de Título e URL.
- Criado o padrão de link de ação contextual com o callout `[!ACTION]`: links para executar outra tarefa podem aparecer como botão no ponto relevante do artigo; aplicado em `Criar um link de redirecionamento` para encaminhar à revisão, mantendo referências complementares como links de texto.
- Corrigida a resolução de wikilinks após a conversão para HTML: entidades como `&amp;` agora são decodificadas antes de localizar o artigo, permitindo que botões de ação apontem corretamente para caminhos como `Governança & Manuais`.
- Removida a borda lateral externa dos links de ação e feita uma varredura nos procedimentos do guia. O padrão `[!ACTION]` foi aplicado a 17 encaminhamentos operacionais em 13 artigos, incluindo envio para moderação, revisão, publicação, correção de devolução e ajustes de acesso; referências e aprofundamentos permaneceram como links de texto.

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

## 2026-10-01 — Ajustes visuais do mapa do Portal

- Ocultado o índice lateral “Neste artigo” apenas na página do mapa, liberando toda a largura do leitor para o grafo.
- O layout do artigo do mapa passa a usar uma única coluna e o corpo deixa de limitar o grafo a 980 px.
- Substituída a paleta multicolorida dos ramos por uma escala monocromática de verdes, mantendo a Home destacada pela cor de acento do manual.
- Atualizadas as versões de cache de `style.css` e `portal-graph.js` em `index.html`.

## 2026-10-01 — Ramo Institucional no mapa do Portal

- Adicionadas 11 páginas como filhas diretas de `https://portal.ifmg.edu.br/institucional/`: Quem somos, Ensino, Pesquisa & Inovação, Extensão, Educação a Distância, Internacional, Desenvolvimento Institucional, Gestão de Pessoas, Administração & Planejamento, Tecnologia da Informação e Governança.
- Registradas 11 novas relações do tipo `estrutura`, todas partindo de Institucional.
- O mapa passa de 6 para `17` páginas e de 5 para `16` relações.
- Atualizada a versão de cache de `data/portal-graph.js` em `index.html`.

## 2026-10-01 — Ramo Estudantes no mapa do Portal

- Adicionadas 8 páginas como filhas diretas de `https://portal.ifmg.edu.br/estudantes/`: Como ingressar no IFMG, Assistência Estudantil, Núcleos de Apoio, Egressos, Bibliotecas, Como abrir um chamado (Solicitar ajuda • SUAP), Sugestões, Críticas e Elogios e + informações para estudantes.
- Registradas 8 novas relações do tipo `estrutura`, todas partindo de Estudantes.
- A URL fornecida para o chamado SUAP foi preservada exatamente como informada, sem correção por inferência.
- O mapa passa de 17 para `25` páginas e de 16 para `24` relações.
- Atualizada a versão de cache de `data/portal-graph.js` em `index.html`.

## 2026-10-01 — Ramo Servidores no mapa do Portal

- Adicionadas 11 páginas como filhas diretas de `https://portal.ifmg.edu.br/servidores/`: Normativas & Manuais, Licenças, Remoção & Redistribuição, Teletrabalho / Trabalho Remoto, Reconhecimento de Saberes e Competências (RSC) - TAE, CPPD, CIS, Notícias para servidores, Como abrir um chamado (Solicitar ajuda • SUAP), Sugestões, Críticas e Elogios e + informações para servidores.
- Registradas 11 novas relações do tipo `estrutura`, todas partindo de Servidores.
- O mapa passa de 25 para `36` páginas e de 24 para `35` relações.
- Atualizada a versão de cache de `data/portal-graph.js` em `index.html`.

## 2026-10-01 — Ramo Acesso à Informação no mapa do Portal

- Adicionadas 14 páginas como filhas diretas de `https://portal.ifmg.edu.br/acesso-a-informacao/`: Institucional, Ações & Programas, Participação Social, Auditorias, Convênios e Transferências, Receitas & Despesas, Licitações & Contratos, Servidores, Informações Classificadas, Serviço de Informação ao Cidadão (SIC), Dados Abertos, Sanções Administrativas, Ferramentas e Aspectos Tecnológicos e Sugestões, Críticas e Elogios.
- Registradas 14 novas relações do tipo `estrutura`, todas partindo de Acesso à Informação.
- O mapa passa de 36 para `50` páginas e de 35 para `49` relações.
- Atualizada a versão de cache de `data/portal-graph.js` em `index.html`.

## 2026-10-01 — Convergência de Sugestões, Críticas e Elogios para Ouvidoria

- Mantidas as três entradas “Sugestões, Críticas e Elogios” nos ramos Estudantes, Servidores e Acesso à Informação, porque elas existem como pontos distintos de navegação.
- Adicionado um único nó de destino `Ouvidoria`, em `https://www.ifmg.edu.br/portal/ouvidoria`.
- Registradas 3 relações do tipo `redireciona`, uma a partir de cada entrada “Sugestões, Críticas e Elogios” para o mesmo nó Ouvidoria.
- Relações `redireciona` passam a aparecer tracejadas, em verde e com seta, diferenciando-as das relações estruturais.
- O mapa passa de 50 para `51` páginas e de 49 para `52` relações.
- Atualizadas as versões de cache de `data/portal-graph.js` e `portal-graph.js`.

## 2026-10-01 — Layout radial e limites de zoom do mapa

- Substituído o layout `breadthfirst` do Cytoscape por posicionamento radial hierárquico calculado pelo próprio `portal-graph.js`.
- A Home fica fixa no centro e seus ramos de primeiro nível são distribuídos em 360° ao redor dela.
- Filhos de cada ramo são distribuídos em anéis locais ao redor do respectivo nó-pai; grupos maiores usam dois anéis para reduzir colisão entre rótulos e nós.
- Adicionada uma etapa iterativa de afastamento para evitar sobreposição entre nós, preservando Home e ramos de primeiro nível como âncoras fixas.
- Nós sem pai estrutural, como destinos compartilhados de redirecionamento, são posicionados em uma faixa externa sem forçar uma hierarquia inexistente.
- Configurados limites de zoom do Cytoscape: `minZoom: 0.28` e `maxZoom: 2.2`, além de sensibilidade de roda reduzida para `0.18`.
- O botão “recentralizar” reaplica o layout radial e enquadra o grafo dentro desses limites.
- Atualizada a versão de cache de `portal-graph.js` para `portal-graph-v4`.

## 2026-10-01 — Como ingressar e consolidação do nó SUAP

- Adicionadas `Processo Seletivo` e `Reserva de Vagas (Cotas)` como filhas diretas de `Como ingressar no IFMG`.
- Consolidado o suporte SUAP em um único nó canônico: `https://portal.ifmg.edu.br/comunidade/suporte-suap/`.
- Removidos do dataset os nós específicos de Estudantes e Servidores que representavam acessos ao SUAP como se fossem páginas distintas.
- Comunidade passa a ter relação `estrutura` com o nó SUAP; Estudantes e Servidores passam a apontar para o mesmo nó por relações `redireciona`.
- O mapa passa de 51 para `52` páginas e de 52 para `55` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v7`.

## 2026-10-01 — Ramo Comunidade no mapa do Portal

- Adicionadas 7 entradas diretas em `https://portal.ifmg.edu.br/comunidade/`: Hubs de Inovação do IFMG, Empresas Juniores e Empreendedorismo, Bibliotecas, + IFMG • Cursos livres e gratuitos, Espaços Técnico-Culturais do IFMG, Comunicação / Imprensa e Sugestões, Críticas e Elogios.
- Registradas 7 novas relações do tipo `estrutura`, todas partindo de Comunidade.
- A entrada `Sugestões, Críticas e Elogios` de Comunidade recebeu também relação `redireciona` para o nó único da Ouvidoria, preservando a convergência já usada nos demais ramos.
- O mapa passa de 52 para `59` páginas e de 55 para `63` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v8`.

## 2026-10-01 — Ouvidoria abaixo de Acesso à Informação

- Corrigida a hierarquia do mapa: o nó `Ouvidoria` passa a ser filho estrutural de `Acesso à Informação`.
- Mantidas as quatro relações `redireciona` das entradas `Sugestões, Críticas e Elogios` para o mesmo nó Ouvidoria.
- Como a URL atual da Ouvidoria no novo Portal não pôde ser confirmada automaticamente nesta etapa, foi preservada a URL já cadastrada no nó em vez de inferir uma nova rota.
- Atualizada a versão de cache de `data/portal-graph.js` para `v9`.

## 2026-10-01 — Consolidação canônica de Ouvidoria e Bibliotecas

- O nó `https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/` passa a ser o destino canônico, com o título `Sugestões, críticas e elogios / Ouvidoria`.
- Esse nó permanece como filho estrutural de `Acesso à Informação`.
- Removido o nó separado `https://www.ifmg.edu.br/portal/ouvidoria`, evitando representar a Ouvidoria duas vezes.
- As entradas `Sugestões, Críticas e Elogios` de Estudantes, Servidores e Comunidade passam a redirecionar para o nó canônico em Acesso à Informação.
- `https://portal.ifmg.edu.br/comunidade/bibliotecas/` passa a ser o destino canônico de Bibliotecas.
- A entrada `https://portal.ifmg.edu.br/estudantes/bibliotecas/` permanece no ramo Estudantes, mas passa a redirecionar para a Biblioteca de Comunidade.
- As páginas `Institucional` e `Servidores` dentro de Acesso à Informação permanecem independentes dos ramos homônimos, pois representam conteúdos diferentes.
- O mapa passa de 59 para `58` páginas e de 64 para `63` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v10`.

## 2026-10-01 — Repulsão física entre nós do mapa

- Mantido o posicionamento radial hierárquico como estado inicial do grafo.
- Adicionada uma segunda etapa de relaxamento usando o layout `cose` do Cytoscape, com `randomize: false`, para preservar a estrutura radial em vez de recalcular o mapa do zero.
- Home e os cinco ramos de primeiro nível são bloqueados durante o relaxamento e permanecem como âncoras dos 360°.
- Somente relações do tipo `estrutura` participam da física do layout; relações `redireciona` continuam desenhadas no grafo, mas não puxam ramos diferentes uns em direção aos outros.
- Ativado `nodeDimensionsIncludeLabels: true`, fazendo a repulsão considerar também o espaço ocupado pelos rótulos.
- Configurados `nodeRepulsion: 9200`, `nodeOverlap: 34`, `idealEdgeLength: 145`, `componentSpacing: 110` e 700 iterações de relaxamento.
- O botão “recentralizar” reaplica primeiro o radial e depois a repulsão física.
- Mantidos os limites de zoom já definidos.
- Atualizada a versão de cache de `portal-graph.js` para `portal-graph-v5`.

## 2026-10-01 — Identidade Visual abaixo de Comunicação / Imprensa

- Adicionada a página `Identidade Visual e Manuais (Marca do IFMG)` como filha direta de `Comunicação / Imprensa`.
- Registrada uma nova relação do tipo `estrutura` entre `https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/` e `https://portal.ifmg.edu.br/comunidade/comunicacao-imprensa/identidade-visual-e-manuais-marca-do-ifmg/`.
- O mapa passa de 58 para `59` páginas e de 63 para `64` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v11`.

## 2026-10-01 — Correção do layout após teste visual

- Removida a etapa física `cose`, que no teste visual espalhava descendentes entre ramos e gerava muitas diagonais longas.
- O mapa passa a usar layout setorial determinístico: Home no centro e cada um dos cinco ramos principais ocupa um setor angular exclusivo ao redor dela.
- Descendentes de segundo nível são distribuídos em um ou dois arcos dentro do próprio setor; descendentes mais profundos avançam radialmente para fora sem invadir outros ramos.
- Home e ramos principais permanecem legíveis no panorama geral; rótulos de páginas menores usam `min-zoomed-font-size` e aparecem conforme o usuário aproxima o zoom.
- Relações estruturais ficaram mais discretas no panorama geral.
- Relações `redireciona` ficam com baixa opacidade por padrão e ganham destaque quando um dos nós envolvidos é selecionado.
- Mantidos os limites de zoom e o botão de recentralização.
- Atualizada a versão de cache de `portal-graph.js` para `portal-graph-v6`.

## 2026-10-01 — Expansão de + informações para servidores

- Adicionadas 10 páginas como filhas diretas de `https://portal.ifmg.edu.br/servidores/mais/`: Auxílios & Assistência, Wellhub / Gympass, Horário Especial para Servidores, Programa de Apoio Financeiro à Graduação e Pós-Graduação, Exames Médicos Periódicos, Licenças, +IFMG, Incentivo à Qualificação, Orientações para posse no IFMG e Registro de atestado médico ou odontológico.
- A comparação por título normalizado encontrou apenas uma duplicação exata com o dataset existente: `Licenças`.
- A entrada `https://portal.ifmg.edu.br/servidores/guia/licencas/` permanece no ramo “+ informações para servidores”, mas recebe relação `redireciona` para o nó canônico `https://portal.ifmg.edu.br/servidores/licencas/`.
- `+IFMG` foi mantido separado de `+ IFMG • Cursos livres e gratuitos`, pois os títulos e contextos não são iguais e não há confirmação de que representem o mesmo destino.
- O mapa passa de 59 para `69` páginas e de 64 para `75` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v12`.

## 2026-10-01 — +IFMG como redirecionamento

- Corrigida a interpretação anterior: a entrada `+IFMG` em `servidores/guia/ifmg/` redireciona para o mesmo destino de `+ IFMG • Cursos livres e gratuitos`.
- Mantida a entrada no ramo de “+ informações para servidores”, com relação `redireciona` para o nó canônico `https://portal.ifmg.edu.br/comunidade/-ifmg-cursos-livres-e-gratuitos/`.
- Atualizada a versão de cache de `data/portal-graph.js` para `v13`.

## 2026-10-01 — Links adicionais em + informações para servidores

- Confirmado que `Programa de apoio financeiro à graduação e pós-graduação` já estava cadastrado como filho estrutural de `+ informações para servidores`; nenhum nó ou relação duplicada foi criado.
- Adicionadas relações do tipo `link` de `+ informações para servidores` para os nós canônicos já existentes de `CPPD` e `CIS`.
- `Acesse a página do CONSUP` e `Saiba mais sobre o Estágio Probatório` foram fornecidos com destino `https://portal.ifmg.edu.br/` (Home). Como isso não identifica páginas próprias e os rótulos representam destinos distintos, esses dois links não foram consolidados nem convertidos em novos nós nesta etapa.
- Atualizada a versão de cache de `data/portal-graph.js` para `v14`.

## 2026-10-01 — Expansão de + informações para estudantes

- Adicionados links diretos de `+ informações para estudantes` para os nós canônicos já existentes de Assistência Estudantil, Hubs de Inovação do IFMG, Empresas Juniores e Empreendedorismo e Núcleos de Apoio.
- Adicionado o destino externo `https://mais.ifmg.edu.br/maisifmg/` como nó próprio `+IFMG — cursos de curta duração`, ligado por relação `link` a `+ informações para estudantes`.
- Adicionado `Conselho Superior (CONSUP)` na URL específica `https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/conselho-superior-consup/`, como filho estrutural de `Participação Social`.
- `+ informações para estudantes` e `+ informações para servidores` passam a ter relação `link` para o mesmo nó canônico do CONSUP; isso resolve o destino pendente anteriormente informado no bloco de servidores.
- Adicionadas quatro páginas `estudantes/guia/` como filhas estruturais de `+ informações para estudantes`: Empresas Juniores e Empreendedorismo, Hubs de Inovação do IFMG, +IFMG e Assistência Estudantil.
- Essas quatro páginas do guia recebem relação `redireciona` para os nós canônicos já existentes: Empresas Juniores em Comunidade, Hubs em Comunidade, +IFMG na página do Portal de cursos livres e Assistência Estudantil em Estudantes.
- O mapa passa de 69 para `75` páginas e de 78 para `94` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v15`.

## 2026-10-01 — PDI e Relatório de Gestão em Ações & Programas

- Adicionadas `Plano de Desenvolvimento Institucional (PDI)` e `Relatório de Gestão do IFMG` como filhas diretas de `Ações & Programas`.
- Registradas duas novas relações do tipo `estrutura` a partir de `https://portal.ifmg.edu.br/acesso-a-informacao/acoes-programas/`.
- O mapa passa de 75 para `77` páginas e de 94 para `96` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v16`.

## 2026-10-01 — Expansão de Participação Social e correção da Ouvidoria

- A URL canônica da Ouvidoria passa a ser `https://portal.ifmg.edu.br/acesso-a-informacao/participacao-social/ouvidoria/`.
- O nó é exibido como `Sugestões, críticas e elogios / Ouvidoria`, preservando a nomenclatura definida no mapa.
- A Ouvidoria passa a ser filha estrutural de `Participação Social`.
- Removido o antigo nó canônico `https://portal.ifmg.edu.br/acesso-a-informacao/sugestoes-criticas-e-elogios/`.
- As entradas `Sugestões, Críticas e Elogios` de Estudantes, Servidores e Comunidade passam a redirecionar para a nova URL canônica da Ouvidoria.
- Adicionados como filhos diretos de `Participação Social`: Ouvidoria, Audiências e consultas públicas, Colégio de Diregentes (CODIR), Conselho Superior (CONSUP) e Comissão Própria de Avaliação (CPA).
- O CONSUP já existia no dataset e foi reaproveitado, sem duplicação.
- O mapa passa de 77 para `80` páginas e de 96 para `99` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v17`.

## 2026-10-01 — Relação de setores abaixo de Auditorias

- Adicionada a página `Relação de setores e cargos de gestão do IFMG - Reitoria` como filha direta de `Auditorias`.
- Registrada uma nova relação do tipo `estrutura` a partir de `https://portal.ifmg.edu.br/acesso-a-informacao/auditorias/`.
- O mapa passa de 80 para `81` páginas e de 99 para `100` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v18`.

## 2026-10-01 — Conjuntos de Dados Abertos Priorizados

- Adicionado o nó externo `Conjuntos de Dados Abertos Priorizados` em `https://dadosabertos.ifmg.edu.br/`.
- O nó é ligado à página `Dados Abertos` por relação `link`, pois é acessado a partir dela, mas pertence a outro domínio e não à árvore estrutural de `portal.ifmg.edu.br`.
- O mapa passa de 81 para `82` páginas e de 100 para `101` relações.
- Atualizada a versão de cache de `data/portal-graph.js` para `v19`.

## 2026-10-01 — Layouts locais para hubs problemáticos

- Adicionados metadados `hubLayout` ao dataset apenas para dois nós: `Participação Social` usa `fan` e `+ informações para servidores` usa `stack`.
- `Participação Social` organiza seus 5 filhos estruturais em um leque local voltado para fora do ramo, sem alterar o restante do setor de Acesso à Informação.
- `+ informações para servidores` organiza seus 10 filhos estruturais em uma grade compacta de duas colunas por cinco linhas, orientada para fora do ramo de Servidores.
- Links secundários que saem desses hubs recebem a classe `portal-graph-hub-secondary`, ficam quase invisíveis no panorama geral e ganham destaque ao selecionar o hub ou o nó conectado.
- Os hubs recebem destaque visual discreto próprio, sem mudar o layout dos demais nós.
- Atualizadas as versões de cache de `data/portal-graph.js` e `portal-graph.js`.

## 2026-10-01 — Modo “distância da Home”

- Adicionado o controle opcional `mostrar distância da Home` à barra do grafo.
- O modo calcula, por busca em largura dirigida, o menor número de cliques a partir da Home usando todas as relações navegáveis do dataset: `estrutura`, `link` e `redireciona`.
- A distância radial representa estritamente o número mínimo de cliques; o setor angular continua sendo definido pela árvore estrutural, para atalhos não moverem páginas para o ramo errado.
- No dataset atual, todos os 82 nós são alcançáveis: 1 Home, 5 páginas a 1 clique, 49 a 2 cliques e 27 a 3 cliques.
- Adicionada camada SVG independente do Cytoscape para desenhar os anéis de profundidade sem criar nós artificiais nem interferir no `fit`, busca ou seleção.
- Os anéis usam bandas verdes muito suaves que aumentam discretamente de intensidade conforme se afastam da Home, com limites tracejados e rótulos “1 clique da Home”, “2 cliques da Home” e assim por diante.
- A camada acompanha pan e zoom do Cytoscape; ao desligar o modo, o grafo retorna ao layout setorial normal, incluindo os layouts especiais `fan` e `stack`.
- Busca e botão de recentralização passam a respeitar o modo visual ativo.
- Mantidos os limites de zoom existentes.
- Validação geométrica confirmou erro radial máximo igual a `0.000000`, isto é, os nós ficam exatamente no raio correspondente ao número de cliques.
- Atualizados os caches de `portal-graph.js` e `style.css`.

## 2026-10-01 — Reorganização das tarefas do Editor

- A ordem das tarefas deixa de depender exclusivamente do prefixo numérico do arquivo: `script.js` passa a respeitar o campo `ordem` dos metadados, mantendo o `sourcePath` como fallback.
- As URLs e nomes físicos dos arquivos foram preservados para não quebrar links existentes.
- O perfil Editor passa a seguir o fluxo real de trabalho: encontrar → escolher tipo → criar/editar → montar blocos → imagens → documentos → coleções → busca/navegação → conferir/status → enviar para revisão → corrigir devolução → procedimentos específicos.
- Os artigos absorvidos continuam fora da lista principal.
- Adicionado `descricaoLista` aos 20 procedimentos canônicos do Editor; a tela do perfil agora mostra uma frase curta explicando quando usar cada tarefa.
- Renomeados na interface os títulos mais ambíguos, incluindo `Definir como a página aparece na busca e na navegação`, `Conferir uma página antes de enviar e acompanhar seu status`, `Enviar uma página pronta para revisão` e `Corrigir uma página devolvida pela moderação`.
- O conteúdo dos artigos 17, 18, 19 e 20 e o artigo `O papel do editor` foram alinhados à nova nomenclatura e à sequência correta do fluxo.
- A lista foi validada com 20 tarefas canônicas e 3 artigos absorvidos fora da navegação.
- Atualizados os caches de `data/guide-metadata.js`, `script.js` e `style.css`.

## 2026-10-01 — Reorganização das tarefas do Moderador

- As tarefas exclusivas de moderação passam a seguir a sequência: revisar e decidir → registrar correções e acompanhar devolução → publicar/agendar/retirar do ar → criar ou editar campus → criar pasta para processos seletivos.
- Adicionados campos `ordem` e `descricaoLista` às 5 tarefas canônicas do Moderador e à visão do papel.
- Títulos ambíguos foram reescritos para explicar o objetivo da tarefa antes de abrir o artigo.
- Os artigos canônicos de revisão, comentários/histórico, publicação, campus e pasta de processos seletivos foram alinhados aos novos títulos e aos links de continuidade.
- As tarefas herdadas do Editor continuam aparecendo antes das tarefas próprias de Moderador, sem duplicação de procedimentos.
- Mantidos os artigos absorvidos fora da navegação principal.
- Atualizado o cache de `data/guide-metadata.js`.

## 2026-10-01 — Reorganização das tarefas do Administrador

- As tarefas exclusivas de administração passam a seguir uma ordem mental por responsabilidade: reordenar páginas → atualizar a Home → criar pasta para notícias → definir quem pode editar páginas e usar coleções → criar coleção e definir quem pode usá-la → criar ou atualizar opções usadas em processos seletivos e cursos.
- Adicionados campos `ordem` e `descricaoLista` às 6 tarefas canônicas do Administrador e à visão do papel.
- Títulos técnicos foram reescritos para explicitar o resultado esperado antes de abrir o artigo, mantendo termos como grupos, permissões e cadastros no corpo e nos aliases de busca.
- Os artigos canônicos e `O papel do administrador` foram alinhados à nova nomenclatura e sequência.
- As tarefas herdadas de Editor e Moderador continuam aparecendo antes das tarefas próprias do Administrador, sem procedimentos duplicados.
- Mantidos os artigos absorvidos fora da navegação principal.
- Atualizado o cache de `data/guide-metadata.js`.

## 2026-10-01 — QA transversal da navegação por perfis

- Padronizada a navegação dos quatro perfis do guia: Editor, Moderador, Administrador e Gestor.
- A tela de perfil passa a exibir descrições curtas de uso abaixo dos títulos das tarefas.
- A ordenação das tarefas passa a usar o campo `ordem` dos metadados quando disponível, preservando `sourcePath` como fallback e mantendo URLs existentes.
- Resultado final: 20 tarefas canônicas de Editor, 5 de Moderador, 6 de Administrador e 1 de Gestor, todas com `descricaoLista`.
- Editor segue o fluxo de produção e moderação; Moderador segue revisão → correção → estado público → estruturas especiais; Administrador agrupa estrutura → acessos/arquivos → cadastros; Gestor mantém uma única tarefa de solicitação/acompanhamento.
- Artigos absorvidos permanecem fora da navegação principal.
- Validação de sintaxe do `script.js` concluída com sucesso.
- GitHub Actions `Validar busca do guia` e `Validar índice do guia` concluíram com sucesso após as alterações finais de conteúdo.
- `data/guide-index.json` permanece com 61 artigos.
- Atualizado o cache final de `data/guide-metadata.js` para `task-flow-v1`.

## 2026-10-01 — Link de redirecionamento e regra de exibição em menus

- O procedimento canônico `Criar um link` foi reescrito como `Criar um link de redirecionamento`.
- Explicado que o tipo `Link` cria uma entrada na árvore do Portal que encaminha diretamente para a URL informada, sem página de conteúdo intermediária.
- Documentados os campos principais mostrados na aba `Conteúdo`: `Título`, usado para identificar o destino para o público, e `URL`, endereço para onde o Link redireciona.
- Esclarecido que a indicação `Páginas usando Link` na escolha do tipo se refere a páginas existentes desse tipo e não define o destino.
- Perfil mínimo mantido como `editor`: moderador e administrador herdam a tarefa; editor salva e envia para moderação antes da publicação.
- O catálogo de tipos de conteúdo passou a descrever `Link` explicitamente como redirecionamento.
- O procedimento `Definir como a página aparece na busca e na navegação` agora registra a regra geral: para uma página ou Link aparecer nos menus gerados automaticamente, abrir `Promover → Para menus de sites` e marcar `Exibir nos menus`.
- A mesma regra foi reforçada no procedimento geral `Criar ou editar uma página`.
- Atualizados aliases de busca para `link de redirecionamento`, `redirecionamento`, `exibir nos menus`, `aparecer no menu` e `para menus de sites`.
- Adicionados 3 casos à regressão de busca: `link de redirecionamento`, `redirecionamento` e `exibir nos menus`.
- Atualizado o cache de `data/guide-metadata.js` para `redirect-link-v1`.

## 2026-10-01 — Bloqueio, privacidade e regras para títulos

- O procedimento `Conferir uma página antes de enviar e acompanhar seu status` passa a documentar os controles exibidos no painel lateral de informações da página.
- Explicado que `Bloquear` impede outras pessoas com permissão de editar a página enquanto o bloqueio estiver ativo, sem alterar quem consegue visualizar a versão publicada.
- Documentadas as quatro opções de `Alterar privacidade`: público, privado com senha compartilhada, privado para qualquer usuário logado e privado para usuários de grupos específicos.
- Adicionado alerta de que alterações de privacidade também se aplicam às subpáginas da página.
- Diferenciada privacidade de publicação/despublicação: uma página pode estar online e ter acesso restrito.
- Atualizados aliases da tarefa para bloqueio, privacidade, visibilidade e termos mostrados na interface.
- Adicionados casos de regressão de busca para `bloquear edição`, `privacidade` e `visível para todos`.
- O `AGENTS.md` recebeu uma seção específica sobre nomes e títulos de tarefas: nomes devem expressar a ação e o resultado em linguagem compreensível fora do Wagtail, com coerência entre H1, `tituloCanonico`, `descricaoLista`, wikilinks, aliases e regressão de busca.
- O `AGENTS.md` também registra que filename e rota podem permanecer antigos para preservar compatibilidade; nesses casos, `tituloCanonico` define o nome exibido.
- Atualizado o cache de `data/guide-metadata.js` para `page-controls-v1`.

## 2026-10-01 — Tela cheia no mapa do Portal

- Adicionado o controle `tela cheia` à barra do mapa.
- O fullscreen é aplicado ao componente inteiro `.portal-graph-root`, preservando busca, modo de distância, recentralização, grafo e sidebar de detalhes do nó selecionado.
- Enquanto ativo, o botão muda para `sair da tela cheia`; a tecla Esc do navegador também encerra o modo pelo comportamento nativo da Fullscreen API.
- Ao entrar ou sair da tela cheia, o Cytoscape executa `resize()` e reenquadra o modo visual atual para aproveitar o novo espaço sem cortar o canvas.
- No modo `distância da Home`, os anéis são recalculados após a mudança de viewport.
- Em desktop, a sidebar permanece à direita e ganha largura de 320 px; em telas muito estreitas, ela passa para baixo do grafo para preservar legibilidade.
- Se a Fullscreen API não estiver disponível no navegador, o controle é ocultado e o restante do mapa continua funcionando normalmente.
- Atualizados os caches de `portal-graph.js` para `portal-graph-v9` e `style.css` para `portal-fullscreen-v1`.

## 2026-10-01 — Microdescrições dos nós do mapa a partir do relatório de arquitetura

- Usado como fonte o relatório `leorruas/novo-portal/03 - Arquitetura & Decisões/decisoes-design/01 - relatório-estratégico-arquitetura-informação-portal.md`, revisão de 08/09/2026.
- Adicionadas ou revisadas microdescrições factuais em `45` dos 82 nós do mapa; as descrições têm no máximo 121 caracteres.
- A cobertura é completa para Home e os 5 nós de primeiro clique.
- No segundo clique, 31 de 49 nós possuem descrição sustentada pelo relatório.
- Também foram descritos alguns nós mais profundos explicitamente cobertos pela fonte, entre eles Processo Seletivo, PDI, Relatório de Gestão, Ouvidoria, audiências/consultas, Identidade Visual e destinos do +IFMG.
- Nós sem evidência suficiente no relatório permaneceram sem `description`; a sidebar continua exibindo o fallback genérico nesses casos.
- O `AGENTS.md` passa a exigir microdescrições curtas baseadas em evidência e a proibir preenchimento por inferência quando a fonte não sustentar uma definição útil.
- Atualizada a versão de cache de `data/portal-graph.js` para `v21`.

## 2026-10-01 — Distinção entre página Link e blocos de link

- Corrigida a mistura entre dois recursos diferentes do Wagtail.
- `Link` como **tipo de página** passa a ser descrito explicitamente como uma entrada/rota na árvore que redireciona para outra URL.
- `Links` e `Link único` permanecem documentados como **blocos dentro do conteúdo**, sem criação de nova rota.
- A imagem `imagens/manual-ifrn/image22.png`, que mostra um link dentro de bloco de conteúdo, foi retirada do procedimento de redirecionamento e contextualizada no artigo de blocos.
- Adicionada ao repositório a captura correta `imagens/guias-contextuais/link-redirecionamento-campos.webp`, proveniente da tela real enviada durante a documentação, mostrando os campos `Título` e `URL` do tipo de página Link.
- O artigo de redirecionamento passou a usar o exemplo conceitual `/evento/` → `/evento/nome-do-evento/` para explicar a relação entre rota de acesso e destino.
- Registrado que `portal.ifmg.edu.br` é o domínio atual de homologação e que o domínio público previsto é `ifmg.edu.br`; exemplos que não dependem do domínio devem preferir caminhos relativos.
- O `AGENTS.md` passa a proibir a mistura entre página Link e blocos de link e registra a regra de domínio para exemplos do manual.

