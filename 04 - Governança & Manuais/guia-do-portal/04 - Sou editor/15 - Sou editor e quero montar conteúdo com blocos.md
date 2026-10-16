# Sou editor e quero montar conteúdo com blocos

Na aba **Conteúdo**, use blocos para organizar a informação de acordo com o que a pessoa precisa entender, encontrar ou fazer. Esta é a referência canônica para editor, moderador e administrador.

Blocos são peças da página: cada peça resolve uma necessidade de leitura. Um bloco de introdução apresenta o assunto; um de links aponta caminhos; um de coleção mostra arquivos. Em vez de transformar toda a página em um texto longo, escolha a peça que melhor cumpre a função daquele conteúdo.

**Limite de atuação e apoio:** Como editor, monte o conteúdo com os blocos disponíveis na página e envie o resultado para revisão do moderador. Se faltar um bloco ou uma configuração necessária, descreva a necessidade ao moderador; quando depender de configuração do sistema, encaminhe ao administrador. Não use outro tipo de página apenas para contornar a ausência.

## Adicionar, mover, duplicar ou remover um bloco

1. Abra a página em edição e localize a aba **Conteúdo**.
2. Clique em **+** acima ou abaixo do ponto em que a nova informação deve aparecer.

![[imagens/manual-ifrn/image33.png|Aba Conteúdo e seletor de blocos]]

3. Escolha o tipo de bloco e preencha seus campos.
4. Use as setas para alterar a posição do bloco quando a ordem de leitura precisar mudar.
5. Duplique um bloco somente quando a estrutura realmente puder ser reaproveitada; revise o conteúdo copiado antes de salvar.
6. Use a lixeira para remover um bloco somente depois de confirmar que a informação não é necessária em outro ponto da página.
7. Pré-visualize sempre que combinar ou reorganizar blocos.

**Regra prática:** primeiro defina o que a pessoa precisa compreender ou fazer; depois escolha o bloco. Não escolha um bloco apenas porque ele produz um destaque visual.

## Texto, imagens, links, vídeos e documentos

- **Texto**: escreva em linguagem simples; use maiúsculas apenas para siglas e nomes próprios.
- **Imagem no texto**: escolha a imagem, defina o formato e informe texto alternativo quando ela for informativa. Marque como decorativa apenas quando não acrescentar informação.
- **Link no texto**: escolha link interno, externo, de e-mail, telefone ou âncora. O texto do link deve informar o destino.
- **Vídeo**: insira somente quando ele for necessário para entender ou executar a tarefa; explique seu conteúdo no texto.
- **Documento**: selecione o documento na coleção correta e confirme que a versão é vigente.

O bloco de texto é o lugar para explicar uma ideia em sequência, como esta própria instrução.

![[imagens/manual-ifrn/image29.png|Configuração de um bloco de texto]]

**Teste do texto:** retire os termos internos e leia a primeira frase. Se uma pessoa de fora não entender o assunto, reescreva antes de adicionar mais blocos.

### Abrir e fixar a barra de edição

No campo de texto, selecione um trecho para fazer a barra de edição aparecer. Ela reúne comandos de formatação e inserção, como negrito, itálico, títulos H2/H3/H4, listas, links, documentos e imagens.

1. Selecione um trecho dentro do campo de texto.
2. Para manter a barra disponível no topo do campo durante a edição, clique no **ícone de alfinete**, na extremidade direita da barra.

![[imagens/guias-contextuais/barra-edicao-flutuante.png|A barra aparece ao selecionar texto; o alfinete à direita permite fixá-la]]

3. Com a barra fixada, use seus comandos sem precisar selecionar texto apenas para fazê-la aparecer. Para formatar um trecho específico, continue selecionando o trecho que deve receber a formatação.
4. Para voltar ao modo flutuante, clique novamente no controle de fixação, à direita.

![[imagens/guias-contextuais/barra-edicao-fixa.png|Barra fixada no topo do campo, com o controle para desafixá-la à direita]]

Fixar a barra facilita a edição; essa escolha não muda a apresentação da página publicada.

### Escolher o formato de uma imagem no texto

