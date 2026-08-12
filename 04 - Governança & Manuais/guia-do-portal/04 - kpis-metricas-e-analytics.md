# KPIs, métricas e analytics

O monitoramento do portal deve começar pelo resultado que se quer alcançar para as pessoas, e não pela disponibilidade de números no painel.

```text
Objetivo → KPI → Meta → Métricas → Análise → Decisão
```

| Elemento | Pergunta que responde | Exemplo no portal |
| --- | --- | --- |
| Objetivo | Aonde queremos chegar? | Reduzir a dificuldade para localizar e realizar a matrícula. |
| KPI | Como saberemos se estamos progredindo? | Taxa de pessoas que alcançam a próxima etapa correta da matrícula. |
| Meta | Qual resultado esperamos e até quando? | Elevar a taxa de 62% para 80% no próximo ciclo de matrícula. |
| Métrica | Que dados alimentam a leitura? | Entradas, cliques, busca, retorno, abandono, tempo e origem. |
| Análise | O que ocorreu e qual hipótese merece investigação? | A maior perda ocorre após a página de documentos necessários. |
| Decisão | O que será alterado e acompanhado? | Reordenar instruções e testar novo checklist de documentos. |

Nem toda métrica é um KPI, e um KPI não é uma meta. O KPI mede progresso; a meta define o valor esperado para ele em um período.

## Métricas acionáveis, não métricas de vaidade

Visualizações, seguidores, impressões e cliques podem ser úteis, mas não comprovam que o portal cumpriu sua finalidade. Tornam-se relevantes quando ajudam a responder a um objetivo e conduzem a uma decisão concreta.

Uma métrica é acionável quando revela uma oportunidade de intervenção: por exemplo, abandono concentrado em uma etapa de formulário permite investigar instruções, validação e mensagens de erro. Já um volume alto de acessos, isoladamente, pode significar interesse, dificuldade, repetição de tentativa ou ausência de alternativa melhor.

## Indicadores de processo e de resultado

| Tipo | Função | Exemplos |
| --- | --- | --- |
| *Leading indicators* (processo) | Sinalizam risco ou oportunidade antes do resultado consolidado. | Aumento de busca sem resultado, abandono em uma etapa, reclamações e cliques em conteúdo vencido. |
| *Lagging indicators* (resultado) | Registram o efeito depois que ocorreu. | Satisfação consolidada, conclusão de serviços, redução de demandas de atendimento. |

Use ambos: indicadores de processo permitem agir mais cedo; indicadores de resultado verificam se a mudança produziu efeito.

## Como interpretar analytics

Analytics mostra principalmente **o que aconteceu**: entradas, caminhos, cliques, abandono, origem e comportamento observado. Ele raramente explica, sozinho, **por que** aconteceu. Para investigar causas, combine os dados com testes de usabilidade, entrevistas, observação, pesquisa de satisfação, análise de conteúdo e evidências do atendimento.

Métricas isoladas não têm significado fixo:

- tempo alto pode indicar interesse ou dificuldade;
- tempo baixo pode indicar abandono ou tarefa resolvida rapidamente;
- uma saída rápida pode ser fracasso ou a pessoa ter copiado um telefone e resolvido seu objetivo;
- aumento de buscas, reclamações ou denúncias pode indicar problema, mas também maior conhecimento e acesso a direitos.

Interprete sempre em relação à tarefa, ao conteúdo, à sazonalidade e às evidências qualitativas.

## Funis de tarefa

Um funil representa as etapas necessárias para alcançar uma ação desejada. Para cada tarefa crítica, defina uma entrada, passos de descoberta e progressão, uma ação de sucesso observável e sinais de fricção. A maior perda entre etapas mostra onde concentrar a investigação, não uma causa automática.

Exemplo: `entrada na página de matrícula → consulta de documentos → acesso ao sistema correto → confirmação ou próxima etapa`. Se a perda se concentra nos documentos, revise primeiro clareza, vigência, formato, acessibilidade e ligação com o sistema antes de concluir que o problema é falta de interesse.

## Painel de monitoramento

Um dashboard deve apoiar decisões, não apenas exibir gráficos. Para cada tarefa, ele precisa tornar visível:

- objetivo, KPI, meta e período;
- volume e taxa de progressão por etapa;
- principais sinais de fricção;
- tendência em relação ao período comparável;
- segmento ou contexto relevante, como dispositivo, campus ou origem, sem inferir identidade pessoal;
- responsável pela análise, decisão tomada e data de revisão.

Em serviços públicos, uma única *North Star Metric* raramente representa todo o valor gerado. Prefira um conjunto equilibrado de KPIs que cubra acesso, conclusão, compreensão, qualidade do conteúdo e equidade de atendimento.

## Verificação para cada indicador

- [ ] O indicador está ligado a um objetivo explícito e a uma decisão possível?
- [ ] KPI, meta e métricas foram definidos sem tratá-los como sinônimos?
- [ ] A métrica mede avanço ou resultado da tarefa, e não apenas volume?
- [ ] Há interpretação contextual e comparação com período, tarefa ou público relevante?
- [ ] Dados qualitativos estão previstos para explicar anomalias e causas?
- [ ] O painel indica responsável, frequência de revisão e ação diante de desvio da meta?
- [ ] A coleta evita dados pessoais desnecessários e respeita o propósito público do serviço?

## Conexões no projeto

- [[00 - Inbox/03 problemas para o futuro#2026-07-28 - Monitoramento de tarefas e fluxos críticos|Monitoramento de tarefas e fluxos críticos]] — tarefas iniciais, eventos e ciclo de acompanhamento.
- [[06 - Dados & Artefatos/dados-analytics/protocolo-analytics|Protocolo Analytics]] — método de extração e limites de interpretação dos dados atuais.
- [[04 - Governança & Manuais/guia-do-portal/03 - seo-busca-interna-e-metadados|SEO, busca interna e metadados]] — consultas e abandono como sinais de encontrabilidade.
- [[02 - Pesquisa (UXR)/testes-de-usabilidade/guia-sintese-relatorio|Guia de Síntese de Relatório]] — integração de resultados qualitativos.

