# Roteiro de condução — Treinamento Portal IFMG

**16/10/2026** · [Slides](./index.html) · [Prática](./pratica.html) · [Capturas pendentes](./CAPTURAS-WAGTAIL.md)

Este roteiro é um **apoio para apresentação oral**, não substitui os procedimentos canônicos do Guia do Portal nem permite executar tarefas no Wagtail sem autorização. Capturas existentes são referências do guia, não comprovação da interface da homologação atual.

## Ideia central

**A arquitetura define onde a informação será encontrada; o fluxo editorial garante que ela seja preparada, revisada e publicada.**

A aula acompanha dois exemplos complementares: alguém procurando a **política de cotas** e a equipe preparando uma **página institucional da Biblioteca**. Para a Biblioteca, serviços, contatos, horários e documentos são ilustrativos e precisam de validação da área responsável.

## Abertura — cinco telas, incluindo a capa

| Tela | O que demonstrar | Transição para a próxima tela |
| --- | --- | --- |
| Capa | Há uma parte comum e trilhas por perfil. É possível saltar para cada trilha pelo índice. | Antes de editar, precisamos entender como a informação é encontrada. |
| Grafo anterior | O desenho representa páginas e relações mapeadas no portal anterior, cuja navegação refletia a estrutura institucional; **não é uma nota de desempenho**. | Como os públicos encontrariam suas informações? |
| Reitoria | Ler as **cinco entradas da Home**, agora junto ao grafo: Institucional, Estudantes, Servidores, Comunidade e Acesso à Informação. | E como essa lógica se aplica aos campi? |
| Campi | Ler as **sete entradas** do modelo e destacar como **fixas** Cursos, Processos seletivos e Eventos. As demais organizam informações locais. | Vamos seguir uma necessidade concreta. |
| Cotas | Percorrer **Home → Estudantes → Como ingressar no IFMG → Reserva de Vagas (Cotas)**. Este exemplo tem três cliques, não todos os assuntos. | Encontrar e produzir uma página são tarefas diferentes. |

**Limite da comparação:** os grafos do portal anterior, da Reitoria e dos campi têm **coberturas diferentes**. Não comparar quantidade de nós ou relações como prova automática de melhora. O mapa dos campi é um modelo, não uma garantia de publicação integral.

## Parte comum — as três estruturas

- **Páginas:** aparecem na árvore de navegação do site.
- **Blocos:** organizam conteúdo dentro da página.
- **Coleções:** armazenam e permitem encontrar documentos e imagens.

O Editor prepara, o Moderador revisa e decide, e o Administrador configura condições de acesso; sempre respeitando permissões. A IA auxilia a consultar o guia e preparar textos, não aprova nem publica.

## Editor — seis etapas da página da Biblioteca

| Etapa | Questão orientadora | Demonstração |
| --- | --- | --- |
| 01 Localizar | Estou na página-pai correta? | Árvore do Wagtail e tipo **Página**. |
| 02 Preparar | O que a pessoa precisa saber? | Serviços, horários, contato e metadados validados com o setor. |
| 03 Montar conteúdo | Qual bloco resolve essa necessidade? | Texto, Links, Link único, Cards e Tabela; não confundir com **Link** (tipo de página). |
| 04 Usar arquivos | Onde guardar e onde exibir? | **Documentos/Imagens** armazenam; o **bloco Coleção** exibe, com opção Recursivo para subcoleções. |
| 05 Busca e menus | A pessoa consegue encontrar a página? | **Promover** versus **Exibição do menu interno**. |
| 06 Revisar e enviar | Está pronto para a moderação? | Salvar, pré-visualizar em diferentes dispositivos, enviar para moderação. Enviar **não publica**. |

Não ensinar a criação de notícias como ação do Editor. No fluxo institucional, **notícias são produzidas por jornalistas, com perfil mínimo Moderador**.

## Moderador — correção e decisão

Continue com a mesma página da Biblioteca: está faltando o horário confirmado de atendimento às sextas-feiras. Uma boa devolução identifica o trecho, o dado a confirmar e o resultado esperado. Depois de corrigido, o Moderador verifica a mesma página e registra sua decisão.

A distribuição de notícias (Copiar, Alias e Linkar em outra pasta) é um **exemplo separado do trabalho dos jornalistas**. Diferenciar aprovar, publicar, agendar e despublicar.

**Ao apresentar os slides de revisão:** a primeira captura indica onde o Moderador encontra as solicitações; a segunda mostra a pré-visualização. O Status é outra etapa, que responde quando o conteúdo fica público. Não fazer publicação real durante a exposição. A mudança de horários da Biblioteca é um exemplo didático, não uma atualização confirmada de um campus.

## Administrador — configuração e limites

Explicar que **permissão de página não concede permissão de coleção**. Configurar os grupos apenas para o escopo necessário. Não renomear coleções por conta própria nem tentar resolver erros excluindo/recriando; registrar e encaminhar à manutenção técnica.

**Ao apresentar as permissões:** destaque que o esquema dos dois acessos é conceitual, não uma tela do Wagtail. Mostre a referência do menu Configurações e da opção Adicionar coleção, mas não execute operações administrativas. O alerta sobre renomeação continua na tela própria.

**Dica para apresentação presencial:** nas capturas existentes do Wagtail, use **Ampliar captura** para mostrar campos ou ações que estejam pequenos. O detalhe abre sobre o slide (inclusive em tela cheia) e fecha pelo botão ou por **Esc**. Enquanto estiver aberto, as setas não avançam a apresentação. As imagens são **referências do guia**; a ampliação não as torna capturas recentes da homologação e não recupera nitidez ausente no original.

## Acompanhamento e pendências

As [atividades individuais](./pratica.html) continuam fora dos slides. Para ações reais, consultar o Guia do Portal. A substituição das capturas existentes pelas imagens da homologação ocorre conforme o [checklist W01–W24](./CAPTURAS-WAGTAIL.md), após autorização e revisão de privacidade.

**QA:** deck atual com **42 telas**; o teste automatizado cobre dimensões, recursos e navegação. A legibilidade de campos pequenos em projeção e as capturas atuais da homologação seguem como pendências.
