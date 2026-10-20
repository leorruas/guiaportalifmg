# Sou editor e quero criar um curso

Use a página do tipo **Curso** para apresentar uma formação do IFMG: o que a pessoa vai estudar, onde o curso é oferecido, como funciona e como ingressar. Antes de preencher, confira o cadastro da oferta e o projeto pedagógico do curso (PPC) vigente, considerando as diferenças entre os campi.

A criação de páginas depende das permissões do seu grupo e do local da árvore. Os registros usados nos campos de seleção, como modalidade, categoria e eixo tecnológico, são mantidos pela administração.

## Como fazer

1. No menu **Páginas**, localize **Cursos**. Clique **no nome da página Cursos** para abrir sua lista de subpáginas, e não no lápis, que abre a edição da página atual.
2. Dentro de **Cursos**, clique no botão **+** no topo da lista e escolha o tipo de página **Curso**.
3. Preencha os dados de identificação e classificação conforme os campos apresentados no formulário.
4. Informe campi, forma de oferta, duração, carga horária e demais dados acadêmicos com base no cadastro e no PPC correspondente. Não generalize dados de um campus para os demais.
5. Prepare os blocos de conteúdo: apresentação, formação, experiências acadêmicas, continuidade dos estudos, ingresso e atuação profissional, conforme o modelo da página.
6. Vincule o PPC ou a matriz curricular somente após conferir sua versão.
7. Pré-visualize a página, confira as informações e envie para moderação.

## Como preencher os dados do curso

Os termos abaixo descrevem **informações diferentes**. A forma como aparecem no Wagtail depende dos campos e cadastros disponíveis. Use o nome exato da opção existente no sistema; não crie combinações por conta própria.

| Informação | O que identifica | Exemplo de preenchimento |
| --- | --- | --- |
| **Título do curso** | Nome oficial da formação, sem acrescentar automaticamente campus ou forma de oferta ao nome. | Técnico em Administração; Engenharia Civil; Medicina Veterinária. |
| **Nível** | Etapa da formação. | Técnico, Graduação ou Pós-graduação. |
| **Tipo de curso ou grau** | Natureza da formação dentro do nível. | Bacharelado, Licenciatura, Curso Superior de Tecnologia (Tecnólogo), Especialização ou Mestrado. |
| **Forma de articulação do técnico com o ensino médio** | Quando e como o estudante cursa a habilitação técnica em relação ao ensino médio. | Integrado, Concomitante ou Subsequente. |
| **Educação de Jovens e Adultos (EJA)** | Oferta destinada a esse público, quando prevista para o curso. Pode existir em articulação com curso técnico. | Técnico integrado à EJA, quando esse for o registro oficial da oferta. |
| **Modalidade ou formato de oferta** | Como as atividades de ensino são organizadas. | Presencial, a distância (EaD) ou semipresencial, quando essa opção for aplicável e estiver registrada. |
| **Categoria de curso** | Agrupamento institucional configurado para organizar o catálogo de cursos. | Escolha a categoria disponível que corresponda ao cadastro institucional; sua lista não deve ser deduzida do nome do curso. |
| **Eixo tecnológico** | Agrupamento temático e profissional usado para organizar cursos. O campo é obrigatório no cadastro do portal. | Informação e Comunicação para Técnico em Informática; Ambiente e Saúde para Medicina Veterinária, por convenção editorial. |
| **Campus ou campi** | Unidade ou unidades que oferecem a formação. | Registrar apenas ofertas efetivamente confirmadas, sem copiar automaticamente dados acadêmicos entre campi. |
| **Carga horária e duração** | Total de horas da formação e tempo previsto para conclusão. | Registrar os valores e unidades do PPC vigente; não confundir carga horária com duração em anos ou semestres. |
| **Turno** | Período das aulas quando essa informação estiver disponível. | Manhã, tarde, noite ou combinação comprovada para cada campus. |
| **Natureza da participação** | Campo específico do formulário, quando disponível. | Selecionar conforme a definição institucional desse cadastro; confirmar com a administração caso o significado ou as opções não estejam claros. |
| **PPC ou matriz curricular** | Documento acadêmico que fundamenta as informações do curso. | Vincular o arquivo ou destino específico da versão aplicável à oferta. |

**Atenção:** o **tipo de página Curso** é o modelo de conteúdo do Wagtail. Ele não é o mesmo que o **tipo de curso**, como Bacharelado ou Licenciatura. Da mesma forma, *Integrado* não significa *Presencial*: a primeira informação descreve a articulação do curso técnico com o ensino médio; a segunda descreve o formato da oferta. Se o formulário tiver apenas um campo denominado **Modalidade** para outra dessas informações, respeite o significado e as opções configuradas nele.

