(() => {
  'use strict';
  const slides = window.TreinamentoConteudo || [];
  const tracks = [
    {key:'comum',label:'Comece aqui',sub:'O portal como serviço de informação',desc:'Estrutura, responsabilidades e primeiros passos.'},
    {key:'editor',label:'Editor',sub:'Transformar demandas em páginas úteis',desc:'Conteúdo, organização, arquivos e revisão.'},
    {key:'moderador',label:'Moderador',sub:'Garantir a qualidade antes de publicar',desc:'Revisão, devolutivas e decisões de publicação.'},
    {key:'administrador',label:'Administrador',sub:'Organizar as condições de trabalho',desc:'Acessos, coleções e estruturas compartilhadas.'}
  ];
  const app = document.getElementById('app');
  const dialog = document.getElementById('chapters');
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pad = n => String(n).padStart(2,'0');
  const scenes = [{id:'inicio',type:'cover'}];
  tracks.forEach((t,i) => {
    scenes.push({id:'trilha-'+t.key,type:'section',track:t.key,section:i+1});
    slides.filter(s => s.track === t.key).forEach(s => scenes.push({id:s.id,type:'concept',track:t.key,slide:s}));
  });
  let active = -1;
  function chromeTop(left,right) {
    return '<div class="frame-top"><span>'+escape(left)+'</span><span>'+escape(right)+'</span></div>';
  }
  function chromeFoot(left,right) {
    return '<div class="frame-foot"><span>'+escape(left)+'</span><span>'+escape(right)+'</span></div>';
  }
  function cover() {
    const jumps = tracks.map((t,i) => '<button type="button" data-jump="trilha-'+t.key+'"><span>'+pad(i+1)+' / '+(slides.filter(s=>s.track===t.key).length)+' temas</span><strong>'+escape(t.label)+' ↗</strong></button>').join('');
    return '<article class="frame frame-cover">'+chromeTop('IFMG / Comunicação institucional','Apresentação · 2026')+
      '<div class="cover-title"><h1 tabindex="-1">Portal<br><em>IFMG</em><br>Treinamento<span class="red">.</span></h1>'+
      '<p>Organizar a informação.<br>Preparar o conteúdo.<br>Revisar antes de publicar.</p></div>'+
      '<div class="cover-tracks">'+jumps+'</div>'+
      chromeFoot('Quatro trilhas / uma experiência de publicação','Use → para avançar')+'</article>';
  }
  function section(scene){
    const t = tracks.find(x=>x.key===scene.track);
    return '<article class="frame frame-section">'+chromeTop('TREINAMENTO / '+t.label,'SEÇÃO '+pad(scene.section))+
      '<div class="section-block" aria-hidden="true"><strong>'+pad(scene.section)+'</strong></div>'+
      '<div class="section-copy"><span class="mono">'+pad(scene.section)+' / '+pad(tracks.length)+'</span>'+
      '<h1 tabindex="-1">'+escape(t.label)+'</h1><p>'+escape(t.sub)+'.</p></div>'+
      chromeFoot('IFMG / GUIA DO PORTAL',t.desc)+'</article>';
  }
  function points(s,mode) {
    return '<ol class="points '+(mode==='visual'?'points-visual':'points-grid')+'">'+
      s.points.map((p,i)=>'<li><span class="point-num">'+pad(i+1)+'</span><p class="point-text">'+escape(p)+'</p></li>').join('')+'</ol>';
  }
  function roles(s){
    const names=['Editor','Moderador','Administrador'];
    return '<div class="role-flow">'+s.points.map((p,i)=>'<div><small>'+pad(i+1)+' / '+(i===0?'PREPARA':i===1?'REVISA':'CONFIGURA')+'</small><strong>'+names[i]+'</strong><span>'+escape(p)+'</span></div>').join('')+'</div>';
  }
  function concept(scene,number){
    const s=scene.slide;
    const t=tracks.find(x=>x.key===s.track);
    const inTrack=slides.filter(x=>x.track===s.track).indexOf(s)+1;
    const hasImage=!!s.img;
    const isRoles=s.id==='comum-papeis';
    const titleClass=s.title.length>47?' long-title':'';
    const imgSrc=hasImage?'../imagens/guias-contextuais/'+s.img:'';
    const body=isRoles?roles(s):hasImage?
      '<div class="visual-body">'+points(s,'visual')+'<figure><img src="'+escape(imgSrc)+'" alt="Captura de tela do Wagtail relacionada ao tema '+escape(s.title)+'"></figure></div>':
      points(s,'grid');
    const leadClass=hasImage?'content-heading visual-heading':'content-heading';
    return '<article class="frame frame-concept'+(hasImage?' has-image':'')+(isRoles?' frame-roles':'')+titleClass+'">'+
      chromeTop(t.label+' / conteúdo',pad(inTrack)+' DE '+pad(slides.filter(x=>x.track===s.track).length))+
      '<div class="'+leadClass+'"><h1 tabindex="-1">'+escape(s.title)+'</h1><p class="lead">'+escape(s.lead)+'</p></div>'+
      body+chromeFoot('Portal IFMG · treinamento',pad(number+1)+' / '+pad(scenes.length))+'</article>';
  }
  function buildIndex(){
    document.getElementById('chapterList').innerHTML = tracks.map((t,i)=>{
      const list=slides.filter(s=>s.track===t.key);
      return '<section class="index-section"><h3><span>'+pad(i+1)+'</span>'+escape(t.label)+'</h3>'+
        '<button type="button" data-jump="trilha-'+t.key+'"><span>ABERTURA</span>'+escape(t.sub)+'</button>'+
        list.map((s,j)=>'<button type="button" data-jump="'+escape(s.id)+'"><span>'+pad(j+1)+'</span>'+escape(s.title)+'</button>').join('')+'</section>';
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
    app.innerHTML=scene.type==='cover'?cover():scene.type==='section'?section(scene):concept(scene,idx);
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
