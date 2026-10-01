import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const guideRoot = "04 - Governança & Manuais/guia-do-portal";
const outputPath = path.join(repoRoot, "data", "guide-index.json");
const checkOnly = process.argv.includes("--check");

async function walk(directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const absolute = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            files.push(...await walk(absolute));
            continue;
        }
        if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
            files.push(absolute);
        }
    }

    return files;
}

function toPosix(relativePath) {
    return relativePath.split(path.sep).join("/").normalize("NFC");
}

const absoluteGuideRoot = path.join(repoRoot, ...guideRoot.split("/"));
const files = await walk(absoluteGuideRoot);
const articles = files
    .map(file => toPosix(path.relative(repoRoot, file)))
    .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" }));

const nonNfc = articles.filter(article => article !== article.normalize("NFC"));
if (nonNfc.length) {
    console.error("Há caminhos fora de NFC:", nonNfc);
    process.exit(1);
}

const index = {
    version: 1,
    root: guideRoot,
    articles
};

const generated = JSON.stringify(index, null, 2) + "\n";

if (checkOnly) {
    let current = "";
    try {
        current = await fs.readFile(outputPath, "utf8");
    } catch {
        console.error("data/guide-index.json não existe. Rode: node scripts/generate-guide-index.mjs");
        process.exit(1);
    }

    if (current !== generated) {
        console.error("data/guide-index.json está desatualizado. Rode: node scripts/generate-guide-index.mjs");
        process.exit(1);
    }

    console.log(`guide-index OK: ${articles.length} artigos`);
    process.exit(0);
}

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, generated, "utf8");
console.log(`guide-index gerado: ${articles.length} artigos`);