1. Posicione o cursor onde a imagem deve entrar e use o **ícone de imagem** da barra de edição. Se a barra não estiver visível, selecione um trecho ou fixe-a conforme explicado acima; depois reposicione o cursor no local da inserção.
2. Escolha a imagem da coleção autorizada.
3. Na tela **Escolha um formato**, selecione a apresentação:

- **Largura completa:** apresenta a imagem na largura do conteúdo, com texto antes e depois dela. É a preferência para imagens no corpo de notícias.
- **Alinhado à esquerda:** posiciona a imagem à esquerda, permitindo que o texto ocupe o espaço ao lado.
- **Alinhado à direita:** posiciona a imagem à direita, permitindo que o texto ocupe o espaço ao lado.

Use alinhamento lateral quando a relação entre imagem e texto ajudar na leitura. Confira o tamanho efetivo e a disposição na pré-visualização; em telas menores, o espaço disponível pode mudar a organização.

![[imagens/guias-contextuais/imagem-formatos-texto.png|Escolha um formato: Largura completa, Alinhado à esquerda ou Alinhado à direita, com opções de acessibilidade abaixo]]

4. Se a imagem transmitir informação, preencha **Texto alternativo** com uma descrição do que importa naquele contexto. Use **A imagem é decorativa** somente quando ela não acrescentar informação ao conteúdo.
5. Clique em **Inserir imagem** e pré-visualize a página em computador, tablet e celular. Confira se a imagem preserva a informação importante e se o texto continua legível.

## Blocos de estrutura e informação

### Introdução

Use **Introdução** para dizer, logo no início, o que a pessoa encontrará na página. Preencha uma frase curta e confirme como ela ficará publicada.

![[imagens/manual-ifrn/image20.png|Configuração de um bloco de introdução]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image3.png|Exemplo publicado de bloco de introdução]]

### Informação

Use **Informação** quando uma orientação, um aviso ou um dado precisa se destacar do restante do texto. O título deve dizer o assunto; a descrição traz apenas o necessário para agir.

Quando o bloco oferecer o campo **Ícone**, escolha o ícone no [Google Icons](https://fonts.google.com/icons). Abra o ícone desejado; no painel lateral direito, procure **Icon name**, no fim do painel, e use **Copy code**. Cole no Wagtail somente o nome copiado — por exemplo, `search`. Não cole o arquivo SVG, PNG, URL ou código de incorporação.

![[imagens/guias-contextuais/campo-icone-wagtail.png|Campo Ícone do Wagtail: este campo recebe apenas o nome do ícone]]

![[imagens/manual-ifrn/image34.png|Configuração de um bloco de informação]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image47.png|Exemplo publicado de bloco de informação]]

### Coleção

Use **Coleção** para mostrar os documentos ou imagens que já foram organizados na coleção correta. Antes de publicar, confira se a coleção escolhida é da área certa e se os arquivos estão vigentes.

**Recursivo e Mostrar imagens/documentos respondem a perguntas diferentes.** Recursivo define **onde buscar**: só na coleção escolhida ou também nas subcoleções. Mostrar imagens e Mostrar documentos definem **quais tipos de arquivo exibir** nesses locais. Marcar Recursivo não escolhe o tipo de arquivo; você também precisa indicar se quer imagens, documentos ou ambos.

**Exemplo com documentos:** imagine **Arcos • Notícias > 2027**. Os PDFs estão guardados dentro de **2027**. Se você selecionar **Arcos • Notícias** e marcar apenas **Mostrar documentos**, os PDFs da subcoleção não entram. Ao marcar também **Recursivo**, eles passam a fazer parte da seleção. Para incluir fotos, marque **Mostrar imagens**. Se quiser limitar tudo ao ano de 2027, escolha diretamente essa subcoleção.

Configure cada opção pelo que você deseja mostrar ao público:

- **Coleção:** escolhe de onde o bloco vai buscar os arquivos. Selecione a coleção da área e do assunto que a página precisa apresentar.
- **Recursivo:** inclui também os arquivos das subcoleções, ou seja, das coleções que ficam dentro da escolhida. Desmarcado, considera somente os arquivos diretamente na coleção selecionada.
- **Mostrar imagens:** inclui as imagens da coleção no bloco. Deixe desmarcado se a intenção for apresentar apenas documentos.
- **Mostrar documentos:** inclui os documentos da coleção no bloco. Deixe desmarcado se quiser mostrar apenas imagens. Marque as duas opções quando precisar dos dois tipos de arquivo.
- **Ordenar documentos por data de upload:** usa a data de envio do arquivo ao portal em vez da ordem alfabética. Essa data não é necessariamente a data de publicação ou de vigência do documento. Confira a sequência na pré-visualização antes de publicar.

