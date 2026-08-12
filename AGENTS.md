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
- Use wikilinks somente para arquivos existentes neste vault. Para evidências e documentos mantidos fora dele, use um link Markdown para a fonte oficial ou para a página `06 - Referências/00 - Referências do projeto de origem.md`.
- Todo link deve usar um rótulo descritivo; não use URLs soltas como texto de navegação.
- Antes de cada commit, valide que não há wikilinks sem destino e que links modificados continuam apontando para o conteúdo correto.
