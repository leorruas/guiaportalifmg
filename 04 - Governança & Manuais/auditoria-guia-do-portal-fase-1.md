# Auditoria de conteúdo do Guia do Portal IFMG — fase 1

Data: 2026-10-01

## Escopo

Esta auditoria registra o estado atual do Guia do Portal antes da consolidação de conteúdo. Nenhum procedimento publicado foi reescrito nesta fase.

O diretório contém **59 artigos Markdown**:

- 4 em `Comece aqui`;
- 1 em `Sou gestor`;
- 12 em `Sou administrador`;
- 12 em `Sou moderador`;
- 23 em `Sou editor`;
- 7 em `Fundamentos`.

A numeração da pasta de editor salta de 22 para 24; não existe artigo 23 no estado atual.

## Regra usada para classificar perfis

As tarefas operacionais seguem uma hierarquia de capacidades:

`editor → moderador → administrador`

- uma tarefa com perfil mínimo **editor** também pode ser executada por moderador e administrador;
- uma tarefa com perfil mínimo **moderador** também pode ser executada por administrador;
- uma tarefa com perfil mínimo **administrador** é exclusiva desse nível;
- **gestor** não pertence a essa cadeia porque solicita e acompanha demandas sem precisar operar o Wagtail;
- conteúdos de entrada e fundamentos são classificados como **todos**.

O perfil mínimo nesta matriz representa a menor permissão necessária para executar a tarefa, mesmo quando o artigo hoje está localizado dentro da pasta de um perfil superior.

## Legenda de encaminhamento

- **manter**: tarefa distinta e com escopo claro;
- **manter como visão de papel**: deve explicar capacidades e limites, sem repetir procedimentos completos;
- **consolidar**: procedimento coberto por uma tarefa de perfil inferior ou por outro artigo muito semelhante;
- **separar**: o artigo mistura uma tarefa herdada com uma tarefa exclusiva do perfil;
- **revisar escopo**: há sobreposição suficiente para exigir decisão na fase 2;
- **manter como índice**: pode continuar como porta de entrada, apontando para tarefas canônicas em vez de reexplicá-las.

## 00 — Comece aqui

| ID | Artigo | Tarefa principal | Perfil mínimo | Sobreposição / referência provável | Encaminhamento |
| --- | --- | --- | --- | --- | --- |
| C00 | Como entrar no Wagtail pela primeira vez | primeiro acesso e liberação de acesso | todos | E02 repete parte do login | manter como referência de acesso |
| C01 | Como utilizar este guia | orientar o uso do guia e escolha de papel | todos | páginas de visão de papel | manter |
| C02 | Glossário, perguntas frequentes e navegação no Wagtail | explicar termos e dúvidas frequentes | todos | contém trechos de acesso, comentários e ordenação tratados em tarefas específicas | manter, reduzindo procedimentos repetidos na fase 2 |
| C03 | Como usar uma IA como apoio para trabalhar com este guia | orientar uso de IA com o guia | todos | sem equivalente direto | manter |

## 01 — Sou gestor

| ID | Artigo | Tarefa principal | Perfil mínimo | Sobreposição / referência provável | Encaminhamento |
| --- | --- | --- | --- | --- | --- |
| G01 | Sou gestor e quero solicitar ou acompanhar uma atualização | formular e acompanhar demanda de conteúdo | gestor | sem equivalente operacional | manter |

## 02 — Sou administrador