![[imagens/manual-ifrn/image5.png|Configuração de um bloco de coleção]]

**Exemplo:** ao escolher **Arcos • Notícias** e marcar **Recursivo** e **Mostrar imagens**, o bloco inclui as imagens das subcoleções anuais, como **2027**. Para mostrar somente as imagens de 2027, selecione diretamente essa subcoleção. Sem Recursivo, escolher a coleção-pai não inclui as imagens guardadas dentro das subcoleções dos anos.

**Como conferir:** pré-visualize a página e verifique se aparecem somente os arquivos, tipos e anos desejados. Se a lista estiver vazia, confira a coleção selecionada, os tipos marcados e se os arquivos estão em uma subcoleção. Essas opções controlam a apresentação do bloco; não substituem as permissões de acesso. Para criar uma coleção ou ajustar seus acessos, procure o administrador responsável.

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image35.png|Exemplo publicado de bloco de coleção]]

### Tabela

Use **Tabela** apenas quando o público precisa comparar dados. Dê nome às colunas e evite transformar um texto curto em tabela.

- **Cabeçalhos de tabela:** identifica quais células apresentam os nomes das colunas ou linhas, como Curso, Turno e Vagas. Escolha a configuração que corresponde à organização dos dados; não use apenas negrito para simular cabeçalhos.
- **Legenda da tabela:** informa o assunto geral, como “Vagas por curso e turno em 2027”. Ela ajuda a compreender a tabela e é útil para quem usa leitor de tela.

![[imagens/manual-ifrn/image13.png|Configuração de um bloco de tabela]]

Para preencher e ajustar a tabela:

1. Digite nas células ou copie um conjunto de células do **Excel** ou uma **tabela de outra página da internet**. Clique na célula inicial da tabela do bloco e cole diretamente ali.
2. Confira se os valores ficaram nas linhas e colunas corretas. Revise especialmente cabeçalhos, datas e números; não presuma que a formatação da origem será preservada.
3. Para acrescentar ou remover linhas e colunas, selecione uma célula e use os controles da tabela para inserir ou excluir a linha ou coluna correspondente. Antes de excluir, confira quais dados serão removidos.
4. Ajuste os cabeçalhos e a legenda depois de colar ou reorganizar os dados.
5. Pré-visualize, inclusive em uma tela menor, e confira se a tabela continua compreensível.

**Exemplo:** compare modalidades, horários e vagas em uma tabela; para explicar como solicitar um serviço, use texto em passos.

### Links e link único

Use **Links** quando há mais de um próximo passo; use **Link único** quando uma ação é claramente a principal. Em ambos os casos, o texto deve dizer o destino, não “clique aqui”.

> [!IMPORTANT]
> Estes são **blocos dentro do conteúdo de uma página**. Eles não criam uma nova página ou rota na árvore do Portal. Se você precisa criar uma entrada na árvore que redireciona para outro endereço, use o tipo de página **Link** em [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/07 - Sou editor e quero criar um link|Criar um link de redirecionamento]].

Ao configurar um item de link dentro de um bloco, informe o texto que a pessoa verá e escolha ou cole o destino correspondente.

Escolha o tipo de destino conforme o que a pessoa precisa abrir:

- **Página:** selecione uma página do próprio portal pelo seletor. Por exemplo, a página de um curso ou de um serviço.
- **Documento:** selecione um arquivo cadastrado em **Documentos**, como um edital ou regulamento. Confira se é a versão oficial e vigente.
- **URL externa:** informe o endereço completo de outro site, como um formulário de inscrição. Copie o endereço da página de destino e confira se ele abre o conteúdo correto.

Para páginas e documentos do portal, prefira os seletores correspondentes em vez de colar seus endereços como URL externa. O texto do link deve explicar o destino ou a ação, como **Consultar o curso**, **Acesse o edital** ou **Faça sua inscrição**.

