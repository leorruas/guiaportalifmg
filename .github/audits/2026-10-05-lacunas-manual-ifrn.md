# Auditoria de cobertura: Manual IFRN x Guia do Portal IFMG

Data da comparação: 5 de outubro de 2026.

Fonte de referência: **Manual de Uso | Portal Institucional dos Institutos Federais**, atualizado em 14 de julho de 2026.

Escopo: comparar o conteúdo do documento de referência com os artigos canônicos atuais em `04 - Governança & Manuais/guia-do-portal/`. A presença de uma regra no manual de referência não significa que ela deva ser copiada para o IFMG: fluxos, permissões, URLs, integrações e campos podem ter sido adaptados ou alterados. Itens marcados como "validar" dependem de confirmação no Portal IFMG antes de virar orientação publicada.

Este arquivo é uma auditoria interna. Ele fica em `.github/audits/`, fora da árvore carregada pela interface publicada do guia.

## Síntese

O guia atual já cobre a maior parte da estrutura operacional do documento: acesso ao Wagtail, navegação, criação e edição de páginas, tipos de conteúdo, homepage, campus, curso, colegiado, Link de redirecionamento, notícia, pasta de notícias, processo seletivo, pasta de processos, programa, projeto, blocos, busca e menu, moderação, agendamento, imagens, documentos, coleções e cadastros auxiliares.

As lacunas restantes se concentram em comportamentos específicos do sistema, regras detalhadas de preenchimento e alguns fluxos que podem ser próprios da implementação descrita no manual de referência.

## Prioridade alta

### 1. Republicar uma notícia em outra pasta

**No manual de referência:** existe a ação **Linkar em outra pasta**. Se a pessoa tem permissão no destino, o sistema cria a vinculação; sem permissão, gera uma solicitação para os responsáveis pela pasta aprovarem ou recusarem. Há também um menu **Solicitação** para acompanhar o fluxo.

**No guia atual:** a FAQ orienta encaminhar a demanda ao editor ou moderador responsável pela pasta de destino. O fluxo nativo de solicitação não está documentado.

**Situação em 16/10/2026:** orientação atualizada no artigo canônico de notícias e na FAQ, com capturas fornecidas pelo usuário no Portal IFMG. Confirmadas a ação **Linkar em outra pasta**, a seleção de destinos, o aviso de vinculação imediata para a conta apresentada, o menu **Solicitações** e vínculos com situação **APROVADA**. Documentada também a diferença entre cópia independente e **Copiar com Alias**, cuja tela informa atualização por alterações futuras.

**Validação ainda pendente:** testar com uma conta sem permissão no destino o envio, a aprovação e a recusa. As capturas não comprovam como alterações posteriores na original se refletem no vínculo de **Linkar em outra pasta**, nem se ele usa Alias internamente. O guia não presume equivalência técnica entre os recursos.

### 2. Integração do Portal com o SUAP além do login

**No manual de referência:** a integração é descrita como autenticação mais sincronização de dados institucionais, com atualização diária. O documento também lista páginas automatizadas para docentes, eventos, projetos, servidores e terceirizados e cita objetos sincronizados, como Setor e Campus.

**No guia atual:** o SUAP aparece no login e em usos pontuais, como contatos de setor. Não há uma explicação sobre quais dados vêm automaticamente do SUAP, a frequência da sincronização, quais páginas são automáticas nem o que não deve ser editado manualmente.

**Situação em 16/10/2026:** cobertura parcial acrescentada ao artigo canônico de campus. Segundo observação relatada pelo usuário no Portal IFMG, a vinculação da página de campus ao objeto Campus do SUAP traz servidores, eventos e setores associados. A orientação recomenda conferir a integração antes de cadastrar informações em duplicidade e encaminhar divergências à equipe responsável.

**Validação ainda pendente:** confirmar o campo e o procedimento exatos de vinculação, a frequência de atualização, quais dados podem ser editados no portal e se existem outras integrações ativas. Não foi confirmado o prazo diário do manual IFRN nem a integração de cursos, projetos ou terceirizados.

### 3. Regra de visibilidade automática das etapas de processo seletivo

