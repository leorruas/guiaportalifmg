# SEO, busca interna e metadados

SEO, busca interna e metadados são meios complementares de encontrabilidade. Eles ajudam as pessoas a descobrir, compreender e recuperar informações, mas não substituem uma boa arquitetura, conteúdo útil e linguagem clara.

| Caminho | Onde ocorre | O que precisa funcionar |
| --- | --- | --- |
| Busca externa | Google, Bing e outros mecanismos | Descoberta, indexação e compreensão da página. |
| Busca interna | Dentro do portal | Vocabulário, relevância e recuperação dos conteúdos institucionais. |
| Navegação | Menus, categorias e links | Organização, rótulos e caminhos para explorar tarefas. |

## SEO orientado às pessoas

SEO ajuda mecanismos de busca a compreenderem o conteúdo e pessoas a decidirem se um resultado responde à sua necessidade. Não é manipular algoritmos, repetir palavras-chave artificialmente, escrever para robôs nem garantir a primeira posição.

O ponto de partida é a intenção de busca: o que a pessoa tenta fazer, e não apenas a expressão que digitou. Uma página chamada “Procedimento de redefinição de credenciais de autenticação” deve criar uma ponte para a linguagem da tarefa, como “Como recuperar ou alterar sua senha”, sem perder os termos oficiais quando forem necessários.

## Rastreamento, indexação e ranqueamento

1. **Rastreamento**: o robô descobre e acessa uma página, por links, sitemap ou outras fontes.
2. **Indexação**: o mecanismo processa e inclui o conteúdo em seu índice.
3. **Ranqueamento**: diante de uma consulta, seleciona e ordena resultados considerados relevantes.

Publicar não garante indexação; uma página rastreada pode não ser indexada, e uma página indexada pode aparecer em posição baixa. Sitemap ajuda a indicar URLs relevantes, especialmente em portais grandes ou complexos, mas não substitui links internos nem garante indexação ou posicionamento.

## Metadados e elementos editoriais

Metadados descrevem o conteúdo e sustentam organização, filtragem, busca, compartilhamento e governança. Incluem, por exemplo, título, resumo, autoria, data de publicação e atualização, assunto, idioma, tipo documental e imagem de destaque. Eles não se resumem a meta tags no código.

| Elemento | Padrão |
| --- | --- |
| Título | Claro, específico, exclusivo e fiel ao conteúdo. Em serviços, priorize a tarefa: “Consultar situação do requerimento”, não “Informações”. |
| Metadescrição | Resumo único e útil que pode compor o *snippet* da busca; o mecanismo pode exibir outro trecho da página. |
| Cabeçalhos | Hierarquia lógica de conteúdo, não escolha motivada apenas pelo tamanho visual. |
| Links | Texto âncora descritivo: “Consulte o edital completo”, não “Clique aqui”. |
| URL | Curta, compreensível e estável; comunique o assunto sem tentar incluir todos os termos possíveis. |
| Palavras-chave | Use-as para compreender a linguagem do público, não como lista mecânica. A meta tag `keywords` não é usada pelo Google para classificação. |

## Duplicação, versão canônica e ciclo de vida

Cada conteúdo oficial deve ter uma fonte principal. Cópias em URLs diferentes, versões para impressão, parâmetros ou republicações podem confundir usuários, mecanismos de busca e a equipe responsável pela atualização. Use redirecionamentos ou sinalização de URL canônica quando aplicável.

Toda publicação precisa de responsável e revisão periódica. Páginas com prazos vencidos, orientações contraditórias, links quebrados ou duplicação devem ser atualizadas, arquivadas, redirecionadas ou removidas conforme sua finalidade. Conteúdo histórico deve ficar claramente identificado como tal.

## Busca interna como evidência contínua

A busca interna deve reconhecer, sempre que possível, sinônimos, siglas, termos oficiais e populares, variações ortográficas, singular e plural e erros frequentes. Se o portal usa “auxílio-transporte” e o público procura “vale-transporte”, o conteúdo e o mecanismo precisam criar essa ponte.

Uma busca sem resultados não deve encerrar a tarefa. Ofereça correções, termos relacionados, categorias, conteúdos populares ou caminho de contato, e registre a consulta para análise. Consultas sem resultado, refinamentos, abandono e cliques em resultados revelam lacunas de conteúdo, rotulagem, indexação ou vocabulário.

### Precisão e revocação

- **Precisão**: proporção dos resultados apresentados que é realmente relevante.
- **Revocação** (*recall*): proporção dos resultados relevantes existentes que foi recuperada.

Uma busca com poucos resultados corretos pode ter alta precisão e baixa revocação; outra que traga todos os resultados relevantes junto de muito ruído pode ter alta revocação e baixa precisão. A operação da busca deve equilibrar pertinência e cobertura.

## Controle técnico essencial

- `robots.txt` controla principalmente o acesso de rastreadores a URLs; não garante que uma URL desapareça dos resultados.
- `noindex` orienta que a página não seja incluída no índice. Para ser lida, essa diretiva normalmente exige que o rastreador possa acessar a página.
- Proteção por autenticação é adequada quando o conteúdo não deve ser público. A escolha deve ser definida com a equipe técnica conforme o caso.

## Indicadores e revisão

Observe consultas, cliques, posição média, páginas de entrada, tráfego orgânico, consultas sem resultado, refinamentos, abandono, tempo até encontrar e conclusão de tarefa. Volume isolado não é sucesso: uma página pode receber muitas visitas por dúvida, crise, título impreciso ou falta de uma alternativa melhor.

## Verificação antes de publicar

- [ ] O título, o resumo, os cabeçalhos e a URL comunicam a tarefa ou o assunto com clareza?
- [ ] O conteúdo usa termos que o público realmente procura e explica a terminologia oficial?
- [ ] Links internos e texto âncora apontam para próximos passos relevantes?
- [ ] Há metadados completos: autoria ou área responsável, datas, assunto, tipo e resumo?
- [ ] A página tem fonte oficial, revisão prevista e tratamento definido para vencimento ou arquivamento?
- [ ] Conteúdos duplicados possuem versão canônica ou redirecionamento quando necessário?
- [ ] A busca interna oferece sinônimos e trata consultas sem resultado como evidência de melhoria?

## Referências e conexões

- [Guia de SEO para iniciantes — Central da Pesquisa Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-BR) — referência primária para descoberta, conteúdo, títulos, snippets, links, imagens e estrutura do site.
- [[04 - Governança & Manuais/guia-do-portal/05 - Fundamentos/02 - Arquitetura da informação e encontrabilidade|Arquitetura da Informação e Encontrabilidade]] — relação entre busca, navegação, linguagem e tarefas.
- [[06 - Dados & Artefatos/dados-analytics/protocolo-analytics|Protocolo Analytics]] — medição e interpretação dos dados de uso.
- [[05 - Conceitos & Variáveis/variaveis/encontrabilidade|Frustração na busca]] — hipótese de falha a investigar, não diagnóstico automático.