Depois de configurar, confira o destino na pré-visualização. Se a página ou o documento não aparecer no seletor, confirme se já existe no local correto. Peça apoio ao moderador responsável pela área e, se houver restrição de acesso, ao administrador; não crie uma cópia apenas para conseguir inserir o link.

![[imagens/manual-ifrn/image22.png|Exemplo de link inserido dentro de um bloco de conteúdo, com título, destino e ícone]]

No campo **Ícone** do bloco **Links**, siga o mesmo processo: escolha no Google Icons, abra o painel lateral direito e copie apenas o valor de **Icon name**. Prefira um ícone que reforce a ação, como `search` para busca ou `download` para baixar um arquivo; não escolha apenas por aparência.

![[imagens/manual-ifrn/image7.png|Configuração de um bloco de links]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image18.png|Exemplo publicado de bloco de links]]

#### Link único como chamada para ação

Use **Link único** como uma chamada para ação (CTA) somente quando a pessoa tiver uma ação importante e clara para fazer, como acessar um formulário, consultar um calendário ou baixar um documento essencial. Não use esse bloco apenas para destacar um link comum.

- **Título**: é o texto do botão. Comece com um verbo de ação, como **Acessar**, **Consultar**, **Baixar** ou **Solicitar**.
- **Descrição**: explica o que a pessoa encontrará ou por que deve agir. Ela aparece ao lado do botão no estilo Cartão.

#### Estilo Cartão: use para CTAs

Escolha **Cartão** quando a ação precisa de contexto ou é o próximo passo principal da página. É o estilo recomendado para CTAs, pois mantém a descrição visível junto ao botão.

![[imagens/guias-contextuais/link-unico-cartao-configuracao.png|Configuração de Link único no estilo Cartão: título é o botão e a descrição explica a ação]]

*Como este CTA renderiza no site:*![[imagens/guias-contextuais/link-unico-cartao-publicado.png|CTA de monitoria publicado no estilo Cartão, com descrição e botão Acessar]]

**Exemplo:** para a monitoria, use o título **Acessar** e a descrição “Consulte os horários de monitoria para encontrar apoio nas disciplinas do seu curso.”

#### Estilo Padrão: use apenas para ação secundária

No estilo **Padrão**, o resultado publicado mostra somente o botão; a descrição não fica visível. Use-o apenas quando o rótulo já for suficiente e o link não for a chamada principal da página. Se a pessoa precisa entender o que encontrará antes de clicar, escolha **Cartão**.

![[imagens/guias-contextuais/link-unico-padrao-configuracao.png|Configuração de Link único no estilo Padrão, com descrição preenchida]]

*Como esse link renderiza no site:*![[imagens/guias-contextuais/link-unico-padrao-publicado.png|Link único no estilo Padrão: apenas o botão Acessar é exibido]]

### Cards

Use **Cards** para oferecer caminhos relacionados, como serviços de uma área. Cada card precisa deixar claro o que a pessoa encontrará depois do clique.

No bloco **Cards**, configure a apresentação do conjunto e depois preencha cada item da **Lista**:

- **Estilo do card:** escolhe a apresentação visual. Confira o efeito da opção escolhida na pré-visualização.
- **Formato da capa:** define a apresentação da imagem de capa. Na captura, a opção selecionada é **Sem capa**. Confira esse campo antes de escolher uma imagem para os cartões.
- **Lista:** reúne os cartões. Use **+** para acrescentar outro item; cada item tem seus próprios textos e destino.

Em cada cartão, preencha:

- **Título:** o nome do conteúdo ou serviço, como **SUAP Estudantil**.
- **Chapéu:** o texto curto que aparece acima do título e indica o tema ou a categoria. Por exemplo, **Vida acadêmica** acima de **SUAP Estudantil**. Use-o para acrescentar contexto, sem repetir o título; na tela apresentada, ele é opcional.
- **Descrição:** explica o que a pessoa encontrará ou poderá fazer no destino. Por exemplo: “Consulte suas informações acadêmicas no SUAP.”
- **Texto do link:** é o rótulo da ação. Prefira algo descritivo, como **Acessar o SUAP**, em vez de “clique aqui”.
- **Capa:** seleciona a imagem do cartão. Confira se o formato escolhido permite exibi-la e se o enquadramento ajuda a reconhecer o conteúdo.
- **Página interna, Documento interno ou URL externa:** escolha o destino adequado. Use o seletor para páginas e documentos do portal ou informe o endereço completo de outro site. Preencha o destino que corresponde à ação do cartão.

