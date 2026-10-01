# Como usar uma IA como apoio para trabalhar com este guia

Uma IA, como ChatGPT, Gemini, Claude ou outro assistente, pode ajudar você a consultar este guia, entender termos do Wagtail e preparar melhor uma tarefa antes de executar no portal. Ela funciona como uma pessoa de apoio para leitura, revisão e organização do trabalho.

Use a IA para transformar uma dúvida em checklist, revisar um texto, comparar uma decisão com as orientações do guia, preparar uma imagem para publicação, sugerir uma estrutura de blocos ou explicar um procedimento em palavras mais simples. A decisão final continua sendo da pessoa responsável pelo conteúdo, pelo grupo ou pela publicação.

## O que a IA pode ajudar a resolver

A IA pode ajudar quando você sabe o que precisa fazer, mas ainda não sabe onde procurar no guia ou como organizar a tarefa.

Exemplos:

- entender qual página do guia consultar para criar uma notícia, um curso, um processo seletivo ou uma página institucional;
- resumir os passos antes de entrar no Wagtail;
- revisar título, subtítulo, resumo, etiquetas e chamada de uma página;
- transformar uma solicitação recebida por e-mail em lista de informações que faltam;
- explicar termos como coleção, grupo, moderação, rascunho, metadados e menu;
- apontar quando a ação parece depender de editor, moderador ou administrador;
- ajudar a escrever uma descrição de imagem para pessoas que não conseguem vê-la e avaliar se uma legenda seria útil;
- sugerir quais blocos do Portal podem ajudar a organizar um conteúdo e quando é melhor manter apenas texto simples.

A IA não deve publicar por você, confirmar permissão no sistema, inventar informação institucional nem substituir a validação da área responsável.

## Antes de pedir ajuda

Tenha em mãos o que você já sabe sobre a tarefa: o tipo de conteúdo, a área responsável, a fonte oficial, o prazo, os links que precisam entrar na página e o papel que você exerce no Wagtail.

Se ainda não sabe seu papel, consulte [[04 - Governança & Manuais/guia-do-portal/00 - Comece aqui/01 - Como utilizar este guia|Como utilizar este guia]] e escolha a página que corresponde à permissão que você está usando naquele momento.

Não cole senhas, dados pessoais, documentos internos restritos ou informações sigilosas no assistente. Quando precisar usar um documento como referência, prefira resumir o necessário ou usar apenas trechos que possam ser compartilhados.

## Uma regra para todos os prompts

A IA deve tratar informação ausente como uma pergunta, não como espaço para completar por conta própria. Quando faltar contexto necessário para orientar uma decisão, ela deve perguntar antes de continuar.

Quando uma informação puder ter mudado, peça que a IA a verifique em fonte oficial ou confiável, se ela tiver acesso à internet. A resposta deve mostrar a fonte consultada, o link e a data de publicação ou atualização quando essas informações estiverem disponíveis.

Uma boa resposta deve separar três situações:

- **confirmado no guia:** a orientação está documentada no Guia do Portal IFMG;
- **confirmado em fonte externa:** a informação foi consultada em outra fonte, que deve ser identificada;
- **precisa de confirmação:** a informação não foi encontrada, está incompleta, apresenta conflito entre fontes ou pode estar desatualizada.

Se a IA encontrar uma informação externa cuja vigência não esteja clara, ela deve mostrar o que encontrou e pedir que você confirme se aquela ainda é a informação válida para o caso. Se ela não tiver acesso à internet, deve dizer isso em vez de afirmar que pesquisou.

## Prompt para apontar a IA para este guia

Copie o texto abaixo no assistente de sua preferência. Substitua os trechos entre colchetes pelas informações da sua tarefa.

