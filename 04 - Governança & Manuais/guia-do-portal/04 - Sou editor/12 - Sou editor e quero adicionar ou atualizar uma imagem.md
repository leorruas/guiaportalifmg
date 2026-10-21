# Sou editor e quero adicionar ou atualizar uma imagem

Use **Imagens** para guardar e reutilizar fotos, ilustrações e outras imagens do portal. Esta é a tarefa canônica para editor, moderador e administrador; os perfis superiores herdam o mesmo procedimento.

Uma imagem pode aparecer em várias páginas. Por isso, substituir o arquivo de um item existente pode alterar todos os lugares que usam aquela imagem.

## Encontrar uma imagem

Abra **Imagens** e procure pelo nome, por tag, pelos filtros ou pela coleção conhecida antes de cadastrar outra imagem.

![[imagens/capturas-wagtail/W10-lista-imagens-colecao.png|Listagem de Imagens com busca e botão de filtros]]

*Homologação IFMG, 20/10/2026: identificação removida por recorte; use o nome e os filtros para reconhecer um item existente.*

## Adicionar uma imagem

1. Abra **Imagens** no menu lateral e clique em **Adicionar imagem**.
2. Escolha a coleção autorizada para sua área.
3. Envie o arquivo.
4. Dê à imagem um título claro, em linguagem natural, que permita reconhecê-la depois. Evite nomes como `IMG_9382`, abreviações internas ou títulos inteiros em caixa alta.

Inclua **assunto + nome do curso, quando aplicável + campus + ano ou período**, conforme as informações confirmadas da imagem. Esses dados ajudam a distinguir fotos parecidas e a encontrar o arquivo depois. Para uma imagem de uso geral, não acrescente um curso que ela não representa nem invente uma data desconhecida.

**Exemplos:** “Aula prática de Técnico Integrado em Informática — Campus Ouro Branco — 2027” e “Estudantes na biblioteca — Campus Ouro Preto — 2027”.

Escreva o **título no cadastro** com palavras separadas por espaços. Evite títulos como `aula_pratica_informatica_2027` ou `aula-pratica-informatica-2027`. A orientação se refere ao título preenchido no Wagtail; não exige renomear o arquivo no computador. Hífens que fazem parte da escrita normal e separadores entre informações, como nos exemplos, podem ser usados. O título ajuda a localizar a imagem; o texto alternativo deve descrever a informação relevante no contexto da página.

**Nas galerias das páginas de cursos, esse título cadastrado será apresentado como legenda da foto.** Revise-o antes de incluir a imagem na galeria, sobretudo quando a foto ainda for provisória. A legenda não deve ser inventada para preencher uma lacuna: substitua a foto provisória pela imagem definitiva da atividade, enviada pela coordenação, antes da publicação.

Confira a coleção escolhida no percurso **Imagens → Adicionar uma imagem → Coleções → destino → Imagem**. Quem tiver acesso também pode começar por **Configurações → Coleções**. Arrastar ou escolher o arquivo inicia o carregamento imediatamente.

![[imagens/capturas-wagtail/W10a-adicionar-imagens.png|Envio de imagens para a coleção escolhida]]

*Homologação IFMG, 20/10/2026: confira Adicionar a coleção antes de escolher o arquivo.*

Após o carregamento, revise **Título**, **Descrição**, **Coleção** e **Tags**. A descrição serve à acessibilidade: comunique a informação necessária para compreender a imagem sem vê-la. Use o prompt de descrição de imagens em [[04 - Governança & Manuais/guia-do-portal/00 - Comece aqui/03 - Como usar uma IA como apoio para trabalhar com este guia|Usar uma IA como apoio]], forneça contexto e revise o resultado sem aceitar detalhes inventados.

![[imagens/capturas-wagtail/W10b-imagem-titulo-descricao-tags.png|Cadastro de imagem com título, descrição e tags]]

*Homologação IFMG, 20/10/2026: o aviso e o título automático mostram um cadastro ainda não revisado; descrição e legenda têm funções diferentes.*


