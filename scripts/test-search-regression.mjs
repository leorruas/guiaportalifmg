import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();

async function readText(relativePath) {
    return fs.readFile(path.join(repoRoot, ...relativePath.split("/")), "utf8");
}

async function readJson(relativePath) {
    return JSON.parse(await readText(relativePath));
}

function executeBrowserModule(source, label) {
    const windowObject = {};
    try {
        new Function("window", source)(windowObject);
    } catch (error) {
        console.error(`Falha ao carregar ${label}: ${error.message}`);
        process.exit(1);
    }
    return windowObject;
}

function chaveCanonicaDoArtigo(sourcePath = "") {
    return sourcePath
        .replace(/^.*guia-do-portal\//, "")
        .replace(/\.md$/i, "");
}

function categoriaDoArtigo(sourcePath) {
    const partes = sourcePath.split("/");
    const indiceGuia = partes.indexOf("guia-do-portal");
    if (indiceGuia < 0 || !partes[indiceGuia + 1]) {
        throw new Error(`Caminho fora do guia: ${sourcePath}`);
    }
    return partes[indiceGuia + 1].replace(/^\d+\s*-\s*/, "");
}

function tituloDoArquivo(sourcePath) {
    return sourcePath.split("/").at(-1).replace(/\.md$/i, "");
}

const [searchSource, metadataSource, guideIndex, regression] = await Promise.all([
    readText("search.js"),
    readText("data/guide-metadata.js"),
    readJson("data/guide-index.json"),
    readJson("data/search-regression.json")
]);

const searchWindow = executeBrowserModule(searchSource, "search.js");
const metadataWindow = executeBrowserModule(metadataSource, "data/guide-metadata.js");

const GuiaBusca = searchWindow.GuiaBusca;
const GuiaMetadata = metadataWindow.GuiaMetadata;
const videoWindow = executeBrowserModule(await readText("video.js"), "video.js");
const converterSrt = videoWindow.GuiaVideos?.converterSrt;

if (!GuiaBusca?.ranquearArtigos) {
    console.error("search.js não exporta GuiaBusca.ranquearArtigos.");
    process.exit(1);
}
if (!GuiaMetadata?.metadadosCanonicos || !GuiaMetadata?.perfilPorCategoria) {
    console.error("guide-metadata.js não exporta os metadados esperados.");
    process.exit(1);
}
if (!Array.isArray(guideIndex?.articles) || !Array.isArray(regression?.queries)) {
    console.error("Arquivos de dados da busca estão em formato inválido.");
    process.exit(1);
}

function obterMetadados(sourcePath, categoria) {
    const explicito = GuiaMetadata.metadadosCanonicos[chaveCanonicaDoArtigo(sourcePath)];
    if (explicito) return { estado: "canonico", ...explicito };

    if (categoria === "Comece aqui" || categoria === "Fundamentos") {
        return { tipo: "referencia", estado: "canonico", perfilMinimo: "todos" };
    }
    if (categoria === "Sou gestor") {
        return { tipo: "tarefa", estado: "canonico", perfilMinimo: "gestor" };
    }

    return {
        tipo: "tarefa",
        estado: "canonico",
        perfilMinimo: GuiaMetadata.perfilPorCategoria[categoria] || ""
    };
}

const artigos = await Promise.all(guideIndex.articles.map(async (sourcePath) => {
    const categoria = categoriaDoArtigo(sourcePath);
    const metadados = obterMetadados(sourcePath, categoria);
    const conteudo = await readText(sourcePath);
    const referencias = GuiaBusca.extrairReferenciasVideosBusca(conteudo);
    const transcricoes = await Promise.all(referencias.map(async referencia => {
        if (!/^videos\/(?:legendas\/)?[^\\?#%<>]+\.srt$/i.test(referencia.legenda)
            || referencia.legenda.split("/").includes("..")) {
            throw new Error(`Legenda inválida para busca: ${referencia.legenda}`);
        }
        const trechos = converterSrt(await readText(referencia.legenda)).transcricao;
        return { ...referencia, trechos, texto: trechos.map(trecho => trecho.texto).join(" ") };
    }));

    return {
        titulo: metadados.tituloCanonico || tituloDoArquivo(sourcePath),
        categoria,
        conteudo,
        transcricoes,
        sourcePath,
        metadados
    };
}));

const idsCanonicos = artigos
    .filter(artigo => artigo.metadados?.estado !== "absorver")
    .map(artigo => artigo.metadados?.id)
    .filter(Boolean);

const idsDuplicados = [...new Set(idsCanonicos.filter((id, indice) => idsCanonicos.indexOf(id) !== indice))];
if (idsDuplicados.length) {
    console.error("IDs canônicos duplicados:", idsDuplicados.join(", "));
    process.exit(1);
}

const falhas = [];

for (const caso of regression.queries) {
    const consulta = String(caso.query || "").trim();
    const esperado = caso.expected_top_id;

    if (!consulta || !esperado) {
        falhas.push({ consulta, esperado, motivo: "caso de regressão incompleto" });
        continue;
    }

    if (!idsCanonicos.includes(esperado)) {
        falhas.push({ consulta, esperado, motivo: "expected_top_id não existe entre os artigos canônicos" });
        continue;
    }

    const ranking = GuiaBusca.ranquearArtigos(artigos, consulta);
    const topo = ranking[0]?.metadados?.id || null;

    if (topo !== esperado) {
        falhas.push({
            consulta,
            esperado,
            encontrado: topo,
            top3: ranking.slice(0, 3).map(artigo => ({
                id: artigo.metadados?.id || null,
                titulo: artigo.titulo,
                pontuacao: GuiaBusca.calcularPontuacaoBusca(artigo, consulta)
            }))
        });
    }
}

if (falhas.length) {
    console.error(`Regressão da busca falhou em ${falhas.length}/${regression.queries.length} consulta(s).`);
    for (const falha of falhas) {
        console.error(JSON.stringify(falha, null, 2));
    }
    process.exit(1);
}

console.log(`Busca OK: ${regression.queries.length}/${regression.queries.length} consultas com o resultado esperado no topo.`);
console.log(`Corpus avaliado: ${artigos.length} artigos do índice publicado.`);


const casosDasLegendas = [
    ["logoff", "task-groups-permissions"],
    ["acrônimo", "task-short-url-redirect"],
    ["muito bem menino", "task-publication-review"]
];
for (const [consulta, esperado] of casosDasLegendas) {
    const resultados = GuiaBusca.ranquearArtigos(artigos, consulta);
    const artigo = resultados.find(item => item.metadados.id === esperado);
    if (!artigo) throw new Error(`Legenda não recuperada: ${consulta}`);
    if (GuiaBusca.contemTodosOsTermos(GuiaBusca.textoIndexavelDoArtigo(artigo), GuiaBusca.termosDaBusca(consulta))) {
        throw new Error(`Consulta não exclusiva da legenda: ${consulta}`);
    }
    const acerto = GuiaBusca.encontrarCorrespondenciaLegendaBusca(artigo, consulta);
    if (!acerto?.tempo || !acerto.trecho || !acerto.indice
        || GuiaBusca.motivoCorrespondenciaBusca(artigo, consulta).tipo !== "transcricao") {
        throw new Error(`Vídeo, trecho ou tempo não identificado: ${consulta}`);
    }
}
const totalLegendas = artigos.reduce((soma, artigo) => soma + artigo.transcricoes.length, 0);
if (totalLegendas !== 11) throw new Error(`Legendas indexadas: ${totalLegendas}/11`);
console.log(`Busca nas legendas OK: ${casosDasLegendas.length} consultas e ${totalLegendas} vídeos.`);

// Resumos, sugestões e prioridade das ações devem continuar coerentes.
const artigoComResumo = artigos.find(item => item.metadados.id === "task-selection-create");
if (GuiaBusca.resumoDoArtigoBusca(artigoComResumo) !== artigoComResumo.metadados.descricaoLista) {
    throw new Error("Resumo não utiliza a descrição canônica.");
}
const testeResumo = GuiaBusca.resumoDoArtigoBusca({conteudo: "# Título\n\n```video\narquivo: videos/um.mp4\n```\n\nUma explicação **clara** sobre a tarefa."});
if (testeResumo !== "Uma explicação clara sobre a tarefa.") throw new Error(`Resumo inadequado: ${testeResumo}`);
const sugestoes = GuiaBusca.sugerirResultadosBusca(artigos, "configurarr permissaao", 4);
if (!sugestoes.some(item => item.metadados.id === "task-groups-permissions")) {
    throw new Error("Sugestões não encontraram permissões.");
}
if (GuiaBusca.sugerirResultadosBusca(artigos, "palavrainexistentezz").length) {
    throw new Error("Sugestões não devem inventar relação.");
}
if (sugestoes.some(item => item.metadados.estado === "absorver")) {
    throw new Error("Sugestões incluem artigo absorvido.");
}
if (GuiaBusca.pontuarProximidadeBusca("criar e atualizar um processo seletivo", ["criar","processo","seletivo"])
    <= GuiaBusca.pontuarProximidadeBusca("processo seletivo para criar outra coisa", ["criar","processo","seletivo"])) {
    throw new Error("Proximidade não respeita a ordem dos termos.");
}
console.log(`Resumos e sugestões OK: ${sugestoes.length} possibilidades reais.`);

// Consultas específicas devem abrir a seção que realmente contém a resposta.
const blocos = artigos.find(artigo => artigo.metadados.id === 'task-blocks-use');
for (const [consulta, titulo] of [['recursivo', 'Coleção'], ['chapéu', 'Cards'], ['colar', 'Tabela'], ['Link único como chamada para ação', 'Link único como chamada para ação']]) {
    const secao = GuiaBusca.encontrarSecaoBusca(blocos, consulta);
    if (secao?.titulo !== titulo) throw new Error(`Seção incorreta para ${consulta}: ${secao?.titulo}`);
}
if (GuiaBusca.encontrarSecaoBusca(blocos, 'montar uma página')) throw new Error('Busca geral deve abrir o início');
if (GuiaBusca.encontrarSecaoBusca(blocos, 'inexistentezz')) throw new Error('Busca sem seção deve manter fallback');
const repetidas = GuiaBusca.extrairSecoesBusca('## A\ntexto\n### A\nresposta\n```md\n## falso\n```');
if (repetidas.length !== 2 || repetidas[1].id !== 'a-2') throw new Error('Âncoras duplicadas ou bloco de código incorretos');
console.log('Busca por seção OK: corpo, subtítulos, início, fallback e âncoras únicas.');
