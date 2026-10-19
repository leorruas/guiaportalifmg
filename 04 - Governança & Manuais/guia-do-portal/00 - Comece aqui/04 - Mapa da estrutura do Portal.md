# Mapa da estrutura do Portal

Este mapa mostra, aos poucos, como as páginas do Portal IFMG se organizam e se relacionam. Ele está **em construção**: entram aqui apenas páginas e relações que já foram mapeadas durante a análise do Portal.

## Mapa da Reitoria

Use o campo de busca para localizar uma página no recorte institucional. Clique em um nó para ver o endereço e abrir a página real do Portal.

<div data-portal-graph class="portal-graph-root"></div>

## Como ler o mapa

A **Home** é a raiz do recorte institucional. As linhas mostram relações já registradas entre páginas, incluindo os caminhos que foram acrescentados durante o mapeamento.

A ausência de uma página no grafo **não significa que ela não exista**. Significa apenas que ela ainda não foi adicionada a este mapa.

## Mapa da estrutura dos campi

Este segundo mapa mostra o **modelo de organização dos campi**, informado pelo responsável pelo guia. Ele não representa um campus já publicado nem atribui endereços às páginas. Os destinos exatos e o terceiro clique serão detalhados em uma próxima rodada.

A página do campus oferece sete entradas: **Campus**, **Cursos**, **Processos seletivos**, **Vida acadêmica**, **Vida funcional**, **Projetos** e **Eventos**. **Cursos, Processos seletivos e Eventos são menus fixos**, que não devem ser alterados na montagem local. Cursos e Processos seletivos apresentam filtros do campus específico.

**Vida acadêmica** corresponde aos caminhos para estudantes; **Vida funcional**, aos servidores; **Projetos**, à relação com a comunidade acadêmica interna ou externa. Em Campus, Vida acadêmica, Vida funcional e Projetos, mantenha a estrutura definida abaixo e acrescente os conteúdos do campus no escopo autorizado.

Use a busca do grafo para encontrar um caminho. Arraste o mapa, ajuste o zoom e clique nos nós para consultar suas descrições. O painel distingue conteúdo local, links para a Reitoria, links dentro do campus e sistemas externos. Um link para a Reitoria aponta para a informação compartilhada, evitando criar uma cópia local do mesmo conteúdo.

<div data-campus-map class="portal-graph-root"></div>

**Atendimento das coordenações de curso** aponta para a seção em **Campus > Servidores e contatos**. **Moodle** deve usar o destino específico do campus. Em Documentos acadêmicos, estão previstos links para PPC, matriz curricular, regimentos, planos de ensino, regulamentos e formulários do curso, cujos destinos serão detalhados depois.

O vínculo com a **Comissão Própria de Avaliação (CPA)** retorna à Reitoria; a reciprocidade prevista ainda precisa dos endereços correspondentes. Em Vida funcional, há um único link para o SEI, conforme confirmação do responsável. SUAP e SEI estão registrados com seus nomes usuais; não foram criados endereços para esses acessos.

## Páginas integradas à API do SUAP

As páginas abaixo apresentam **listagens de dados integradas à API do SUAP** no ambiente atual de homologação do Portal IFMG. **Todas oferecem filtro por campus**, permitindo consultar o recorte de cada unidade.

- [Eventos](https://portal.ifmg.edu.br/eventos/): listagem de eventos.
- [Projetos](https://portal.ifmg.edu.br/projetos/): listagem de projetos de pesquisa e extensão.
- [Docentes](https://portal.ifmg.edu.br/docentes/): listagem de docentes.
- [Servidores com função gratificada](https://portal.ifmg.edu.br/servidores/): listagem de servidores com função gratificada.
- [Terceirizados](https://portal.ifmg.edu.br/terceirizados/): listagem de trabalhadores terceirizados.
- [Setores](https://portal.ifmg.edu.br/setores/): listagem de setores.
- [Memoriais RSC](https://portal.ifmg.edu.br/memoriais_rsc/): listagem de memoriais de Reconhecimento de Saberes e Competências (RSC).

**Atenção à listagem de terceirizados:** no cenário observado, aparecem apenas terceirizados da Reitoria. Segundo a informação recebida, apenas a Reitoria está fazendo a vinculação dos prestadores de serviço aos respectivos contratos no SUAP. Portanto, o filtro por campus existe, mas a ausência de registros de outra unidade não deve ser interpretada automaticamente como ausência de terceirizados nessa unidade.

Esses endereços são listagens integradas ao SUAP. Ao organizar a navegação do Portal, prefira apontar para a listagem correspondente, em vez de copiar manualmente os registros para páginas do Wagtail. Os dados exibidos dependem do cadastro e das vinculações mantidas no sistema de origem.

**Limite de atuação:** editores preparam conteúdos no escopo autorizado; moderadores organizam e revisam a página do campus conforme suas atribuições. Para alterar permissões, criar coleções ou tratar um impedimento na estrutura, procure o administrador. Os menus fixos não devem ser recriados como páginas locais para contornar uma restrição.
