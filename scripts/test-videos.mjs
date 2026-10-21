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
const { converterSrt, resolverArquivo, analisarDestinoVideo, posicionarVideoNoTrecho } = contexto.window.GuiaVideos;
const origem = "\uFEFF1\r\n00:00:01,250 --> 00:00:03,500\r\nPrimeira linha\r\nSegunda linha\r\n\r\n2\r\n00:00:04,000 --> 00:00:06,000\r\nPróxima fala\r\n";
const convertido = converterSrt(origem);
assert.match(convertido.vtt, /^WEBVTT\n\n00:00:01\.250 --> 00:00:03\.500\nPrimeira linha\nSegunda linha/);
assert.equal(convertido.transcricao.length, 2);
assert.equal(convertido.transcricao[0].segundos, 1.25);
assert.equal(convertido.transcricao[1].texto, "Próxima fala");
assert.equal(analisarDestinoVideo("guia-video-2@54.125").id, "guia-video-2");
assert.equal(analisarDestinoVideo("guia-video-2@54.125").segundos, 54.125);
for (const invalido of ["guia-video-2", "guia-video-2@-1", "guia-video-2@12<script>", "guia-video-0@12", "outra-secao@1"]) {
    assert.equal(analisarDestinoVideo(invalido), null);
}
let iniciouReproducao = false;
let pausou = false;
const videoFalso = {
    readyState: 1, isConnected: true, duration: 90, currentTime: 0,
    pause() { pausou = true; },
    play() { iniciouReproducao = true; }
};
const figuraFalsa = {
    dataset: {},
    querySelector(seletor) { return seletor === "video" ? videoFalso : null; }
};
assert.equal(posicionarVideoNoTrecho(figuraFalsa, 54.125), true);
assert.equal(videoFalso.currentTime, 54.125);
assert.equal(figuraFalsa.dataset.tempoBusca, "54.125");
assert.equal(pausou, true);
assert.equal(iniciouReproducao, false);
let listenerMetadados = null;
const videoPendente = {
    readyState: 0, isConnected: true, duration: NaN, currentTime: 0,
    addEventListener(evento, callback) { if (evento === "loadedmetadata") listenerMetadados = callback; },
    pause() {}
};
const figuraPendente = {
    dataset: {},
    querySelector(seletor) { return seletor === "video" ? videoPendente : null; }
};
assert.equal(posicionarVideoNoTrecho(figuraPendente, 12.5), true);
assert.equal(videoPendente.currentTime, 0);
assert.equal(typeof listenerMetadados, "function");
listenerMetadados();
assert.equal(videoPendente.currentTime, 12.5);
assert.throws(() => converterSrt("arquivo inválido"), /tempos válidos/);
assert.equal(resolverArquivo("videos/Cadastrando processos seletivos.mp4"), "https://leorruas.github.io/guiaportalifmg/videos/Cadastrando%20processos%20seletivos.mp4");
assert.equal(resolverArquivo("videos/legenda português.srt", "legenda"), "https://leorruas.github.io/guiaportalifmg/videos/legenda%20portugu%C3%AAs.srt");
for (const nome of ["https://site.com/video.mp4", "../outro.mp4", "videos/../outro.mp4", "videos/x.mp4?test=1", "/videos/x.mp4", "videos/x.srt"]) {
    assert.equal(resolverArquivo(nome), null, nome);
}

// Confere o inventário atual de vídeos, as legendas e os caminhos nos artigos.
import { existsSync, readdirSync } from "node:fs";
const pastaVideo = path.join(raiz, "videos");
const pastaSrt = path.join(pastaVideo, "legendas");
const mp4s = readdirSync(pastaVideo).filter(nome => nome.endsWith(".mp4"));
for (const nome of mp4s) {
    const srt = path.join(pastaSrt, nome.replace(/\.mp4$/i, ".srt"));
    assert.ok(existsSync(srt), `Legenda ausente: ${nome}`);
    assert.ok(converterSrt(readFileSync(srt, "utf8")).transcricao.length > 0, `Legenda vazia: ${nome}`);
}
function validarArtigos(diretorio) {
    for (const entrada of readdirSync(diretorio, { withFileTypes: true })) {
        const alvo = path.join(diretorio, entrada.name);
        if (entrada.isDirectory()) { validarArtigos(alvo); continue; }
        if (!entrada.name.endsWith(".md")) continue;
        const markdown = readFileSync(alvo, "utf8");
        for (const bloco of markdown.matchAll(/```video\n([\s\S]*?)\n```/g)) {
            for (const linha of bloco[1].split("\n")) {
                const campo = linha.match(/^(arquivo|legenda):\s*(.+)$/);
                if (!campo) continue;
                assert.ok(resolverArquivo(campo[2], campo[1] === "legenda" ? "legenda" : "video"), `Caminho inválido: ${campo[2]}`);
                assert.ok(existsSync(path.join(raiz, campo[2])), `Mídia ausente: ${campo[2]}`);
            }
        }
    }
}
validarArtigos(path.join(raiz, "04 - Governança & Manuais", "guia-do-portal"));
console.log(`OK: ${mp4s.length} vídeos com legendas e referências verificadas.`);

console.log("OK: vídeos, SRT e segurança dos caminhos.");
