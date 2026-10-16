(() => {
  'use strict';
  const slides = window.TreinamentoConteudo || [];
  const tracks = [
    {key:'comum',label:'Comece aqui',sub:'O portal como serviço de informação',desc:'Estrutura, responsabilidades e primeiros passos.'},
    {key:'editor',label:'Editor',sub:'Transformar demandas em páginas úteis',desc:'Conteúdo, organização, arquivos e revisão.'},
    {key:'moderador',label:'Moderador',sub:'Garantir a qualidade antes de publicar',desc:'Revisão, devolutivas e decisões de publicação.'},
    {key:'administrador',label:'Administrador',sub:'Organizar as condições de trabalho',desc:'Acessos, coleções e estruturas compartilhadas.'}
  ];
  const introScenes = [
    {id:'mapa-portal-anterior',type:'map',map:'legacy',title:'De onde partimos',lead:'O grafo do portal anterior revela a quantidade de páginas e relações mapeadas.'},
    {id:'estrutura-reitoria',type:'structure',model:'reitoria',title:'Uma organização por públicos',lead:'Cinco áreas principais organizam o acesso à informação a partir da Home.'},
    {id:'mapa-reitoria',type:'map',map:'reitoria',title:'Mapa da Reitoria',lead:'O novo mapa representa as relações já registradas entre as páginas do portal.'},
    {id:'estrutura-campi',type:'structure',model:'campi',title:'Um modelo para os campi',lead:'Sete entradas organizam a navegação. Três delas são menus fixos.'},
    {id:'mapa-campi',type:'map',map:'campi',title:'Mapa dos campi',lead:'Um modelo de organização, sem assumir endereços ainda não mapeados.'},
    {id:'caminho-tres-cliques',type:'journey',title:'Como encontrar informações sobre cotas',lead:'Home → Estudantes → Como ingressar no IFMG → Reserva de Vagas (Cotas).'}
  ];
  const extraSlides = window.TreinamentoAulas?.extras || [];
  const featuredIds = window.TreinamentoAulas?.featuredIds || [];
  const app = document.getElementById('app');
  const dialog = document.getElementById('chapters');
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pad = n => String(n).padStart(2,'0');
  const scenes = [{id:'inicio',type:'cover'},...introScenes];
  tracks.forEach((t,i) => {
    scenes.push({id:'trilha-'+t.key,type:'section',track:t.key,section:i+1});
    slides.filter(s => s.track === t.key).forEach(s => {
      scenes.push({id:s.id,type:'concept',track:t.key,slide:s});
      extraSlides.filter(extra=>extra.after===s.id).forEach(extra=>scenes.push({id:extra.id,type:'concept',track:t.key,slide:extra}));
    });
    if(t.key==='comum')scenes.push({id:'ia-prompts',type:'support',track:'comum'});
  });
  let active = -1;
  function chromeTop(left,right) {
    return '<div class="frame-top"><span>'+escape(left)+'</span><span>'+escape(right)+'</span></div>';
  }
  function chromeFoot(left,right) {
    return '<div class="frame-foot"><span>'+escape(left)+'</span><span>'+escape(right)+'</span></div>';
  }
  function cover() {
    const jumps = tracks.map((t,i) => '<button type="button" data-jump="trilha-'+t.key+'"><span>'+pad(i+1)+' / '+(scenes.filter(s=>s.track===t.key && s.type==='concept').length)+' temas</span><strong>'+escape(t.label)+' ↗</strong></button>').join('');
    return '<article class="frame frame-cover">'+chromeTop('IFMG / Comunicação institucional','Apresentação · 2026')+
      '<div class="cover-title"><h1 tabindex="-1">Portal<br><em>IFMG</em><br>Treinamento</h1>'+
      '</div>'+
      '<div class="cover-tracks">'+jumps+'</div>'+
      chromeFoot('Guia do Portal IFMG','Use → para avançar')+'</article>';
  }
  function section(scene){
    const t = tracks.find(x=>x.key===scene.track);
    const learning={
      comum:['Páginas, árvore e coleções não são a mesma coisa','Editor, moderador e administrador têm decisões diferentes','O painel mostra a etapa de cada publicação'],
      editor:['Adicionar blocos na aba Conteúdo e escolher o formato correto','Organizar imagens, documentos e metadados','Conferir a prévia e enviar para moderação'],
      moderador:['Conferir fontes, prazos, links e acessibilidade','Devolver correções no trecho certo','Aprovar, agendar ou retirar do ar no escopo autorizado'],
      administrador:['Separar permissões de páginas e de coleções','Organizar coleções sem renomeá-las por conta própria','Tratar falhas técnicas sem apagar arquivos ou coleções']
    };
    return '<article class="frame frame-section">'+
      '<div class="module-rail"><span>PORTAL IFMG</span><strong>'+pad(scene.section)+'</strong><small>MÓDULO / '+pad(tracks.length)+'</small></div>'+
      '<div class="module-main">'+
      '<div class="module-meta"><span>TREINAMENTO / WAGTAIL</span><span>'+pad(scene.section)+' DE '+pad(tracks.length)+'</span></div>'+
      '<div class="module-heading"><span>O QUE ESTE MÓDULO EXPLICA</span><h1 tabindex="-1">'+escape(t.label)+'</h1><p>'+escape(t.sub)+'</p></div>'+
      '<div class="module-curriculum">'+learning[t.key].map(item=>'<p>'+escape(item)+'</p>').join('')+'</div>'+
      '<div class="module-foot">IFMG / GUIA DO PORTAL</div></div></article>';
  }
  function points(s,mode) {
    return '<ul class="points '+(mode==='visual'?'points-visual':'points-grid')+'">'+
      s.points.map(p=>'<li><p class="point-text">'+escape(p)+'</p></li>').join('')+'</ul>';
  }
  function roles(s){
    const names=['Editor','Moderador','Administrador'];
    return '<div class="role-flow">'+s.points.map((p,i)=>'<div><small>'+(i===0?'PREPARA':i===1?'REVISA':'CONFIGURA')+'</small><strong>'+names[i]+'</strong><span>'+escape(p)+'</span></div>').join('')+'</div>';
  }
  function concept(scene,number){
    const detailed=window.TreinamentoCasos?.render(scene,number,{chromeTop,chromeFoot,pad,total:scenes.length});
    if(detailed)return detailed;
    const special=window.TreinamentoAulas?.render(scene,number,{chromeTop,chromeFoot,pad,total:scenes.length});
    if(special)return special;
    const s=scene.slide;
    const t=tracks.find(x=>x.key===s.track);
    const trackItems=scenes.filter(x=>x.type==='concept'&&x.track===s.track);
    const inTrack=trackItems.findIndex(x=>x.id===s.id)+1;
    const hasImage=!!s.img;
    const isRoles=s.id==='comum-papeis';
    const titleClass=s.title.length>47?' long-title':'';
    const imgSrc=hasImage?'../imagens/guias-contextuais/'+s.img:'';
    const body=isRoles?roles(s):hasImage?
      '<div class="visual-body">'+points(s,'visual')+'<figure><img src="'+escape(imgSrc)+'" alt="Captura de tela do Wagtail relacionada ao tema '+escape(s.title)+'"></figure></div>':
      points(s,'grid');
    const leadClass=hasImage?'content-heading visual-heading':'content-heading';
    return '<article class="frame frame-concept'+(hasImage?' has-image':'')+(isRoles?' frame-roles':'')+titleClass+'">'+
      chromeTop(t.label+' / conteúdo',pad(inTrack)+' DE '+pad(trackItems.length))+
      '<div class="'+leadClass+'"><h1 tabindex="-1">'+escape(s.title)+'</h1><p class="lead">'+escape(s.lead)+'</p></div>'+
      body+chromeFoot('Portal IFMG · treinamento',pad(number+1)+' / '+pad(scenes.length))+'</article>';
  }

  function support(number){
    const ref='../#/'+[
      '00 - Comece aqui',
      '03 - Como usar uma IA como apoio para trabalhar com este guia'
    ].map(encodeURIComponent).join('/');
    const examples=[
      ['01 / CONSULTAR','Entender uma tarefa','Identificar o procedimento certo para seu papel e transformar uma demanda em passos.'],
      ['02 / REVISAR','Preparar uma publicação','Revisar linguagem, título, resumo, acessibilidade e metadados antes de enviar.'],
      ['03 / ORGANIZAR','Planejar imagens e blocos','Preparar texto alternativo e escolher apenas os blocos documentados no guia.']
    ];
    return '<article class="frame frame-support">'+
      chromeTop('COMECE AQUI / FERRAMENTAS DE APOIO','IA / PROMPTS ORIENTADOS')+
      '<div class="support-head"><span class="support-kicker">APOIO AO TRABALHO NO PORTAL</span>'+
      '<h1 tabindex="-1">IA para consultar<br>o guia</h1>'+
      '<p>O guia reúne prompts prontos para orientar tarefas no Wagtail e preparar conteúdos para revisão.</p></div>'+
      '<div class="support-grid">'+examples.map(item=>
        '<section><small>'+escape(item[0])+'</small><h2>'+escape(item[1])+'</h2><p>'+escape(item[2])+'</p></section>'
      ).join('')+'</div>'+
      '<div class="support-end"><p>Informe seu papel e o contexto. Confira as fontes e valide o resultado antes de publicar. Não compartilhe dados restritos.</p>'+
      '<a href="'+ref+'" target="_blank" rel="noopener">Acessar prompts completos no Guia do Portal ↗</a></div>'+
      chromeFoot('Ferramentas de apoio / decisão humana',pad(number+1)+' / '+pad(scenes.length))+
      '</article>';
  }
  function intro(scene,number){
    const view = window.TreinamentoMapas?.getView(scene) || {html:'<p class="map-fallback">Os dados do mapa estão indisponíveis.</p>'};
    const extraClass=scene.type==='map'?'frame-map':scene.type==='structure'?'frame-structure':'frame-journey';
    return '<article class="frame '+extraClass+'">'+
      chromeTop('PORTAL IFMG / ARQUITETURA','CONTEXTO '+pad(number)+' / '+pad(introScenes.length))+
      '<div class="map-intro"><h1 tabindex="-1">'+escape(scene.title)+'</h1><p>'+escape(scene.lead)+'</p></div>'+
      view.html+
      chromeFoot('Estrutura do Portal IFMG',pad(number+1)+' / '+pad(scenes.length))+
      '</article>';
  }
  function buildIndex(){
    document.getElementById('chapterList').innerHTML = '<section class="index-section"><h3><span>00</span>Estrutura do portal</h3>'+introScenes.map((s,i)=>'<button type="button" data-jump="'+escape(s.id)+'"><span>'+pad(i+1)+'</span>'+escape(s.title)+'</button>').join('')+'</section>'+tracks.map((t,i)=>{
      const list=scenes.filter(s=>s.type==='concept'&&s.track===t.key).map(s=>s.slide);
      return '<section class="index-section"><h3><span>'+pad(i+1)+'</span>'+escape(t.label)+'</h3>'+
        '<button type="button" data-jump="trilha-'+t.key+'"><span>ABERTURA</span>'+escape(t.sub)+'</button>'+
        list.map((s,j)=>'<button type="button" data-jump="'+escape(s.id)+'"><span>'+pad(j+1)+'</span>'+escape(window.TreinamentoCasos?.getTitle(s.id)||s.title)+'</button>').join('')+(t.key==='comum'?'<button type="button" data-jump="ia-prompts"><span>SUPORTE</span>IA para consultar o guia</button>':'')+'</section>';
    }).join('');
  }
  function go(index){
    if(index<0 || index>=scenes.length)return;
    const id=scenes[index].id;
    if(location.hash.slice(1)!==id)location.hash=id;
    else render();
  }
  function render(){
    const id=decodeURIComponent(location.hash.slice(1)) || 'inicio';
    const idx=Math.max(0,scenes.findIndex(x=>x.id===id));
    const scene=scenes[idx];
    active=idx;
    app.innerHTML=scene.type==='cover'?cover():scene.type==='section'?section(scene):scene.type==='concept'?concept(scene,idx):scene.type==='support'?support(idx):intro(scene,idx);
    if(scene.type==='map')window.TreinamentoMapas?.draw(scene,app);
    document.getElementById('prev').disabled=idx===0;
    document.getElementById('next').disabled=idx===scenes.length-1;
    document.getElementById('progress').textContent=pad(idx+1)+' / '+pad(scenes.length);
    const bar=document.getElementById('progressBar');
    bar.setAttribute('aria-valuemax',String(scenes.length));
    bar.setAttribute('aria-valuenow',String(idx+1));
    document.getElementById('progressFill').style.width=((idx+1)/scenes.length*100)+'%';
    document.querySelectorAll('#chapterList [data-jump]').forEach(b=>{
      if(b.dataset.jump===scene.id)b.setAttribute('aria-current','page');
      else b.removeAttribute('aria-current');
    });
    app.querySelector('h1')?.focus({preventScroll:true});
  }
  document.getElementById('prev').addEventListener('click',()=>go(active-1));
  document.getElementById('next').addEventListener('click',()=>go(active+1));
  document.getElementById('menu').addEventListener('click',()=>dialog.showModal());
  document.getElementById('closeIndex').addEventListener('click',()=>dialog.close());
  document.addEventListener('click',e=>{
    const target=e.target.closest('[data-jump]');
    if(!target)return;
    if(dialog.open)dialog.close();
    const idx=scenes.findIndex(x=>x.id===target.dataset.jump);
    go(idx);
  });
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  document.getElementById('fullscreen').addEventListener('click',async()=>{
    try{
      if(document.fullscreenElement)await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    }catch{document.getElementById('fullscreen').textContent='Ative tela cheia no navegador';}
  });
  document.addEventListener('fullscreenchange',()=>{
    document.getElementById('fullscreen').textContent=document.fullscreenElement?'Sair da tela cheia':'Tela cheia ⛶';
  });
  document.addEventListener('keydown',e=>{
    if(dialog.open || e.altKey || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
    if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();go(active+1);}
    if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();go(active-1);}
    if(e.key==='Home'){e.preventDefault();go(0);}
    if(e.key==='End'){e.preventDefault();go(scenes.length-1);}
  });
  buildIndex();
  window.addEventListener('hashchange',render);
  render();
})();