| ID | Artigo | Tarefa principal | Perfil mínimo | Sobreposição / referência provável | Encaminhamento |
| --- | --- | --- | --- | --- | --- |
| A01 | Sou administrador e quero gerir acessos e configurações | explicar o papel administrativo e seu escopo | administrador | A07, A08, A09 e demais tarefas administrativas | manter como visão de papel |
| A02 | Sou administrador e quero executar as tarefas de editor e moderador | explicar herança de capacidades | administrador | M01 e E01; repete procedimentos dos dois níveis | manter como visão de papel, sem repetir passo a passo |
| A03 | Sou administrador e quero criar ou atualizar conteúdo | criar ou editar página | editor | M02 e E24 | consolidar em E24 |
| A04 | Sou administrador e quero revisar e publicar conteúdo | revisar e decidir publicação | moderador | M09 e M11 | consolidar nas tarefas de moderação |
| A05 | Sou administrador e quero editar a homepage | editar a página inicial | administrador | sem equivalente direto | manter |
| A06 | Sou administrador e quero criar uma pasta de notícias | criar estrutura que recebe notícias | administrador | E10 usa a pasta, mas não a cria | manter |
| A07 | Sou administrador e quero configurar grupos e permissões | configurar grupos e permissões | administrador | A08 complementa permissões de coleções | manter |
| A08 | Sou administrador e quero criar uma coleção e definir seus acessos | criar coleção e configurar acesso | administrador | A10 e A12 tratam coleções de forma mais ampla | manter como referência administrativa de coleções |
| A09 | Sou administrador e quero configurar cadastros de processos e cursos | manter cadastros auxiliares | administrador | E22 menciona cadastros, mas não deve ampliar a permissão | manter |
| A10 | Sou administrador e quero organizar páginas e coleções | reordenar páginas e organizar coleções | administrador | A08, A11 e E14 | revisar escopo; tende a separar página de coleção |
| A11 | Sou administrador e quero configurar busca, menus e ordem de páginas | configurar metadados/menu e reordenar páginas | editor para busca/menu; administrador para ordenação estrutural | E17 e M07 cobrem busca/menu; A10 cobre parte da ordenação | separar tarefa herdada da tarefa administrativa |
| A12 | Sou administrador e quero gerenciar documentos e imagens | manter mídia e configurar condições de acesso | editor para mídia; administrador para coleções/permissões | E12, E13, E14, M05, M06 e A08 | consolidar tarefas herdadas; preservar apenas diferença administrativa se necessária |

## 03 — Sou moderador

| ID | Artigo | Tarefa principal | Perfil mínimo | Sobreposição / referência provável | Encaminhamento |
| --- | --- | --- | --- | --- | --- |
| M01 | Sou moderador e quero executar as tarefas de editor | explicar herança das capacidades do editor | moderador | E01 e várias tarefas de editor | manter como visão de papel, sem repetir procedimentos |
| M02 | Sou moderador e quero criar ou atualizar uma página | criar ou editar página | editor | E24 e A03 | consolidar em E24 |
| M03 | Sou moderador e quero criar ou editar um campus | criar ou manter página estrutural de campus | moderador | sem equivalente direto | manter |
| M04 | Sou moderador e quero criar uma pasta de processos seletivos | criar estrutura para processos seletivos | moderador | E11 utiliza a pasta, mas não a cria | manter |
| M05 | Sou moderador e quero organizar documentos, imagens e coleções | organizar mídia nas coleções autorizadas | editor | E12, E13, E14 e M06 | consolidar nas tarefas de mídia do editor |
| M06 | Sou moderador e quero manter imagens e documentos do meu grupo | adicionar e atualizar mídia | editor | E12, E13 e M05 | consolidar nas tarefas de mídia do editor |
| M07 | Sou moderador e quero configurar busca e menu de uma página | configurar metadados e menu | editor | E17 e parte de A11 | consolidar em E17 |
| M08 | Sou moderador e quero revisar e aprovar conteúdos | explicar o papel de moderação e checklist | moderador | M09, M10 e M11 | manter como visão de papel |
| M09 | Sou moderador e quero revisar e decidir uma publicação | revisar e aprovar ou devolver conteúdo | moderador | A04 repete a tarefa; M08 introduz o tema | manter como tarefa canônica de decisão editorial |
| M10 | Sou moderador e quero acompanhar comentários e histórico | registrar pendências e acompanhar correções | moderador para criar orientação de revisão | E19 cobre resposta do editor | manter; conectar explicitamente com E19 |
| M11 | Sou moderador e quero publicar, despublicar ou agendar uma página | controlar estado público e vigência | moderador | A04 e M12 tocam publicação | manter como tarefa canônica de publicação |
| M12 | Sou moderador e quero publicar uma notícia ou processo seletivo | criar conteúdo herdado e decidir publicação | editor para criação; moderador para decisão | E10, E11, M09 e M11 | separar/consolidar; mistura criação herdada e moderação |

## 04 — Sou editor