**No manual de referência:** processos com etapas em andamento aparecem automaticamente em áreas de processos seletivos. Uma etapa é considerada em andamento até a data final ou, sem data final, até três dias depois da data de início.

**No guia atual:** o procedimento ensina a cadastrar tipo, início, fim e campi das etapas, mas não explica esse efeito automático nem a regra dos três dias.

**Situação em 16/10/2026:** pendente de confirmação. O usuário informou que ainda não conhece esse comportamento no Portal IFMG e decidiu manter o item em aberto. A regra dos três dias não foi incorporada ao guia.

**Próximo passo:** validar a regra no Portal IFMG com a equipe responsável ou por teste controlado e, somente se confirmada, explicá-la no procedimento de processo seletivo.

### 4. Estrutura completa das coleções de processos seletivos

**No manual de referência:** a coleção do processo segue uma estrutura prescrita, com **Documentos publicados**, **Provas e gabaritos**, **Resultados** e **Vagas remanescentes**.

**No guia atual:** o artigo exige a coleção correta e menciona ao menos a área de documentos publicados, mas não documenta a estrutura completa.

**Situação:** cobertura parcial.

**Próximo passo:** confirmar se o IFMG usa essa mesma taxonomia. Se usar, explicitar a estrutura; se não usar, registrar a estrutura oficial do IFMG para evitar coleções improvisadas.

## Prioridade média

### 5. Regras específicas de imagens e conteúdo de notícias

O documento de referência traz detalhes que não aparecem no artigo atual: sugestão de 1080×1080 para imagem de destaque, 1080×540 para imagens no corpo, coleção específica de imagens de notícias, uso do formato **Largura completa**, hierarquia H2/H3 para subtítulos e ações como **Acesse:** ou **Ouça:**, além de regras mais detalhadas para siglas.

O guia atual cobre a diferença entre imagem de destaque e imagem interna, texto alternativo e caixa alta, mas deixa essas regras específicas de fora.

**Situação em 16/10/2026:** cobertura parcial. O usuário considerou adequadas as dimensões do manual de referência. Incluídas no artigo canônico de notícias como recomendações editoriais iniciais: **1080 × 1080 pixels** para destaque e **1080 × 540 pixels** para imagens no corpo. O texto distingue recomendação de exigência do sistema e orienta conferir o enquadramento na pré-visualização.

**Organização de imagens definida em 16/10/2026:** cada campus terá sua própria coleção de imagens de notícias, preferencialmente dividida por ano. Padrão incorporado aos artigos de notícias e de criação de coleções: **[Nome do campus] • Notícias > [Ano]**, por exemplo **Arcos • Notícias > 2027**. O ano é uma subcoleção, e a orientação evita criar outra coleção do campus quando já existe uma adequada.

**Hierarquia de títulos definida em 16/10/2026:** incorporada ao artigo de notícias, com aprovação do usuário, a orientação de usar **Título 2 (H2)** nas seções principais e **Título 3 (H3)** nas subdivisões do corpo, aplicando o formato de título em vez de simular títulos apenas com negrito. Incluído exemplo de Inscrições e Documentos necessários.

**Links de ação definidos em 16/10/2026:** incorporados ao procedimento de notícias, com aprovação do usuário, rótulos descritivos como Acesse o edital, Faça sua inscrição e Ouça a entrevista, evitando “clique aqui”. Reforçado o bloco **Link único** no estilo **Cartão** para a CTA principal, com encaminhamento ao procedimento ilustrado já existente de blocos.

**Uso de siglas definido em 16/10/2026:** incluída no artigo de notícias, com aprovação do usuário, a orientação de apresentar o nome completo seguido da sigla entre parênteses na primeira menção no texto e usar a sigla nas seguintes, com o exemplo Instituto Federal de Minas Gerais (IFMG).

**Formato de imagens definido em 16/10/2026:** incluída no artigo de notícias, com aprovação do usuário, a preferência por **Largura completa** nas imagens do corpo. O alinhamento lateral permanece uma opção quando ajudar na leitura, com conferência em telas menores.

**Resultado:** item 5 atendido pelas decisões editoriais registradas acima e incorporadas ao procedimento canônico de notícias. As dimensões e os formatos são recomendações editoriais, não requisitos técnicos do sistema.

### 6. Campos e controles exatos de cada bloco

