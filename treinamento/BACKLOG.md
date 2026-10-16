# Backlog da apresentação de treinamento do Portal IFMG

Atualizado em 16/10/2026. Fonte principal de decisões e pendências da apresentação publicada em `treinamento/index.html`.

## Direção definida

- Público: equipes que trabalham no Portal IFMG, com uma parte comum e trilhas para editor, moderador e administrador.
- Formato: **apresentação expositiva** em slides 16:9. Atividades e conferências são realizadas **individualmente**, fora dos slides, em `treinamento/pratica.html`.
- Identidade: inspiração no design suíço, grid, respiro, tipografia **Archivo** em todos os elementos e verdes do Guia do Portal IFMG (`#216b35` no claro e `#78c981` no escuro).
- A abertura precisa explicar a estrutura do portal e mostrar os grafos antes dos procedimentos no Wagtail.
- Os **prompts de IA para suporte** devem ser apresentados como ferramenta de consulta e preparo, com referência à documentação canônica.
- Não inventar funções, botões, permissões ou estados do Wagtail. Não apresentar o portal em homologação como ambiente público.
- Os grafos antigo e novo têm **coberturas diferentes**: não comparar contagens de nós como medida de melhoria.

## Fase 0: correções e registro imediato

- [x] Criar este backlog por fases, com decisões e critérios de conclusão.
- [x] Remover o ponto final decorativo depois de **Treinamento** na capa (`treinamento/treinamento.js`).
- [x] Incluir um slide expositivo específico sobre **IA para consultar o guia**, depois da parte comum e antes de Editor.
- [x] Apontar para o artigo existente **Como usar uma IA como apoio para trabalhar com este guia**, com prompts para entender uma tarefa, revisar conteúdo, preparar imagens e escolher blocos. Deixar o texto integral dos prompts no guia.
- [x] Conservar o roteiro e a página de exercícios originais nesta etapa, evitando mudanças simultâneas que dificultem revisão.

## Fase 1: reconstruir o roteiro da apresentação [pendente]

- [ ] Definir a mensagem principal: por que a organização do portal mudou, como encontrar a informação e como cada papel participa da publicação.
- [ ] Revisar a sequência para formar uma narrativa: **problema anterior → critérios de organização → estrutura atual → funcionamento editorial → responsabilidades de cada perfil → apoio e consulta ao guia**.
- [ ] Avaliar se as quatro trilhas atuais são adequadas a uma apresentação para público misto; preservar caminhos rápidos por perfil, se necessário.
- [ ] Revisar a quantidade de slides e eliminar repetições; a regra de três tópicos por slide não deve determinar a narrativa.
- [ ] Diferenciar conteúdo para apresentação oral do conteúdo de consulta permanente no Guia do Portal.
- [ ] Propor uma estrutura de abertura com contexto, evidências e interpretação dos grafos, sem sugerir que a diferença de tamanho entre datasets representa automaticamente melhoria.

**Aceite:** roteiro revisado antes de reorganizar os slides, com propósito e mensagem de cada seção e sem duplicação gratuita.

## Fase 2: reescrever os slides e valorizar exemplos [pendente]

- [ ] Reescrever títulos para expressarem conclusões e decisões úteis, com menos linguagem procedural.
- [ ] Revisar os slides **Entrega final do editor**, **Entrega final do moderador** e **Entrega final do administrador**: mover exercícios para `pratica.html` ou transformá-los em sínteses expositivas.
- [ ] Usar exemplos concretos do Wagtail e do portal, principalmente para blocos, imagens, documentos, menus, moderação, coleções e permissões.
- [ ] Conferir que o conteúdo comum apresenta os conceitos necessários sem repetir o conteúdo de cada perfil.
- [ ] Validar cada afirmação operacional com o artigo canônico do guia; manter limitações de acesso e de homologação quando relevantes.
- [ ] Reavaliar o posicionamento do slide de IA após a revisão do roteiro, mantendo seu conteúdo e link.

**Aceite:** slides próprios para exposição, sem exercícios intercalados, e atividades individuais completas fora do deck.

## Fase 3: ajustar a linguagem visual e as estruturas [pendente]

- [ ] Variar a composição visual de acordo com a informação: gráfico, árvore, fluxo, captura anotada, comparação ou síntese.
- [ ] Dar aos **grafos antigo, Reitoria e campi** função narrativa clara, com escala, leitura e legenda adequadas.
- [ ] Garantir que o percurso de três cliques seja apresentado como **um exemplo comprovado**, sem prometer o mesmo percurso a todas as páginas.
- [ ] Aplicar grid tipográfico coerente e mais espaço em branco, preservando **Archivo** e a paleta do guia.
- [ ] Evitar textos pequenos demais para projeção, sem retornar aos blocos de texto excessivamente grandes.

