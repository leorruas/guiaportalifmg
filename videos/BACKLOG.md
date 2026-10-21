# Backlog: integração de vídeos ao Guia do Portal

Atualização: 21/10/2026. Inventário confirmado: **11 arquivos MP4 e 11 legendas SRT**, com nomes-base correspondentes, em `videos/` e `videos/legendas/`. Este planejamento é separado do backlog dos slides em `treinamento/BACKLOG.md`.

## Critério de conclusão

Cada vídeo deve ter transcrição lida, artigo canônico escolhido, explicação curta antes do player, MP4 e SRT associados no bloco `video` e revisão de reprodução, legendas e transcrição. Não inventar passos nem converter comportamentos de um exemplo em regra geral. Validar links e testes e registrar cada lote em `log.md`.

## Lote 1: incorporado (5 de 11)

| Vídeo e SRT de mesmo nome em `videos/legendas/` | Artigo de destino | Conteúdo demonstrado | Estado |
| --- | --- | --- | --- |
| Cadastrando processos seletivos | Editor: criar e atualizar processo seletivo e documentos | Pasta no Campus Formiga; tipos e subtipos; edital, ingresso, cursos e campi | **Concluído** |
| Exibição de processos seletivos após criados | Mesmo artigo de processo seletivo | Listagem institucional, página pública, relação com cursos | **Concluído** |
| Criando página de projeto de pesquisa ou evento | Editor: criar projeto | Página do tipo **Projeto**, usando um evento como exemplo; identidade e blocos | **Concluído** |
| Elemento do tipo campus | Moderador: criar ou editar campus | Destaques, endereço, redes, notícias e menus | **Concluído** |
| criando grupo permissao especifico | Administrador: configurar grupos e permissões | Grupo restrito, escopo de páginas e coleções e resultado no perfil do usuário | **Concluído** |

Os cinco artigos receberam descrição imediatamente antes do player e legenda `.srt`. O exemplo de evento continua classificado como **Projeto**. A configuração de grupos foi atribuída ao administrador.

## Lote 2: revisão e moderação (4 de 11)

| Vídeo e SRT de mesmo nome | Destino proposto | Observação extraída da transcrição | Estado |
| --- | --- | --- | --- |
| Permissões de objetos | Administrador: configurar grupos e permissões | Separa permissão de **tipo de objeto** (Campus, Pasta de notícias, Notícia) da permissão de páginas/coleções. Inserir seção própria | **Pendente** |
| Parte 1 - Criando fluxo de trabalho para moderar conteúdo de uma página específica | Administrador: avaliar procedimento próprio para configurar fluxos | Configuração de tarefa, grupo de aprovação, fluxo e escopo Campus Formiga. Não confundir com revisão do moderador | **Pendente: escolher destino canônico** |
| Parte 2 - Moderando conteúdo de uma página específica | Moderador: revisar e decidir publicação | Diferença entre rascunho e envio; estado **Online + Em moderação**, revisão e aprovação | **Pendente** |
| Inserir imagem dentro da coleção a partir da edição do conteúdo | Editor: adicionar/atualizar imagem | Upload apresentado apenas para coleção vazia no exemplo; em coleção com imagens, opção não apareceu. Relatar como observação, não regra | **Pendente** |

## Lote 3: comportamentos específicos (2 de 11)

| Vídeo e SRT de mesmo nome | Destino proposto | Observação extraída da transcrição | Estado |
| --- | --- | --- | --- |
| Criando encurtamento ou redirecionamento | Novo procedimento canônico sobre **Configurações → Redirecionamentos**; verificar perfil necessário | Demonstra criar o caminho curto `/formiga`. **Não é o tipo de página Link** do editor | **Pendente: confirmar permissões** |
| Elemento do tipo página e tipo notícia dentro do site do campus | Editor: escolher tipo de página, ou Moderador: editar campus | Compara menu do campus em uma Página e em uma Notícia. É comportamento do template demonstrado, ainda precisa validação na versão atual | **Pendente: confirmar comportamento atual** |

## Verificação final

- [ ] Confirmar todos os 11 blocos integrados sem duplicação editorial.
- [ ] Conferir player, áudio, CC e texto da transcrição no GitHub Pages, inclusive em celular.
- [ ] Validar o procedimento de Redirecionamentos e as diferenças de menu e de permissões de objetos na versão atual do Portal.
