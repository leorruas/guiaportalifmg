# Design QA — 2026-08-26

## Fonte visual e implementação

- Direção aprovada: catálogo editorial institucional, selecionada a partir do primeiro estudo visual apresentado.
- Implementação verificada: `index.html`, `style.css` e `script.js` no navegador local.
- Estados conferidos: início em desktop, pesquisa por “notícia”, lista “Comece aqui”, artigo aberto e início em viewport de 390 × 844 px.

## Critérios verificados

- A página inicial usa fundo contínuo, tipografia, numeração e filetes em vez de hero, imagem ou cartões.
- A busca fica ao lado do masthead em telas amplas; em tela compacta, fica abaixo do título, com respiro interno e sem cantos arredondados.
- “Comece aqui” e “Fundamentos” têm apenas resumos curtos; os papéis permanecem sem explicações redundantes.
- As páginas de perfil e os resultados de busca usam linhas numeradas e agrupamento editorial, sem caixas ou fundos preenchidos.
- A navegação interna não repete a abertura da home e a escala dos títulos e itens foi ampliada.
- A versão compacta empilha o índice sem sobreposição.

## Resultado

**passed** — A implementação corresponde à direção editorial aprovada nos estados testados. A alternância de tema permanece mantida pelo controle já existente e deve ser acompanhada nas próximas revisões de conteúdo.
