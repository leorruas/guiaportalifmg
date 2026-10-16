// Execute: node scripts/test-training.mjs
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = p => readFileSync(resolve(root,p),'utf8');
const exists = p => assert.ok(existsSync(resolve(root,p)), 'Arquivo ausente: '+p);
const html = read('treinamento/index.html');
const practice = read('treinamento/pratica.html');
const css = read('treinamento/treinamento.css');
for(const m of html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"/g)){
  const uri=m[1].split('?')[0];
  if(!/^(https?:|#|data:)/.test(uri)) exists('treinamento/'+uri);
}
const version = html.match(/conteudo\.js\?v=(\d+)/)?.[1];
assert.ok(version && practice.includes('conteudo.js?v='+version),'Cache de conteúdo divergente entre slides e prática');

const listeners={};
const window={addEventListener(k,fn){listeners['window:'+k]=fn;}};
const el=new Map();
function node(id){
  if(!el.has(id))el.set(id,{
    innerHTML:'',textContent:'',attributes:{},style:{},disabled:false,
    addEventListener(k,fn){listeners[id+':'+k]=fn;},
    setAttribute(k,v){this.attributes[k]=String(v);},
    removeAttribute(k){delete this.attributes[k];},
    querySelector(k){return k==='h1'?{focus(){}}:k==='.map-canvas'?{innerHTML:''}:null;},
    showModal(){this.open=true;},close(){this.open=false;}
  });
  return el.get(id);
}
const document={getElementById:node,querySelectorAll(){return[];},addEventListener(k,fn){listeners['document:'+k]=fn;}};
let hashValue='#inicio';
const location={
  get hash(){return hashValue;},
  set hash(value){const v=String(value);hashValue=v.startsWith('#')?v:'#'+v;}
};
const context=vm.createContext({window,document,location});
for(const f of ['treinamento/conteudo.js','data/portal-graph.js','treinamento/grafo-anterior.js','treinamento/mapas.js','treinamento/aulas.js','treinamento/casos.js','treinamento/treinamento.js']){
  vm.runInContext(read(f),context,{filename:f,timeout:5000});
}
const items=window.TreinamentoConteudo,extra=window.TreinamentoAulas.extras;
const groups=['comum','editor','moderador','administrador'];
const intro=['mapa-portal-anterior','estrutura-reitoria','mapa-reitoria','estrutura-campi','mapa-campi','caminho-tres-cliques'];
const slides=['inicio',...intro,...groups.flatMap(t=>['trilha-'+t,...items.filter(s=>s.track===t).flatMap(s=>[s.id,...extra.filter(e=>e.after===s.id).map(e=>e.id)]),...(t==='comum'?['ia-prompts']:[])])];
assert.equal(items.length,28);
assert.equal(slides.length,44);
assert.equal(new Set(slides).size,44,'IDs repetidos');
assert.ok(items.find(s=>s.id==='moderador-noticias'&&s.track==='moderador'));
assert.ok(!items.some(s=>s.id==='editor-noticias'));
assert.ok(items.every(s=>s.task&&s.check));
assert.ok(items.find(s=>s.id==='editor-pratica').task.includes('Biblioteca'));
const index=node('chapterList').innerHTML;
for(const id of slides.slice(1))assert.ok(index.includes('data-jump="'+id+'"'),'Índice sem '+id);
for(const id of window.TreinamentoCasos.ids)assert.ok(slides.includes(id),'Caso órfão: '+id);
let images=0;
for(let i=0;i<slides.length;i++){
  const id=slides[i];location.hash='#'+id;listeners['window:hashchange']();
  const output=node('app').innerHTML;
  assert.ok(output.includes('<h1'),'Slide sem título: '+id);
  assert.equal(Number(node('progressBar').attributes['aria-valuenow']),i+1,'Progresso: '+id);
  for(const img of output.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*>/g)){
    exists('treinamento/'+img[1].split('?')[0]);
    assert.ok(/\balt="[^"]+"/.test(img[0]),'Imagem sem alt em '+id);
    images++;
  }
}
assert.ok(images>=10,'Capturas dos procedimentos não apareceram');
const path=window.TreinamentoMapas.getView({type:'journey'}).html;
assert.ok(path.includes('Reserva de Vagas (Cotas)')&&path.includes('03 CLIQUES'));
location.hash='#administrador-colecoes';listeners['window:hashchange']();
assert.ok(node('app').innerHTML.includes('Não renomeie coleções'));
assert.ok(node('app').innerHTML.includes('Não exclua'));
location.hash='#ia-prompts';listeners['window:hashchange']();
const link=node('app').innerHTML.match(/href="([^"]+)"/)?.[1];
assert.ok(link?.startsWith('../#/'));
const art=decodeURIComponent(link.slice(5));
const guide=JSON.parse(read('data/guide-index.json'));
assert.ok(guide.articles.some(x=>x.endsWith('/'+art+'.md')),'Guia de prompts não existe');
location.hash='#inicio';listeners['window:hashchange']();
const ev={key:'ArrowRight',target:{tagName:'DIV'},preventDefault(){this.prevented=true;}};
listeners['document:keydown'](ev);
assert.ok(ev.prevented&&location.hash==='#mapa-portal-anterior','Seta direita');
listeners['window:hashchange']();
ev.key='ArrowLeft';ev.prevented=false;listeners['document:keydown'](ev);
assert.ok(ev.prevented&&location.hash==='#inicio','Seta esquerda');
assert.ok(css.includes(':root:fullscreen .deck{\n  display:flex'));
assert.ok(css.includes('aspect-ratio:16/9')&&!css.includes('grid-template-rows:0 minmax(0,1fr) 0'));
console.log('OK: '+slides.length+' telas, '+images+' imagens, índice, navegação, prompts, cotas, coleção e CSS fullscreen.');
