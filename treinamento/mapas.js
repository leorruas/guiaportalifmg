(() => {
  'use strict';
  const before=window.TreinamentoGrafoAnterior;
  const current=window.PortalGraphData;
  const safe=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const root='https://portal.ifmg.edu.br/';
  const text=(x)=>safe(x);
  function branches(){
    if(!current)return [];
    const labels=new Map(current.nodes.map(n=>[n.id,n.title]));
    return current.edges.filter(e=>e.type==='estrutura'&&e.source===root).map(e=>labels.get(e.target)).filter(Boolean);
  }
  function currentGraph(){
    if(!current)return null;
    const parents=new Map(current.edges.filter(e=>e.type==='estrutura').map(e=>[e.target,e.source]));
    const labels=new Map(current.nodes.map(n=>[n.id,n.title]));
    const walk=id=>{
      let p=id,depth=0,first=id;
      const seen=new Set();
      while(p!==root&&parents.has(p)&&!seen.has(p)&&depth<10){
        seen.add(p);first=p;p=parents.get(p);depth++;
      }
      if(id===root)return {depth:0,group:'HOME'};
      return {depth:Math.min(depth||3,4),group:p===root?labels.get(first):'Outras relações'};
    };
    return {nodes:current.nodes.map(n=>({id:n.id,title:n.title,...walk(n.id)})),edges:current.edges.map(e=>({source:e.source,target:e.target,type:e.type}))};
  }
  function campusGraph(){
    const model=current?.campusBlueprint;
    if(!model)return null;
    const nodes=[{id:'campus-root',title:'Campus',depth:0,group:'CAMPUS'}],edges=[];
    for(const s of model.sections){
      nodes.push({id:s.id,title:s.title,depth:1,group:s.title});
      edges.push({source:'campus-root',target:s.id,type:'estrutura'});
      for(const item of s.items){
        nodes.push({id:item.id,title:item.title,depth:2,group:s.title});
        edges.push({source:s.id,target:item.id,type:'estrutura'});
      }
    }
    return {nodes,edges};
  }
  function graph(type){
    if(type==='legacy')return before?.nodes?.length?before:null;
    if(type==='reitoria')return currentGraph();
    if(type==='campi')return campusGraph();
    return null;
  }
  function weights(items){
    const groups=[...new Set(items.filter(x=>x.depth>0).map(x=>x.group))].sort();
    const sizes=groups.map(g=>Math.sqrt(items.filter(x=>x.group===g).length)+.8);
    const total=sizes.reduce((a,b)=>a+b,0);
    let offset=-Math.PI/2;
    return groups.map((group,i)=>{
      const width=sizes[i]/total*Math.PI*2;
      const sector={group,start:offset,width};
      offset+=width;
      return sector;
    });
  }
  function getPositions(nodes){
    const positions=new Map(),sectors=weights(nodes);
    const cx=520,cy=219;
    const radius=d=>d===0?0: d===1?68:d===2?118:d===3?165:200;
    for(const [i,node] of nodes.entries())if(node.depth===0)positions.set(node.id,{x:cx,y:cy});
    for(const sec of sectors){
      const groupNodes=nodes.filter(x=>x.group===sec.group && x.depth>0);
      const depths=[...new Set(groupNodes.map(x=>x.depth))].sort((a,b)=>a-b);
      for(const depth of depths){
        const same=groupNodes.filter(x=>x.depth===depth);
        same.forEach((node,i)=>{
          const ratio=(i+.55)/(same.length+.1);
          const angle=sec.start+sec.width*(.08+.84*ratio);
          const radial=radius(depth)+(depth>1?(i%3-1)*4:0);
          positions.set(node.id,{x:cx+radial*Math.cos(angle)*1.9,y:cy+radial*Math.sin(angle)});
        });
      }
    }
    return positions;
  }
  function svgGraph(dataset,kind){
    if(!dataset)return '<p class="map-fallback">Dados do grafo indisponíveis.</p>';
    const positions=getPositions(dataset.nodes);
    const lines=dataset.edges.map(edge=>{
      const a=positions.get(edge.source),b=positions.get(edge.target);
      if(!a||!b)return '';
      const isSecondary=edge.type && edge.type!=='estrutura';
      return '<line x1="'+a.x.toFixed(1)+'" y1="'+a.y.toFixed(1)+'" x2="'+b.x.toFixed(1)+'" y2="'+b.y.toFixed(1)+'" class="'+(isSecondary?'map-edge-secondary':'map-edge')+'"/>';
    }).join('');
    const dots=dataset.nodes.map(node=>{
      const p=positions.get(node.id);if(!p)return '';
      const r=node.depth===0?7:node.depth===1?5:kind==='legacy'?2.0:3;
      const cl=node.depth===0?'map-node-root':node.depth===1?'map-node-hub':'map-node';
      return '<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+r+'" class="'+cl+'"><title>'+text(node.title)+'</title></circle>';
    }).join('');
    return '<svg class="map-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 438" role="img" aria-label="Grafo com '+dataset.nodes.length+' nós e '+dataset.edges.length+' relações. Passe o mouse sobre os nós para identificar as páginas.">'+lines+dots+'</svg>';
  }
  function mapHTML(scene){
    const g=graph(scene.map);
    if(!g)return '<div class="map-graphic"><p class="map-fallback">Os dados deste mapa não puderam ser carregados.</p></div>';
    const original=scene.map==='legacy';
    const campus=scene.map==='campi';
    const label=original?'MAPEAMENTO DO PORTAL ANTERIOR':campus?'MODELO DE NAVEGAÇÃO DOS CAMPI':'RECORTE DO NOVO PORTAL';
    const caveat=original?'Levantamento do portal anterior':campus?'Modelo de organização, não um campus publicado':'Mapa em construção, somente relações registradas';
    return '<div class="map-graphic" data-graph="'+scene.map+'"><span class="map-graphic-label">'+label+'</span><div class="map-canvas"></div></div>'+
    '<div class="map-stats"><div><strong>'+g.nodes.length+'</strong><span>'+(campus?'itens do modelo':'páginas mapeadas')+'</span></div>'+
    '<div><strong>'+g.edges.length+'</strong><span>relações</span></div>'+
    '<p>'+caveat+'. Os números dos grafos anterior e novo representam recortes diferentes.</p></div>';
  }
  function structureHTML(scene){
    if(scene.model==='reitoria'){
      const names=branches();
      if(!names.length)return '<p class="map-fallback">Estrutura da Reitoria indisponível.</p>';
      return '<div class="structure-top"><div class="home-node">HOME <span>01 / PÁGINA INICIAL</span></div><div class="structure-line"></div></div>'+
        '<div class="structure-grid reitoria-grid">'+names.map((name,i)=>'<div class="structure-card"><span>'+String(i+1).padStart(2,'0')+' / ÁREA</span><strong>'+text(name)+'</strong></div>').join('')+'</div>'+
        '<p class="map-caption">Organização por necessidades de públicos e acesso à informação. Modelo extraído do grafo da Reitoria.</p>';
    }
    const sections=current?.campusBlueprint?.sections;
    if(!sections?.length)return '<p class="map-fallback">Estrutura dos campi indisponível.</p>';
    return '<div class="structure-grid campus-grid">'+sections.map((s,i)=>
      '<div class="structure-card"><span>'+String(i+1).padStart(2,'0')+' / '+(s.fixed?'MENU FIXO':'NAVEGAÇÃO')+'</span><strong>'+text(s.title)+'</strong><i>'+(s.fixed?'Estrutura fixa':'Organização local')+'</i></div>'
    ).join('')+'</div><p class="map-caption">Cursos, Processos seletivos e Eventos são menus fixos. O conteúdo local permanece no escopo de cada campus.</p>';
  }
  function threeClicks(){
    if(!current)return '<p class="map-fallback">Dados indisponíveis.</p>';
    const target=current.nodes.find(n=>n.title==='Reserva de Vagas (Cotas)'&&n.id.includes('estudantes/'))?.id;
    const parents=new Map(current.edges.filter(e=>e.type==='estrutura').map(e=>[e.target,e.source]));
    const byId=new Map(current.nodes.map(n=>[n.id,n]));
    const path=[],seen=new Set();let here=target;
    while(here && byId.has(here) && !seen.has(here) && path.length<10){
      seen.add(here);path.unshift(byId.get(here).title);if(here===root)break;here=parents.get(here);
    }
    if(path[0]!=='Home')return '<p class="map-fallback">Caminho ainda não mapeado.</p>';
    return '<div class="journey-track">'+path.map((name,i)=>
      '<div class="journey-item"><span>'+(i===0?'INÍCIO':String(i).padStart(2,'0')+' CLIQUE'+(i>1?'S':''))+'</span><strong>'+text(name)+'</strong></div>'
    ).join('')+'</div>'+
    '<p class="map-caption">Este exemplo leva às informações sobre política de cotas. O destino mapeado chama-se Reserva de Vagas (Cotas). O percurso de três cliques não é uma garantia para todas as páginas.</p>';
  }
  function getView(scene){
    if(scene.type==='map')return {html:mapHTML(scene)};
    if(scene.type==='structure')return {html:structureHTML(scene)};
    if(scene.type==='journey')return {html:threeClicks()};
    return {html:''};
  }
  function draw(scene,rootEl){
    const target=rootEl.querySelector('.map-canvas');
    if(!target)return;
    target.innerHTML=svgGraph(graph(scene.map),scene.map);
  }
  window.TreinamentoMapas=Object.freeze({getView,draw});
})();
