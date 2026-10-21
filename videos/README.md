# Como usar os vídeos no Guia do Portal

O guia reproduz MP4 e WebM que estão na pasta `videos/`. As legendas devem estar no formato **SRT (`.srt`)**, em UTF-8. Elas podem ficar ao lado do vídeo ou na pasta `legendas/`.

Insira o bloco abaixo no ponto do artigo em que o vídeo demonstra a tarefa:

```video
arquivo: videos/Cadastrando processos seletivos.mp4
legenda: videos/Cadastrando processos seletivos.srt
titulo: Como cadastrar um processo seletivo
```

Enquanto o SRT estiver em preparação, omita a linha `legenda`. Quando estiver pronto e publicado, inclua a referência no bloco. O leitor de artigos converte o SRT para WebVTT em memória, ativa a faixa de legendas e oferece a transcrição completa com tempos clicáveis.

Um arquivo SRT segue esta estrutura de exemplo (substitua pelo texto e tempos reais):

```srt
1
00:00:01,000 --> 00:00:03,500
Primeiro trecho da transcrição.

2
00:00:03,500 --> 00:00:05,700
Segundo trecho da transcrição.
```

Antes de incorporar, revise a sincronização, o conteúdo falado e dados pessoais ou restritos visíveis no vídeo. O player não reproduz automaticamente.
