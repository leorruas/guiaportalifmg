# Sou editor e quero adicionar ou atualizar um documento

Use **Documentos** para guardar e reutilizar arquivos oficiais, como editais, regulamentos e formulários. A página apresenta o documento; a coleção guarda sua versão oficial. Separar essas funções evita que arquivos diferentes apareçam com o mesmo nome.

## Adicionar um documento

1. Abra **Documentos** no menu lateral e escolha **Adicionar documento**.
2. Selecione a coleção autorizada antes de enviar o arquivo.
3. Envie o arquivo, preencha um título claro, confirme a coleção e acrescente tags que ajudem na busca.
4. Salve o documento.
5. Volte à página e selecione o documento no bloco ou campo correspondente.

![[imagens/manual-ifrn/image38.png|Adição de documento a uma coleção]]

## Preencher título, coleção e tags

Preencha esses campos antes de salvar. Eles definem como a equipe encontra o documento e em que páginas ele pode aparecer.

![[imagens/manual-ifrn/preenchimento-de-documento-colecao-tags.png|Preenchimento do título, da coleção e das tags de um documento]]

*Observe que o título explica o documento, a coleção informa onde ele pertence e as tags ajudam a encontrá-lo depois.*

### Dê um título que explique o documento

O título deve dizer exatamente o que é o documento, para quem ele serve e, quando necessário, de qual período é. Não publique o nome original do arquivo.

- Esta regra é obrigatória para todo documento novo ou atualizado.
- Para documentos de curso, use obrigatoriamente: **tipo do documento + nome completo do curso + ano ou período + campus**. Isso evita conflito entre cursos, períodos e unidades diferentes.
- Para documentos que atendem mais de um curso, use: **tipo do documento + público ou nível + ano ou período + campus**.
- Escreva por extenso; não use códigos, abreviações ou nomes como `ADMINISTRACAO2026.2B.pdf`.
- Exemplo: **Horários de aula — Bacharelado em Administração — 2º semestre de 2026 — Campus Ouro Branco**.

| Tipo de documento | Padrão de título | Exemplo |
| --- | --- | --- |
| Calendário acadêmico | `Calendário acadêmico — nível — ano — campus` | `Calendário acadêmico — Cursos de graduação — 2026 — Campus Ouro Branco` |
| Horários de aula | `Horários de aula — curso — período — campus` | `Horários de aula — Técnico Integrado em Informática — 2026 — Campus Ouro Branco` |
| Atendimento docente | `Horários de atendimento docente — curso ou nível — período — campus` | `Horários de atendimento docente — Cursos de graduação — 1º semestre de 2026 — Campus Ouro Branco` |
| Monitoria | `Horários de monitoria — público ou nível — período — campus` | `Horários de monitoria — Cursos técnicos e de graduação — 2026 — Campus Ouro Branco` |
| Progressão parcial | `Orientações de progressão parcial — curso ou nível — ano ou período — campus` | `Orientações de progressão parcial — Cursos técnicos integrados — 2026 — Campus Ouro Branco` |
| Estágio | `tipo de documento de estágio — curso ou público — ano ou versão — campus` | `Termo de compromisso de estágio obrigatório — Licenciaturas — 2026 — Campus Ouro Branco` |

O título do documento não é o mesmo texto do botão em uma página. Em um CTA, o botão pode dizer **Acessar** ou **Baixar**; o documento escolhido para esse botão deve continuar com seu título completo no cadastro do Wagtail.

### Escolha a coleção correta

Escolha a coleção pela finalidade do documento, não pela facilidade de encontrá-la no menu. Por exemplo, um horário de aula do Campus Ouro Branco deve ficar em `U_Ouro Branco → Agenda acadêmica → Horários de aula`.

Se não houver uma coleção adequada, procure primeiro se há outra coleção com documentos do mesmo tipo. **Editores não criam coleções:** solicite a criação a um administrador, explicando o objetivo, o público atendido e quais documentos entrarão nela. Uma coleção nova só deve ser criada quando atender um conjunto recorrente de documentos, não um arquivo isolado.

### Adicione tags que ajudem na busca

Use tags para identificar o documento por campus, tema, nível ou curso e período. Prefira sempre uma tag que já exista, com letras minúsculas.

Para o exemplo de horário de aula, use: `ouro branco`, `horários de aula`, `graduação`, `administração` e `2º semestre de 2026`.

Não crie variações para o mesmo assunto, como `Horário`, `horarios`, `horário de aula` e `horários-aula`.

## Documentos que mudam com frequência

Horários de aula, monitoria e progressão parcial precisam ser revistos a cada período ou sempre que houver alteração. Antes de enviar uma nova versão, pesquise o documento atual na coleção e decida se ela **substitui** o arquivo existente ou se é uma **nova versão** que precisa permanecer disponível.

### Quando substituir o documento atual

Substitua o arquivo existente quando a nova versão passa a valer no lugar da anterior. Isso mantém o mesmo documento selecionado nas páginas do portal e evita vários arquivos concorrentes na coleção.

Exemplo: ao receber o novo horário de monitoria, abra o documento de monitoria vigente, substitua o arquivo, atualize o título e as tags com o período correto e salve.

### Quando criar uma nova versão

Crie um novo documento apenas quando a versão anterior ainda precisa ficar disponível, como registro histórico, ou quando ela continua válida para outro público, curso ou período. Dê títulos que diferenciem claramente as versões.

Exemplo: **Horários de aula — Bacharelado em Sistemas de Informação — 1º semestre de 2026 — Campus Ouro Branco** e **Horários de aula — Bacharelado em Sistemas de Informação — 2º semestre de 2026 — Campus Ouro Branco**.

### Não deixe documentos vencidos na coleção

Ao publicar uma versão nova, confira se a versão anterior ainda aparece em alguma página. Se ela não tiver valor histórico, não estiver sendo usada e não precisar ser mantida por regra institucional, remova-a. Se precisar permanecer como registro, mantenha-a identificada com o período e não a selecione em conteúdo vigente.

O objetivo é que uma pessoa encontre uma única versão vigente para cada necessidade, sem uma lista cheia de arquivos antigos, duplicados ou sem uso.

## Atualizar a versão correta

1. Busque o documento pelo título e abra o registro existente.
2. Antes de substituir o arquivo, confirme que a nova versão deve valer em todas as páginas onde o documento aparece.
3. Substitua o arquivo associado, mantenha o título atualizado e salve.
4. Abra a página pública ou a pré-visualização para conferir se o download disponibiliza a versão esperada.

> [!attention] Um arquivo, vários usos
> Substituir o arquivo no registro atualiza todas as páginas que apontam para ele. Se o novo documento vale apenas para um caso, crie um novo registro em vez de substituir o existente.

**Limite de permissão:** não remova um documento que possa servir como registro histórico sem orientação de moderação. Se faltar acesso à coleção ou for necessário criar uma nova, peça ao administrador; não envie o arquivo para uma coleção de outra área.

[[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/11 - Sou editor e quero publicar um processo seletivo e seus documentos|Usar documentos em processo seletivo]]
