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

    return {
        titulo: metadados.tituloCanonico || tituloDoArquivo(sourcePath),
        categoria,
        conteudo,
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