```prompt
Você vai me ajudar a trabalhar com o Guia do Portal IFMG, que está neste repositório:
https://github.com/leorruas/guiaportalifmg

Antes de responder, considere estas regras:
- Leia primeiro a estrutura do guia e identifique a página mais adequada ao meu papel e à minha tarefa.
- Use linguagem simples, frases curtas e explicações práticas.
- Quando citar uma orientação, informe qual arquivo ou seção do guia você usou.
- Não invente links, permissões, telas, botões, campos, procedimentos ou informações institucionais.
- Quando faltar informação necessária, não complete por inferência. Faça perguntas objetivas antes de continuar.
- Se uma informação puder ter mudado e você tiver acesso à internet, pesquise primeiro em fontes oficiais ou confiáveis.
- Quando pesquisar, mostre a fonte, o link e a data de publicação ou atualização quando estiver disponível.
- Se não conseguir verificar se a informação encontrada ainda está vigente, mostre o que encontrou e pergunte se essa ainda é a informação válida para o caso.
- Se você não tiver acesso à internet, diga isso claramente e não afirme que pesquisou.
- Separe o que está confirmado no guia, o que veio de fonte externa e o que ainda precisa de confirmação.
- Separe também o que posso fazer diretamente do que depende de editor, moderador, administrador ou validação institucional.
- Não trate suas respostas como autorização para publicar no portal.

Meu papel no Wagtail é: [gestor, editor, moderador, administrador ou ainda não sei].
Minha tarefa é: [descreva o que você precisa fazer].
O conteúdo ou situação é: [resuma a página, notícia, documento, curso, processo seletivo ou solicitação].
O que eu quero receber agora é: [explicação, checklist, revisão de texto, próximos passos ou perguntas que preciso responder].
```

## Para entender uma tarefa

Use quando a solicitação chegou de forma incompleta ou quando você ainda não sabe por onde começar.

```prompt
Com base no Guia do Portal IFMG, transforme esta demanda em um passo a passo simples.

O guia está neste repositório:
https://github.com/leorruas/guiaportalifmg

Minha demanda é: [cole ou resuma a solicitação].
Meu papel no Wagtail é: [papel].

Antes de montar o passo a passo:
- se faltar uma informação que possa mudar a orientação, não suponha uma resposta; faça perguntas objetivas;
- se alguma regra, prazo, endereço, documento, contato ou informação institucional puder ter mudado e você tiver acesso à internet, pesquise em fonte oficial ou confiável;
- mostre a fonte, o link e a data da informação encontrada quando estiver disponível;
- se a vigência não estiver clara, apresente a informação encontrada e pergunte se ela continua válida;
- se não puder pesquisar, diga isso;
- diferencie o que está confirmado no guia, o que veio de outra fonte e o que ainda precisa ser confirmado.

Depois, diga:
- o que esta ação resolve;
- qual página do guia devo consultar;
- o que preciso ter em mãos antes de começar;
- quais passos devo seguir;
- como conferir se deu certo;
- o que depende de outra pessoa ou de permissão que talvez eu não tenha.
```

O resultado esperado é uma lista que ajude você a entrar no Wagtail já sabendo o que procurar, quais informações conferir e quando pedir apoio.

## Para revisar um texto antes de publicar

Use quando o conteúdo já existe, mas precisa ficar mais claro, acessível e adequado ao portal.

```prompt
Revise o texto abaixo usando as orientações do Guia do Portal IFMG sobre linguagem simples, acessibilidade, SEO, metadados e organização da informação.

O guia está neste repositório:
https://github.com/leorruas/guiaportalifmg

Texto:
[cole o texto que pode ser compartilhado]

Contexto:
- Tipo de página: [notícia, curso, página institucional, processo seletivo ou outro].
- Público principal: [quem precisa entender a informação].
- Ação esperada da pessoa leitora: [o que ela deve fazer depois de ler].

Antes de revisar:
- não invente informações para preencher lacunas do texto;
- se faltar contexto necessário para a revisão, faça perguntas antes de reescrever;
- se datas, normas, contatos, valores, prazos, documentos ou outras informações puderem ter mudado e você tiver acesso à internet, pesquise em fonte oficial ou confiável;
- mostre a fonte, o link e a data da informação encontrada quando estiver disponível;
- se não estiver claro se a informação continua vigente, mostre o que encontrou e peça minha confirmação;
- se não puder pesquisar, diga isso;
- diferencie o que está confirmado no guia, o que veio de fonte externa e o que ainda precisa de confirmação.

Quero que você devolva:
- uma versão revisada em linguagem simples;
- sugestões de título, resumo e etiquetas, quando fizer sentido;
- pontos que precisam ser confirmados com a fonte oficial;
- cuidados antes de enviar para moderação ou publicar.
```

