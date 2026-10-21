# Sou administrador e quero configurar quem aprova os conteúdos de um campus ou setor

Use esta tarefa quando os conteúdos de uma área precisam passar por **aprovação antes da publicação**, mesmo que as pessoas responsáveis já possam criar e editar páginas. O administrador configura **quem pode avaliar as alterações** e **em qual parte do Portal** o fluxo será aplicado.

**Configurar o fluxo não é o mesmo que revisar uma página.** A configuração define a tarefa, o grupo responsável e a área atendida; a revisão acontece depois, quando um conteúdo é encaminhado para aprovação.

## Preparar os grupos e o escopo

No exemplo do Campus Formiga, a demonstração distingue dois grupos:

- **Grupo Formiga:** pessoas que criam ou editam conteúdo, sem permissão de publicá-lo diretamente.
- **comunicação formiga:** pessoas designadas para a aprovação no exemplo apresentado.

Confirme os grupos existentes, quem fará a revisão e a página que precisa desse controle. Evite criar grupos ou fluxos duplicados. As permissões de **edição**, **publicação** e **coleções** precisam corresponder ao trabalho de cada grupo, mas são configurações distintas da tarefa de aprovação.

> [!ACTION]
> [[04 - Governança & Manuais/guia-do-portal/02 - Sou administrador/07 - Sou administrador e quero configurar grupos e permissões|Conferir ou definir as permissões dos grupos]]

## Criar a tarefa de aprovação

1. No painel do Wagtail, acesse a área de **Tarefas** de moderação e confira se já existe uma tarefa correspondente ao setor ou campus.
2. Se necessário, crie uma tarefa para a aprovação. Na demonstração, ela recebe o nome **moderação formiga**.
3. Vincule à tarefa o grupo que poderá tomar a decisão. No exemplo, é **comunicação formiga**.
4. Salve a tarefa e confira se o grupo escolhido é realmente o responsável pela revisão.

A **tarefa** indica quem avalia o conteúdo; ela não substitui as permissões gerais de páginas nem determina, sozinha, onde o fluxo será aplicado.

## Criar o fluxo e vinculá-lo à página

1. Abra **Fluxos de trabalho** no Wagtail e verifique se já há um fluxo adequado ao escopo pretendido.
2. Crie um fluxo, se necessário. Na gravação, o exemplo recebe o nome **moderar conteúdo publicado formiga**.
3. Adicione a tarefa criada anteriormente, selecionando a opção **Existente** e escolhendo **moderação formiga**.
4. Associe o fluxo à página que deverá ser atendida. No exemplo, a página selecionada é **Campus Formiga**.
5. Salve e confira tanto a tarefa associada quanto a página escolhida, antes de liberar a configuração para uso.

O vídeo apresenta a aplicação do fluxo ao conteúdo mantido dentro da área do Campus Formiga. **Não presuma que um fluxo de exemplo se aplica automaticamente a todo o Portal** nem que sua conta pode modificar qualquer campus: o alcance deve ser conferido no ambiente e nas permissões efetivamente configuradas.

**Demonstração: configurar a aprovação de um campus.** A gravação mostra os grupos envolvidos, a criação de uma tarefa com grupo aprovador e a inclusão dessa tarefa em um fluxo associado ao Campus Formiga. A etapa prática de envio e decisão aparece no procedimento de revisão do moderador.

```video
arquivo: videos/Parte 1 - Criando fluxo de trabalho para moderar conteúdo de uma página específica.mp4
legenda: videos/legendas/Parte 1 - Criando fluxo de trabalho para moderar conteúdo de uma página específica.srt
titulo: Criar uma tarefa e um fluxo de aprovação para o Campus Formiga
```

## Como conferir se o fluxo funciona

1. Com uma conta de teste autorizada a **editar, mas não publicar**, crie ou altere um conteúdo dentro da área configurada.
2. Verifique que **Salvar rascunho** não é a mesma ação que **enviar para aprovação**.
3. Encaminhe a alteração pelo fluxo e confira se ela aparece para o grupo responsável pela revisão.
4. Confirme que a conta editora não ganhou permissão de publicar diretamente e que a conta revisora consegue executar a decisão prevista.
5. Se o fluxo não aparecer, confira primeiro a associação da página, o grupo da tarefa e as permissões envolvidas.

**Resultado esperado:** as alterações enviadas à moderação na área configurada chegam ao grupo aprovador, sem conceder aos editores permissão desnecessária de publicação.

**Limite de permissão:** a criação ou alteração de tarefas, fluxos e seus vínculos depende de acesso administrativo autorizado. Um moderador que apenas revisa conteúdos não deve ser orientado a mudar essa configuração por conta própria.

> [!ACTION]
> [[04 - Governança & Manuais/guia-do-portal/03 - Sou moderador/09 - Sou moderador e quero revisar e decidir uma publicação|Ver como o moderador revisa e aprova uma alteração]]
