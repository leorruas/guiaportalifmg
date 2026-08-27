# Sou editor e quero montar conteúdo com blocos

Na aba **Conteúdo**, adicione o bloco que corresponde à informação que precisa ser apresentada. Clique em **+** para incluir um bloco, use as setas para reordenar e a lixeira para remover. Pré-visualize sempre que combinar blocos diferentes.

Blocos são peças da página: cada peça resolve uma necessidade de leitura. Um bloco de introdução apresenta o assunto; um de links aponta caminhos; um de coleção mostra arquivos. Em vez de tentar colocar tudo em um texto longo, escolha a peça que ajuda a pessoa a encontrar e entender aquela informação.

Comece abrindo a aba **Conteúdo** e clicando em **+** no ponto em que a nova informação deve aparecer.

![[imagens/manual-ifrn/image33.png|Aba Conteúdo e seletor de blocos]]

## Texto, imagens, links, vídeos e documentos

- **Texto**: escreva em linguagem simples; use maiúsculas apenas para siglas e nomes próprios.
- **Imagem no texto**: escolha a imagem, defina o formato e informe texto alternativo quando ela for informativa. Marque como decorativa apenas quando não acrescentar informação.
- **Link no texto**: escolha link interno, externo, de e-mail, telefone ou âncora. O texto do link deve informar o destino.
- **Vídeo**: insira somente quando ele for necessário para entender ou executar a tarefa; explique seu conteúdo no texto.
- **Documento**: selecione o documento na coleção correta e confirme que a versão é vigente.

O bloco de texto é o lugar para explicar uma ideia em sequência, como esta própria instrução.

![[imagens/manual-ifrn/image29.png|Configuração de um bloco de texto]]

**Teste do texto:** retire os termos internos e leia a primeira frase. Se uma pessoa de fora não entender o assunto, reescreva antes de adicionar mais blocos.

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

![[imagens/manual-ifrn/image5.png|Configuração de um bloco de coleção]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image35.png|Exemplo publicado de bloco de coleção]]

### Tabela

Use **Tabela** apenas quando o público precisa comparar dados. Dê nome às colunas e evite transformar um texto curto em tabela.

![[imagens/manual-ifrn/image13.png|Configuração de um bloco de tabela]]

**Exemplo:** compare modalidades, horários e vagas em uma tabela; para explicar como solicitar um serviço, use texto em passos.

### Links e link único

Use **Links** quando há mais de um próximo passo; use **Link único** quando uma ação é claramente a principal. Em ambos os casos, o texto deve dizer o destino, não “clique aqui”.

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

![[imagens/manual-ifrn/image24.png|Configuração de um bloco de cards]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image48.png|Exemplo publicado de cards]]

### Galeria

Use **Galeria** quando as imagens precisam ser vistas em conjunto, como o registro visual de um evento ou espaço do campus. Organize as fotos com legendas objetivas e confirme que todas possuem texto alternativo preenchido.

![[imagens/manual-ifrn/image17.png|Configuração de um bloco de galeria]]

### Citação

Use **Citação** apenas quando a autoria, a fala e o contexto puderem ser confirmados e agregarem valor direto ao entendimento da página. Destaque a frase principal e indique o nome e cargo de quem declarou.

## Blocos de tempo, consulta e apoio

### Linha do tempo

Use **Linha do tempo** quando as etapas precisam ser compreendidas em ordem. Uma etapa por vez é mais clara do que um parágrafo cheio de datas.

![[imagens/manual-ifrn/image44.png|Configuração de uma linha do tempo]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image37.png|Exemplo publicado de linha do tempo]]

### Calendário

Use **Calendário** quando a pessoa precisa consultar datas e atividades. Revise dia, mês e ano antes de enviar para moderação.

![[imagens/manual-ifrn/image42.png|Configuração de um bloco de calendário]]

*Como este elemento renderiza no site:*![[imagens/manual-ifrn/image23.png|Exemplo publicado de calendário]]

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

[[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/16 - Sou editor e quero usar blocos para montar uma página|Voltar a usar blocos]]