Depois da revisão, compare a versão sugerida com a fonte oficial. Datas, nomes, valores, links, documentos e normas precisam ser conferidos antes de entrar no portal.

## Para transformar uma dúvida em checklist

Use quando você quer conferir se uma página está pronta antes de enviar, revisar ou publicar.

```prompt
Monte um checklist com base no Guia do Portal IFMG para eu conferir esta tarefa no Wagtail.

O guia está neste repositório:
https://github.com/leorruas/guiaportalifmg

Tarefa: [descreva a tarefa].
Papel: [gestor, editor, moderador ou administrador].
Tipo de conteúdo: [notícia, página, documento, imagem, curso, processo seletivo ou outro].

Antes de montar o checklist:
- não transforme informação ausente em suposição;
- se faltar algo que altere o checklist, faça perguntas antes de continuar;
- se uma informação puder ter mudado e você tiver acesso à internet, pesquise em fonte oficial ou confiável;
- mostre a fonte, o link e a data da informação encontrada quando estiver disponível;
- se a vigência não estiver clara, apresente o que encontrou e peça minha confirmação;
- se não puder pesquisar, diga isso;
- diferencie o que está confirmado no guia, o que veio de fonte externa e o que ainda precisa de confirmação.

O checklist deve separar:
- itens obrigatórios;
- itens recomendados;
- sinais de que a tarefa foi concluída;
- riscos ou pendências que exigem validação humana;
- próximo passo quando eu não tiver permissão para concluir.
```

O resultado esperado é uma lista curta para marcar antes de sair da tela, enviar para moderação ou pedir revisão.

## Para preparar uma imagem para publicação

Use quando você tem uma imagem e precisa decidir como descrevê-la para quem não consegue vê-la. No Portal, essa descrição é usada como **texto alternativo** da imagem.

Antes de escrever, consulte [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/12 - Sou editor e quero adicionar ou atualizar uma imagem|Adicionar ou atualizar uma imagem]] e [[04 - Governança & Manuais/guia-do-portal/05 - Fundamentos/01 - Linguagem simples e acessibilidade|Linguagem simples e acessibilidade]].

Descrição e legenda têm funções diferentes. A descrição transmite a informação necessária para compreender a imagem sem vê-la. A legenda aparece para todas as pessoas e pode acrescentar contexto, como situação, data, autoria ou relação com o conteúdo. Evite repetir exatamente o mesmo texto nos dois lugares.

```prompt
Vou enviar uma imagem que será usada em uma página do Portal IFMG.

Use como referência o Guia do Portal IFMG:
https://github.com/leorruas/guiaportalifmg

Consulte especialmente as orientações sobre imagens e acessibilidade.

Contexto da página:
- Tipo de conteúdo: [notícia, página institucional, curso, processo seletivo ou outro].
- Assunto da página: [resuma].
- Função da imagem nesta página: [se souber, descreva].
- Informação que já aparece no texto ao redor da imagem: [resuma ou cole o trecho].

Antes de escrever:
- descreva apenas o que pode ser observado na imagem ou o que eu tiver confirmado no contexto;
- não deduza nomes de pessoas, local, evento, data, cargo, relação entre pessoas ou intenção;
- quando uma dessas informações for necessária para produzir uma boa descrição ou legenda, pergunte antes de continuar;
- se uma informação contextual puder ter mudado e você tiver acesso à internet, pesquise em fonte oficial ou confiável;
- mostre a fonte, o link e a data da informação encontrada quando estiver disponível;
- se não estiver claro se a informação continua válida, mostre o que encontrou e peça minha confirmação;
- se não puder pesquisar, diga isso;
- diferencie o que veio do guia, o que veio de fonte externa e o que ainda precisa de confirmação.

Quero que você:
1. diga se a imagem é informativa ou se parece apenas decorativa neste contexto;
2. se ela for informativa, escreva uma descrição curta que permita compreender sua função sem vê-la;
3. evite começar com “imagem de” ou “foto de” quando isso não acrescentar informação;
4. diga se uma legenda visível seria útil;
5. se a legenda for útil, proponha uma legenda que acrescente contexto sem repetir a descrição;
6. se a imagem tiver texto, gráfico, tabela, diagrama, interface ou informação complexa demais para uma descrição curta, indique também o que deveria aparecer no texto da própria página.
```

