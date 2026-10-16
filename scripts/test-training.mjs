import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const window = {};
new Function('window', fs.readFileSync('treinamento/conteudo.js', 'utf8'))(window);
const slides = window.TreinamentoConteudo;
assert.equal(new Set(slides.map(s => s.id)).size, slides.length, 'IDs devem ser únicos');
const source = fs.readFileSync('treinamento/treinamento.js', 'utf8');
const refs = new Function(`return (${source.match(/const refs = (\{[\s\S]*?\n  \});/)[1]})`)();
for (const slide of slides) {
  assert.ok(slide.title && slide.lead && slide.points.length && slide.task && slide.check, slide.id);
  assert.ok(refs[slide.ref], `Referência ausente: ${slide.id}`);
  assert.ok(fs.existsSync(path.join('04 - Governança & Manuais/guia-do-portal', refs[slide.ref]+'.md')), slide.ref);
  if (slide.img) assert.ok(fs.existsSync(path.join('imagens/guias-contextuais', slide.img)), slide.img);
}
for (const profile of ['editor', 'moderador', 'administrador']) {
  assert.ok(slides.find(s => s.id===`${profile}-papel`)?.limits?.length, `Limites de ${profile}`);
  assert.ok(slides.find(s => s.id===`${profile}-pratica`), `Prática de ${profile}`);
}
assert.ok(fs.readFileSync('index.html','utf8').includes('href="treinamento/"'), 'Entrada no guia');
console.log(`Treinamento OK: ${slides.length} capítulos, 3 perfis, referências e imagens existentes.`);
