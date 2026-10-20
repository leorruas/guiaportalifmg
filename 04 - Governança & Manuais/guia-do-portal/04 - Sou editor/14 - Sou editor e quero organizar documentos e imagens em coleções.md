# Sou editor e quero organizar documentos e imagens em coleções

Use esta tarefa para trabalhar com documentos e imagens dentro de **coleções já autorizadas** para o seu grupo. Editor, moderador e administrador usam o mesmo procedimento quando estão organizando mídia.

Uma coleção funciona como um armário compartilhado: reúne arquivos de uma área e também limita quem pode usá-los. Usar uma coleção existente é diferente de criar a estrutura ou mudar suas permissões.

## Escolher a coleção correta

1. Abra **Documentos** ou **Imagens**.
2. Ao adicionar um item, escolha a coleção que corresponde à área e à finalidade do arquivo.
3. Não use uma coleção de outra área apenas porque ela está disponível ou parece conveniente.
4. Dê ao item um título que permita reconhecê-lo sem abrir o arquivo.

Para imagens, consulte [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/12 - Sou editor e quero adicionar ou atualizar uma imagem|Adicionar ou atualizar uma imagem]].

Para documentos, consulte [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/13 - Sou editor e quero adicionar ou atualizar um documento|Adicionar ou atualizar um documento]].

## Navegar pela estrutura autorizada

**Adicionar uma imagem** ou **Adicionar um documento** leva a Coleções. Quem tiver acesso pode começar por **Configurações → Coleções**. Use a seta à direita para entrar no próximo nível e confira o caminho no topo.

![[imagens/capturas-wagtail/W08a-colecoes-raiz.png|Raiz de coleções com Documento, Imagem e Sub-coleção]]

*Homologação IFMG, 20/10/2026: a seta da direita entra nas subcoleções; os botões iniciam ações no destino escolhido.*

![[imagens/capturas-wagtail/W08c-estrutura-atual-colecoes.png|Coleções por unidade e finalidade]]

*Homologação IFMG, 20/10/2026: estrutura observada: unidades com número/nome, cursos, servidores, arquivos institucionais em 2026, acesso à informação e Notícias.*

Em **Notícias**, os arquivos são separados por ano. **Coleção → 2026** (arquivos institucionais) e **Coleção → Notícias → 2026** são destinos diferentes.

![[imagens/capturas-wagtail/W08d-noticias-por-ano.png|Notícias com 2026 e 2027]]

*Homologação IFMG, 20/10/2026: use o ano dos arquivos para facilitar a localização.*

No campus demonstrado, o caminho é **Coleção → U_01 Ouro Branco → Notícias_OuroBranco → 2026**. Não generalize suas subcoleções a todas as unidades.

![[imagens/capturas-wagtail/W08e-colecoes-ouro-branco.png|Subcoleções de Ouro Branco]]

*Homologação IFMG, 20/10/2026: entre em Notícias_OuroBranco para os arquivos de notícias desse campus.*

![[imagens/capturas-wagtail/W08f-noticias-ouro-branco-ano.png|Notícias de Ouro Branco com ano 2026]]

*Homologação IFMG, 20/10/2026: o caminho no topo confirma o escopo do campus.*

## Consultar os arquivos de uma coleção

Abra a **seta do menu de ações junto a Sub-coleção**, distinta da seta que navega para o próximo nível. Escolha **Ver Documentos** ou **Ver Imagens**.

![[imagens/capturas-wagtail/colecao-menu-ver-arquivos.png|Menu com Ver Documentos e Ver Imagens]]

*Homologação IFMG, 20/10/2026: consultar os arquivos não exige editar a coleção.*

Confira o filtro de coleção aplicado no resultado. Uma listagem vazia corresponde à consulta mostrada, sem comprovar ausência em outros destinos ou subcoleções.

![[imagens/capturas-wagtail/colecao-documentos-filtrados.png|Documentos com filtro de coleção e resultado vazio]]

*Homologação IFMG, 20/10/2026: o filtro no topo identifica a coleção consultada.*

![[imagens/capturas-wagtail/colecao-imagens-filtradas.png|Imagens com filtro de coleção e uma correspondência]]

*Homologação IFMG, 20/10/2026: a mesma coleção pode ter imagens mesmo sem documentos.*


## Usar uma coleção em uma página

1. Na página em edição, use **Conteúdo → + → Coleção**. Clique em **Escolher uma coleção** no bloco.

![[imagens/capturas-wagtail/W11a-bloco-colecao-opcoes.png|Bloco Coleção com seletor e opções de exibição]]

*Homologação IFMG, 20/10/2026: Recursivo, Mostrar imagens, Mostrar documentos e Ordenar documentos por data de upload são opções independentes; a captura mostra todas desmarcadas.*

2. No seletor **Escolha uma coleção**, use a seta para entrar nos próximos níveis. O caminho no topo ajuda a conferir onde você está.

![[imagens/capturas-wagtail/W11b-escolher-colecao-raiz.png|Seletor Escolha uma coleção no nível Root]]

*Homologação IFMG, 20/10/2026: a seta na linha Coleção permite navegar para as subcoleções; abrir o seletor não cria uma coleção nova.*

3. Navegue até o destino autorizado. No exemplo confirmado, siga **Root → Coleção → U_01 Ouro Branco → Vida Acadêmica → 04 Documentos de curso** e escolha **01 Técnico em Administração**.

![[imagens/capturas-wagtail/W11c-colecoes-documentos-curso.png|Lista de coleções de documentos de curso de Ouro Branco]]

*Homologação IFMG, 20/10/2026: a captura mostra o nível de documentos de curso antes da escolha de 01 Técnico em Administração; não demonstra ainda o resultado publicado.*

4. De volta ao bloco, confira a coleção escolhida e marque os tipos de arquivo que devem aparecer. Ative **Recursivo** somente se quiser incluir subcoleções. Confira a ordenação e pré-visualize o resultado.


Para entender cada opção e conferir o resultado, consulte [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/15 - Sou editor e quero montar conteúdo com blocos|Montar conteúdo com blocos]].

## Atualizar ou remover itens

Antes de substituir ou remover um documento ou imagem, confirme se ele é reutilizado em outras páginas.

- **Substitua** quando a nova versão deve valer em todos os usos do item.
- **Crie um novo item** quando versões diferentes precisam continuar disponíveis.
- **Remova** somente quando o arquivo não tiver mais uso, valor histórico ou obrigação de permanência.

## Quando a coleção não existe ou o acesso está errado

Não crie um destino improvisado. Registre qual área responde pelos arquivos, qual será a finalidade da coleção e quais grupos precisam usá-la.

A criação de coleção e a alteração de acesso são tarefas administrativas:

[[04 - Governança & Manuais/guia-do-portal/02 - Sou administrador/08 - Sou administrador e quero criar uma coleção e definir seus acessos|Criar uma coleção e definir seus acessos]]

**Como saber que está organizado:** uma pessoa da equipe consegue abrir a coleção, entender o que cada item é, identificar qual versão está vigente e saber em que contexto os arquivos devem ser usados.