**Aceite:** cada slide possui um foco visual compreensível durante uma apresentação oral.

## Fase 4: revisão técnica e teste da apresentação [pendente]

- [ ] Verificar visualmente os slides em 16:9, tela cheia e larguras menores, com atenção a cortes e quebras de linhas.
- [ ] Testar navegação por teclado, índice, retorno, links para o guia, imagens e grafos.
- [ ] Confirmar que `treinamento/pratica.html` mantém as atividades individuais e os critérios de conferência.
- [ ] Validar scripts e dados, confirmar publicação do GitHub Pages após a mudança e registrar o resultado real.
- [ ] Verificar se a apresentação funciona mesmo quando fontes externas ou imagens não carregam; preservar mensagens de erro adequadas.

**Aceite:** navegação íntegra e nenhuma informação essencial cortada.

## Solicitações de 16/10/2026: apresentação mais didática

### Fase 1: capa, acesso pelo guia e abertura dos módulos

- [x] Retirar da capa as três frases “Organizar a informação / Preparar o conteúdo / Revisar antes de publicar”.
- [x] Retirar a frase “Quatro trilhas / uma experiência de publicação”.
- [x] Substituir o link isolado no rodapé da home do guia por uma chamada editorial própria para o treinamento, com título, contexto e ação.
- [x] Substituir o separador de módulo com número gigante sobre fundo preto por uma abertura editorial em Archivo e verde com **temas concretos** do módulo.
- [ ] Conferir visualmente o comportamento do novo rodapé em telas pequenas e nos dois temas do guia.

### Fase 2: ensinar o sistema por exemplos [primeira rodada concluída]

- [x] Retirar a numeração decorativa dos três tópicos e adotar variação de comparação, captura, fluxo, grade e alerta nos slides de ensino. A revisão integral dos outros conceitos permanece na Fase 4.
- [x] Mostrar como inserir e reorganizar blocos na aba **Conteúdo** (botão **+**, setas, duplicação e lixeira), incluindo pré-visualização.
- [x] Distinguir os blocos **Introdução**, **Informação**, **Links**, **Link único**, **Cards**, **Tabela**, **Coleção** e **Galeria** com contexto de uso.
- [x] Explicar as diferenças entre bloco **Links**, bloco **Link único** (estilo **Cartão** versus **Padrão**) e **Link** como tipo de página na árvore.
- [x] Ensinar configuração de **Coleção**: coleção escolhida, **Recursivo**, **Mostrar imagens/documentos** e ordenação de documentos por upload.
- [x] Ensinar publicação e revisão pelo percurso real no Wagtail, não por jargões abstratos.
- [x] Substituir os títulos “Entrega final” por sínteses expositivas, mantendo as tarefas em `pratica.html`.

### Fase 3: segurança de coleções [concluída]

- [x] Dar destaque visível ao aviso **Não renomeie coleções por conta própria**: alterações de nome, em especial as que mudam a ordem alfabética, podem causar falhas ao criar novas.
- [x] Em caso de falha, orientar a conferir se já foi criada, registrar erro, nome e coleção-pai e encaminhar à equipe com acesso de manutenção; **não excluir nem recriar coleções como tentativa de correção**.
- [x] Diferenciar administração do Wagtail de manutenção técnica de código/banco.
- [x] Conferir redação com o procedimento canônico de coleções, evitando afirmar que toda renomeação sempre causa erro.

### Fase 4: refinamento final [pendente]

- [ ] Revisar um a um os demais slides para retirar abstrações e repetir menos o guia; incluir capturas reais nos pontos que exigem demonstração.
- [ ] Avaliar se o deck deve ser dividido por encontros/audiências para não ficar longo.
- [ ] Testar leitura em projeção 16:9, teclado, links, índice, grafos e responsividade.
- [ ] Confirmar publicação do GitHub Pages e versões de cache após cada implantação.

- **16/10/2026, fases 2 e 3:** introduzidas quatro telas para demonstração de blocos, links, tabela e galeria; substituídos seis slides de tópicos genéricos por exemplos de escolha do bloco, configuração de coleção, menu, envio para moderação, comentário de revisão e aviso sobre renomeação. A apresentação passa a 44 telas. Repertório dos outros slides ainda precisa de refinamento completo.

## Histórico e próximos registros

- **Concluído antes deste backlog:** deck 16:9 com 39 telas; estilo suíço; cores do guia e Archivo; redução do texto de apoio; atividades individuais separadas; seis slides iniciais de grafos e estruturas.
- **16/10/2026, fase 0 concluída:** capa sem ponto final, slide de apoio com IA e backlog registrados; deck passa a 40 telas.
- Novos pedidos sobre o treinamento devem ser adicionados primeiro a este arquivo, com uma fase, status e critério de aceite. Implementações concluídas devem atualizar os itens correspondentes e `log.md`.