![[imagens/guias-contextuais/cards-campos-chapeu.png|Campos de Cards no Portal IFMG: configuração do conjunto e textos, capa e destino de cada cartão]]

**Como conferir:** pré-visualize a página e verifique o chapéu acima do título, a clareza da descrição, a apresentação da capa e o destino do link. Os campos com asterisco são obrigatórios; os demais devem ser preenchidos quando ajudarem a pessoa a escolher o caminho.

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image48.png|Exemplo publicado de cards]]

### Galeria

Use **Galeria** quando as imagens precisam ser vistas em conjunto, como o registro visual de um evento ou espaço do campus. Organize as fotos com legendas objetivas e confirme que todas possuem texto alternativo preenchido.

![[imagens/manual-ifrn/image17.png|Configuração de um bloco de galeria]]

### Citação

Use **Citação** apenas quando a autoria, a fala e o contexto puderem ser confirmados e agregarem valor direto ao entendimento da página. Destaque a frase principal e indique o nome e cargo de quem declarou.

## Blocos de tempo, consulta e apoio

### Linha do tempo

Use **Linha do tempo** quando as etapas precisam ser compreendidas em ordem. Uma etapa por vez é mais clara do que um parágrafo cheio de datas.

Cada item chamado **Evento** representa um marco da sequência. Esse item pertence ao bloco; não é necessário criar uma página do tipo Evento para preenchê-lo.

- **Data:** informa quando o marco ocorreu. O campo aceita uma indicação escrita, como **Até 2008** ou **2008**, conforme a captura. Use uma forma clara e consistente ao longo da sequência.
- **Descrição:** resume o que aconteceu naquele marco. Escreva uma frase curta que permita entender o fato sem depender dos outros itens.
- **Texto:** permite acrescentar detalhes quando a descrição não for suficiente. Na tela apresentada, ele é opcional; deixe vazio quando não houver informação complementar necessária.

![[imagens/guias-contextuais/linha-do-tempo-campos.png|Cada Evento da Linha do Tempo tem Data e Descrição obrigatórias e Texto opcional; as setas permitem reorganizar os itens]]

Para montar a sequência:

1. Use **+** dentro da Linha do Tempo para adicionar um **Evento**.
2. Preencha Data e Descrição e, quando necessário, Texto.
3. Repita para cada marco. Por exemplo: **2027 — Início do projeto** e **2028 — Ampliação das atividades**. Use somente datas e fatos confirmados pela fonte responsável.
4. Organize os itens em ordem cronológica com as setas ou o controle de arrastar do próprio Evento. Não presuma que o campo Data reorganiza a sequência automaticamente.
5. Se duplicar um item para aproveitar sua estrutura, revise todos os campos. Antes de usar a lixeira, confira qual Evento será removido.
6. Pré-visualize e confira a ordem, as datas e se cada descrição explica um marco diferente, inclusive em uma tela menor.

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image37.png|Exemplo publicado de linha do tempo]]

### Calendário

Use **Calendário** quando a pessoa precisa consultar datas e atividades. Revise dia, mês e ano antes de enviar para moderação.

Cada item chamado **Evento** representa uma atividade ou data do calendário. Ele é um item deste bloco, separado da página do tipo Evento.

- **Data:** informa quando a atividade acontece. É obrigatória. Use uma indicação clara e inclua o ano para evitar dúvidas sobre a vigência.
- **Dia da Semana:** informa o dia correspondente, como **segunda-feira**. Na tela apresentada, é opcional. Se preencher, confira se corresponde à data; não presuma que será calculado automaticamente.
- **Atividade:** explica o que acontece naquela data. É obrigatória. Escreva o nome da atividade e as informações necessárias para compreendê-la, como horário ou local quando forem relevantes e estiverem confirmados.

