# Linguagem simples e acessibilidade

Linguagem simples e acessibilidade digital são fundamentos do portal, não uma revisão opcional no fim do trabalho. Elas se relacionam, mas não são sinônimos.

- **Linguagem simples** permite que a pessoa encontre, compreenda e use a informação para realizar uma ação.
- **Acessibilidade digital** garante que conteúdos, interfaces e serviços possam ser percebidos, operados, compreendidos e utilizados por pessoas com diferentes capacidades e tecnologias assistivas.

Um texto claro pode continuar inacessível se estiver em um PDF sem estrutura ou em um formulário que não funciona pelo teclado. Uma interface tecnicamente compatível com leitor de telas também pode falhar se usar linguagem burocrática ou mensagens de erro vagas.

**Na prática:** imagine alguém usando o celular, com pouco tempo, sem conhecer as siglas do IFMG e talvez usando leitor de tela. Se essa pessoa não consegue descobrir o que fazer, a página ainda não está pronta — mesmo que pareça bonita para quem a criou.

## Princípio de trabalho

Planeje e valide acessibilidade desde o início. Ela atravessa conteúdo, design, código, navegação, formulários, multimídia, documentos e o processo de publicação. Recursos isolados — como alto contraste, aumento de fonte, tradução para Libras ou texto alternativo — ajudam, mas não tornam um portal acessível por si só.

## Critérios para toda entrega

| Dimensão | Pergunta de revisão | Exemplos práticos |
| --- | --- | --- |
| Perceptível | A informação chega por mais de um meio quando necessário? | Texto alternativo informativo, contraste suficiente, legendas e transcrições; não depender somente da cor. |
| Operável | A pessoa consegue navegar e agir sem mouse? | Teclado, foco visível, ordem lógica e controles com nome claro. |
| Compreensível | O conteúdo e a interface explicam o que acontece e o que fazer? | Linguagem direta, rótulos coerentes, comportamento previsível e erros que indicam causa e solução. |
| Robusto | O elemento tem estrutura e semântica que funcionam nas tecnologias assistivas? | HTML semântico, botões reais, campos com rótulo e estados identificáveis. |

Essas quatro dimensões correspondem aos princípios da WCAG: perceptível, operável, compreensível e robusto (POUR). Para o contexto público brasileiro, as recomendações do eMAG devem orientar sua aplicação.

## Padrão editorial mínimo

- Priorize a informação e a ação que a pessoa precisa realizar.
- Preserve requisitos, exceções, direitos, deveres e consequências; simplifique a explicação, não o assunto.
- Explique siglas e termos técnicos na primeira ocorrência. Quando o termo oficial for necessário, apresente também seu sentido prático.
- Use títulos descritivos, parágrafos curtos, listas e links que descrevam o destino.
- Não use somente cor, posição ou forma para comunicar estado, obrigatoriedade ou erro.
- Em formulários, diga o que ocorreu, onde está o problema e como corrigi-lo.

Exemplo: em vez de “Ocorreu uma inconsistência no processamento da solicitação”, prefira “Não foi possível enviar o pedido porque o CPF está incompleto. Digite os 11 números e tente novamente.”

## Mídia e documentos

- Vídeos devem ter legendas. Quando informações importantes aparecem apenas visualmente, inclua descrição verbal ou audiodescrição adequada.
- Áudios precisam de transcrição.
- Documentos publicados devem ter estrutura navegável, títulos e leitura compatível com tecnologias assistivas; não publique como imagem um PDF que precisa ser lido ou pesquisado.

### Imagens acessíveis e equivalência informacional

O texto alternativo deve preservar a **informação ou a função relevante** da imagem no contexto. Não é uma descrição automática de tudo o que a imagem mostra; a mesma imagem pode exigir alternativas diferentes conforme a tarefa e o texto ao redor.

| Tipo de imagem | Regra | Exemplo de alternativa |
| --- | --- | --- |
| Informativa | Comunique o dado ou sentido que a imagem acrescenta. | “Equipe técnica realiza manutenção na central de dados.” |
| Decorativa ou redundante | Oculte-a das tecnologias assistivas com `alt=""` ou apresente-a por CSS quando apropriado. Não omita o atributo `alt`. | Sem texto alternativo anunciado. |
| Funcional | Informe a ação ou o destino, nunca apenas a aparência do ícone. | “Pesquisar”, “Imprimir esta página” ou “Ir para a página inicial”. |
| Com texto | Disponibilize as palavras necessárias como texto real sempre que possível. | “Inscrições abertas até 20 de agosto.” |
| Complexa | Ofereça identificação breve e descrição detalhada ou equivalente estruturado próximo à imagem. | “Gráfico do tempo de atendimento; dados detalhados a seguir.” |