## Como escolher o eixo tecnológico

O MEC organiza cursos técnicos no [Catálogo Nacional de Cursos Técnicos (CNCT)](https://cnct.mec.gov.br/) e cursos superiores de tecnologia no [Catálogo Nacional de Cursos Superiores de Tecnologia (CNCST)](https://cncst.mec.gov.br/). Ambos servem de referência para conferir a classificação de cursos que abrangem.

O cadastro de cursos do Portal IFMG usa **13 eixos tecnológicos** como opções. Consulte a lista e as regras de manutenção em [[04 - Governança & Manuais/guia-do-portal/02 - Sou administrador/09 - Sou administrador e quero configurar cadastros de processos e cursos|Configurar cadastros de cursos e eixos tecnológicos]].

Para **técnicos e tecnólogos**, selecione o eixo correspondente ao curso no catálogo do MEC pertinente, quando houver correspondência. A forma de oferta não muda o eixo de uma mesma habilitação técnica: por exemplo, Técnico em Meio Ambiente Integrado e Subsequente pertencem a **Ambiente e Saúde**.

Para **bacharelados e licenciaturas**, os catálogos tecnológicos não atribuem um eixo oficial ao grau. Como o campo é obrigatório no cadastro do Portal, adote o eixo mais próximo **como classificação editorial do IFMG**, conforme a orientação institucional. Exemplo: Medicina Veterinária (Bacharelado) utiliza **Ambiente e Saúde** para esse cadastro. Isso não significa que o MEC classifique formalmente o bacharelado nesse eixo.

**Exemplo de leitura de dados:** “Técnico em Administração | Integrado ao ensino médio | Presencial | Gestão e Negócios” distingue nome, forma de articulação, formato de oferta e eixo.

## Como configurar a galeria do curso

As experiências acadêmicas descritas na página podem ter um bloco **Galeria** próprio. Mesmo quando as fotografias definitivas ainda não foram enviadas, é importante orientar a montagem do bloco sem inventar imagens nem legendas.

1. Na aba **Conteúdo**, adicione o bloco **Galeria** no ponto correspondente à experiência descrita.
2. No campo **Estilo**, selecione **Com bordas**.
3. Escolha as fotografias dessa experiência na biblioteca de imagens. **Se as imagens definitivas ainda não estiverem disponíveis**, pode-se inserir uma imagem provisória apenas para montar a página. Ela deve ser substituída por uma foto da experiência, fornecida pela coordenação, **antes da publicação**. Não apresente uma foto provisória como registro verdadeiro da atividade.
4. **A legenda exibida na galeria vem do título (nome) cadastrado para cada imagem no Wagtail.** Não há uma legenda independente para copiar do roteiro de cursos nesse preenchimento. Ao escolher uma imagem, confira o título dela; se estiver genérico ou incorreto, atualize o cadastro da imagem antes de usá-la. O título não é necessariamente o nome do arquivo no computador.
5. Revise também o **texto alternativo** da imagem e pré-visualize a galeria para conferir bordas, fotos, ordem e legendas. Se a coordenação ainda não forneceu as fotos, mantenha essa substituição como pendência antes da aprovação.

> [!ACTION]
> [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/12 - Sou editor e quero adicionar ou atualizar uma imagem|Cadastrar ou corrigir o título de uma imagem]]

## Antes de enviar para moderação

- Confira nome, nível, tipo ou grau, classificação e modalidade nos documentos da oferta.
- Verifique a distinção entre cursos **integrados, concomitantes, subsequentes e integrados à EJA**, quando aplicável.
- Confira por campus turno, duração, carga horária, e-mail da coordenação e PPC vigente. Dados ausentes não devem ser inventados.
- Verifique se o eixo tecnológico foi selecionado e se corresponde à referência do MEC ou à convenção editorial adotada pelo IFMG.
- Nas galerias, confirme **Estilo: Com bordas**, títulos adequados das imagens (que serão usados como legendas), textos alternativos e substituição de eventuais fotos provisórias antes da publicação.
- Confira como o curso aparece na pré-visualização e se o texto orienta a pessoa a encontrar informações reais de ingresso.

**Como conferir:** a pessoa entende a formação, os campi, a organização do curso e as informações de ingresso. Os campos estão coerentes entre si, e a moderação pode verificar a origem dos dados.

**Limite de permissão:** o editor seleciona opções existentes. Se categoria, modalidade, tipo ou eixo estiver ausente, incorreto ou duplicado, solicite a revisão à administração antes da publicação.

> [!ACTION]
> [[04 - Governança & Manuais/guia-do-portal/02 - Sou administrador/09 - Sou administrador e quero configurar cadastros de processos e cursos|Solicitar revisão das opções de cadastro de cursos]]