| ID | Artigo | Tarefa principal | Perfil mínimo | Sobreposição / referência provável | Encaminhamento |
| --- | --- | --- | --- | --- | --- |
| E01 | Sou editor e quero criar e atualizar conteúdos | explicar capacidades e limites do editor | editor | E24 e demais tarefas editoriais | manter como visão de papel |
| E02 | Sou editor e quero acessar e encontrar uma página | entrar e localizar página na árvore | editor | C00 cobre primeiro acesso | manter; apontar login para C00 em vez de repetir |
| E03 | Sou editor e quero escolher o tipo de página | decidir qual tipo de conteúdo usar | editor | E21 apresenta novamente os tipos | revisar escopo com E21 |
| E04 | Sou editor e quero criar uma página institucional | criar conteúdo institucional estável | editor | E21 funciona como índice | manter |
| E05 | Sou editor e quero criar um curso | criar página de curso | editor | E21 funciona como índice | manter |
| E06 | Sou editor e quero criar um colegiado | criar página de colegiado | editor | E21 funciona como índice | manter |
| E07 | Sou editor e quero criar um link | criar atalho do tipo Link | editor | E21 funciona como índice | manter |
| E08 | Sou editor e quero criar um programa | criar página de programa | editor | E21 funciona como índice | manter |
| E09 | Sou editor e quero criar um projeto | criar página de projeto | editor | E21 funciona como índice | manter |
| E10 | Sou editor e quero publicar uma notícia | preparar notícia e enviar para moderação | editor | M12 e E20 | manter a tarefa; revisar título porque editor não decide a publicação |
| E11 | Sou editor e quero publicar um processo seletivo e seus documentos | preparar processo seletivo, documentos e enviar para moderação | editor | M12 e E20 | manter a tarefa; revisar título porque editor não decide a publicação |
| E12 | Sou editor e quero adicionar ou atualizar uma imagem | adicionar ou substituir imagem | editor | M05, M06 e A12 repetem a capacidade | manter como tarefa canônica de imagem |
| E13 | Sou editor e quero adicionar ou atualizar um documento | adicionar, substituir ou versionar documento | editor | M05, M06 e A12 repetem a capacidade | manter como tarefa canônica de documento |
| E14 | Sou editor e quero organizar documentos e imagens em coleções | usar coleções autorizadas para organizar mídia | editor | M05, A10 e A12 | manter como tarefa canônica de uso de coleções |
| E15 | Sou editor e quero montar conteúdo com blocos | escolher e usar os diferentes blocos | editor | E16 repete operação básica de blocos | manter como provável referência canônica |
| E16 | Sou editor e quero usar blocos para montar uma página | adicionar, mover, remover e escolher blocos | editor | E15 | consolidar com E15 |
| E17 | Sou editor e quero configurar busca e menu de uma página | configurar slug, metadados e presença em menu | editor | M07 e parte de A11 | manter como tarefa canônica de busca/menu |
| E18 | Sou editor e quero editar, verificar e acompanhar uma página | editar, conferir status, pré-visualizar e acompanhar fluxo | editor | E24, E19 e E20 | revisar escopo; contém partes de três tarefas |
| E19 | Sou editor e quero responder comentários e atualizar uma página | corrigir conteúdo devolvido e responder comentários | editor | M10 é o outro lado do fluxo | manter |
| E20 | Sou editor e quero enviar conteúdo para moderação | concluir edição e encaminhar revisão | editor | E10, E11 e E18 mencionam o mesmo fechamento | manter como tarefa canônica de envio |
| E21 | Sou editor e quero criar cada tipo de conteúdo | apresentar os tipos e apontar procedimentos | editor | E03 e E04–E11; também cita tipos restritos a perfis superiores | manter como índice ou consolidar com E03 |
| E22 | Sou editor e quero gerenciar imagens, documentos e cadastros | índice de mídia e cadastros | editor para mídia; administrador para alterar cadastros auxiliares | E12, E13, E14 e A09 | revisar escopo e permissões; provável índice sem procedimento duplicado |
| E24 | Sou editor e quero criar ou editar uma página | procedimento geral de criação e edição | editor | M02 e A03 repetem a mesma tarefa | manter como tarefa canônica geral |

## 05 — Fundamentos

| ID | Artigo | Tarefa principal | Perfil mínimo | Sobreposição / referência provável | Encaminhamento |
| --- | --- | --- | --- | --- | --- |
| F01 | Linguagem simples e acessibilidade | critérios editoriais e de acessibilidade | todos | aplicado transversalmente | manter |
| F02 | Arquitetura da informação e encontrabilidade | organizar, nomear e posicionar conteúdo | todos | sustenta E03, E17 e tarefas estruturais | manter |
| F03 | SEO, busca interna e metadados | orientar encontrabilidade, metadados e busca | todos | sustenta E17 e futura busca do próprio guia | manter |
| F04 | KPIs, métricas e analytics | definir e interpretar indicadores | todos | sem duplicação operacional | manter |
| F05 | Alcance, impressões, engajamento, CTR e conversão | interpretar métricas de comunicação | todos | complementa F04 | manter |
| F06 | Copywriting, UX Writing e storytelling digital | orientar escrita para diferentes pontos da experiência | todos | complementa F01 | manter |
| F07 | Comunicação pública, transparência e participação | orientar finalidade pública do conteúdo | todos | aplicado transversalmente | manter |

