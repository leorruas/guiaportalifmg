// Testes do deck em Chromium local. Depende de playwright-core e Chrome no runner.
import assert from 'node:assert/strict';
import {existsSync,mkdirSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {chromium} from 'playwright-core';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const browserPath=['/usr/bin/google-chrome-stable','/usr/bin/google-chrome','/usr/bin/chromium'].find(existsSync);
assert.ok(browserPath,'Navegador Chromium não encontrado');
const output=resolve(root,'qa-training');mkdirSync(output,{recursive:true});
const browser=await chromium.launch({executablePath:browserPath,headless:true,args:['--no-sandbox','--allow-file-access-from-files']});
const ids=['mapa-portal-anterior','mapa-reitoria','mapa-campi','caminho-tres-cliques','editor-papel','editor-arquivos','editor-imagens','editor-adicionar-bloco','editor-links-exemplo','editor-colecao','editor-menus','editor-enviar','moderador-revisao','moderador-publicar','administrador-papel','administrador-acessos','administrador-estrutura','administrador-privacidade','administrador-colecoes'];
const url=pathToFileURL(resolve(root,'treinamento/index.html')).href;
let n=0;
try{
 for(const size of [[1440,900],[1920,1080],[1280,800]]){
  const page=await browser.newPage({viewport:{width:size[0],height:size[1]}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url+'#inicio',{waitUntil:'load'});
  const slides=await page.evaluate(()=>{
   const t=['comum','editor','moderador','administrador'],c=window.TreinamentoConteudo,e=window.TreinamentoAulas.extras;
   return ['inicio','mapa-portal-anterior','mapa-reitoria','mapa-campi','caminho-tres-cliques',
    ...t.flatMap(k=>['trilha-'+k,...c.filter(s=>s.track===k).flatMap(s=>[s.id,...e.filter(x=>x.after===s.id).map(x=>x.id)]),...(k==='comum'?['ia-prompts']:[])])];
  });
  assert.equal(slides.length,42);
  for(const id of slides){
   await page.evaluate(id=>location.hash='#'+id,id);
   await page.waitForFunction(expected=>document.querySelector('#progress')?.textContent===expected, String(slides.indexOf(id)+1).padStart(2,'0')+' / 42');
   const state=await page.evaluate(async()=>{
    const imgs=[...document.querySelectorAll('#app img')];
    await Promise.all(imgs.map(x=>x.decode().catch(()=>null)));
    const b=document.querySelector('.stage').getBoundingClientRect();
    return {x:b.x,y:b.y,right:b.right,bottom:b.bottom,ratio:b.width/b.height,images:imgs.map(x=>x.naturalWidth)};
   });
   assert.ok(Math.abs(state.ratio-16/9)<.02,'Formato incorreto: '+id);
   assert.ok(state.x>=-1&&state.y>=-1&&state.right<=size[0]+1&&state.bottom<=size[1]+1,'Palco cortado: '+id);
   assert.ok(state.images.every(x=>x>0),'Imagem ausente: '+id);
   if(size[0]===1440){
    const count=await page.locator('#app [data-zoom-image]').count();
    for(let i=0;i<count;i++){
     const trigger=page.locator('#app [data-zoom-image]').nth(i);
     const src=await trigger.getAttribute('data-zoom-image');
     await trigger.click();
     await page.waitForFunction(()=>document.querySelector('#imageZoomImage')?.naturalWidth>0);
     assert.equal(await page.locator('#imageZoomImage').getAttribute('src'),src,'Captura complementar incorreta: '+id);
     await page.keyboard.press('Escape');
     assert.equal(await page.locator('#imageZoom').evaluate(el=>el.open),false,'Escape não fecha captura: '+id);
    }
   }
   if(size[0]===1440&&ids.includes(id)){await page.screenshot({path:resolve(output,id+'.png')});n++;}
  }
  if(size[0]===1440){
   for(const id of ['moderador-publicar','administrador-papel','administrador-privacidade']){
    await page.evaluate(id=>location.hash='#'+id,id);
    await page.waitForFunction(id=>location.hash==='#'+id&&!!document.querySelector('#app .capture-zoom'),id);
    await page.locator('#app .capture-zoom').first().click();
    assert.equal(await page.locator('#imageZoom').evaluate(el=>el.open),true,'Ampliação não abriu: '+id);
    assert.ok(await page.locator('#imageZoomImage').evaluate(el=>el.naturalWidth)>0,'Imagem ampliada não carregou: '+id);
    if(id==='administrador-privacidade'){await page.screenshot({path:resolve(output,'ampliacao-privacidade.png')});n++;}
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#imageZoom').evaluate(el=>el.open),false,'Escape não fecha ampliação: '+id);
   }
   await page.evaluate(()=>location.hash='#editor-menus');
   await page.locator('#fullscreen').click();
   await page.waitForTimeout(200);
   const fullscreen=await page.evaluate(()=>{
    const b=document.querySelector('.stage').getBoundingClientRect();
    return {active:!!document.fullscreenElement,layout:getComputedStyle(document.querySelector('.deck')).display,
    x:b.x,y:b.y,right:b.right,bottom:b.bottom,width:innerWidth,height:innerHeight};
   });
   if(fullscreen.active){
    assert.equal(fullscreen.layout,'flex');
    assert.ok(fullscreen.x>=-1&&fullscreen.y>=-1&&fullscreen.right<=fullscreen.width+1&&fullscreen.bottom<=fullscreen.height+1,'Fullscreen cortado');
    await page.screenshot({path:resolve(output,'fullscreen.png')});n++;
   }else console.log('Fullscreen indisponível no Chromium headless; verificar manualmente.');
  }
  assert.deepEqual(errors,[],'Erro JS no navegador');
  await page.close();
 }
 console.log('OK: 42 telas × 3 dimensões; '+n+' capturas de conferência.');
}finally{await browser.close();}
