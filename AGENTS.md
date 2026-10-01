# Regras do projeto

## Sincronização com GitHub

- O repositório canônico deste vault é `https://github.com/leorruas/guiaportalifmg.git`.
- Ao concluir qualquer modificação material nos arquivos do vault, verifique o estado do Git, crie um commit descritivo e envie-o para a branch padrão remota (`git push`).
- Antes de enviar, confira o diff e não inclua arquivos locais, segredos ou mudanças não relacionadas.
- Se o envio falhar por autenticação, conflito ou falta de acesso, informe o usuário com clareza e não descarte alterações locais.

## Registro de mudanças

- Toda modificação material no vault deve receber uma entrada concisa e factual no `log.md` antes do commit.
- A entrada deve informar a data, os arquivos ou artefatos principais alterados e as decisões, evidências ou efeitos relevantes. Não registrar dados pessoais, segredos ou detalhes de ambiente local.

## Inbox local

- A pasta `00 - Inbox/` é um espaço local de triagem, perguntas em aberto e rascunhos de trabalho; ela não deve ser enviada ao GitHub.
- Quando uma decisão estiver amadurecida, mova ou reescreva seu resultado na pasta definitiva e registre a alteração no `log.md` antes do commit.

## Compatibilidade de nomes de arquivo

- Use UTF-8 com normalização Unicode NFC para todos os nomes de arquivos e pastas, inclusive os que contêm acentos.
- Não use formas decompostas de caracteres acentuados nos caminhos. Antes de um commit que renomeie ou crie arquivos acentuados, valide a compatibilidade entre macOS e Windows.

## Links e navegação

- Toda página de orientação deve ser alcançável a partir do `00 - guia-do-portal.md` ou de uma pasta de papel/fundamentos já alcançável por ele.
- Use wikilinks somente para arquivos existentes neste vault. Para evidências e documentos mantidos fora dele, use um link Markdown direto para a fonte oficial.
- Todo link deve usar um rótulo descritivo; não use URLs soltas como texto de navegação.
- Antes de cada commit, valide que não há wikilinks sem destino e que links modificados continuam apontando para o conteúdo correto.
- A navegação de retorno entre home, perfil e artigo é responsabilidade da interface. Não acrescente ao final dos Markdown links puramente navegacionais como “Voltar ao papel de…”, “Voltar às configurações…” ou equivalentes. Mantenha links finais apenas quando indicarem uma próxima etapa real do procedimento ou uma referência necessária.

## Explicações do guia

- Escreva para uma pessoa que está executando a tarefa pela primeira vez: diga primeiro o que a ação resolve, depois onde clicar e, por fim, como conferir se deu certo.
- Prefira palavras comuns e frases curtas. Quando um termo do Wagtail for indispensável, explique-o na primeira vez em que aparecer.
- Use exemplos concretos e comparações simples quando eles ajudarem a formar uma imagem mental; não cite métodos de ensino no texto publicado.
- Cada procedimento deve deixar explícitos o resultado esperado, o limite de permissão e o próximo passo quando a pessoa não puder concluir a ação sozinha.
- Insira cada imagem imediatamente após o passo ou conceito que ela demonstra, com legenda que explique o que a pessoa deve observar. Não agrupe capturas em galeria, ao fim do artigo ou em seção separada quando elas puderem orientar uma ação específica no contexto.

## Arquitetura canônica do guia

- Cada tarefa operacional deve ter **uma única página canônica**. Antes de criar um novo procedimento, procure se a ação já existe em um perfil com menor privilégio ou em uma referência compartilhada.
- A hierarquia operacional é cumulativa: **editor → moderador → administrador**. Moderador herda as tarefas de editor; administrador herda as de moderador e editor.
- **Gestor não faz parte dessa cadeia de herança**. O papel de gestor solicita, acompanha e valida demandas, mas não deve receber procedimentos operacionais do Wagtail por herança.
- Não duplique um procedimento só porque outro perfil também pode executá-lo. Use a página canônica e explique nela, quando necessário, o que muda conforme o perfil.
- Páginas antigas mantidas apenas por compatibilidade devem ser curtas e apontar para a tarefa canônica. Nos metadados, marque-as com `tipo: "absorvido"`, `estado: "absorver"` e `destino` para o ID canônico correspondente.
- As páginas de papel, como “Sou editor”, “Sou moderador” e “Sou administrador”, servem como visão do perfil e índice de tarefas; não devem repetir o conteúdo dos procedimentos.
- Se o título exibido precisar mudar sem renomear imediatamente o arquivo físico, use `tituloCanonico` em `data/guide-metadata.js` e preserve a rota existente até que os links possam ser migrados com segurança.

## Metadados e busca