## Grupos de sobreposição prioritários para a fase 2

### Grupo 1 — Criar e editar páginas

Referência provável: **E24 — Sou editor e quero criar ou editar uma página**.

Sobreposições principais: E01, M02, A03 e partes de E18. A ação básica exige perfil mínimo editor; moderador e administrador a herdam.

### Grupo 2 — Herança de capacidades

Referências de papel: **E01, M01 e A02**.

Essas páginas podem continuar existindo para explicar responsabilidades, mas não precisam repetir o passo a passo das tarefas herdadas.

### Grupo 3 — Busca, metadados e menu

Referência provável: **E17 — Sou editor e quero configurar busca e menu de uma página**.

Sobreposições: M07 e A11. A11 também contém ordenação estrutural, que deve ser tratada separadamente porque exige capacidade administrativa no modelo atual.

### Grupo 4 — Imagens, documentos e coleções

Referências prováveis: **E12, E13 e E14** para tarefas comuns; **A08** para criação de coleção e definição de acessos.

Sobreposições: E22, M05, M06, A10 e A12. O maior risco atual é repetir manutenção de mídia em cada perfil e misturar uso de coleção com administração de permissões.

### Grupo 5 — Blocos

Referência provável: **E15 — Sou editor e quero montar conteúdo com blocos**.

E16 cobre a mesma operação básica com menos detalhamento e é candidato forte a consolidação.

### Grupo 6 — Revisão e publicação

Referências prováveis: **M09** para revisar/decidir e **M11** para publicar/despublicar/agendar.

M08 deve funcionar como visão do papel de moderador. A04 repete uma capacidade herdada. M12 mistura criação de conteúdo com decisão de publicação.

### Grupo 7 — Notícia e processo seletivo

Referências de criação: **E10 e E11**. Referências de decisão/publicação: **M09 e M11**.

M12 reúne as duas camadas e tende a ser desnecessário como procedimento completo depois que a herança de tarefas estiver implementada.

### Grupo 8 — Escolha e catálogo de tipos

E03 e E21 cumprem funções muito próximas. A fase 2 deve decidir entre uma única página de decisão/índice ou duas páginas com papéis muito claramente separados.

### Grupo 9 — Ciclo de edição

E18 sobrepõe partes de E24, E19 e E20. A fase 2 deve preservar apenas o conteúdo que realmente explique status e acompanhamento, apontando para as tarefas específicas.

### Grupo 10 — Organização estrutural

A10 e A11 misturam organização de páginas com tarefas de coleções, busca e menu. A fase 2 deve separar o que é administração estrutural do que já é tarefa herdada de editor.

## Achados que afetam a próxima fase

1. **A organização por pastas de perfil hoje produz duplicação.** O mesmo procedimento é reescrito para editor, moderador e administrador mesmo quando a capacidade é herdada.
2. **O perfil real da tarefa nem sempre corresponde à pasta.** A03, M02 e M07 são exemplos de artigos localizados em níveis superiores para ações cujo perfil mínimo é editor.
3. **Há páginas de papel, páginas de índice e páginas de procedimento misturadas na mesma hierarquia.** A consolidação deve preservar essas funções, mas torná-las explícitas.
4. **E10 e E11 usam “publicar” no título embora o editor não aprove a publicação.** O corpo dos artigos orienta preparação e envio para moderação; os títulos devem ser revistos na fase 2.
5. **A11 mistura dois níveis de permissão.** Configurar metadados/menu é uma tarefa herdável de editor; reordenar estrutura tem escopo administrativo.
6. **E22 mistura mídia e cadastros auxiliares.** Alterar cadastros é descrito em A09 como capacidade administrativa; a página de editor precisa deixar esse limite inequívoco.
7. **C02 funciona como FAQ e glossário, mas incorpora pequenos procedimentos que já têm páginas próprias.** Ele deve apontar para referências canônicas sempre que possível.
8. **Os fundamentos não apresentam duplicação estrutural relevante.** Eles funcionam melhor como referências transversais do que como tarefas herdadas.

## Resultado da fase 1

A fase 1 termina com um inventário dos 59 artigos, a classificação por perfil mínimo e dez grupos de sobreposição. Nenhum artigo foi removido, fundido ou reescrito.

A fase 2 pode começar pela definição das tarefas canônicas e pela decisão, grupo a grupo, do que será mantido como procedimento, visão de papel ou índice.