Para gráficos, infográficos, diagramas, organogramas e mapas, não basta descrever cores ou formas. Apresente as conclusões, valores relevantes, unidades, período e fonte conforme a finalidade. Uma tabela, lista estruturada ou seção próxima costuma ser melhor que concentrar toda a explicação no atributo `alt`.

Legenda visível e texto alternativo também têm papéis diferentes: a legenda pode contextualizar ou creditar; o `alt` fornece equivalência ao conteúdo visual. Evite repeti-los integralmente sem necessidade.

Em mapas interativos, cada marcador ou área acionável precisa de nome, função e operação por teclado e tecnologias assistivas. Disponibilize também uma alternativa não cartográfica — por exemplo, uma lista de unidades, endereços e contatos.

Uma heurística rápida para decidir:

1. A imagem não acrescenta informação? Trate-a como decorativa.
2. A imagem executa uma ação? Descreva a ação ou o destino.
3. A imagem concentra muitas informações? Use uma identificação breve mais descrição detalhada ou dados equivalentes.

## Verificação antes de publicar

- [ ] A página funciona por teclado, com foco visível e ordem de navegação lógica?
- [ ] Títulos, links, botões, campos e mensagens de erro comunicam sua finalidade?
- [ ] Cada imagem tem alternativa adequada à sua função — informativa, decorativa, funcional ou complexa?
- [ ] Imagens complexas e mapas interativos têm equivalente detalhado e operável?
- [ ] Vídeos, áudios e documentos possuem as alternativas necessárias?
- [ ] Cor, contraste e tamanho não são o único meio de transmitir informação?
- [ ] O texto permite entender o que fazer sem conhecer a burocracia do IFMG?
- [ ] A revisão combinou verificação automática, inspeção humana e, quando possível, teste com usuários?

Ferramentas automáticas são úteis para detectar parte das falhas técnicas, mas não substituem a avaliação humana nem testes de uso.

**Teste simples:** peça a uma pessoa que não conhece o assunto para encontrar a ação principal e explicar o que faria em seguida. Se ela precisar que você traduza a página, simplifique o texto, os rótulos ou o caminho.

## Referências e aprofundamento

- [W3C — tutorial de imagens acessíveis](https://www.w3.org/WAI/tutorials/images/) — classificação e aplicação geral.
- [W3C — imagens decorativas](https://www.w3.org/WAI/tutorials/images/decorative/) — uso de `alt=""`.
- [W3C — imagens funcionais](https://www.w3.org/WAI/tutorials/images/functional/) — texto alternativo orientado à ação ou ao destino.
- [W3C — imagens informativas](https://www.w3.org/WAI/tutorials/images/informative/) — equivalência do conteúdo relevante.
- [W3C — imagens complexas](https://www.w3.org/WAI/tutorials/images/complex/) — descrição breve e equivalente detalhado.
- [W3C — dicas para texto alternativo](https://www.w3.org/WAI/tutorials/images/tips/) — concisão, contexto e hierarquia da informação.
- [Governo Federal — guia rápido de texto alternativo](https://www.gov.br/gestaodeconteudo/pt-br/manuais-e-tutoriais/acessibilidade-em-imagens/guia-rapido-texto-alternativo) — exemplos práticos para conteúdo público.
- [Governo Federal — cartilha de acessibilidade do gov.br](https://www.gov.br/gestaodeconteudo/pt-br/manuais-e-tutoriais/diretrizes-para-edicao-de-conteudo/cartilha-de-acessibilidade-gov.br) — diretrizes amplas para publicação de conteúdo.
- [Enap — texto alternativo para imagens e gráficos](https://www.enap.gov.br/educacao-e-capacitacao/rotas/capsulas/texto-alternativo-alt-text-para-imagens-e-graficos/) — síntese didática sobre tipos de imagem e contexto.
