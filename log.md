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
