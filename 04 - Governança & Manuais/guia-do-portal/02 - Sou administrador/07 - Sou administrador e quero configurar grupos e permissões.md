# Sou administrador e quero definir quem pode editar páginas e usar coleções

Use esta tarefa para definir **quem pode trabalhar em cada parte do Portal e com quais arquivos**. No Wagtail, isso é feito por grupos e permissões: cada grupo deve representar o setor, campus ou área que ele atende, com acesso apenas ao necessário.

Imagine o grupo como um crachá: ele informa onde a pessoa pode entrar e o que ela pode fazer ali. Páginas e coleções são portas diferentes; liberar uma não abre automaticamente a outra.

## Como configurar

1. Acesse a área administrativa em [portal.ifmg.edu.br/admin](https://portal.ifmg.edu.br/admin) e entre com suas credenciais institucionais.
2. Abra **Configurações** e acesse a gestão de grupos.

![[imagens/manual-ifrn/image4.png|Menu Configurações, onde ficam Grupos e Coleções]]

3. Crie um grupo ou abra o grupo que será atualizado.
4. Inclua as pessoas que atuarão naquele escopo.
5. Defina as permissões de páginas apenas para a seção de páginas necessária.
6. Defina as permissões de coleções apenas para as coleções de imagens e documentos necessárias.

7. Salve e confirme o resultado com uma pessoa do grupo.

**Demonstração: criar um grupo com acesso limitado ao campus.** O vídeo percorre **Configurações → Grupos**, permissões para páginas e coleções, vínculo do usuário ao grupo e resultado do acesso restrito. A opção **Pode acessar o administrador Wagtail** permite entrar no painel administrativo para trabalhar com o conteúdo; isoladamente, ela não concede o papel de administrador do Portal.

```video
arquivo: videos/criando grupo permissao especifico.mp4
legenda: videos/legendas/criando grupo permissao especifico.srt
titulo: Criar um grupo e limitar seu acesso a páginas e coleções
```

**Exemplo:** para um editor do Campus Formiga, conceda edição somente nas páginas e coleções do campus. Não conceda o acesso à árvore inteira apenas porque o grupo precisa publicar uma notícia.

**Resultado esperado:** a pessoa consegue executar apenas as tarefas necessárias na seção e nas coleções combinadas. Se ela enxergar conteúdo demais ou não conseguir usar um documento de que precisa, revise qual das duas permissões — página ou coleção — está faltando ou ampla demais.

## Definir o que um grupo pode fazer com cada tipo de conteúdo

Além das permissões da **árvore de páginas** e das **coleções**, o exemplo gravado mostra permissões de objetos associadas a tipos como **Campus**, **Pasta de notícias** e **Notícia**. Elas podem permitir ações diferentes, como **adicionar**, **editar** e **excluir**. A concessão de uma dessas ações não significa, por si só, que as outras também estejam autorizadas.

No vídeo, o usuário do Grupo Formiga consegue visualizar páginas do campus, mas inicialmente não pode editá-las. Após o administrador conceder a edição do tipo Campus, o comando de edição aparece. Permitir edição da Pasta de notícias não libera automaticamente a edição de notícias: a permissão do tipo Notícia precisa ser configurada separadamente. O exemplo também distingue **editar** de **adicionar** uma notícia.

**Demonstração: permissões por tipo de objeto.** A gravação compara a conta de um administrador com a conta limitada do Campus Formiga e mostra o efeito de mudar as permissões. Ela documenta o comportamento daquele ambiente; antes de aplicar a configuração, confira o escopo das páginas e das coleções do grupo e as opções atuais no Wagtail.

```video
arquivo: videos/Permissões de objetos.mp4
legenda: videos/legendas/Permissões de objetos.srt
titulo: Definir permissões de edição e criação por tipo de conteúdo
```

**Como conferir:** use uma conta de teste autorizada para verificar se o grupo consegue visualizar, criar, editar ou remover somente os tipos e conteúdos planejados. Não amplie permissões globais para resolver uma necessidade restrita a um campus.

Se os grupos já estão configurados e você precisa definir **quem recebe conteúdos para aprovação**, execute também a tarefa administrativa específica:

> [!ACTION]
> [[04 - Governança & Manuais/guia-do-portal/02 - Sou administrador/13 - Sou administrador e quero configurar quem aprova os conteúdos de um campus ou setor|Configurar o fluxo de aprovação de um campus ou setor]]

## Regra de aplicação

- Editor: cria e edita conteúdo, documentos e imagens no escopo concedido; envia conteúdo para moderação.
- Moderador: atua no mesmo escopo concedido ao seu grupo e revisa, devolve ou aprova conteúdos.
- Administrador: configura grupos, permissões de páginas e permissões de coleções.

> [!WARNING]
> Conceder acesso a uma página não concede automaticamente acesso às coleções. Revise os dois conjuntos de permissões.

