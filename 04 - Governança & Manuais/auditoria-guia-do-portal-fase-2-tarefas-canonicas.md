# Arquitetura canônica do Guia do Portal IFMG — fase 2

Data: 2026-10-01

## Objetivo

Esta fase transforma o inventário da fase 1 em uma arquitetura de referência. Ela define qual conteúdo deve existir uma única vez, qual é o menor perfil capaz de executar cada tarefa e quais artigos atuais devem ser absorvidos por uma referência canônica.

Nenhum artigo publicado é removido ou reescrito nesta fase. A consolidação editorial acontece nas fases seguintes.

## Regra central

O guia passa a separar três tipos de conteúdo:

1. **visão de papel**: explica responsabilidades, limites e capacidades de um perfil;
2. **tarefa canônica**: contém o passo a passo de uma ação e existe uma única vez;
3. **referência**: explica conceitos, termos ou critérios usados por várias tarefas.

A herança de capacidades é:

`editor → moderador → administrador`

Uma tarefa de editor também pertence ao moderador e ao administrador. Uma tarefa de moderador também pertence ao administrador. O conteúdo não deve ser copiado para os perfis superiores.

O gestor permanece fora dessa cadeia porque solicita e acompanha demandas sem precisar operar o Wagtail.

## Identificadores canônicos

Os identificadores abaixo são estáveis e independem do número do arquivo ou da pasta atual. Eles podem se tornar, em fase posterior, o campo `id` dos metadados dos artigos.

### Referências e entrada

| ID canônico | Referência atual | Função | Decisão |
| --- | --- | --- | --- |
| `ref-first-access` | C00 | primeiro acesso ao Wagtail e liberação inicial | manter; outras páginas devem apontar para esta referência em vez de repetir login |
| `ref-guide-use` | C01 | explicar como usar o guia | manter |
| `ref-glossary-faq` | C02 | glossário e dúvidas frequentes | manter como referência; reduzir miniprocedimentos quando houver tarefa canônica |
| `ref-ai-support` | C03 | orientar uso de IA com o guia | manter |

### Visões de papel

| ID canônico | Base atual | Conteúdo absorvido | Decisão |
| --- | --- | --- | --- |
| `role-editor` | E01 | nenhum procedimento específico | manter como visão de papel; apresentar limites e indicar tarefas |
| `role-moderator` | M08 | M01 | uma única visão de moderador deve explicar revisão/publicação e que todas as tarefas de editor são herdadas |
| `role-administrator` | A01 | A02 | uma única visão de administrador deve explicar administração e que tarefas de editor e moderador são herdadas |
| `task-request-update` | G01 | — | manter como fluxo próprio do gestor; funciona também como sua principal porta de entrada |

M01 e A02 deixam de precisar existir como páginas independentes depois da consolidação. A herança deve ser mostrada pela interface e pela visão de papel, não por um manual que copia tarefas do nível inferior.

## Tarefas canônicas de editor

Estas tarefas têm `perfil mínimo = editor` e, por herança, também aparecem para moderador e administrador.

| ID canônico | Título canônico proposto | Base atual | Absorve / substitui | Decisão |
| --- | --- | --- | --- | --- |
| `task-page-find` | Encontrar e abrir uma página | E02 | trecho de login de E02 deve apontar para C00 | manter procedimento; retirar repetição de primeiro acesso |
| `task-content-type-choose` | Escolher o tipo de conteúdo | E03 | E21 | E03 vira decisão e catálogo canônico; E21 deixa de ser índice independente |
| `task-page-create-edit` | Criar ou editar uma página | E24 | M02, A03 e trecho de edição de E18 | referência geral para criação/edição |
| `task-page-institutional-create` | Criar uma página institucional | E04 | seção correspondente de E21 | manter |
| `task-course-create` | Criar um curso | E05 | seção correspondente de E21 | manter |
| `task-collegiate-create` | Criar um colegiado | E06 | seção correspondente de E21 | manter |
| `task-link-create` | Criar um link | E07 | seção correspondente de E21 | manter |
| `task-program-create` | Criar um programa | E08 | seção correspondente de E21 | manter |
| `task-project-create` | Criar um projeto | E09 | seção correspondente de E21 | manter |
| `task-news-create` | Criar e preparar uma notícia | E10 | parte de criação de M12 | renomear; editor prepara e envia, não decide a publicação |
| `task-selection-create` | Criar e atualizar um processo seletivo e seus documentos | E11 | parte de criação de M12 | renomear; editor prepara e envia, não decide a publicação |
| `task-image-manage` | Adicionar ou atualizar uma imagem | E12 | partes de M05, M06 e A12 | manter como única referência de imagem |
| `task-document-manage` | Adicionar ou atualizar um documento | E13 | partes de M05, M06 e A12 | manter como única referência de documento |
| `task-collection-use` | Organizar documentos e imagens em coleções autorizadas | E14 | partes de M05, M06, A10 e A12 | limitar ao uso de coleções já autorizadas |
| `task-blocks-use` | Montar conteúdo com blocos | E15 | E16 | fundir operação básica e catálogo de blocos numa única tarefa |
| `task-page-search-menu` | Configurar busca e menu de uma página | E17 | M07 e parte de A11 | única referência para slug, metadados e presença em menu |
| `task-page-check` | Pré-visualizar, verificar e acompanhar o status de uma página | E18 | — | manter somente o que é realmente verificação/status; remover criação, comentários e envio já cobertos em outras tarefas |
| `task-comments-respond` | Responder comentários e corrigir uma página | E19 | parte de E18 | manter como fluxo do editor depois de devolução |
| `task-submit-moderation` | Enviar conteúdo para moderação | E20 | partes finais de E10, E11 e E18 podem apenas apontar para esta tarefa | manter como fechamento canônico do trabalho de editor |

