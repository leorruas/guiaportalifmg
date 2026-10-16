# Backlog da apresentação de treinamento do Portal IFMG

Atualizado em 16/10/2026. Fonte principal de decisões e pendências da apresentação publicada em `treinamento/index.html`.

## Produção de capturas da homologação — trabalho paralelo

**Checklist compartilhado:** [CAPTURAS-WAGTAIL.md](./CAPTURAS-WAGTAIL.md). Contém **24 telas identificadas W01–W24**, priorização em lotes, nomes dos arquivos, caminhos no painel, capturas já existentes, como entregar, segurança e campos **PRECISO DE VOCÊ** e **EU** para diferenciar responsabilidades.

- [x] Conferir o material de captura disponível no repositório e evitar pedidos duplicados.
- [x] Registrar as 12 capturas da primeira leva, as oito de complemento e as quatro administrativas condicionais ao acesso, com indicação do slide correspondente.
- [x] Deixar no mesmo documento o que depende do acesso da pessoa à homologação e o trabalho que pode continuar com as referências existentes.
- [ ] Receber e revisar W01–W12, marcando cada item no documento conforme as imagens chegarem. **Dependência do usuário:** somente capturas acessíveis e autorizadas; não modificar dados do portal para registrar imagens.
- [ ] Receber ou dispensar W13–W24 conforme diferença em relação às imagens já disponíveis e permissões da pessoa.
- [ ] Atualizar progressivamente os slides com capturas aprovadas, sem inserir dados restritos em repositório ou site público.

**Critério de aceite:** toda demonstração que precisa de interface real está mapeada com origem, responsável, etapa e destino no slide, e nenhuma imagem de homologação é publicada sem revisão de privacidade/autorização.

## Roteiro visual independente de novas capturas — rodada aplicada

- [x] Identificar seis etapas do caso **Página da Biblioteca** em `treinamento/fluxo.js`, utilizando a faixa acessória de contexto do slide (44 telas mantidas).
- [x] Trocar o caso introdutório do Editor por seleção do tipo **Página**, com captura existente do guia; caminho real na árvore aguarda W01.
- [x] Substituir cartões abstratos em **Busca e menus** por uma comparação com as duas capturas já existentes de `Promover` e de menu interno.
- [x] Integrar captura disponível ao slide **Salvar → Pré-visualizar → Enviar para moderação**.
- [x] Integrar imagem do bloco **Coleção**, com distinção explícita entre **guardar arquivos em coleções** e **exibir arquivos no bloco**, incluindo Recursivo.
- [x] Uniformizar exemplos de Tabela, Galeria, Links e documentos no caso da Biblioteca, sem afirmar a existência de pastas ou documentos reais.
- [x] Identificar nas legendas as capturas reaproveitadas como **referências do guia a conferir** na homologação.
- [ ] Substituir capturas de referência por W01–W24 somente após recebimento, revisão de privacidade e conferência da interface.
- [ ] Avaliar legibilidade e cortes em navegador real e projeção; simulações automáticas não garantem qualidade visual.
- [x] Inspecionar visualmente oito capturas produzidas pela rotina de QA em Chromium, incluindo a vista em tela cheia. Corrigir contorno de foco indesejado sobre títulos e retirar códigos internos W01–W24 do texto dos slides.
- [ ] Conferir em projeção a legibilidade de campos pequenos nas capturas antigas do Wagtail; a ampliação ou substituição por W01–W24 autorizados pode ser necessária.
- [x] Rotina de QA em Chromium executada com sucesso na Action `38930558828`: 44 telas em três resoluções, imagens carregadas e palco dentro da viewport. Corrigido o caminho de upload; conferir o anexo dos screenshots na próxima execução. **Ainda falta inspeção humana em projeção.**

## Ritmo e narrativa da abertura — aplicado em 16/10/2026

- [x] Reduzir de seis para **quatro telas de arquitetura**: portal anterior, Reitoria, campi e caminho da política de cotas, mantendo todos os grafos.
- [x] Incorporar as cinco áreas da Reitoria e sete entradas dos campi (três fixas) aos próprios slides dos respectivos grafos, retirando duas telas exclusivamente descritivas.
- [x] Reescrever títulos e leads com interpretações da arquitetura, sem tratar números de grafos de coberturas diferentes como medida de melhoria.
- [x] Preservar links antigos `#estrutura-reitoria` e `#estrutura-campi` direcionando para os grafos respectivos.
- [x] Criar [ROTEIRO-APRESENTADOR.md](./ROTEIRO-APRESENTADOR.md) com condução da aula, exemplos e perguntas de transição.
- [x] Atualizar índice, progresso, cache e testes para **42 telas**, mantendo exercícios, módulos e seis etapas da Biblioteca.
- [x] Inspecionar as capturas do Chromium da abertura condensada: ajustar a escala dos grafos da Reitoria e dos campi e aproximar as setas dos rótulos no percurso de cotas.
- [ ] Inspecionar legibilidade das faixas de entradas sob os grafos em projeção; teste automatizado não garante leitura confortável.