![[imagens/guias-contextuais/calendario-campos.png|Cada Evento do Calendário tem Data e Atividade obrigatórias e Dia da Semana opcional]]

Para preencher o calendário:

1. Use **+** dentro do Calendário para adicionar um **Evento**.
2. Preencha Data e Atividade. Acrescente Dia da Semana se ajudar na consulta.
3. Repita para as demais datas e organize a sequência com as setas ou o controle de arrastar de cada item. Não presuma que o campo Data ordena os itens automaticamente.
4. Se duplicar um item, revise a data, o dia da semana e a atividade. Antes de usar a lixeira, confira qual item será removido.
5. Pré-visualize, inclusive em telas menores, e confira se a sequência é compreensível, se as datas estão corretas e se as atividades correspondem à programação oficial.

**Exemplo de preenchimento:** Data **15/03/2027**, Dia da Semana **segunda-feira** e Atividade **Abertura das inscrições para a oficina, às 9h**. O exemplo é ilustrativo; use as informações confirmadas pela área responsável. Se houver dúvida sobre uma data ou atividade, peça validação antes de enviar a página para moderação.

No exemplo abaixo, cada item mostra a **Data** em destaque, o **Dia da Semana** ao lado e a **Atividade** abaixo. Os textos são ilustrativos.

![[imagens/guias-contextuais/calendario-renderizado.png|Calendário renderizado no Portal IFMG: data e dia da semana acima da descrição de cada atividade]]

### FAQ

Use **FAQ** para dúvidas que se repetem. Escreva a pergunta como alguém realmente faria e responda sem exigir conhecimento prévio.

![[imagens/manual-ifrn/image25.png|Configuração de um bloco de FAQ]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image46.png|Exemplo publicado de FAQ]]

### Lista definida

Use **Lista definida** para relacionar um nome e seu valor, como “Responsável: setor X” ou “Carga horária: 40 horas”.

Quando o módulo aparecer como **Definições** e oferecer campo de ícone, pesquise-o no Google Icons e cole somente o **Icon name** copiado do painel lateral direito.

![[imagens/manual-ifrn/image32.png|Configuração de uma lista definida]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image39.png|Exemplo publicado de lista definida]]

### Estatística

Use **Estatística** para destacar um número que ajuda a compreender o conteúdo, acompanhado de um rótulo claro. Se o módulo oferecer o campo **Ícone**, escolha-o no Google Icons e copie somente o **Icon name** no painel lateral direito. Antes de publicar, confirme a fonte, a data de referência e se o número tem contexto suficiente para não induzir uma interpretação errada.

## Como escolher e copiar um ícone

1. Abra o campo **Ícone** no módulo que está editando: Informação, Links, Definições ou Estatística.
2. Em outra aba, acesse [Google Icons](https://fonts.google.com/icons) e pesquise uma palavra que descreva a ação ou a informação.
3. Clique no ícone escolhido para abrir o painel lateral direito.

![[imagens/guias-contextuais/painel-google-icons.png|Painel lateral direito aberto após escolher um ícone no Google Icons]]

4. No final desse painel, localize **Icon name** e clique em **Copy code**.

![[imagens/guias-contextuais/icon-name-google-icons.png|Campo Icon name no fim do painel lateral: exemplo do nome search e botão Copy code]]

5. Cole no campo do Wagtail somente o nome recebido, como `search`.
6. Pré-visualize o bloco e confira se o ícone reforça o sentido do texto, sem substituir o rótulo.

**Como conferir:** se o ícone não carregar, revise se foi colado apenas o nome. `search` funciona como nome; uma URL, o download SVG ou o código da página não funcionam nesse campo.

**Como conferir qualquer bloco:** faça a pré-visualização e pergunte “esta peça ajuda a pessoa a entender, encontrar ou fazer algo?”. Se a resposta for não, ela é decoração ou está no lugar errado.

**Resultado esperado:** uma página que pode ser lida por partes, com cada bloco servindo a uma intenção clara. Se você não consegue explicar em uma frase por que um bloco está ali, provavelmente ele pode ser removido, dividido ou trocado.

Para revisar a página completa antes de encaminhá-la, volte a [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/24 - Sou editor e quero criar ou editar uma página|Criar ou editar uma página]].