5. Use a imagem na página pelo bloco ou campo adequado.
6. Informe **texto alternativo** quando a imagem trouxer informação necessária para compreender o conteúdo. Marque-a como decorativa somente quando ela não acrescentar informação.
7. Pré-visualize a página para conferir corte, legibilidade e relação com o texto ao redor.

## Enviar uma imagem durante a edição de uma página

Ao selecionar uma imagem dentro do conteúdo de uma página, o Wagtail pode apresentar um caminho para **Enviar uma nova imagem**. Na gravação, esse botão aparece quando a coleção escolhida está vazia, como no exemplo da coleção Office Jr. Ao selecionar uma coleção que já contém imagens, como a de Ouro Branco, o mesmo seletor **não apresenta** o botão na demonstração.

**Demonstração: diferença no seletor de imagens.** O vídeo compara as duas situações e aponta essa dificuldade como uma possível melhoria de usabilidade. Trata-se de um comportamento observado no ambiente gravado, **não de uma regra confirmada para todas as versões do portal nem de um erro diagnosticado**.

```video
arquivo: videos/Inserir imagem dentro da coleção a partir da edição do conteúdo.mp4
legenda: videos/legendas/Inserir imagem dentro da coleção a partir da edição do conteúdo.srt
titulo: Comparar o envio de imagens em coleções vazias e com arquivos
```

Se a opção de envio não aparecer no seletor, use **Imagens → Adicionar imagem**, escolha a coleção autorizada, conclua o cadastro e depois volte à edição da página para selecionar o arquivo. Caso essa diferença permaneça na homologação atual, registre-a para avaliação da equipe responsável.

## Atualizar uma imagem existente

1. Em **Imagens**, busque o item pelo título e abra-o.
2. Confira onde a imagem é usada antes de substituir o arquivo.
3. Substitua somente quando a nova versão puder aparecer corretamente em todos esses usos.
4. Use **Altere o arquivo de imagem** para escolher outra versão; revise título, descrição e tags. O campo Coleção mostra um seletor, mas a possibilidade de alteração deve ser conferida no seu perfil.

![[imagens/capturas-wagtail/imagem-editar-arquivo-descricao.png|Edição de imagem com arquivo e descrição]]

*Homologação IFMG, 20/10/2026: identificação do remetente removida por cobertura opaca; preserve o contexto de uso antes de substituir.*

5. Salve e pré-visualize as páginas mais importantes afetadas pela troca.

> [!WARNING]
> Substituir o arquivo de uma imagem reutilizada pode alterar várias páginas ao mesmo tempo.

## Definir a área focal para recortes

Em **Ponto focal (opcional)**, arraste uma caixa sobre a região mais importante da foto. Ela orienta os recortes que usam a área focal, por exemplo no destaque do topo da página. Salve e confira a prévia em computador, tablet e celular; a seleção não garante que toda a foto fique visível em qualquer proporção. **Remover área focal** limpa a definição.

![[imagens/capturas-wagtail/imagem-area-focal.png|Área focal selecionada sobre o prédio do Campus Sabará]]

*Homologação IFMG, 20/10/2026: a caixa indica a região prioritária; identificação removida por cobertura opaca. Área focal não substitui descrição acessível.*

## Coleção e limite de permissão

Use apenas coleções disponíveis para o seu grupo. Se a imagem pertence a outra área, exige uma coleção nova ou precisa de mudança de acesso, não improvise um destino.

Consulte [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/14 - Sou editor e quero organizar documentos e imagens em coleções|Organizar documentos e imagens em coleções autorizadas]].

Se a coleção precisar ser criada ou ter seus acessos modificados, um administrador deve usar [[04 - Governança & Manuais/guia-do-portal/02 - Sou administrador/08 - Sou administrador e quero criar uma coleção e definir seus acessos|Criar uma coleção e definir seus acessos]].

**Como saber que terminou:** a imagem tem título compreensível, está na coleção correta, possui tratamento de acessibilidade adequado e continua funcionando nos lugares em que é reutilizada.
