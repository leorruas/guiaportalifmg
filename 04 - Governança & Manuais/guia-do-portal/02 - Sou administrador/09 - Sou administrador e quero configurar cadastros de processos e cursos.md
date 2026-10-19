# Sou administrador e quero criar ou atualizar opções usadas em processos seletivos e cursos

Use esta tarefa para manter **opções que aparecem nos formulários** do Wagtail, como tipos de processos, etapas de seleção, modalidades, categorias de curso e eixos tecnológicos. Esses são *cadastros auxiliares*: ao alterar um termo, você pode afetar várias páginas que usam a mesma opção.

No Guia do Portal IFMG, a criação e alteração desses registros é feita por administradores ou grupos aos quais essa permissão tenha sido delegada. Antes de editar, confira se a opção já existe e se há páginas utilizando-a.

## Processos seletivos: o que cada cadastro significa

- **Tipo de processo seletivo**: a família da seleção, como ingresso, estágio ou seleção de bolsistas.
- **Subtipo**: recorte dentro de um tipo; vincula-se a ele para detalhar o processo.
- **Tipo de etapa**: nome de uma fase, como “Inscrições”, “Resultado preliminar” ou “Matrícula”.

### Como cadastrar opções de processos seletivos

1. Abra **Configurações** e localize o cadastro correspondente.
2. Para um tipo, informe a denominação definida pela área responsável.
3. Para um subtipo, selecione o tipo-pai, informe a descrição e marque sua situação, quando o formulário oferecer esses campos.
4. Para uma etapa, informe a denominação, o grupo e a situação ativa, conforme a configuração disponível.
5. Verifique se os nomes são compreensíveis para o público e se a opção já não existe com outra grafia.

## Cursos: diferenciar as informações de cadastro

Antes de criar uma opção, identifique o que ela representa. Termos parecidos podem corresponder a campos diferentes:

| Cadastro ou informação | O que significa | Exemplos e cuidados |
| --- | --- | --- |
| **Nível de ensino** | Etapa da formação. | Técnico, Graduação e Pós-graduação. |
| **Tipo de curso ou grau** | Natureza da formação dentro do nível. | Bacharelado, Licenciatura, Curso Superior de Tecnologia (Tecnólogo), Especialização, Mestrado e Doutorado. |
| **Forma de articulação do curso técnico** | Relação entre habilitação profissional e ensino médio. | Integrado, Concomitante ou Subsequente. |
| **EJA** | Oferta de Educação de Jovens e Adultos, que também pode estar articulada à formação técnica. | Não substituir “Integrado” por “EJA” quando a oferta for *Técnico Integrado à EJA*. |
| **Modalidade ou formato de oferta** | Organização das atividades de ensino. | Presencial, a distância (EaD) e semipresencial, conforme o tipo de curso, registro oficial e opções disponíveis. |
| **Categoria de curso** | Classificação institucional configurada no Wagtail para organizar as páginas. | Não confundir a categoria interna com o grau acadêmico ou com o eixo tecnológico. |
| **Eixo tecnológico** | Agrupamento dos cursos por área tecnológica. | Uma das 13 opções abaixo. Obrigatório no cadastro de cursos do Portal IFMG. |
| **Campus** | Unidade que oferece o curso. | A oferta e seus dados acadêmicos devem ser conferidos por unidade. |
| **Carga horária, duração e turno** | Características do funcionamento da oferta. | Dados acadêmicos do curso, não nomes de categorias a criar para suprir informações ausentes. |

**Tipo de página** é outra coisa: *Curso* é o modelo de página que o editor cria no Wagtail. *Bacharelado* é um grau; *Integrado* é uma forma de articulação de curso técnico; *Presencial* é um formato de oferta. O nome dos campos no Wagtail pode variar: conferir o que cada seleção realmente representa antes de criar ou renomear registros.

