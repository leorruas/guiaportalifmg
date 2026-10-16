(() => {
  const slides = window.TreinamentoConteudo || [];
  const labels = {comum:'Comece aqui',editor:'Editor',moderador:'Moderador',administrador:'Administrador'};
  const refs = {
    '24':'04 - Sou editor/24 - Sou editor e quero criar ou editar uma página',
    'mapa':'00 - Comece aqui/04 - Mapa da estrutura do Portal',
    'encontrar':'04 - Sou editor/02 - Sou editor e quero acessar e encontrar uma página',
    'papel-editor':'04 - Sou editor/01 - Sou editor e quero criar e atualizar conteúdos',
    'blocos':'04 - Sou editor/15 - Sou editor e quero montar conteúdo com blocos',
    'documentos':'04 - Sou editor/13 - Sou editor e quero adicionar ou atualizar um documento',
    'imagens':'04 - Sou editor/12 - Sou editor e quero adicionar ou atualizar uma imagem',
    'noticias':'04 - Sou editor/10 - Sou editor e quero publicar uma notícia',
    'menus':'04 - Sou editor/17 - Sou editor e quero configurar busca e menu de uma página',
    'enviar':'04 - Sou editor/20 - Sou editor e quero enviar conteúdo para moderação',
    'corrigir':'04 - Sou editor/19 - Sou editor e quero responder comentários e atualizar uma página',
    'papel-moderador':'03 - Sou moderador/08 - Sou moderador e quero revisar e aprovar conteúdos',
    'revisar':'03 - Sou moderador/09 - Sou moderador e quero revisar e decidir uma publicação',
    'comentarios':'03 - Sou moderador/10 - Sou moderador e quero acompanhar comentários e histórico',
    'publicar':'03 - Sou moderador/11 - Sou moderador e quero publicar, despublicar ou agendar uma página',
    'papel-admin':'02 - Sou administrador/01 - Sou administrador e quero gerir acessos e configurações',
    'permissoes':'02 - Sou administrador/07 - Sou administrador e quero configurar grupos e permissões',
    'colecao':'02 - Sou administrador/08 - Sou administrador e quero criar uma coleção e definir seus acessos'
  };
  const app=document.getElementById('app');
  const controls=document.getElementById('controls');
  const escape = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function guide(ref){const path=refs[ref];return path?'../#/'+path.split('/').map(encodeURIComponent).join('/'): '../';}
  function menu(){
    controls.hidden=true;
    app.innerHTML=`<p class="eyebrow">Treinamento • Portal IFMG</p><h1>Aprenda o trabalho do seu perfil</h1><p class="lead">Conheça o fluxo comum ou entre direto na sua trilha. Em cada capítulo: orientação, prática e uma forma de conferir o resultado.</p><div class="tracks">${Object.entries(labels).map(([key,label])=>{const first=slides.find(s=>s.track===key);return `<section class="track"><h2>${label}</h2><p>${{comum:'Estrutura, responsabilidades e primeiros passos.',editor:'Preparar conteúdo e encaminhar para revisão.',moderador:'Revisar, orientar e decidir a publicação.',administrador:'Configurar acessos, coleções e estruturas.'}[key]}</p><a href="#${first.id}">Entrar →</a></section>`}).join('')}</div><p class="note">Use as setas do teclado ou os botões para avançar. O menu permite trocar de trilha a qualquer momento. A disponibilidade das ações no Wagtail depende do grupo e da área autorizada.</p><div class="chapters">${Object.entries(labels).map(([key,label])=>`<section><h2>${label}</h2><ol>${slides.filter(s=>s.track===key).map(s=>`<li><a href="#${s.id}">${escape(s.title)}</a></li>`).join('')}</ol></section>`).join('')}</div><p class="note">Práticas de publicação, exclusão e acesso devem acontecer em ambiente de treinamento. Fluxos de processos seletivos ainda não confirmados ficam fora desta apresentação. <a href="../">Consultar o guia completo</a></p>`;
  }
  function render(){
    const id=decodeURIComponent(location.hash.slice(1));const slide=slides.find(s=>s.id===id);
    if(!slide){menu();return;}
    const track=slides.filter(s=>s.track===slide.track),index=track.indexOf(slide);
    controls.hidden=false;
    document.getElementById('progress').textContent=`${labels[slide.track]} · ${index+1} de ${track.length}`;
    const list=`<ul class="points">${slide.points.map(p=>`<li>${escape(p)}</li>`).join('')}</ul>`;
    const aside=slide.img?`<figure><img src="../imagens/guias-contextuais/${escape(slide.img)}" alt="Exemplo do Wagtail: ${escape(slide.title)}"><figcaption>Consulte o procedimento no guia para acompanhar os passos.</figcaption></figure>`:slide.limits?`<aside class="limits"><h2>Limites e apoio</h2><ul>${slide.limits.map(l=>`<li>${escape(l)}</li>`).join('')}</ul></aside>`:'';
    app.innerHTML=`<article class="slide"><p class="eyebrow">${labels[slide.track]} · capítulo ${index+1}</p><h1 tabindex="-1">${escape(slide.title)}</h1><p class="lead">${escape(slide.lead)}</p><div class="slide-body"${!slide.img&&!slide.limits?' style="grid-template-columns:1fr;max-width:1000px"':''}><div>${list}<a class="guide-link" href="${guide(slide.ref)}" target="_blank" rel="noopener">Abrir o procedimento no guia ↗</a></div>${aside}</div><section class="exercise"><strong>Agora faça você</strong><p>${escape(slide.task)}</p><details><summary>Como conferir</summary><p>${escape(slide.check)}</p></details></section>${index===track.length-1?`<p class="note">Trilha concluída. <a href="#">Escolher outra trilha ou consultar os capítulos →</a></p>`:''}</article>`;
    document.getElementById('prev').disabled=index===0;
    document.getElementById('prev').onclick=()=>{if(index>0)location.hash=track[index-1].id;};
    document.getElementById('next').textContent=index===track.length-1?'Menu de trilhas →':'Próximo →';
    document.getElementById('next').onclick=()=>{location.hash=index===track.length-1?'':track[index+1].id;};
    window.scrollTo(0,0);app.querySelector('h1').focus({preventScroll:true});
  }
  document.getElementById('menu').onclick=()=>{location.hash='';};
  document.getElementById('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{document.getElementById('fullscreen').textContent='Use o modo de tela cheia do navegador';}};
  document.addEventListener('fullscreenchange',()=>document.getElementById('fullscreen').textContent=document.fullscreenElement?'Sair da tela cheia':'Tela cheia');
  document.addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.altKey||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowRight'&&!controls.hidden){e.preventDefault();document.getElementById('next').click();}if(e.key==='ArrowLeft'&&!controls.hidden){e.preventDefault();document.getElementById('prev').click();}});
  window.addEventListener('hashchange',render);render();
})();