O guia atual explica muito bem **quando usar** Introdução, Informação, Coleção, Tabela, Links, Link único, Cards, Galeria, Citação, Linha do tempo, Calendário, FAQ e Lista definida. O manual de referência, porém, também enumera os campos e controles de cada um.

Detalhes ausentes ou pouco explícitos incluem: **Recursivo**, **Mostrar imagens**, **Mostrar documentos** e ordenação no bloco Coleção; cabeçalho e legenda da Tabela; definição de página/documento/URL em Links; campos de Cards; campos exatos de Linha do tempo e Calendário; e operações de linha/coluna na tabela.

**Situação em 16/10/2026:** bloco Coleção detalhado na referência canônica de blocos após o usuário confirmar a presença dos controles no IFMG. Explicados Coleção, Recursivo, Mostrar imagens, Mostrar documentos e Ordenar documentos por data de upload, com exemplo de coleção por campus e ano. Os rótulos e textos de ajuda foram conferidos na captura `imagens/manual-ifrn/image5.png` já existente. Não foi presumida a direção da ordenação por data; a orientação pede conferir a sequência na pré-visualização.

**Tabela detalhada em 16/10/2026:** explicados cabeçalhos, legenda e inserção/remoção de linhas e colunas, após confirmação do usuário sobre a presença dos controles. Incorporada a possibilidade relatada de colar diretamente células do Excel ou tabelas de outra página da internet, com conferência dos dados e da pré-visualização.

**Destinos de links detalhados em 16/10/2026:** após confirmação do usuário sobre as três opções no IFMG, explicadas as escolhas de Página, Documento e URL externa em Links e Link único, com exemplos, preferência pelos seletores internos e conferência do destino.

**Cards detalhados em 16/10/2026:** incorporados os campos da captura atual fornecida pelo usuário: Estilo do card, Formato da capa, Lista, Título, Chapéu, Descrição, Texto do link, Capa e destinos. O usuário confirmou que Chapéu aparece acima do título; incluído exemplo de tema e título. Substituída a captura antiga do formulário de Cards pela atual, que inclui esses controles. Reforçada também em texto a diferença entre Recursivo (alcance nas subcoleções) e Mostrar imagens/documentos (tipos exibidos), com exemplo combinado.

**Linha do tempo detalhada em 16/10/2026:** incorporada captura atual fornecida pelo usuário, com explicação dos campos Data e Descrição obrigatórios e Texto opcional de cada Evento. Documentados adição, organização cronológica com os controles do item, duplicação, remoção e conferência. A captura mostra datas escritas como Até 2008; não foi presumida ordenação automática pelo campo.

**Calendário detalhado em 16/10/2026:** incorporada captura atual fornecida pelo usuário, com Data e Atividade obrigatórias e Dia da Semana opcional. Documentados adição e organização dos itens, duplicação, remoção, conferência das datas e exemplo ilustrativo. Não foram presumidos cálculo automático do dia da semana ou ordenação automática.

**Resultado:** item 6 atendido com as explicações de Coleção, Tabela, destinos de links, Cards, Linha do Tempo e Calendário incorporadas à referência canônica de blocos, conforme evidências e confirmações registradas acima.

### 7. Ações em massa e controles da tela de exploração de páginas

O documento mostra seleção por checkbox e ações em massa, além de detalhar os controles de edição, visualização e navegação da árvore.

O guia atual cobre busca, caminho, adicionar subpágina, editar, mover e ordenar, mas não documenta as ações em massa.

**Situação em 16/10/2026:** funcionamento das ações em massa confirmado pelo usuário. Documentado o procedimento geral no artigo canônico de acesso e localização de páginas: seleção por caixas, conferência do conjunto e da ação, confirmação e validação do resultado, com limites por perfil. A lista exata de ações não foi presumida: o guia orienta usar as opções disponíveis conforme acesso e seleção.

### 8. Comentários: notificações e manutenção da conversa

O manual de referência explica que o menu dos comentários permite resolver, editar ou remover comentários próprios e que há um painel para ativar ou desativar notificações por e-mail.

O guia atual cobre adicionar, responder e resolver comentários, além de histórico, mas não trata das notificações por e-mail nem da edição/remoção de comentários.