A IA pode ajudar a preparar o texto, mas a pessoa responsável pela publicação precisa confirmar se a descrição corresponde à função real da imagem naquele contexto.

## Para escolher quais blocos usar em uma página

Use quando você já tem o conteúdo, mas ainda precisa decidir como organizá-lo no Wagtail.

Antes de pedir a sugestão, consulte [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/15 - Sou editor e quero montar conteúdo com blocos|Montar conteúdo com blocos]]. A IA deve usar somente os blocos documentados no guia e explicar por que cada um seria necessário.

Texto simples continua sendo a opção padrão quando resolve a tarefa. Um bloco deve melhorar leitura, comparação, ação ou navegação. Ele não deve entrar apenas para variar a aparência da página.

```prompt
Com base no Guia do Portal IFMG, proponha uma estrutura para o conteúdo abaixo usando os blocos disponíveis no Portal.

O guia está neste repositório:
https://github.com/leorruas/guiaportalifmg

Consulte especialmente o procedimento “Montar conteúdo com blocos”.

Conteúdo:
[cole ou resuma o conteúdo que pode ser compartilhado]

Contexto:
- Tipo de página: [tipo].
- Público principal: [público].
- Ação principal que a pessoa deve conseguir realizar: [ação].
- Informações que precisam ganhar destaque: [se houver].

Antes de sugerir a estrutura:
- use somente blocos que estejam documentados no guia;
- não invente tipos de bloco, campos ou comportamentos do Wagtail;
- não transforme cada trecho em um bloco;
- prefira texto normal quando um bloco não trouxer ganho claro;
- se faltar informação sobre objetivo, público, ação principal, prazo, documentos, responsáveis ou outro ponto que possa mudar a estrutura, faça perguntas antes de continuar;
- se uma informação puder ter mudado e você tiver acesso à internet, pesquise em fonte oficial ou confiável;
- mostre a fonte, o link e a data da informação encontrada quando estiver disponível;
- se a vigência não estiver clara, apresente o que encontrou e peça minha confirmação;
- se não puder pesquisar, diga isso;
- diferencie o que está confirmado no guia, o que veio de fonte externa e o que ainda precisa de confirmação.

Depois, apresente:
- a ordem sugerida do conteúdo;
- o bloco sugerido em cada ponto;
- por que esse bloco ajuda a pessoa a entender, encontrar ou fazer algo;
- quais informações são necessárias para preenchê-lo;
- uma alternativa mais simples quando o mesmo objetivo puder ser resolvido sem um bloco especial.

Se nenhum bloco especial for necessário, diga isso claramente e proponha uma estrutura simples de texto e títulos.
```

A sugestão da IA deve ser tratada como uma proposta de estrutura. Confira no Wagtail se os blocos indicados estão disponíveis para aquela página e revise a organização na pré-visualização antes de enviar para moderação.

## Como conferir se a ajuda foi boa

Uma resposta útil deve indicar a página do guia que consultou, separar orientação de suposição e mostrar o próximo passo quando houver limite de permissão.

Antes de seguir a sugestão da IA, confira:

- se a resposta combina com o seu papel no Wagtail;
- se os links indicados existem no guia ou na fonte oficial;
- se a IA perguntou quando faltava informação importante, em vez de completar a lacuna;
- se informações que podem mudar foram verificadas em fonte identificada;
- se a fonte, o link e a data da informação pesquisada foram apresentados quando disponíveis;
- se ficou claro o que veio do guia, o que veio de outra fonte e o que ainda precisa de confirmação;
- se a IA avisou quando não conseguiu pesquisar ou verificar a vigência de uma informação;
- se a ação final ainda respeita o fluxo de moderação, revisão ou publicação.

Se a resposta parecer segura demais sobre algo que o guia não explicou, peça: “mostre em qual arquivo do guia esta orientação aparece”. Se a IA não conseguir apontar a fonte, trate a resposta como hipótese e confirme com a pessoa responsável.