O MEC descreve [a diferença entre bacharelado, licenciatura e tecnologia](https://www.gov.br/mec/pt-br/acesso-a-informacao/perguntas-frequentes/secretaria-de-regulacao-e-supervisao-da-educacao-superior-seres/qual-a-diferenca-entre-bacharelado) e [as formas integrada, concomitante e subsequente dos cursos técnicos](https://acervoportal.mec.gov.br/cursos-da-ept/cursos-da-educacao-profissional-tecnica-de-nivel-medio). Essas referências ajudam a evitar mistura de categorias durante o cadastro.

## Eixo tecnológico: opções do MEC

Para padronizar o **campo obrigatório Eixo tecnológico**, o IFMG adotou as 13 denominações dos catálogos tecnológicos do Ministério da Educação:

1. Ambiente e Saúde
2. Controle e Processos Industriais
3. Desenvolvimento Educacional e Social
4. Gestão e Negócios
5. Informação e Comunicação
6. Infraestrutura
7. Militar
8. Produção Alimentícia
9. Produção Cultural e Design
10. Produção Industrial
11. Recursos Naturais
12. Segurança
13. Turismo, Hospitalidade e Lazer

**Fontes oficiais do MEC:**

- [Catálogo Nacional de Cursos Técnicos (CNCT)](https://cnct.mec.gov.br/): consultar o eixo de cada habilitação técnica.
- [Catálogo Nacional de Cursos Superiores de Tecnologia (CNCST)](https://cncst.mec.gov.br/): consultar o eixo de cada curso superior de tecnologia e a lista de eixos.
- [Orientação geral do MEC sobre os catálogos](https://www.gov.br/mec/pt-br/acesso-a-informacao/institucional/estrutura-organizacional/orgaos-especificos-singulares/secretaria-de-educacao-profissional/catalogos-nacionais-de-cursos/apresentacao): escopo e finalidade dos instrumentos normativos.

### Como aplicar no cadastro

Para **cursos técnicos**, usar o eixo indicado no CNCT quando a habilitação constar do catálogo. Para **cursos superiores de tecnologia**, usar o eixo do CNCST. A forma de articulação ou o turno não criam novos eixos: o Técnico em Meio Ambiente, integrado ou subsequente, é classificado em **Ambiente e Saúde**.

Para **bacharelados, licenciaturas e pós-graduações**, esses catálogos não atribuem formalmente eixos tecnológicos aos cursos. Como o campo é obrigatório no Wagtail do IFMG, escolher o eixo mais próximo é uma **convenção editorial interna para viabilizar o cadastro**, e não uma classificação normativa feita pelo MEC. A escolha deve ser consistente e, quando houver dúvida, validada com a área responsável.

**Exemplo de decisão editorial do IFMG:** o Bacharelado em Medicina Veterinária utiliza **Ambiente e Saúde**. Já licenciaturas podem ser agrupadas em **Desenvolvimento Educacional e Social** para esse campo, sem que isso altere o grau ou o reconhecimento do curso.

**Não elimine opções sem uso:** o eixo **Militar** integra o vocabulário oficial, embora não tenha sido atribuído aos 69 cursos do catálogo em revisão de outubro de 2026. O mesmo cuidado vale para qualquer eixo que ainda não apareça nas ofertas. A lista de opções de cadastro não precisa coincidir com os eixos atualmente utilizados.

## Como cadastrar ou corrigir opções de curso

1. Em **Configurações**, localize a lista correspondente, como **Eixos tecnológicos**, **Modalidades** ou **Categorias de curso**, de acordo com as opções liberadas no Wagtail.
2. Pesquise antes de cadastrar: confira nome, acentuação, abreviações, duplicações e registros inativos.
3. Para eixos tecnológicos, use exatamente uma das 13 denominações acima; não crie subdivisões ou sinônimos como se fossem novos eixos.
4. Para modalidades, tipos e categorias, confirme qual dimensão o cadastro representa e o nome autorizado pela área acadêmica antes de criar ou alterar a opção. Uma mesma palavra pode ser usada de modo diferente em outros sistemas.
5. Preencha a descrição do registro e a situação ativa, quando o formulário oferecer esses campos. Ative apenas opções verificadas e prontas para uso.
6. Antes de desativar ou renomear um registro, verifique quais páginas o utilizam e combine com os responsáveis como manter a classificação consistente.
7. Abra uma página de curso no formulário como teste: confira se as opções aparecem corretamente, sem duplicidades, e se selecionar uma delas não altera os demais campos.

> [!ACTION]
> [[04 - Governança & Manuais/guia-do-portal/04 - Sou editor/05 - Sou editor e quero criar um curso|Conferir o preenchimento dos campos na página de curso]]

## Como conferir

Os formulários apresentam opções claras, sem duplicidades e com classificações coerentes. Cursos técnicos e tecnólogos podem ter o eixo comparado ao catálogo do MEC; enquadramentos de outros graus são identificados internamente como decisões editoriais. Registre a fonte ou a decisão institucional para mudanças que afetem vários cursos.

**Limite de permissão:** não altere nomes e classificações sem confirmar seu significado e o efeito nos registros existentes. Se houver conflito entre uma opção do Wagtail, o PPC e o cadastro acadêmico oficial, encaminhe o caso para a área responsável antes de mudar o cadastro compartilhado.
