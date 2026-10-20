(() => {
  'use strict';
  const cases = {
    'comum-objetivo': {
      type:'contrast',title:'O título indica o serviço da página',lead:'O título precisa orientar quem busca atendimento.',
      left:{label:'GENÉRICO',title:'Informações importantes',text:'A pessoa não sabe qual serviço encontrará.'},
      right:{label:'ESPECÍFICO',title:'Biblioteca: horários e serviços de empréstimo',text:'O assunto e a informação disponível ficam claros antes de abrir a página.'},
      note:'Antes de publicar, confirme horários, serviços e contatos com a área institucional.'
    },
    'comum-estrutura': {
      type:'cards',title:'Páginas, blocos e coleções são coisas diferentes',lead:'No Wagtail, cada uma dessas estruturas cumpre uma função.',
      cards:[
        ['PÁGINAS','Onde o conteúdo fica','A árvore define o caminho de navegação e as relações entre páginas-pai e páginas-filhas.'],
        ['BLOCOS','Como a página é montada','Texto, imagens, Links, Tabela e outros blocos compõem a informação dentro da página.'],
        ['COLEÇÕES','Onde os arquivos ficam','Coleções organizam imagens e documentos; não são pastas de páginas.']
      ],note:'Antes de duplicar uma página ou criar um novo destino, procure a estrutura já existente e confira a responsabilidade da área.'
    },
    'comum-papeis': {
      type:'cards',title:'Três perfis, responsabilidades cumulativas',lead:'O moderador herda a edição; o administrador herda edição e moderação.',
      cards:[
        ['EDITOR','Prepara','Organiza a página, seus blocos e arquivos, confere a prévia e envia para revisão.'],
        ['MODERADOR','Revisa e decide','Confere o conteúdo, devolve correções e gerencia o estado público no escopo permitido.'],
        ['ADMINISTRADOR','Configura','Gerencia grupos, coleções e permissões para que cada equipe trabalhe no local autorizado.']
      ],note:'Gestores solicitam e validam demandas, mas não integram essa cadeia de permissões. Código e banco exigem manutenção técnica.'
    },
    'comum-painel': {
      type:'screen',title:'O painel indica quem precisa agir',lead:'O estado da página mostra se o trabalho ainda é de edição ou já está em revisão.',
      image:'guias-contextuais/tela-inicial-fluxo-revisao.png',alt:'Painel inicial do Wagtail com áreas de acompanhamento do fluxo de trabalho.',
      steps:[
        ['ACESSO','Entre com suas credenciais e observe apenas as áreas autorizadas para seu perfil.'],
        ['ACOMPANHAR','“Suas páginas e snippets em um fluxo de trabalho” reúne conteúdos em andamento.'],
        ['REVISAR','“Aguardando sua revisão” mostra solicitações que dependem de decisão editorial.']
      ]
    },
    'editor-papel': {
      type:'screen',title:'Comece pela página-pai autorizada',lead:'O exemplo é uma Página institucional da Biblioteca, não uma notícia.',
      image:'manual-ifrn/image21.png',alt:'Referência visual do guia: seleção do tipo Página em Adicionar subpágina no Wagtail.',
      steps:[
        ['01 / LOCALIZAR','Abra Páginas e encontre a página-pai da área em que você tem permissão para editar.'],
        ['02 / ESCOLHER','Para criar, use Adicionar subpágina → Página. Para atualizar, abra a página existente.'],
        ['03 / PREPARAR','Confira título e responsabilidade; os conteúdos e metadados serão preparados nas próximas etapas.']
      ],note:'Se a página institucional já existe, atualize-a em vez de criar outra. A imagem mostra uma interface de referência do guia.'
    },
    'editor-planejar': {
      type:'fields',title:'Antes de editar, confirme os dados do serviço',lead:'Exemplo de preparo da página institucional da Biblioteca.',
      fields:[
        ['PÚBLICO','Quem utiliza?','Confirme a quem o serviço se destina.'],
        ['ATENDIMENTO','Quando funciona?','Confirme dias e horários de atendimento com a unidade.'],
        ['SERVIÇOS','Como acessar?','Informe local, serviços, contatos e próximos passos.'],
        ['BUSCA','Como encontrar?','Prepare título, slug, tag de título e meta descrição na aba Promover.']
      ],note:'A referência de 140–155 caracteres para meta descrição não é uma exigência do sistema.'
    },
    'editor-texto': {
      type:'screen',title:'O editor de texto tem hierarquia, não só formatação',lead:'Use o controle de títulos para organizar seções; negrito não substitui H2 e H3.',
      image:'guias-contextuais/barra-edicao-flutuante.png',alt:'Barra flutuante de edição de texto no Wagtail, com controles de formatação e fixação.',
      steps:[
        ['BARRA','Selecione um trecho para mostrar as ferramentas; o alfinete fixa a barra no campo.'],
        ['H2','Use Título 2 nas principais partes, como Serviços e Atendimento.'],
        ['H3','Use Título 3 nas subdivisões; confira a sequência na pré-visualização.']
      ]
    },
    'editor-arquivos': {
      type:'screen',title:'Cadastre documentos com títulos que expliquem o arquivo',lead:'Título, coleção e tags ajudam a encontrar a versão vigente.',
      image:'manual-ifrn/preenchimento-de-documento-colecao-tags.png',alt:'Campos de título, coleção e tags na tela de cadastro de documento no Wagtail.',
      steps:[
        ['TÍTULO','Exemplo: “Regulamento de empréstimo da Biblioteca — [campus]”. Use o título real do documento vigente.'],
        ['COLEÇÃO','Escolha a coleção da finalidade do arquivo; um documento não justifica inventar uma coleção.'],
        ['ATUALIZAR','Substitua o documento existente se a nova versão deve valer em todos os usos; crie outro se o anterior precisa permanecer disponível.']
      ],note:'Localize por Documentos e busca ou filtros. Quem tiver acesso pode adicionar por Configurações → Coleções → destino → Documento. O título cadastrado é diferente do nome físico do PDF.'
    },
    'editor-imagens': {
      type:'screen',title:'Imagem publicada precisa de formato e descrição',lead:'O contexto determina a escolha de enquadramento e texto alternativo.',
      image:'guias-contextuais/imagem-formatos-texto.png',alt:'Seleção de formato e opções de acessibilidade ao inserir imagem no texto do Wagtail.',
      steps:[
        ['FORMATO','Em páginas institucionais, escolha o formato pela função da imagem e confira o resultado na prévia.'],
        ['DESCRIÇÃO','A imagem informativa exige texto alternativo; marque decorativa apenas se não acrescentar informação.'],
        ['PRÉVIA','Confira corte e legibilidade em computador, tablet e celular.']
      ],note:'Para localizar, use Imagens e a busca ou filtros. Para adicionar, quem tiver acesso pode começar por Configurações → Coleções → destino → Imagem. Título, texto alternativo e legenda têm funções diferentes.'
    },
    'moderador-noticias': {
      type:'screen',title:'Jornalistas distribuem notícias entre pastas',lead:'Na trilha Moderador: Copiar, Alias e Linkar em outra pasta produzem resultados diferentes.',
      image:'guias-contextuais/noticia-escolher-pastas.png',alt:'Seleção de pastas de destino para distribuição de uma notícia no Wagtail.',
      steps:[
        ['COPIAR','Sem Alias: cria outra página, que pode seguir independente da original.'],
        ['ALIAS','A cópia com Alias permanece vinculada às alterações futuras da original.'],
        ['LINKAR','Linkar em outra pasta distribui a mesma notícia nas pastas escolhidas, conforme o fluxo de solicitações.']
      ],note:'Escolha com base no objetivo editorial. Não duplique uma notícia apenas para colocá-la em outra área.'
    },
    'editor-corrigir': {
      type:'process',title:'Uma devolução é uma correção na mesma página',lead:'Não crie uma nova cópia ao receber comentários da moderação.',
      steps:[
        ['01 / LOCALIZAR','Abra a página devolvida e leia o comentário no campo ou bloco indicado.'],
        ['02 / CORRIGIR','Altere o trecho solicitado; responda ao comentário quando necessário.'],
        ['03 / REENVIAR','Salve, confira a prévia e envie a mesma página novamente para moderação.']
      ],note:'Resolver um comentário não significa publicar. A próxima decisão continua com a moderação.'
    },
    'editor-pratica': {
      type:'dualScreen',title:'Abra a prévia e confira em diferentes telas',lead:'O ícone de celular no topo abre o painel de pré-visualização.',
      screens:[
        {label:'01 / ABRIR A PRÉVIA',image:'capturas-wagtail/W05b-previa-recolhida.png',alt:'Homologação IFMG: edição de Institucional com prévia recolhida e ícone de celular no topo.',source:'HOMOLOGAÇÃO IFMG · 20/10/2026',description:'Se a prévia não estiver aparecendo, clique no ícone de celular na barra superior.'},
        {label:'02 / CONFERIR AS TELAS',image:'capturas-wagtail/W05a-previa-aberta-dispositivos.png',alt:'Homologação IFMG: painel de prévia aberto com controles de celular, tablet, computador e abertura externa.',source:'HOMOLOGAÇÃO IFMG · 20/10/2026',description:'No painel aberto, escolha celular, tablet ou computador. O ícone de abrir externamente permite conferir a prévia no navegador.'}
      ],note:'As capturas mostram Institucional. No exemplo da Biblioteca, confirme horários, contatos e links antes de enviar para revisão. Abrir a prévia não publica a página; o link externo não garante acesso sem autenticação. As atividades individuais continuam na página de prática.'
    },
    'moderador-papel': {
      type:'cards',title:'Revisar conteúdo não é o mesmo que colocá-lo no ar',lead:'O moderador responde tanto pela decisão editorial quanto pela vigência.',
      cards:[
        ['REVISÃO','Está correto?','Confira fonte, prazos, clareza, arquivos, acessibilidade e próxima ação.'],
        ['DEVOLUÇÃO','O que falta?','Aponte no texto o que precisa mudar e o resultado esperado, sem comentários vagos.'],
        ['PUBLICAÇÃO','Deve aparecer agora?','Publique, agende ou despublique conforme a decisão e o alcance de suas permissões.']
      ],note:'O moderador pode editar páginas, mas não administra grupos nem coleções. Solicite esses ajustes ao administrador.'
    },
    'moderador-revisao': {
      type:'dualScreen',title:'A revisão começa na fila e continua na prévia',lead:'Receber uma solicitação e conferir o resultado são ações distintas.',
      screens:[
        {label:'01 / LOCALIZAR',image:'guias-contextuais/tela-inicial-fluxo-revisao.png',alt:'Referência do guia: fila de revisão no painel Wagtail.',description:'Identifique no painel o conteúdo que aguarda uma decisão editorial.'},
        {label:'02 / CONFERIR',image:'capturas-wagtail/W05a-previa-aberta-dispositivos.png',alt:'Homologação IFMG: prévia de Institucional com modos celular, tablet e computador.',source:'HOMOLOGAÇÃO IFMG · 20/10/2026',description:'Clique no ícone de celular no topo para abrir a prévia. Confira celular, tablet e computador; o ícone externo abre no navegador.'}
      ],note:'No exemplo da Biblioteca, confirme as informações com a unidade. A fila depende das permissões do perfil.'
    },
    'moderador-publicar': {
      type:'screen',title:'Publicar ou agendar depende do estado da página',lead:'Revisar e colocar no ar são decisões diferentes.',
      image:'manual-ifrn/image16.png',alt:'Referência do guia: indicador de Status no Wagtail.',
      steps:[
        ['PUBLICAR','Após a aprovação, use a ação disponível e confira a página no portal.'],
        ['AGENDAR','No Status, configure data de publicação ou expiração confirmada; confira o estado.'],
        ['DESPUBLICAR','Antes de retirar do ar, revise links dependentes, substituições e valor histórico.']
      ],note:'Imagem de referência do Status, não comprovação de publicação. Privacidade e disponibilidade pública são controles distintos.'
    },
    'moderador-campus': {
      type:'cards',title:'O campus tem menus próprios e menus fixos',lead:'Não recrie localmente as estruturas que o modelo já fornece.',
      cards:[
        ['MENUS FIXOS','Cursos · Processos seletivos · Eventos','Essas entradas não devem ser recriadas como páginas locais. Cursos e processos mostram dados do campus.'],
        ['CONTEÚDOS LOCAIS','Campus · Vida acadêmica','Informações da unidade e serviços aos estudantes dentro do escopo autorizado.'],
        ['OUTROS CAMINHOS','Vida funcional · Projetos','Use links para Reitoria e sistemas compartilhados quando a informação pertence a esses destinos.']
      ],note:'Dados de servidores, setores e eventos podem vir da integração com SUAP. Confira a origem antes de cadastrar cópias.'
    },
    'moderador-pratica': {
      type:'scenario',title:'Uma aprovação precisa deixar a decisão registrada',lead:'Síntese da revisão da página da Biblioteca enviada pelo Editor.',
      scenario:'A página da Biblioteca chegou sem o horário de atendimento às sextas-feiras.',
      steps:[
        ['DEVOLVER','No trecho de horários, peça a confirmação e a inclusão da informação com a fonte responsável.'],
        ['RECONFERIR','Leia a correção na mesma página, confira contatos, links e funcionamento do serviço.'],
        ['DECIDIR','Registre a aprovação ou encaminhe à publicação conforme a revisão e seu acesso.']
      ],note:'As correções e a decisão devem permanecer associadas à página e ao fluxo de moderação.'
    },
    'administrador-papel': {
      type:'screen',title:'Grupos e coleções ficam na administração',lead:'É no painel que o Administrador configura os acessos permitidos.',
      image:'manual-ifrn/image4.png',alt:'Referência do guia: menu Configurações do Wagtail.',
      steps:[
        ['LOCALIZAR','Abra Configurações, quando autorizado, e identifique Grupos e Coleções.'],
        ['CONFIGURAR','Defina somente páginas e coleções necessárias à equipe, respeitando cada área.'],
        ['ENCAMINHAR','Falhas de código, banco ou integração exigem registro e suporte técnico.']
      ],note:'A disponibilidade desse menu depende do perfil. Não altere configurações apenas para demonstrar a tela.'
    },
    'administrador-acessos': {
      type:'permission',title:'Acesso à página não libera automaticamente o documento',lead:'O Editor abre a Página da Biblioteca, mas não consegue selecionar o PDF.',
      permissions:[
        {label:'PERMISSÃO DE PÁGINAS',heading:'Editar a Biblioteca',description:'O grupo precisa das ações permitidas sobre a seção correta da árvore.'},
        {label:'PERMISSÃO DE COLEÇÕES',heading:'Usar o arquivo',description:'O mesmo grupo precisa de acesso à coleção em que o PDF foi armazenado.'}
      ],result:'A tarefa depende dos dois acessos. Confirme ambos com uma pessoa do grupo, sem liberar páginas ou coleções-pai de outras áreas.',
      note:'Esquema conceitual — não é uma captura do Wagtail. O checklist prevê captura da configuração real.'
    },
    'administrador-privacidade': {
      type:'screen',title:'Privacidade dos documentos é diferente de permissão de edição',lead:'O botão com ícone de olho define quem pode visualizar documentos da coleção.',
      image:'guias-contextuais/colecao-opcoes-privacidade.png',alt:'Opções de privacidade da coleção de documentos no Wagtail.',
      steps:[
        ['VISUALIZAÇÃO','Público, senha compartilhada, usuários logados ou grupos específicos.'],
        ['HIERARQUIA','Uma restrição alcança subcoleções; privar Root pode restringir todos os documentos.'],
        ['LIMITE','A privacidade de coleções protege documentos, não imagens. Teste a regra com e sem login.']
      ]
    },
    'administrador-estrutura': {
      type:'dualScreen',title:'Escolha a coleção pela unidade, finalidade e ano',lead:'A seta à direita abre as subcoleções; o caminho no topo mostra onde você está.',
      screens:[
        {label:'01 / UNIDADE E FINALIDADE',image:'capturas-wagtail/W08c-estrutura-atual-colecoes.png',alt:'Homologação IFMG: Coleção com U_01 Ouro Branco, cursos, servidores, 2026, Acesso à informação e Notícias.',source:'HOMOLOGAÇÃO IFMG · 20/10/2026',description:'Unidades usam número e nome, como U_01 Ouro Branco. Há destinos para cursos, servidores e acesso à informação. A coleção 2026 deste nível reúne arquivos institucionais, conforme orientação do responsável.'},
        {label:'02 / NOTÍCIAS POR ANO',image:'capturas-wagtail/W08d-noticias-por-ano.png',alt:'Homologação IFMG: dentro da coleção Notícias, subcoleções 2026 e 2027.',source:'HOMOLOGAÇÃO IFMG · 20/10/2026',description:'Dentro de Notícias, escolha o ano, como 2026 ou 2027. No campus, o caminho confirmado é U_01 Ouro Branco → Notícias_OuroBranco → 2026; o roteiro mostra essas duas telas.'}
      ],note:'Coleção → 2026 (arquivos institucionais) e Coleção → Notícias → 2026 (arquivos de notícias) são destinos diferentes. Coleções guardam arquivos; a árvore de páginas organiza o conteúdo do portal. Use o destino autorizado e confirme com a administração quando faltar uma coleção adequada.'
    },
    'administrador-pratica': {
      type:'scenario',title:'A configuração está pronta quando cada perfil consegue agir',lead:'Síntese do que deve funcionar antes de uma entrega editorial.',
      scenario:'Editor, moderador e administrador trabalham na mesma página institucional.',
      steps:[
        ['EDITOR','Encontra a pasta correta, seleciona arquivos autorizados e envia a página.'],
        ['MODERADOR','Recebe, revisa e consegue decidir a publicação no fluxo definido.'],
        ['ADMINISTRADOR','Confere os grupos e coleções; se aparecer falha técnica, encaminha o registro à manutenção.']
      ],note:'O objetivo não é liberar acessos por conveniência, e sim configurar o mínimo necessário para o trabalho.'
    }
  };
  const html=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const kicker=x=>'<span class="case-kicker">'+html(x)+'</span>';
  const zoomButton=(file,alt)=>'<button type="button" class="capture-zoom" data-zoom-image="../imagens/'+html(file)+'" data-zoom-alt="'+html(alt)+'" aria-label="Ampliar captura de referência: '+html(alt)+'">Ampliar captura <span aria-hidden="true">↗</span></button>';
  function blockCard(label,title,body){
    return '<section class="case-tile">'+kicker(label)+'<h2>'+html(title)+'</h2><p>'+html(body)+'</p></section>';
  }
  function note(body){return body?'<p class="case-note">'+html(body)+'</p>':'';}
  function content(d){
    switch(d.type){
      case 'cards':
        return '<div class="case-tiles">'+d.cards.map(item=>blockCard(...item)).join('')+'</div>'+note(d.note);
      case 'dualScreen':
        return '<div class="case-dual-screen">'+d.screens.map(s=>'<section class="case-dual-item">'+kicker(s.label)+
          '<figure class="case-dual-shot"><img src="../imagens/'+html(s.image)+'" alt="'+html(s.alt)+'" loading="eager"><figcaption><span>'+html(s.source||'REFERÊNCIA DO GUIA')+'</span>'+zoomButton(s.image,s.alt)+'</figcaption></figure>'+
          '<p>'+html(s.description)+'</p></section>').join('')+'</div>'+note(d.note);
      case 'permission':
        return '<div class="case-permission">'+d.permissions.map(s=>'<section class="case-permission-path">'+kicker(s.label)+
          '<span class="case-permission-icon" aria-hidden="true">✓</span><h2>'+html(s.heading)+'</h2><p>'+html(s.description)+'</p></section>').join('')+
          '<div class="case-permission-conclusion"><strong>DUAS PERMISSÕES, UMA TAREFA</strong><p>'+html(d.result)+'</p></div></div>'+note(d.note);
      case 'screen':
        return '<div class="case-screen"><figure class="case-shot"><img src="../imagens/'+html(d.image)+'" alt="'+html(d.alt)+'" loading="eager"><figcaption><span>REFERÊNCIA DO GUIA</span>'+zoomButton(d.image,d.alt)+'</figcaption></figure>'+
          '<div class="case-steps">'+d.steps.map(item=>'<section>'+kicker(item[0])+'<p>'+html(item[1])+'</p></section>').join('')+'</div></div>'+note(d.note);
      case 'scenario':
        return '<div class="case-scenario"><div class="case-prompt">'+kicker('SITUAÇÃO / EXEMPLO')+'<blockquote>'+html(d.scenario)+'</blockquote></div>'+
          '<div class="case-steps">'+d.steps.map(item=>'<section>'+kicker(item[0])+'<p>'+html(item[1])+'</p></section>').join('')+'</div></div>'+note(d.note);
      case 'contrast':
        return '<div class="case-contrast">'+[d.left,d.right].map((item,i)=>
          '<section class="'+(i===0?'case-negative':'case-positive')+'">'+kicker(item.label)+'<blockquote>'+html(item.title)+'</blockquote><p>'+html(item.text)+'</p></section>'
        ).join('')+'</div>'+note(d.note);
      case 'fields':
        return '<div class="case-fields">'+d.fields.map(item=>
          '<section>'+kicker(item[0])+'<h2>'+html(item[1])+'</h2><p>'+html(item[2])+'</p></section>'
        ).join('')+'</div>'+note(d.note);
      case 'process':
        return '<div class="case-process">'+d.steps.map(item=>
          '<section>'+kicker(item[0])+'<p>'+html(item[1])+'</p></section>'
        ).join('')+'</div>'+note(d.note);
      default:return '';
    }
  }
  function render(scene,index,options){
    const d=cases[scene.id];if(!d)return null;
    const t={comum:'COMECE AQUI',editor:'EDITOR',moderador:'MODERADOR',administrador:'ADMINISTRADOR'}[scene.track]||'TREINAMENTO';
    return '<article class="frame frame-case">'+
      options.chromeTop(t+' / WAGTAIL',window.TreinamentoFluxo?.label(scene.id)||'CONTEÚDO / EXEMPLO')+
      '<div class="case-heading"><h1 tabindex="-1">'+html(d.title)+'</h1><p>'+html(d.lead)+'</p></div>'+
      '<div class="case-body">'+content(d)+'</div>'+
      options.chromeFoot('PORTAL IFMG / TREINAMENTO',options.pad(index+1)+' / '+options.pad(options.total))+
      '</article>';
  }
  window.TreinamentoCasos=Object.freeze({
    render,
    getTitle:id=>cases[id]?.title||null,
    ids:Object.freeze(Object.keys(cases))
  });
})();