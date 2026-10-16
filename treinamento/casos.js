(() => {
  'use strict';
  const cases = {
    'comum-objetivo': {
      type:'contrast',title:'Uma notícia precisa dizer o que aconteceu',lead:'Título e primeira frase devem permitir reconhecer a informação e a ação.',
      left:{label:'NÃO INFORMA',title:'Atenção',text:'Sem assunto, público ou prazo, quem procura a informação precisa abrir a notícia para descobrir.'},
      right:{label:'EXEMPLO DE REDAÇÃO',title:'IFMG abre inscrições para monitoria até 18 de agosto',text:'Assunto, ação e prazo ficam visíveis. Data e condições são ilustrativas e precisam de confirmação antes de publicar.'},
      note:'No caso real, confirme fonte institucional, período de inscrição, documento vigente e canal de atendimento.'
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
      type:'scenario',title:'O editor prepara a notícia, não a publica sozinho',lead:'Um caso de notícia de campus ajuda a identificar o limite do trabalho.',
      scenario:'Uma oficina do campus abrirá inscrições na próxima semana.',
      steps:[
        ['CRIAR','Abra a pasta de notícias autorizada e escolha Adicionar subpágina → Notícia.'],
        ['PREPARAR','Preencha título, resumo, corpo, imagens, links e metadados com dados confirmados.'],
        ['ENCAMINHAR','Pré-visualize e envie para moderação; a publicação é decidida no fluxo de revisão.']
      ],note:'Pasta de notícias, coleção e novas permissões dependem de administração. Não improvise uma cópia em outro lugar.'
    },
    'editor-planejar': {
      type:'fields',title:'Antes de abrir o editor, identifique quatro dados',lead:'Exemplo de preparo para uma notícia sobre uma oficina de extensão.',
      fields:[
        ['QUEM','Público da oficina','Quem pode participar? Confirme a regra com a área responsável.'],
        ['QUANDO','Período de inscrição','Data de abertura, encerramento e condições precisam de fonte oficial.'],
        ['COMO','Destino da inscrição','Verifique edital, formulário e o próximo passo de quem lê.'],
        ['ONDE ENCONTRAR','Busca e metadados','Prepare título, slug, tag de título e meta descrição na aba Promover.']
      ],note:'A meta descrição pode usar 140–155 caracteres como referência, mas o conteúdo correto vem primeiro.'
    },
    'editor-texto': {
      type:'screen',title:'O editor de texto tem hierarquia, não só formatação',lead:'Use o controle de títulos para organizar seções; negrito não substitui H2 e H3.',
      image:'guias-contextuais/barra-edicao-flutuante.png',alt:'Barra flutuante de edição de texto no Wagtail, com controles de formatação e fixação.',
      steps:[
        ['BARRA','Selecione um trecho para mostrar as ferramentas; o alfinete fixa a barra no campo.'],
        ['H2','Use Título 2 nas principais partes, como Inscrições e Documentos necessários.'],
        ['H3','Use Título 3 nas subdivisões; confira a sequência na pré-visualização.']
      ]
    },
    'editor-arquivos': {
      type:'screen',title:'Cadastre documentos com títulos que expliquem o arquivo',lead:'Título, coleção e tags ajudam a encontrar a versão vigente.',
      image:'manual-ifrn/preenchimento-de-documento-colecao-tags.png',alt:'Campos de título, coleção e tags na tela de cadastro de documento no Wagtail.',
      steps:[
        ['TÍTULO','“Horários de aula — Técnico Integrado em Informática — 2026 — Campus Ouro Branco”.'],
        ['COLEÇÃO','Escolha a coleção da finalidade do arquivo; um documento não justifica inventar uma coleção.'],
        ['ATUALIZAR','Substitua o documento existente se a nova versão deve valer em todos os usos; crie outro se o anterior precisa permanecer disponível.']
      ],note:'O título cadastrado é diferente do nome físico do PDF e do texto de um botão no conteúdo.'
    },
    'editor-imagens': {
      type:'screen',title:'Imagem publicada precisa de formato e descrição',lead:'O contexto determina a escolha de enquadramento e texto alternativo.',
      image:'guias-contextuais/imagem-formatos-texto.png',alt:'Seleção de formato e opções de acessibilidade ao inserir imagem no texto do Wagtail.',
      steps:[
        ['FORMATO','No corpo da notícia, prefira Largura completa; use alinhamento lateral só quando favorecer a leitura.'],
        ['DESCRIÇÃO','A imagem informativa exige texto alternativo; marque decorativa apenas se não acrescentar informação.'],
        ['PRÉVIA','Confira corte e legibilidade em computador, tablet e celular.']
      ],note:'No guia: destaque quadrado 1080 × 1080 e corpo 1080 × 540 são referências editoriais, não regras do sistema.'
    },
    'editor-noticias': {
      type:'screen',title:'Uma notícia em outra pasta não precisa virar cópia',lead:'Copiar, criar Alias e Linkar em outra pasta produzem efeitos diferentes.',
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
      type:'scenario',title:'O que uma notícia pronta deve entregar',lead:'Síntese de uma notícia de oficina preparada para revisão.',
      scenario:'Notícia do campus com inscrições, edital e formulário.',
      steps:[
        ['ENCONTROU?','A notícia está na pasta correta e apresenta o fato, o prazo e o público.'],
        ['ENTENDEU?','Título, texto, documentos e imagens explicam o que mudou, sem siglas obscuras.'],
        ['CONSEGUE AGIR?','O link de inscrição funciona; a prévia foi conferida e a página enviada para moderação.']
      ],note:'As atividades individuais e a conferência de resultados ficam na página separada de prática.'
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
      type:'screen',title:'Revise o resultado publicado, não só o formulário',lead:'Pré-visualizar mostra o que alguém de fora da equipe encontrará.',
      image:'manual-ifrn/image36.png',alt:'Tela de pré-visualização de página no Wagtail.',
      steps:[
        ['INFORMAÇÃO','Confirme título, fonte, vigência, documentos oficiais e a ação principal.'],
        ['LEITURA','Percorra a página: links e botões explicam seus destinos? Os títulos organizam o texto?'],
        ['DISPOSITIVOS','Teste a prévia em computador, tablet e celular; observe tabelas, cards e imagens.']
      ]
    },
    'moderador-publicar': {
      type:'cards',title:'Publicar, agendar e despublicar não são sinônimos',lead:'Cada decisão altera quando a página ficará acessível.',
      cards:[
        ['PUBLICAR','Disponibilizar agora','Após revisão, use a ação de publicação e confira a página no portal.'],
        ['AGENDAR','Definir uma data','Em Status, escolha o agendamento, informe a data confirmada e confira o estado.'],
        ['DESPUBLICAR','Retirar a versão do ar','Considere links dependentes, substituição e valor histórico antes de despublicar.']
      ],note:'Privacidade responde quem pode ver; publicação responde se a versão está no ar. São configurações diferentes.'
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
      type:'scenario',title:'Uma aprovação precisa deixar a decisão registrada',lead:'Síntese de uma revisão de notícia de inscrição.',
      scenario:'A notícia chegou sem a data final de inscrição.',
      steps:[
        ['DEVOLVER','Registre a pendência no trecho certo: “Informe a data final de inscrição”.'],
        ['RECONFERIR','Leia a correção na mesma página e revise links, fonte e vigência.'],
        ['DECIDIR','Aprove ou encaminhe à publicação conforme o estado, a data e seu acesso.']
      ],note:'Não resolva o fluxo por mensagem paralela: os comentários e o estado devem ficar associados à página.'
    },
    'administrador-papel': {
      type:'cards',title:'Administrador mantém o trabalho possível e seguro',lead:'A configuração do painel não substitui a manutenção técnica do sistema.',
      cards:[
        ['PÁGINAS','Permissões de edição','Defina onde cada grupo pode criar, editar, revisar ou publicar.'],
        ['COLEÇÕES','Permissões de arquivos','Determine quem organiza imagens e documentos, respeitando subcoleções.'],
        ['SUPORTE TÉCNICO','Falhas persistentes','Registre a ação, a mensagem de erro e o contexto; código e banco exigem equipe técnica.']
      ],note:'Herda as tarefas dos outros perfis, mas mantém o escopo e a responsabilidade da área.'
    },
    'administrador-acessos': {
      type:'cards',title:'Acesso à página não concede acesso ao arquivo',lead:'Página e coleção têm permissões independentes no Wagtail.',
      cards:[
        ['PÁGINA','Quem pode editar?','Verifique o grupo, o nível da árvore e o alcance sobre subpáginas.'],
        ['COLEÇÃO','Quem pode usar arquivos?','Confira ações autorizadas e alcance sobre subcoleções de imagens e documentos.'],
        ['CONFERÊNCIA','Teste com quem usa','Se o editor acessa a página mas não encontra o PDF, verifique a coleção e suas permissões.']
      ],note:'Amplie apenas o acesso necessário. Evite liberar uma coleção-pai ampla quando a demanda é local.'
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
      type:'cards',title:'Estruturas compartilhadas exigem checagem de alcance',lead:'Mudanças administrativas podem afetar várias páginas e equipes.',
      cards:[
        ['PASTA DE NOTÍCIAS','Onde editor cria','Uma pasta específica organiza as notícias do setor ou campus.'],
        ['CADASTROS','Dados oficiais','Use classificações e cadastros confirmados; não duplique uma fonte de sistema.'],
        ['HOME E ÁRVORE','Navegação compartilhada','Antes de mudar ordem, menus ou páginas-pai, verifique dependências e permissões.']
      ],note:'Renomeação de coleções exige cuidado especial e é abordada no alerta dedicado deste módulo.'
    },
    'administrador-pratica': {
      type:'scenario',title:'A configuração está pronta quando cada perfil consegue agir',lead:'Síntese do que deve funcionar antes de uma entrega editorial.',
      scenario:'Editor, moderador e administrador trabalham na mesma notícia.',
      steps:[
        ['EDITOR','Encontra a pasta correta, seleciona arquivos autorizados e envia a página.'],
        ['MODERADOR','Recebe, revisa e consegue decidir a publicação no fluxo definido.'],
        ['ADMINISTRADOR','Confere os grupos e coleções; se aparecer falha técnica, encaminha o registro à manutenção.']
      ],note:'O objetivo não é liberar acessos por conveniência, e sim configurar o mínimo necessário para o trabalho.'
    }
  };
  const html=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const kicker=x=>'<span class="case-kicker">'+html(x)+'</span>';
  function blockCard(label,title,body){
    return '<section class="case-tile">'+kicker(label)+'<h2>'+html(title)+'</h2><p>'+html(body)+'</p></section>';
  }
  function note(body){return body?'<p class="case-note">'+html(body)+'</p>':'';}
  function content(d){
    switch(d.type){
      case 'cards':
        return '<div class="case-tiles">'+d.cards.map(item=>blockCard(...item)).join('')+'</div>'+note(d.note);
      case 'screen':
        return '<div class="case-screen"><figure class="case-shot"><img src="../imagens/'+html(d.image)+'" alt="'+html(d.alt)+'" loading="eager"><figcaption>INTERFACE DO WAGTAIL / GUIA DO PORTAL</figcaption></figure>'+
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
      options.chromeTop(t+' / WAGTAIL','CONTEÚDO / EXEMPLO')+
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