### Lacunas de cobertura do editor

E21 menciona dois tipos de conteúdo que não têm procedimento próprio. Como E21 será absorvido por E03, essas orientações não devem desaparecer.

| ID canônico | Tarefa | Estado |
| --- | --- | --- |
| `task-event-create` | Criar um evento | lacuna: criar procedimento próprio durante a consolidação editorial |
| `task-announcement-create` | Criar um comunicado | lacuna: criar procedimento próprio durante a consolidação editorial |

Essas duas lacunas não exigem criar arquivos nesta fase. Elas ficam registradas para que a fusão de E21 não elimine cobertura existente.

## Tarefas canônicas de moderador

Estas tarefas têm `perfil mínimo = moderador`. O administrador também as herda.

| ID canônico | Título canônico proposto | Base atual | Absorve / substitui | Decisão |
| --- | --- | --- | --- | --- |
| `task-campus-manage` | Criar ou editar um campus | M03 | seção de Campus de E21 | manter |
| `task-selection-folder-create` | Criar uma pasta de processos seletivos | M04 | trecho correspondente de E21 | manter |
| `task-publication-review` | Revisar e decidir uma publicação | M09 | A04 e parte decisória de M12 | tarefa canônica de aprovar ou devolver |
| `task-review-comments-history` | Registrar pendências e acompanhar histórico na moderação | M10 | parte de M08 | manter como ação específica de moderador; conectar a E19 sem duplicar o fluxo do editor |
| `task-publication-state` | Publicar, despublicar ou agendar uma página | M11 | A04 e parte de M12 | tarefa canônica para controlar o estado público e a vigência |

M12 deixa de precisar existir como procedimento independente: criação de notícia/processo pertence às tarefas de editor; decisão e publicação pertencem às tarefas de moderador.

## Tarefas canônicas de administrador

Estas tarefas têm `perfil mínimo = administrador`.

| ID canônico | Título canônico proposto | Base atual | Absorve / substitui | Decisão |
| --- | --- | --- | --- | --- |
| `task-homepage-edit` | Editar a homepage | A05 | — | manter |
| `task-news-folder-create` | Criar uma pasta de notícias | A06 | seção correspondente de E21 | manter |
| `task-groups-permissions` | Configurar grupos e permissões | A07 | parte de A11 sobre delegação de acesso | manter |
| `task-collection-admin` | Criar uma coleção e definir seus acessos | A08 | parte de coleção de A10 e A12 | única referência administrativa para estrutura e acesso de coleções |
| `task-auxiliary-registers` | Configurar cadastros de processos e cursos | A09 | seção de cadastros de E22 | manter; retirar a impressão de que editor pode alterar esses registros |
| `task-page-reorder` | Reordenar páginas e revisar impacto estrutural | A10 | parte estrutural de A11 | A10 perde o trecho de coleção e fica focado em estrutura de páginas |

A11 deixa de precisar existir como página única: busca/menu vai para `task-page-search-menu`; ordenação vai para `task-page-reorder`; permissões ficam em `task-groups-permissions`.

A12 deixa de precisar existir como procedimento: mídia é herdada das tarefas de editor e administração de coleções fica em `task-collection-admin`.

## Fundamentos

Os sete fundamentos permanecem como referências transversais e não participam da herança de tarefas.

