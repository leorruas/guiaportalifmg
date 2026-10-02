# Sou editor e quero criar um link de redirecionamento

Use o tipo de página **Link** quando uma opção na árvore ou no menu do Portal deve levar a pessoa diretamente para **outro endereço**, sem criar uma página de conteúdo intermediária.

> [!IMPORTANT]
> Existem dois recursos diferentes chamados “link” no Wagtail. Este artigo trata do **tipo de página Link**, usado como redirecionamento na árvore do Portal. Para inserir links dentro do conteúdo de uma página, use os blocos **Links** ou **Link único** em [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/15 - Sou editor e quero montar conteúdo com blocos|Montar uma página com blocos de conteúdo]].

O tipo de página **Link** cria uma entrada na estrutura do Portal que possui um endereço próprio, mas encaminha a pessoa para a **URL de destino** configurada.

Por exemplo: se a página que você quer destacar está em `/evento/nome-do-evento/`, você pode criar um Link em `/evento/` e configurá-lo para redirecionar para a página completa. Assim, a rota curta funciona como um caminho de acesso ao destino real.

Use esse tipo também para levar a um sistema, formulário, página, documento ou outra fonte oficial já existente. Se a pessoa precisa ler explicações, requisitos ou orientações antes de seguir para outro lugar, crie ou atualize uma página de conteúdo em vez de usar apenas um Link.

> [!NOTE]
> O endereço `portal.ifmg.edu.br` é usado atualmente no ambiente de homologação. O domínio público previsto para o Portal é `ifmg.edu.br`. Por isso, quando o domínio não for importante para a instrução, este guia prefere exemplos por caminho, como `/evento/`, para que o procedimento continue válido após a mudança de domínio.

## Criar o Link

1. Em **Páginas**, abra a página-pai em que o novo acesso deve aparecer.
2. Clique em **Adicionar subpágina**.
3. Escolha o tipo **Link**.

Na tela de escolha de tipo, a indicação **Páginas usando Link** se refere às páginas que já usam esse tipo. O endereço de destino é definido somente depois, no campo **URL**.

4. Na aba **Conteúdo**, preencha **Título** com o nome que deve ser reconhecido pelo público.

   Prefira um título que explique o destino, como **Acessar o SUAP**, **Consultar o calendário acadêmico** ou **Ouvidoria**. Evite títulos genéricos como “Saiba mais” quando eles não deixam claro para onde a pessoa será levada.

5. Em **URL**, cole o endereço completo para o qual o Link deve redirecionar.

6. Abra o endereço informado e confirme que ele leva ao destino correto, está disponível e corresponde ao título usado no Portal.

![[imagens/guias-contextuais/configuracao-pagina-link.webp|Preenchimento de formulário de página do tipo Link no Wagtail]]

## Fazer o Link aparecer no menu

Criar o Link não faz com que ele apareça automaticamente nos menus do Portal.

1. Abra a aba **Promover**.
2. Vá até **Para menus de sites**.
3. Marque **Exibir nos menus** quando esse Link deve aparecer na navegação gerada pelo Portal.

Se **Exibir nos menus** não estiver marcado, o Link pode continuar existindo na árvore de páginas, mas não será exibido nos menus gerados automaticamente.

A aba **Promover** também apresenta as opções gerais de slug, tag de título e meta descrição usadas nas páginas. Para entender quando revisar esses campos, consulte:

[[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/17 - Sou editor e quero configurar busca e menu de uma página|Definir como a página aparece na busca e na navegação]]

## Salvar e encaminhar

O perfil mínimo para criar esse tipo é **editor**. Moderador e administrador também podem executar a tarefa porque herdam as permissões editoriais dentro do próprio escopo.

Se você é **editor**, salve o Link como rascunho e, depois de conferir título, destino e presença no menu, encaminhe-o para moderação:

[[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/20 - Sou editor e quero enviar conteúdo para moderação|Enviar uma página pronta para revisão]]

Se você é **moderador** ou **administrador**, siga o fluxo de revisão e publicação correspondente ao seu perfil.

## Antes de concluir

- [ ] O título permite reconhecer o destino antes do clique?
- [ ] A URL abre a fonte oficial correta?
- [ ] A rota criada para o Link está no ponto da estrutura em que o público esperaria encontrá-la?
- [ ] Se deve aparecer no menu, **Promover → Para menus de sites → Exibir nos menus** está marcado?
- [ ] O Link realmente substitui uma página de conteúdo, ou o público precisa de contexto antes de acessar o destino?

**Como saber que terminou:** o Link está no ponto correto da estrutura, leva ao endereço esperado e aparece no menu somente quando essa navegação foi intencionalmente configurada.