## Moderador e Administrador — demonstração visual (16/10/2026)

- [x] Expandir a rotina de capturas QA para incluir os slides alterados de publicação, permissões, administração e coleções, permitindo revisão visual mesmo sem capturas da homologação.

- [x] Mostrar o caminho **fila de revisão → pré-visualização** no módulo Moderador, com duas capturas já existentes e identificadas como referências do guia.
- [x] Exibir a referência do indicador **Status** no slide Publicar/Agendar/Despublicar, sem confundir com aprovação editorial.
- [x] Mostrar **Configurações** e a ação **Adicionar coleção** no módulo Administrador, sem exigir mudanças reais no ambiente.
- [x] Substituir o slide abstrato de permissões por um **esquema explicitamente conceitual** que diferencia o acesso às páginas do acesso às coleções.
- [x] Alinhar a atividade sobre publicação e a síntese de revisão à mesma página institucional da Biblioteca, sem atribuir notícias a Editores.
- [x] Preservar escala Archivo, metadados menores, alerta de renomeação e 42 telas; exercícios individuais continuam separados.
- [ ] Revisar legibilidade das capturas em projeção e substituir por capturas atuais da homologação quando disponíveis e autorizadas.
- [ ] **Não criar nesta fase** a página de orientação detalhada sobre gerenciamento de coleções, ainda dependente de capturas e validação da interface.

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

## Correção de tela cheia — 16/10/2026

- [x] Corrigir o layout: antes, ao ocultar o cabeçalho e a barra inferior, o grid de três linhas mantinha a primeira faixa com altura zero e podia cortar o slide.
- [x] Em tela cheia, usar um contêiner flex centralizado e palco dimensionado em proporção 16:9, limitado pela largura e altura reais da janela.
- [x] Atualizar o cache do CSS tanto na apresentação quanto nas atividades individuais.
- [ ] Fazer conferência visual real em tela cheia no navegador utilizado no IFMG, inclusive em proporções 16:9, 16:10 e ultrawide. Testar entrada/saída com o botão e a tecla Esc; nenhuma parte do slide pode desaparecer.

## Fase 4: revisão técnica e teste da apresentação [pendente]

- [ ] Verificar visualmente os slides em 16:9, tela cheia e larguras menores, com atenção a cortes e quebras de linhas.
- [ ] Testar navegação por teclado, índice, retorno, links para o guia, imagens e grafos.
- [ ] Confirmar que `treinamento/pratica.html` mantém as atividades individuais e os critérios de conferência.
- [x] Validar scripts, dados, índice e recursos em CI e confirmar sucesso da Action de Pages da correção de tela cheia. A implantação da última mudança segue monitorada por sua execução.
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

### Fase 4: refinamento final [conteúdo revisado; teste visual pendente]

- [x] Revisar os 22 slides restantes do conteúdo comum e dos três perfis: usar cenários, comparações, capturas, decisões e textos concretos sustentados no Guia. Conferir visualmente os resultados em navegador ainda é pendência.
- [ ] Avaliar se o deck deve ser dividido por encontros/audiências para não ficar longo.
- [ ] Testar leitura em projeção 16:9, teclado, links, índice, grafos e responsividade.
- [x] Confirmar sucesso da implantação da correção de tela cheia, execução da regressão e versões sincronizadas de cache entre slides e atividades individuais. Verificar separadamente a implantação da última revisão.

- **16/10/2026, fases 2 e 3:** introduzidas quatro telas para demonstração de blocos, links, tabela e galeria; substituídos seis slides de tópicos genéricos por exemplos de escolha do bloco, configuração de coleção, menu, envio para moderação, comentário de revisão e aviso sobre renomeação. A apresentação passa a 44 telas. Repertório dos outros slides ainda precisa de refinamento completo.

## Padrão tipográfico do treinamento — decisão de 16/10/2026

- [x] Padronizar o tamanho dos títulos, leads e corpo nos slides de conteúdo, incluindo capturas, comparações, estruturas e apoio com IA.
- [x] Usar a família **Archivo** em todos os slides. Reservar **Archivo Black** para o título principal da capa, sem aplicá-la nos títulos dos módulos nem dos slides.
- [x] Reduzir os textos de navegação de topo e rodapé, como “Editor / conteúdo”, “01 DE 16” e “Portal IFMG · treinamento”, a uma escala acessória (0,78 cqw).
- [ ] Realizar inspeção visual em projeção para garantir contraste e legibilidade da navegação acessória.