- `data/guide-metadata.js` é a fonte canônica de `id`, `tipo`, `perfilMinimo`, `estado`, `destino`, `tituloCanonico` e `aliases` quando esses campos forem necessários.
- IDs de tarefas são estáveis. Não reutilize um ID para uma tarefa diferente e não crie dois artigos canônicos com o mesmo ID.
- Use aliases para formas reais de procura, sinônimos e vocabulário do usuário; não use aliases apenas para repetir o título ou despejar palavras do corpo do artigo.
- Quando uma nova tarefa específica passar a responder melhor por uma consulta, mova o alias correspondente para essa tarefa para evitar resultados concorrentes.
- `search.js` contém o motor de busca e deve permanecer independente do DOM. `script.js` deve consumir `GuiaBusca.ranquearArtigos()` em vez de recriar filtros, pontuação ou desempate em paralelo.
- A busca exata tem prioridade. O fuzzy é somente fallback quando não há resultado exato: no máximo uma palavra divergente por consulta, termo com pelo menos cinco caracteres, distância de edição máxima 1 e comparação restrita a título da ação e aliases.
- Qualquer alteração em artigos, metadados, aliases ou ranking que possa mudar a ordem dos resultados deve ser validada com `node scripts/test-search-regression.mjs`.
- Quando uma consulta relevante ganhar comportamento novo, adicione-a a `data/search-regression.json` com o `expected_top_id` correto. Não ajuste o resultado esperado apenas para fazer o teste passar; confirme primeiro que a nova ordem é desejada.

## Índice gerado do guia

- `data/guide-index.json` substitui listas manuais de artigos no JavaScript. Não mantenha uma segunda lista de Markdown em `script.js` ou em outro arquivo.
- Ao criar, excluir ou renomear qualquer Markdown dentro de `04 - Governança & Manuais/guia-do-portal/`, rode `node scripts/generate-guide-index.mjs` e versione o JSON gerado.
- Antes de concluir a alteração, rode `node scripts/generate-guide-index.mjs --check`. A validação deve informar a mesma quantidade de artigos existentes na árvore do guia.
- O gerador deve continuar produzindo saída determinística, sem timestamp, e validar caminhos em Unicode NFC antes de normalizá-los.
- O workflow `.github/workflows/validate-guide-index.yml` deve continuar cobrindo mudanças na pasta do guia, no índice, no gerador e no próprio workflow.

## JavaScript da interface

- Preserve a separação de responsabilidades:
  - `data/guide-metadata.js`: dados de arquitetura e busca;
  - `search.js`: normalização, recuperação e ranking;
  - `navigation.js`: rotas e resolução de links internos;
  - `script.js`: estado da interface, DOM, listeners, carregamento e orquestração.
- Módulos carregados como scripts clássicos devem ser encapsulados em IIFE ou equivalente e expor somente um namespace explícito em `window`. Não deixe `const` ou `let` de implementação no escopo global entre arquivos.
- A ordem de carregamento no `index.html` deve permanecer **metadados → busca → navegação → script principal**, salvo mudança arquitetural deliberada e validada.
- Não mova DOM, listeners, `history.pushState`, `window.location` ou inicialização para um módulo puro apenas para reduzir o tamanho de `script.js`.
- Para módulos auxiliares, prefira degradação segura: se busca ou navegação avançada não carregar, a home deve continuar utilizável por fallback básico em vez de interromper toda a inicialização.
- Ao alterar um arquivo JavaScript ou de dados carregado diretamente pelo navegador, incremente o sufixo de versão no `index.html` para evitar cache antigo no GitHub Pages.
- Antes de concluir uma refatoração, valide a sintaxe dos arquivos alterados, a ordem de carregamento e as funções críticas que atravessam módulos.

## Evidência e comportamento do Portal

- Não invente campos, permissões, fluxos ou estados do Wagtail. Se a documentação disponível não for suficiente, escreva a orientação no nível que está comprovado e sinalize o que precisa ser confirmado.
- Quando uma informação operacional essencial estiver ausente ou conflitante, peça confirmação ao usuário ou responsável em vez de preencher por inferência.
- Se for necessário pesquisar comportamento atual do Portal ou do Wagtail, use uma fonte oficial ou claramente identificada, mostre a referência e trate a informação como sujeita a atualização quando apropriado.
- Diferencie finalidade editorial de tipo de conteúdo. Um nome usado pela área solicitante não deve virar automaticamente um novo tipo de página; confirme primeiro se o tipo existe de fato no Portal.

## Validação antes de encerrar

- Para mudanças editoriais, valide wikilinks e anexos alterados, ausência de referências indevidas a páginas absorvidas e coerência com a hierarquia de perfis.
- Para mudanças estruturais no guia, valide `node scripts/generate-guide-index.mjs --check`.
- Para mudanças que possam afetar busca ou metadados, valide `node scripts/test-search-regression.mjs`.
- Quando houver GitHub Actions correspondentes, confirme o resultado real do workflow. Não trate apenas uma checagem local de sintaxe como evidência de que a publicação está íntegra.
- Se uma mudança afetar a inicialização da home, confirme também cache/versionamento e carregamento dos scripts antes de considerar a tarefa concluída.

