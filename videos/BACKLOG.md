# Backlog: integração de vídeos ao Guia do Portal

Atualização: 21/10/2026. Inventário confirmado: **11 arquivos MP4 e 11 legendas SRT**, com nomes-base correspondentes, em `videos/` e `videos/legendas/`. Este planejamento é separado do backlog dos slides em `treinamento/BACKLOG.md`.

**Andamento:** 10 dos 11 vídeos integrados aos artigos canônicos; 1 pendente de validação do comportamento da página Notícia no campus.

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

## Lote 2: revisão e moderação (4 integrados)

| Vídeo e SRT de mesmo nome | Destino proposto | Observação extraída da transcrição | Estado |
| --- | --- | --- | --- |
| Permissões de objetos | Administrador: configurar grupos e permissões | Separa permissão de **tipo de objeto** (Campus, Pasta de notícias, Notícia) da permissão de páginas/coleções. Seção específica incorporada | **Concluído** |
| Parte 1 - Criando fluxo de trabalho para moderar conteúdo de uma página específica | Administrador: **configurar quem aprova conteúdos de um campus ou setor** | Procedimento canônico criado com tarefa, grupo aprovador, fluxo e escopo Campus Formiga; separado da revisão do moderador | **Concluído** |
| Parte 2 - Moderando conteúdo de uma página específica | Moderador: revisar e decidir publicação | Diferença entre rascunho e envio; estado **Online + Em moderação**, revisão e aprovação | **Concluído** |
| Inserir imagem dentro da coleção a partir da edição do conteúdo | Editor: adicionar/atualizar imagem | Upload apresentado apenas para coleção vazia no exemplo; em coleção com imagens, opção não apareceu. Relatado como observação, não regra | **Concluído** |

**Lote 2 concluído:** o vídeo de configuração do fluxo foi integrado ao novo procedimento canônico do Administrador, com a Parte 2 preservada no artigo de revisão do Moderador.

## Lote 3: comportamentos específicos (1 integrado; 1 pendente)

| Vídeo e SRT de mesmo nome | Destino proposto | Observação extraída da transcrição | Estado |
| --- | --- | --- | --- |
| Criando encurtamento ou redirecionamento | Administrador: **criar um endereço curto ou redirecionar uma página**, conectado ao procedimento editorial de Link | Demonstra `/formiga` apontando para o Campus Formiga; diferencia regra em Configurações do tipo de página Link. Perfil administrador adotado editorialmente; permissões reais devem ser conferidas | **Concluído** |
| Elemento do tipo página e tipo notícia dentro do site do campus | Editor: escolher tipo de página, ou Moderador: editar campus | Compara menu do campus em uma Página e em uma Notícia. É comportamento do template demonstrado, ainda precisa validação na versão atual | **Pendente: confirmar comportamento atual** |

## Verificação final

- [ ] Confirmar todos os 11 blocos integrados sem duplicação editorial.
- [ ] Conferir player, áudio, CC e texto da transcrição no GitHub Pages, inclusive em celular.
- [ ] Confirmar na instalação atual o acesso administrativo a Redirecionamentos e o comportamento da página Notícia no menu do campus; distinguir essa validação da integração editorial concluída.