## Pendência — orientação detalhada sobre coleções e arquivos [a fazer]

- [ ] Criar uma **página de orientação específica**, acessível a editores e moderadores, sobre como encontrar e utilizar as coleções no painel Wagtail. **Não implementar nesta fase**: apenas registrar e planejar a produção.
- [ ] Ensinar o **caminho de acesso pelo painel**, passo a passo, incluindo como chegar a **Imagens**, **Documentos**, seus seletores de coleção e a estrutura de coleções/subcoleções. Usar capturas reais do ambiente e anotações dos elementos a clicar.
- [ ] Explicar como **encontrar o destino certo**, adicionar e pesquisar arquivos, identificar títulos, tags e versões, substituir sem prejudicar usos em outras páginas e distinguir coleções de pastas da árvore de páginas.
- [ ] Mostrar com exemplos a diferença entre **guardar o arquivo na coleção** e **usar o bloco Coleção na página**, incluindo **Recursivo**, **Mostrar imagens** e **Mostrar documentos**.
- [ ] Separar claramente **ações cotidianas de editor/moderador** das ações **administrativas** de criação, renomeação, hierarquia, privacidade e permissões de coleções. Não ensinar quem não é administrador a alterar a estrutura.
- [ ] Reforçar: **não renomear coleções por conta própria**; diante de falhas, registrar e encaminhar, sem apagar/recriar como tentativa de conserto.
- [ ] Depois de pronta, ligar a página detalhada aos procedimentos canônicos de editor/moderador, ao índice do guia e à apresentação do treinamento, evitando conteúdo operacional duplicado sem necessidade.

**Critério de conclusão:** uma pessoa sem experiência consegue localizar a coleção correta, inserir ou atualizar um arquivo permitido, encontrá-lo e utilizá-lo em uma página, além de reconhecer o que depende do administrador.

## Decisão editorial — perfis e exemplos de páginas [aplicada]

- **Notícias são criadas por jornalistas com perfil mínimo de Moderador.** Na apresentação, a trilha Editor trata de **páginas institucionais e de serviço**, não de criar notícias.
- [x] Trocar a demonstração do Editor por uma Página institucional da Biblioteca, seguindo `Páginas → página-pai autorizada → Adicionar subpágina → Página → Conteúdo → Promover → pré-visualização → moderação`.
- [x] Transferir a demonstração de **Copiar, Alias e Linkar em outra pasta** para a trilha Moderador no contexto de jornalistas.
- [x] Atualizar os exemplos e as atividades individuais de Editor para a página da Biblioteca.
- [ ] Fazer futuramente a revisão do artigo canônico antigo de Editor sobre notícias e de seus metadados/aliases, sem quebrar o índice do guia. **Não executar nesta alteração**.

## Percurso de três cliques — política de cotas [atualizado]

- [x] Trocar o percurso para **Home → Estudantes → Como ingressar no IFMG → Reserva de Vagas (Cotas)**, preservando o título existente do nó mapeado.
- [ ] Conferir visualmente a composição em projeção. O exemplo não promete três cliques para qualquer informação.

## Qualidade e regressões — 16/10/2026

- [x] Confirmar que a correção do modo de tela cheia publicada em `e40917b` foi implantada com sucesso no GitHub Pages.
- [x] Unificar os casos da Biblioteca nos exercícios de Editor e no roteiro de revisão do Moderador, sem apresentar produção de notícias como tarefa do Editor.
- [x] Criar e executar `scripts/test-training.mjs` para conferir 44 slides, índice, referências, imagens, cotas, coleções, prompts, navegação por teclado e CSS fullscreen. Action bem-sucedida: `38926160624`.
- [ ] Conferir manualmente a apresentação em navegador real e projeção: uma validação por simulação de DOM e por cálculos CSS **não substitui** esta etapa.
- [ ] Verificar o rodapé do guia nos modos claro/escuro e em telas pequenas no navegador.

## Histórico e próximos registros

- **Concluído antes deste backlog:** deck 16:9 com 39 telas; estilo suíço; cores do guia e Archivo; redução do texto de apoio; atividades individuais separadas; seis slides iniciais de grafos e estruturas.
- **16/10/2026, fase 0 concluída:** capa sem ponto final, slide de apoio com IA e backlog registrados; deck passa a 40 telas.
- Novos pedidos sobre o treinamento devem ser adicionados primeiro a este arquivo, com uma fase, status e critério de aceite. Implementações concluídas devem atualizar os itens correspondentes e `log.md`.