| ID canônico | Base atual | Decisão |
| --- | --- | --- |
| `foundation-plain-language-accessibility` | F01 | manter |
| `foundation-information-architecture` | F02 | manter |
| `foundation-seo-search-metadata` | F03 | manter |
| `foundation-kpi-analytics` | F04 | manter |
| `foundation-communication-metrics` | F05 | manter |
| `foundation-writing-storytelling` | F06 | manter |
| `foundation-public-communication` | F07 | manter |

## Mapa de absorção dos artigos que deixam de ser procedimentos independentes

| Artigo atual | Destino canônico |
| --- | --- |
| M01 | `role-moderator` |
| A02 | `role-administrator` |
| M02 | `task-page-create-edit` |
| A03 | `task-page-create-edit` |
| A04 | `task-publication-review` + `task-publication-state` |
| M05 | `task-image-manage` + `task-document-manage` + `task-collection-use` |
| M06 | `task-image-manage` + `task-document-manage` |
| M07 | `task-page-search-menu` |
| M12 | `task-news-create` + `task-selection-create` + `task-publication-review` + `task-publication-state` |
| A10 | permanece como base de `task-page-reorder`; trecho de coleção vai para `task-collection-admin` |
| A11 | `task-page-search-menu` + `task-page-reorder` + `task-groups-permissions` |
| A12 | `task-image-manage` + `task-document-manage` + `task-collection-use` + `task-collection-admin` |
| E16 | `task-blocks-use` |
| E21 | `task-content-type-choose` + procedimentos específicos; gera as lacunas Evento e Comunicado |
| E22 | `task-image-manage` + `task-document-manage` + `task-collection-use` + `task-auxiliary-registers` |
| E18 | permanece como `task-page-check`; edição vai para E24, comentários para E19 e envio para E20 |

## Casos em que a tarefa continua separada apesar de parecer próxima

### Comentários

E19 e M10 não são duplicatas exatas. O editor responde e corrige uma devolução; o moderador registra uma pendência e acompanha a revisão. Devem se conectar, mas continuam como tarefas diferentes porque a ação e a responsabilidade mudam.

### Revisar e publicar

M09 e M11 também permanecem separados. Revisar responde se o conteúdo está pronto; publicar/despublicar/agendar controla seu estado público e vigência. Separar essas decisões reduz o risco de tratar revisão editorial e ação técnica como a mesma coisa.

### Coleções

E14 e A08 permanecem separados. E14 ensina a usar uma coleção já autorizada. A08 cria a estrutura e define quem pode acessá-la. Misturar os dois níveis foi uma das fontes de repetição no guia atual.

## Estrutura dos perfis depois da herança

A interface futura deve montar os perfis a partir de `perfil_minimo`, não da existência de cópias do artigo.

### Editor

Mostra as tarefas de editor e as referências úteis ao trabalho editorial.

### Moderador

Mostra:

- todas as tarefas de editor;
- as tarefas próprias de moderador;
- a visão de papel do moderador.

As tarefas herdadas continuam apontando para o mesmo artigo canônico.

### Administrador

Mostra:

- todas as tarefas de editor;
- todas as tarefas de moderador;
- as tarefas próprias de administrador;
- a visão de papel do administrador.

A interface deve agrupar por responsabilidade para evitar uma lista longa, mas não deve criar cópias do conteúdo.

## Pendências que precisam ser verificadas antes da consolidação editorial

1. E18 menciona agendamento dentro de uma página de editor, enquanto M11 trata agendamento como capacidade de moderador. Na consolidação, o procedimento precisa refletir a configuração real de permissões do Portal IFMG.
2. E22 sugere alteração de cadastros auxiliares quando o menu estiver disponível, enquanto A09 os define como responsabilidade administrativa. A arquitetura canônica adota A09 como referência até que a permissão real seja confirmada.
3. Evento e Comunicado aparecem no catálogo de tipos, mas não têm procedimentos próprios.
4. O uso de “publicar” em E10 e E11 deve ser retirado dos títulos porque o editor não toma a decisão final de publicação segundo o fluxo documentado no próprio guia.

## Resultado da fase 2

A fase 2 define:

- uma única referência para cada procedimento repetido;
- três visões de papel operacionais: editor, moderador e administrador;
- herança de tarefas sem duplicação de conteúdo;
- tarefas canônicas separadas por perfil mínimo;
- artigos que serão absorvidos, divididos ou reduzidos a referência;
- duas lacunas de conteúdo: Evento e Comunicado;
- identificadores estáveis que podem sustentar os metadados e a busca nas fases posteriores.

A próxima fase deve aplicar a hierarquia de perfis ao modelo do guia sem ainda fazer uma consolidação editorial grande.
