# Sou administrador e quero criar um endereço curto ou redirecionar uma página

Use **Configurações → Redirecionamentos** quando precisar oferecer um caminho mais fácil de divulgar ou encaminhar quem acessa um endereço antigo para a página correta. Por exemplo, um endereço curto como `/formiga` pode levar à página institucional do Campus Formiga sem que você precise criar uma nova entrada na árvore de páginas.

Este é um caminho alternativo ao tipo de página **Link**, não uma substituição obrigatória. Se a intenção é **acrescentar uma opção na estrutura ou nos menus** do Portal, use [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/07 - Sou editor e quero criar um link|Criar um Link na árvore de páginas]]. Para um **atalho de URL sem nova página**, use Redirecionamentos.

## Criar o redirecionamento

1. No painel do Wagtail, abra **Configurações → Redirecionamentos**. Procure primeiro pelo endereço desejado para evitar cadastros duplicados.
2. Escolha **Adicionar redirecionamento**, se essa ação estiver disponível para seu perfil.
3. Em **Redirecionar de** (ou equivalente), informe o caminho de origem. No exemplo da gravação, é `/formiga`.
4. Em **Redirecionar para uma página**, selecione a página de destino, como a página do Campus Formiga. Para destinos externos, a interface padrão do Wagtail também oferece **Redirecionar para qualquer URL**; use apenas o endereço oficial confirmado.
5. Confira se o redirecionamento se aplica ao site correto, caso o formulário permita escolher o site de origem.
6. Confira a opção **Permanente** antes de salvar. O Wagtail costuma deixá-la marcada por padrão. Use a opção permanente quando o encaminhamento for duradouro; se o destino for temporário, avalie a configuração apropriada com a equipe responsável.
7. Salve e teste no navegador o caminho criado, conferindo a página de destino.

**Atenção:** um redirecionamento cadastrado nesse recurso normalmente é usado quando o caminho de origem **não corresponde a uma página existente**. Se `/formiga` já tiver conteúdo ou estiver reservado, não presuma que a regra vai substituí-lo. Antes de divulgar uma URL curta, confirme que ela está livre e funciona no ambiente publicado.

## Ver como funciona no Portal

**Demonstração: criar um caminho curto para o Campus Formiga.** O vídeo apresenta a funcionalidade **Redirecionamentos** e mostra o cadastro de `/formiga` apontando para a página do campus, seguido de um teste do encaminhamento. Ele não mostra a criação de uma página do tipo **Link**.

```video
arquivo: videos/Criando encurtamento ou redirecionamento.mp4
legenda: videos/legendas/Criando encurtamento ou redirecionamento.srt
titulo: Criar um endereço curto e redirecioná-lo para um campus
```

## Conferir o resultado e as permissões

O endereço curto deve abrir a página oficial correta, sem exigir que a pessoa conheça a estrutura completa da árvore. Se não funcionar, revise o caminho de origem, o site escolhido, a página de destino e a existência de outra página naquela URL.

**Limite de permissão:** este procedimento foi organizado no perfil **Administrador** do guia por envolver uma configuração do Portal. A gravação comprova o uso do recurso, mas não todas as permissões da instalação do IFMG. Se **Redirecionamentos** ou **Adicionar redirecionamento** não estiver disponível para sua conta, peça a conferência ao administrador responsável; não contorne a restrição criando outra página sem avaliar a necessidade.

A função também pode ser usada para preservar acessos a endereços antigos, desde que o destino esteja correto. Antes de configurar encaminhamentos permanentes de URLs já divulgadas, confira o impacto sobre links, compartilhamentos e buscas.

**Referência:** [Documentação oficial do Wagtail — Manage redirects](https://guide.wagtail.org/en/how-to-guides/manage-redirects/). Os nomes de campos e o comportamento são exemplos do Wagtail e devem ser conferidos na versão usada pelo IFMG.
