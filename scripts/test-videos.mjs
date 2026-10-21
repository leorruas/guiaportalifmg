import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const codigo = readFileSync(path.join(raiz, "video.js"), "utf8");
const contexto = {
    window: {},
    document: { baseURI: "https://leorruas.github.io/guiaportalifmg/" },
    URL
};
runInNewContext(codigo, contexto);
const { converterSrt, resolverArquivo } = contexto.window.GuiaVideos;
const origem = "\uFEFF1\r\n00:00:01,250 --> 00:00:03,500\r\nPrimeira linha\r\nSegunda linha\r\n\r\n2\r\n00:00:04,000 --> 00:00:06,000\r\nPróxima fala\r\n";
const convertido = converterSrt(origem);
assert.match(convertido.vtt, /^WEBVTT\n\n00:00:01\.250 --> 00:00:03\.500\nPrimeira linha\nSegunda linha/);
assert.equal(convertido.transcricao.length, 2);
assert.equal(convertido.transcricao[0].segundos, 1.25);
assert.equal(convertido.transcricao[1].texto, "Próxima fala");
assert.throws(() => converterSrt("arquivo inválido"), /tempos válidos/);
assert.equal(resolverArquivo("videos/Cadastrando processos seletivos.mp4"), "https://leorruas.github.io/guiaportalifmg/videos/Cadastrando%20processos%20seletivos.mp4");
assert.equal(resolverArquivo("videos/legenda português.srt", "legenda"), "https://leorruas.github.io/guiaportalifmg/videos/legenda%20portugu%C3%AAs.srt");
for (const nome of ["https://site.com/video.mp4", "../outro.mp4", "videos/../outro.mp4", "videos/x.mp4?test=1", "/videos/x.mp4", "videos/x.srt"]) {
    assert.equal(resolverArquivo(nome), null, nome);
}
console.log("OK: vídeos, SRT e segurança dos caminhos.");