**Situação em 16/10/2026:** edição e remoção de comentários próprios confirmadas pelo usuário e documentadas no procedimento canônico de correção de página, com encaminhamento na tarefa de comentários do moderador. Explicitada a diferença entre remover uma mensagem, resolver uma pendência e aprovar/publicar uma página.

**Validação ainda pendente:** notificações por e-mail. O usuário não encontrou essa opção no IFMG; o guia não foi ampliado com instruções para um controle não confirmado.

### 9. Pré-visualização e verificações

O documento explicita modos de prévia em smartphone, tablet e desktop e relaciona a seção **Verificações** diretamente à acessibilidade.

O guia atual manda usar a pré-visualização e corrigir verificações, com captura de diferentes dispositivos, mas não explica os modos nem deixa tão clara a relação entre os avisos e a acessibilidade.

**Situação em 16/10/2026:** recursos confirmados pelo usuário e explicados no procedimento canônico de conferência de página. Documentados os modos de computador, tablet e celular, o que observar em cada um, a relação de Verificações com acessibilidade, a revisão manual complementar e o encaminhamento ao moderador ou administrador quando a pessoa não conseguir corrigir. Item atendido.

### 10. Aba Promover: recomendações finas

O guia atual cobre slug, tag de título, meta descrição e **Exibir nos menus**. O manual de referência acrescenta duas regras que não estão explícitas: meta descrição ideal entre 140 e 155 caracteres e necessidade de as páginas-pai também estarem configuradas para aparecer nos menus.

A segunda regra aparece no guia de forma mais geral, como necessidade de o caminho estar completo, mas pode ser tornada mais objetiva se o comportamento for confirmado.

**Situação em 16/10/2026:** incluída no procedimento canônico de busca e navegação, com aprovação do usuário, a faixa de 140 a 155 caracteres (contando espaços) como recomendação editorial para meta descrição, priorizando clareza e fidelidade ao conteúdo.

**Complemento em 16/10/2026:** usuário confirmou a necessidade de configurar a navegação das páginas-filhas e suas páginas-pai e apresentou o campo Exibição do menu interno, com opções Lateral, Cards e Links. Explicadas as duas configurações no procedimento de busca/menu, com captura atual. Incluída também a preparação conjunta de conteúdo, blocos e metadados no procedimento de criação/edição e nos prompts de revisão e estruturação com IA. Item 10 atendido.

### 11. Coleções: risco da coleção raiz privada

O guia atual já alerta que permissões em níveis superiores podem afetar subcoleções. O manual de referência vai além e avisa que tornar a coleção raiz privada pode tornar todos os documentos do site privados.

**Situação em 16/10/2026:** usuário confirmou o acesso pelo ícone de olho e forneceu capturas do botão e das quatro opções de privacidade no IFMG. Documentado o fluxo na tarefa administrativa de coleções, distinguindo visualização de documentos de permissões de gerenciamento. Incluído alerta sobre alcance nas subcoleções e risco de restringir todos os documentos pela raiz, conforme [documentação oficial do Wagtail](https://docs.wagtail.org/en/v4.0/editor_manual/documents_images_snippets/collections.html). A distinção de que a privacidade não protege imagens também foi explicitada. Não foi realizado teste de restrição da raiz no IFMG; o procedimento orienta conferir o acesso efetivo aos documentos. Item atendido na orientação preventiva.

### 12. Formatos de imagem dentro do editor de texto

O documento descreve **Largura completa**, **Alinhado à esquerda** e **Alinhado à direita**, incluindo o comportamento de meia largura e duas imagens lado a lado.

O guia atual manda escolher o formato, mas não explica o efeito visual de cada opção.

**Situação em 16/10/2026:** três formatos confirmados em captura atual do IFMG e explicados no artigo canônico de blocos. Incluídos inserção pelo ícone de imagem, descrição de Largura completa e alinhamentos laterais, texto alternativo e conferência em telas menores. Documentada também, conforme relato e capturas do usuário, a barra que aparece na seleção e sua fixação/desfixação pelo alfinete. Não foram presumidas proporções exatas nem duas imagens lado a lado. Item atendido com o comportamento confirmado.

## Prioridade baixa ou de validação estrutural

### 13. Tela de boas-vindas do Wagtail

O manual lista contadores de páginas, imagens e documentos, itens aguardando moderação, páginas bloqueadas, alterações recentes e grupos. O guia atual cita alterações recentes e grupos, mas não os demais elementos.

**Situação em 16/10/2026:** captura atual do usuário confirma os quadros Suas páginas e snippets em um fluxo de trabalho e Aguardando sua revisão. Incorporados ao artigo de acesso e localização, com explicação de acompanhamento versus revisão, estado de aprovação pendente e limites por perfil.

**Validação ainda pendente:** contadores e quadro de páginas bloqueadas não aparecem no recorte fornecido. Não foram descritos como presentes no IFMG sem confirmação.

### 14. “Páginas usando…” na escolha do tipo

O documento explica o atalho **Páginas usando…** para listar páginas existentes de determinado tipo. O guia atual não documenta esse recurso.

**Situação em 16/10/2026:** presença confirmada pelo usuário no IFMG. Documentado o uso para consultar exemplos existentes no procedimento canônico de escolha do tipo de conteúdo, com conferência de finalidade, localização e limites de acesso. Item atendido.

### 15. Estrutura-padrão completa de um campus

O guia atual menciona a estrutura essencial do campus em nível alto. O manual de referência enumera uma árvore mais detalhada, com Documentos institucionais, Boletins de Serviços, Normas internas, Biblioteca, Calendário Acadêmico e Secretaria Acadêmica, além de Ensino, Extensão, Pesquisa, Estudantes e Servidores.

**Situação:** provável conteúdo específico da arquitetura do IFRN.

**Situação em 16/10/2026:** estrutura do IFMG informada diretamente pelo usuário e incorporada como segundo mapa na página existente Mapa da estrutura do Portal e como referência no procedimento de campus. Registradas as sete entradas, os menus fixos, os filtros por campus, os públicos e os conteúdos locais, links para Reitoria e sistemas. Não foi copiada a árvore do IFRN nem inventadas URLs. Terceiro clique e endereços permanecem para detalhamento. Confirmada uma única entrada para o SEI. Após correção do usuário, o segundo mapa utiliza o mesmo grafo interativo da Reitoria, com instâncias independentes e nós conceituais sem URLs fictícias.

### 16. Tipos de páginas permitidos dentro de cada tipo

O documento enumera explicitamente os tipos de filhos permitidos para Homepage, Página, Campus, Pasta de notícias e Pasta de processos seletivos. O guia atual explica que o Wagtail só oferece tipos permitidos e documenta as tarefas principais, mas não mantém uma matriz completa de relações.

**Próximo passo:** decidir se a matriz ajudaria administradores e moderadores ou se o Mapa da estrutura do Portal já é a fonte mais adequada.

### 17. Pequenas regras de cadastro que ficaram implícitas

Exemplos: o campo de página para **Exibir setores filhos**, a proibição de títulos de imagens/documentos formados por palavras separadas apenas por hífen ou underscore e algumas regras de localização hierárquica de tipos, como Curso.

Esses itens são pequenos e devem ser validados antes de entrar no guia, principalmente quando vierem de uma implementação específica do IFRN.

## Conteúdo do documento que já está coberto

Não identifiquei necessidade de criar novos artigos só para: login via SUAP; glossário básico; busca e navegação; reordenação de páginas; escolha do tipo de conteúdo; edição da homepage e regra dos quatro destaques; criação/edição de campus; curso; colegiado; Link de redirecionamento; programa; projeto; pasta de notícias; pasta de processos seletivos; criação básica de notícia; cadastro básico de processo seletivo; organização cotidiana de imagens, documentos e coleções; busca e menu; fluxo de rascunho e moderação; publicação/despublicação/agendamento; e cadastros auxiliares de processos e cursos.

## Critério para a próxima rodada

A próxima etapa deve começar pelos itens 1 a 4, porque eles descrevem comportamento do sistema e podem mudar a ação do usuário. Depois, vale revisar os itens 5 a 12 para decidir quais detalhes reduzem erro sem deixar o guia pesado. Os itens 13 a 17 são úteis apenas se forem confirmados no ambiente e tiverem valor operacional para o IFMG.
