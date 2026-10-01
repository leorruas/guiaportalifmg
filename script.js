// Índice gerado a partir da pasta do guia.
// O arquivo é versionado no repositório e validado por CI; não mantenha uma segunda lista manual aqui.
const GUIA_INDEX_URL = "data/guide-index.json";

async function obterListaDeArquivos() {
    const resposta = await fetch(GUIA_INDEX_URL, { cache: "no-store" });
    if (!resposta.ok) {
        throw new Error(`Não foi possível carregar o índice do guia (HTTP ${resposta.status}).`);
    }

    const indice = await resposta.json();
    if (!indice || !Array.isArray(indice.articles)) {
        throw new Error("O índice do guia está em formato inválido.");
    }

    return indice.articles.map(sourcePath => {
        const partes = sourcePath.split("/");
        const indiceGuia = partes.indexOf("guia-do-portal");
        return {
            titulo: partes.at(-1).replace(/\.md$/i, ""),
            // O conteúdo continua vindo do endereço bruto do mesmo repositório,
            // sem depender da API do GitHub em tempo de execução.
            path: encodeURI(`https://raw.githubusercontent.com/leorruas/guiaportalifmg/main/${sourcePath}`),
            sourcePath,
            categoria: partes[indiceGuia + 1].replace(/^\d+\s*-\s*/, "")
        };
    });
}

// Variáveis globais
let todosOsArtigos = [];
let todasAsPastas = {};
let artigoAtual = null;
let indiceDeBuscaPronto = false;
let resultadosDaBuscaAtual = [];
let filtroDePerfilAtivo = "";


// Modelo transitório de arquitetura canônica.
// Enquanto os metadados ainda não vivem nos próprios Markdown, esta camada
// permite aplicar herança de perfis sem duplicar tarefas na interface.
if (!window.GuiaMetadata) {
    throw new Error("Metadados do guia não foram carregados.");
}
const { niveisDePerfil, perfilPorCategoria, metadadosCanonicos } = window.GuiaMetadata;

const guiaBuscaFallback = {
    normalizarTextoParaBusca(texto = "") {
        return String(texto)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase("pt-BR");
    },
    termosDaBusca(termoBusca) {
        return guiaBuscaFallback.normalizarTextoParaBusca(termoBusca)
            .replace(/[^\p{L}\p{N}]+/gu, " ")
            .trim()
            .split(/\s+/)
            .filter(Boolean);
    },
    contemTodosOsTermos(texto, termos) {
        const normalizado = guiaBuscaFallback.normalizarTextoParaBusca(texto);
        return termos.every(termo => normalizado.includes(termo));
    },
    textoIndexavelDoArtigo(artigo) {
        return `${artigo.titulo} ${artigo.categoria} ${artigo.conteudo}`;
    },
    calcularPontuacaoBusca() {
        return 0;
    },
    ranquearArtigos(artigos, termoBusca) {
        const termos = guiaBuscaFallback.termosDaBusca(termoBusca);
        return artigos
            .filter(artigo => artigo?.metadados?.estado !== "absorver")
            .filter(artigo => guiaBuscaFallback.contemTodosOsTermos(
                guiaBuscaFallback.textoIndexavelDoArtigo(artigo),
                termos
            ))
            .sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR", { numeric: true }));
    },
    motivoCorrespondenciaBusca() {
        return { tipo: "conteudo", rotulo: "correspondência no conteúdo" };
    },
    rotuloPerfilMinimo(artigo) {
        return artigo.metadados?.perfilMinimo
            ? `perfil mínimo: ${artigo.metadados.perfilMinimo}`
            : artigo.categoria.toLowerCase();
    }
};

if (!window.GuiaBusca) {
    console.warn("Motor de busca avançado não foi carregado; usando busca básica.");
}

const {
    normalizarTextoParaBusca,
    termosDaBusca,
    contemTodosOsTermos,
    textoIndexavelDoArtigo,
    calcularPontuacaoBusca,
    ranquearArtigos,
    motivoCorrespondenciaBusca,
    rotuloPerfilMinimo
} = window.GuiaBusca || guiaBuscaFallback;

const guiaNavegacaoFallback = {
    rotaDoArtigo(artigo) {
        return String(artigo?.sourcePath || "")
            .replace(/^.*guia-do-portal\//, "")
            .replace(/\.md$/i, "");
    },
    rotaDoPerfil(categoria) {
        return `#/perfil/${encodeURIComponent(categoria)}`;
    },
    rotaComSecao(artigo, secao) {
        const rota = `#/${guiaNavegacaoFallback.rotaDoArtigo(artigo).split("/").map(encodeURIComponent).join("/")}`;
        return secao ? `${rota}#${encodeURIComponent(secao)}` : rota;
    },
    resolverLinkObsidian(destino, artigos = []) {
        const normalizar = (valor) => decodeURIComponent(String(valor || ""))
            .trim()
            .replace(/\\/g, "/")
            .replace(/\.md$/i, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase("pt-BR")
            .replace(/:/g, " -")
            .replace(/\s+/g, " ");
        const [caminhoBruto, secaoBruta] = String(destino || "").split(/#(.+)/, 2);
        const caminho = normalizar(caminhoBruto);
        const artigo = artigos.find(item => {
            const caminhoFonte = decodeURI(item.sourcePath || item.path || "").replace(/\.md$/i, "");
            return [
                item.titulo,
                caminhoFonte,
                caminhoFonte.replace(/^.*guia-do-portal\//, ""),
                caminhoFonte.split("/").at(-1)
            ].some(candidato => normalizar(candidato) === caminho);
        });
        if (!artigo) return null;
        const secao = secaoBruta
            ? normalizar(secaoBruta).replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")
            : "";
        return { artigo, href: guiaNavegacaoFallback.rotaComSecao(artigo, secao) };
    }
};

if (!window.GuiaNavegacao) {
    console.warn("Utilidades de navegação não foram carregadas; usando fallback básico.");
}

const {
    rotaDoArtigo,
    rotaDoPerfil,
    rotaComSecao
} = window.GuiaNavegacao || guiaNavegacaoFallback;

function resolverLinkObsidian(destino) {
    return (window.GuiaNavegacao || guiaNavegacaoFallback).resolverLinkObsidian(destino, todosOsArtigos);
}

function chaveCanonicaDoArtigo(sourcePath = "") {
    return sourcePath
        .replace(/^.*guia-do-portal\//, "")
        .replace(/\.md$/i, "");
}

function perfilDaCategoria(categoria) {
    return perfilPorCategoria[categoria] || "";
}

function obterMetadadosDoArtigo(sourcePath, categoria) {
    const chave = chaveCanonicaDoArtigo(sourcePath);
    const explicito = metadadosCanonicos[chave];
    if (explicito) return { estado: "canonico", ...explicito };

    if (categoria === "Comece aqui" || categoria === "Fundamentos") {
        return { tipo: "referencia", estado: "canonico", perfilMinimo: "todos" };
    }
    if (categoria === "Sou gestor") {
        return { tipo: "tarefa", estado: "canonico", perfilMinimo: "gestor" };
    }

    const perfilMinimo = perfilDaCategoria(categoria);
    return { tipo: "tarefa", estado: "canonico", perfilMinimo };
}

function perfilPodeExecutar(perfil, perfilMinimo) {
    if (!niveisDePerfil[perfil] || !niveisDePerfil[perfilMinimo]) return perfil === perfilMinimo;
    return niveisDePerfil[perfil] >= niveisDePerfil[perfilMinimo];
}

function artigoVisivelNoFiltroDePerfil(artigo, categoria) {
    const perfil = perfilDaCategoria(categoria);
    if (!perfil) return artigo.categoria === categoria;

    const meta = artigo.metadados || {};
    if (meta.estado === "absorver") return false;
    if (meta.tipo === "visao") return meta.perfilMinimo === perfil;
    if (meta.tipo !== "tarefa") return false;
    return perfilPodeExecutar(perfil, meta.perfilMinimo);
}

function compararArtigosPorArquivo(a, b) {
    const ordemA = Number.isFinite(a.metadados?.ordem) ? a.metadados.ordem : Number.POSITIVE_INFINITY;
    const ordemB = Number.isFinite(b.metadados?.ordem) ? b.metadados.ordem : Number.POSITIVE_INFINITY;

    if (ordemA !== ordemB) return ordemA - ordemB;

    return a.sourcePath.localeCompare(b.sourcePath, "pt-BR", {
        numeric: true,
        sensitivity: "base"
    });
}

const campoTexto = document.getElementById("main-search-input");
const campoTextoNav = document.getElementById("nav-search-input");
const btnPesquisar = document.getElementById("btn-pesquisar");
const containerResultados = document.querySelector(".cards-container");
const divResultados = document.querySelector(".resultados");
const leitorDeArtigo = document.getElementById("leitor-artigo");
const leitorDePerfil = document.getElementById("perfil-leitor");
const perfilCabecalho = document.getElementById("perfil-cabecalho");
const perfilAcoes = document.getElementById("perfil-acoes");
const artigoTitulo = document.getElementById("artigo-titulo");
const artigoCorpo = document.getElementById("artigo-corpo");
const btnVoltar = document.getElementById("btn-voltar");
const btnVoltarPerfil = document.getElementById("btn-voltar-perfil");
const retornoArtigoTexto = document.getElementById("retorno-artigo-texto");
const btnTema = document.getElementById("theme-toggle");

function aplicarTema(tema, persistir = true) {
    document.documentElement.dataset.theme = tema;
    if (persistir) localStorage.setItem("tema-guia-portal", tema);
    if (btnTema) {
        const proximoTema = tema === "dark" ? "claro" : "escuro";
        btnTema.textContent = `modo ${proximoTema}`;
        btnTema.setAttribute("aria-label", `Alternar para modo ${proximoTema}`);
    }
}

function inicializarTema() {
    const temaSalvo = localStorage.getItem("tema-guia-portal");
    const temaDoSistema = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    aplicarTema(temaSalvo || temaDoSistema, false);
}

const informacoesCategorias = {
    "Comece aqui": { icone: "compass", descricao: "Entenda o acesso e encontre o caminho certo para a sua tarefa." },
    "Sou administrador": { icone: "sliders", descricao: "Configure o ambiente e também execute as tarefas de moderador e editor." },
    "Sou moderador": { icone: "check", descricao: "Revise conteúdos do seu grupo, além das tarefas de editor." },
    "Sou editor": { icone: "pencil", descricao: "Crie e atualize conteúdos para encaminhá-los à moderação." },
    "Sou gestor": { icone: "user", descricao: "Entenda como solicitar e acompanhar o trabalho no portal." },
    "Fundamentos": { icone: "book", descricao: "Conheça conceitos que ajudam a tomar boas decisões no portal." }
};

const resumosDoIndice = {
    "Comece aqui": "acesso, navegação e primeiras tarefas",
    "Fundamentos": "princípios para escrever, estruturar e medir",
    "Sou administrador": "configuração do ambiente, acessos e fluxos do portal",
    "Sou moderador": "revisão, validação e publicação dos conteúdos do grupo",
    "Sou editor": "criação e atualização de conteúdos para a moderação",
    "Sou gestor": "solicitação, acompanhamento e validação das entregas"
};

const ordemCategorias = [
    "Comece aqui",
    "Sou administrador",
    "Sou moderador",
    "Sou editor",
    "Sou gestor",
    "Fundamentos"
];

function ordenarCategorias(categorias) {
    return categorias.sort((a, b) => {
        const indiceA = ordemCategorias.indexOf(a);
        const indiceB = ordemCategorias.indexOf(b);
        return (indiceA === -1 ? ordemCategorias.length : indiceA) - (indiceB === -1 ? ordemCategorias.length : indiceB)
            || a.localeCompare(b, "pt-BR");
    });
}

function tituloDoPerfil(categoria) {
    return categoria.startsWith("Sou ") ? `${categoria.toLowerCase()} e...` : categoria;
}

function tituloDoIndice(categoria) {
    return categoria.replace(/^Sou\s+/i, "").toLowerCase();
}

function tituloDaAcao(titulo) {
    return titulo
        .replace(/^\d+\s*-\s*/, "")
        .replace(/^sou\s+(administrador|moderador|editor|gestor)\s+e\s*/i, "");
}

function classeDoPerfil(categoria) {
    const classes = {
        "Comece aqui": "perfil-comece",
        "Sou administrador": "perfil-administrador",
        "Sou moderador": "perfil-moderador",
        "Sou editor": "perfil-editor",
        "Sou gestor": "perfil-gestor",
        "Fundamentos": "perfil-fundamentos"
    };
    return classes[categoria] || "perfil-fundamentos";
}

function iconeNeutro(nome) {
    const caminhos = {
        compass: '<circle cx="12" cy="12" r="8"></circle><path d="m14.8 9.2-2.1 4.3-4.3 2.1 2.1-4.3z"></path>',
        sliders: '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3"></path><path d="M2 14h4M10 8h4m4 8h4"></path>',
        check: '<path d="m5 12 4.5 4.5L19 7"></path><circle cx="12" cy="12" r="9"></circle>',
        pencil: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>',
        user: '<circle cx="12" cy="8" r="3.5"></circle><path d="M5 21c.8-3.5 3.2-5.5 7-5.5s6.2 2 7 5.5"></path>',
        book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"></path><path d="M4 5.5v16"></path>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${caminhos[nome] || caminhos.book}</svg>`;
}

// Carrega os arquivos e busca o conteúdo de cada um
async function carregarTodosOsArtigos() {
    const lista = await obterListaDeArquivos();

    // Promessas paralelas para ler o conteúdo Markdown de cada arquivo
    const promessas = lista.map(async (item) => {
        try {
            const res = await fetch(item.path);
            if (!res.ok) return null;
            const texto = await res.text();
            
            // Extrai pasta/categoria se houver subpasta
            const caminhoDecodificado = decodeURI(item.path);
            const partes = caminhoDecodificado.replace("./", "").split("/");
            const categoria = item.categoria || (partes.length > 1 ? partes[0] : "Guia do Portal");

            const metadados = obterMetadadosDoArtigo(item.sourcePath, categoria);
            return {
                titulo: metadados.tituloCanonico || item.titulo,
                path: item.path,
                sourcePath: item.sourcePath,
                categoria: categoria,
                conteudo: texto,
                metadados
            };
        } catch (e) {
            console.error(`Erro ao carregar ${item.path}:`, e);
            return null;
        }
    });

    const resultados = await Promise.all(promessas);
    todosOsArtigos = resultados.filter(artigo => artigo !== null);
    indiceDeBuscaPronto = true;

    // Organiza artigos em estrutura de pasta para o accordion
    todasAsPastas = {};
    todosOsArtigos.forEach(artigo => {
        if (!todasAsPastas[artigo.categoria]) {
            todasAsPastas[artigo.categoria] = [];
        }
        todasAsPastas[artigo.categoria].push(artigo);
    });

    // A sequência de leitura pode ser definida por metadado para refletir
    // o fluxo real de trabalho. Sem ordem explícita, preserva o nome do arquivo.
    Object.values(todasAsPastas).forEach(artigos => {
        artigos.sort(compararArtigosPorArquivo);
    });

    // Renderiza a estrutura de pastas na página inicial
    renderizarPastas();

    tratarRotaDaUrl();
}

function criarIndiceNormalizado(texto = "") {
    const caracteres = Array.from(String(texto));
    const origens = [];
    let normalizado = "";

    caracteres.forEach((caractere, indiceOriginal) => {
        const trechoNormalizado = normalizarTextoParaBusca(caractere);
        for (const caractereNormalizado of trechoNormalizado) {
            normalizado += caractereNormalizado;
            origens.push(indiceOriginal);
        }
    });

    return { caracteres, normalizado, origens };
}

function filtrarArtigos(termoBusca) {
    leitorDePerfil.classList.add("escondido");
    if (!termoBusca || termoBusca.trim() === "") {
        containerResultados.innerHTML = "";
        const pastasContainer = document.getElementById("pastas-container");
        if (pastasContainer) pastasContainer.classList.remove("escondido");
        document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
        document.getElementById("explorar-perfis")?.classList.remove("escondido");
        return;
    }

    const termo = termoBusca.trim();
    const termos = termosDaBusca(termo);
    
    // Oculta container de pastas ao fazer busca
    const pastasContainer = document.getElementById("pastas-container");
    if (pastasContainer) pastasContainer.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-perfis")?.classList.add("escondido");

    if (!indiceDeBuscaPronto) {
        divResultados.classList.remove("escondido");
        containerResultados.innerHTML = `<p class="mensagem-busca">Preparando a pesquisa do guia… tente novamente em instantes.</p>`;
        return;
    }

    if (normalizarTextoParaBusca(termo).length < 3) {
        containerResultados.innerHTML = `<p class="mensagem-busca">Digite ao menos <strong>três letras</strong> para encontrar uma tarefa. Por exemplo: “notícia”, “imagem” ou “permissões”.</p>`;
        return;
    }

    const filtrados = ranquearArtigos(todosOsArtigos, termo);

    resultadosDaBuscaAtual = filtrados;
    filtroDePerfilAtivo = "";
    exibirResultados(filtrados, termo);
}

function destacarTexto(texto, termo) {
    const termos = termosDaBusca(termo);
    if (!termos.length) return escaparHtml(texto);

    const indice = criarIndiceNormalizado(texto);
    const intervalos = [];
    termos.forEach(termoNormalizado => {
        let posicao = indice.normalizado.indexOf(termoNormalizado);
        while (posicao !== -1) {
            const inicio = indice.origens[posicao];
            const fim = indice.origens[posicao + termoNormalizado.length - 1] + 1;
            intervalos.push([inicio, fim]);
            posicao = indice.normalizado.indexOf(termoNormalizado, posicao + termoNormalizado.length);
        }
    });

    const mesclados = intervalos
        .sort((a, b) => a[0] - b[0])
        .reduce((resultado, intervalo) => {
            const ultimo = resultado.at(-1);
            if (ultimo && intervalo[0] <= ultimo[1]) ultimo[1] = Math.max(ultimo[1], intervalo[1]);
            else resultado.push([...intervalo]);
            return resultado;
        }, []);

    let cursor = 0;
    return mesclados.map(([inicio, fim]) => {
        const antes = escaparHtml(indice.caracteres.slice(cursor, inicio).join(""));
        const marcado = escaparHtml(indice.caracteres.slice(inicio, fim).join(""));
        cursor = fim;
        return `${antes}<mark class="highlight">${marcado}</mark>`;
    }).join("") + escaparHtml(indice.caracteres.slice(cursor).join(""));
}

function escaparHtml(texto) {
    const elemento = document.createElement("span");
    elemento.textContent = texto;
    return elemento.innerHTML;
}

function removerFrontmatter(markdown) {
    if (!markdown) return "";
    // Remove cabeçalho YAML entre --- e --- no início do arquivo
    return markdown.replace(/^---[\s\S]*?---\s*/, "");
}

function normalizarTituloDoDocumento(valor) {
    const titulo = String(valor || "")
        .replace(/\.md$/i, "")
        .split("/")
        .at(-1);

    return tituloDaAcao(titulo)
        .trim()
        .toLocaleLowerCase("pt-BR")
        .replace(/\s+/g, " ");
}

function removerTituloInicialDuplicado() {
    const primeiroElemento = artigoCorpo.firstElementChild;
    if (!primeiroElemento || primeiroElemento.tagName !== "H1") return;

    const tituloDoCorpo = normalizarTituloDoDocumento(primeiroElemento.textContent);
    const candidatos = [
        artigoTitulo.textContent,
        artigoAtual?.titulo,
        artigoAtual?.sourcePath
    ]
        .map(normalizarTituloDoDocumento)
        .filter(Boolean);

    if (candidatos.includes(tituloDoCorpo)) {
        primeiroElemento.remove();
    }
}

function extrairTrechoRelevante(conteudo, termo) {
    const conteudoSemFrontmatter = removerFrontmatter(conteudo);
    const textoLimpo = conteudoSemFrontmatter.replace(/==/g, '').replace(/[#*`_~\[\]]/g, ' ');
    const indice = criarIndiceNormalizado(textoLimpo);
    const posicaoNormalizada = Math.min(...termosDaBusca(termo)
        .map(termoNormalizado => indice.normalizado.indexOf(termoNormalizado))
        .filter(posicao => posicao >= 0));
    const pos = Number.isFinite(posicaoNormalizada)
        ? indice.caracteres.slice(0, indice.origens[posicaoNormalizada]).join("").length
        : -1;
    
    if (pos === -1) {
        return textoLimpo.substring(0, 150) + "...";
    }

    const inicio = Math.max(0, pos - 40);
    const fim = Math.min(textoLimpo.length, pos + 110);
    let trecho = textoLimpo.substring(inicio, fim);
    
    if (inicio > 0) trecho = "..." + trecho;
    if (fim < textoLimpo.length) trecho = trecho + "...";
    
    return trecho;
}

function exibirResultados(artigos, termo = "") {
    containerResultados.innerHTML = "";
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.remove("escondido");

    if (artigos.length === 0) {
        containerResultados.innerHTML = `<p class="mensagem-busca">Nenhum procedimento encontrado para <strong>“${escaparHtml(termo)}”</strong>. Tente uma palavra ligada à tarefa, como “publicar”, “página” ou “coleção”.</p>`;
        return;
    }

    const filtrosDePerfil = [
        { valor: "", rotulo: "todos" },
        { valor: "Sou administrador", rotulo: "administrador" },
        { valor: "Sou moderador", rotulo: "moderador" },
        { valor: "Sou editor", rotulo: "editor" },
        { valor: "Sou gestor", rotulo: "gestor" }
    ];
    const resultadosFiltrados = filtroDePerfilAtivo
        ? artigos.filter(artigo => artigoVisivelNoFiltroDePerfil(artigo, filtroDePerfilAtivo))
        : artigos;

    const filtros = document.createElement("div");
    filtros.className = "busca-filtros";
    filtros.setAttribute("aria-label", "Filtrar resultados por perfil");
    filtrosDePerfil.forEach(({ valor, rotulo }) => {
        const filtro = document.createElement("button");
        const selecionado = filtroDePerfilAtivo === valor;
        filtro.type = "button";
        filtro.className = `busca-filtro${selecionado ? " ativo" : ""}`;
        filtro.textContent = rotulo;
        filtro.setAttribute("aria-pressed", String(selecionado));
        filtro.addEventListener("click", () => {
            filtroDePerfilAtivo = valor;
            exibirResultados(resultadosDaBuscaAtual, termo);
        });
        filtros.appendChild(filtro);
    });
    containerResultados.appendChild(filtros);

    const resumoBusca = document.createElement("p");
    resumoBusca.className = "resumo-busca";
    const sufixoDoFiltro = filtroDePerfilAtivo ? ` em ${tituloDoIndice(filtroDePerfilAtivo)}` : "";
    resumoBusca.textContent = `${resultadosFiltrados.length} ${resultadosFiltrados.length === 1 ? "resultado encontrado" : "resultados encontrados"}${sufixoDoFiltro} para “${termo}”, em ordem de relevância`;
    containerResultados.appendChild(resumoBusca);

    if (resultadosFiltrados.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.className = "mensagem-busca";
        mensagem.textContent = "Não há resultados desse perfil para esta pesquisa.";
        containerResultados.appendChild(mensagem);
        return;
    }

    const termos = termosDaBusca(termo);
    const lista = document.createElement("div");
    lista.className = "resultados-lista resultados-lista-relevancia";

    resultadosFiltrados.forEach((artigo, indice) => {
        const card = document.createElement("a");
        card.className = "resultado-item";
        card.href = `#/${rotaDoArtigo(artigo).split("/").map(encodeURIComponent).join("/")}`;

        const numero = document.createElement("span");
        numero.className = "resultado-numero";
        numero.textContent = String(indice + 1).padStart(2, "0");

        const conteudoResultado = document.createElement("span");
        conteudoResultado.className = "resultado-conteudo";

        const titulo = document.createElement("strong");
        titulo.innerHTML = destacarTexto(tituloDaAcao(artigo.titulo), termo);
        titulo.title = tituloDaAcao(artigo.titulo);

        const motivo = motivoCorrespondenciaBusca(artigo, termo);
        const meta = document.createElement("span");
        meta.className = "resultado-meta";
        meta.innerHTML = `<span>${escaparHtml(rotuloPerfilMinimo(artigo))}</span><span aria-hidden="true">·</span><span>${destacarTexto(motivo.rotulo, termo)}</span>`;

        const trecho = document.createElement("span");
        trecho.className = "resultado-trecho";
        const buscaSemOcorrenciaLiteral = ["alias", "aproximacao"].includes(motivo.tipo);
        const textoTrecho = extrairTrechoRelevante(artigo.conteudo, buscaSemOcorrenciaLiteral ? "" : termo);
        trecho.innerHTML = destacarTexto(textoTrecho, buscaSemOcorrenciaLiteral ? "" : termo);

        conteudoResultado.appendChild(titulo);
        conteudoResultado.appendChild(meta);
        conteudoResultado.appendChild(trecho);
        card.appendChild(numero);
        card.appendChild(conteudoResultado);

        card.addEventListener("click", (event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
            event.preventDefault();
            const abrirNaOcorrencia = !["titulo", "alias", "aproximacao"].includes(motivo.tipo);
            abrirArtigo(artigo.titulo, artigo.conteudo, true, abrirNaOcorrencia ? termos : []);
        });

        lista.appendChild(card);
    });

    containerResultados.appendChild(lista);
}

function atualizarIndiceDaNavbar(categoria = "") {
    const linkIndice = document.getElementById("nav-link-pastas");
    if (!linkIndice) return;

    if (categoria) {
        linkIndice.href = rotaDoPerfil(categoria);
        linkIndice.dataset.perfil = categoria;
        linkIndice.setAttribute("aria-label", `Abrir o índice de ${tituloDoIndice(categoria)}`);
        return;
    }

    linkIndice.href = "#pastas-container";
    delete linkIndice.dataset.perfil;
    linkIndice.setAttribute("aria-label", "Abrir o índice geral do guia");
}

function criarLinkDeAcaoDoPerfil(artigo, numero) {
    const acao = document.createElement("a");
    const titulo = tituloDaAcao(artigo.titulo);
    const descricao = artigo.metadados?.descricaoLista || "";

    acao.className = "perfil-acao";
    acao.href = `#/${rotaDoArtigo(artigo).split("/").map(encodeURIComponent).join("/")}`;
    acao.setAttribute("aria-label", descricao ? `${titulo}. ${descricao}` : titulo);
    acao.innerHTML = `<span class="perfil-acao-numero">${String(numero).padStart(2, "0")}</span><span class="perfil-acao-conteudo"><strong>${escaparHtml(titulo)}</strong>${descricao ? `<small>${escaparHtml(descricao)}</small>` : ""}</span>`;
    acao.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
        event.preventDefault();
        abrirArtigo(artigo.titulo, artigo.conteudo);
    });
    return acao;
}

function adicionarGrupoAoPerfil(titulo, artigos) {
    if (!artigos.length) return;

    const grupo = document.createElement("section");
    grupo.className = "perfil-grupo";

    const cabecalho = document.createElement("h3");
    cabecalho.className = "perfil-grupo-titulo";
    cabecalho.textContent = titulo;

    const lista = document.createElement("div");
    lista.className = "perfil-grupo-lista";
    artigos.forEach((artigo, indice) => {
        lista.appendChild(criarLinkDeAcaoDoPerfil(artigo, indice + 1));
    });

    grupo.append(cabecalho, lista);
    perfilAcoes.appendChild(grupo);
}

function abrirPerfil(categoria, atualizarRota = true) {
    const informacao = informacoesCategorias[categoria];
    const perfil = perfilDaCategoria(categoria);
    const artigosDaCategoria = todasAsPastas[categoria] || [];
    if (!informacao || (!perfil && artigosDaCategoria.length === 0)) return;

    atualizarIndiceDaNavbar("");

    if (window.GUIA_MOSTRAR_TRANSICAO) {
        window.GUIA_MOSTRAR_TRANSICAO("Abrindo perfil");
    }

    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.add("escondido");
    document.getElementById("pastas-container")?.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-perfis")?.classList.add("escondido");
    artigoAtual = null;

    if (atualizarRota && window.location.hash !== rotaDoPerfil(categoria)) {
        history.pushState({ perfil: categoria }, "", rotaDoPerfil(categoria));
    }

    const breadcrumbs = document.getElementById("perfil-breadcrumbs");
    breadcrumbs.innerHTML = "";
    const inicio = document.createElement("button");
    inicio.type = "button";
    inicio.className = "breadcrumb-link";
    inicio.textContent = "início";
    inicio.addEventListener("click", () => voltarParaHome(true));
    const separador = document.createElement("span");
    separador.className = "breadcrumb-separator";
    separador.textContent = "/";
    const atual = document.createElement("span");
    atual.textContent = categoria;
    breadcrumbs.append(inicio, separador, atual);

    perfilCabecalho.className = `perfil-cabecalho ${classeDoPerfil(categoria)}`;
    perfilCabecalho.innerHTML = `<div><p class="perfil-rotulo">${categoria.startsWith("Sou ") ? "sou..." : "guia do portal ifmg"}</p><h2>${tituloDoIndice(categoria)}</h2><p>${informacao.descricao}</p></div>`;
    perfilAcoes.className = `perfil-acoes ${classeDoPerfil(categoria)}`;
    perfilAcoes.innerHTML = "";

    if (!perfil) {
        adicionarGrupoAoPerfil("orientações", artigosDaCategoria.filter(artigo => artigo.metadados?.estado !== "absorver"));
        leitorDePerfil.classList.remove("escondido");
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.GUIA_FINALIZAR_TRANSICAO) {
            window.GUIA_FINALIZAR_TRANSICAO();
        }
        return;
    }

    const visaoDoPapel = todosOsArtigos
        .filter(artigo => artigo.metadados?.tipo === "visao" && artigo.metadados?.perfilMinimo === perfil)
        .sort(compararArtigosPorArquivo);
    adicionarGrupoAoPerfil("sobre este perfil", visaoDoPapel);

    ["editor", "moderador", "administrador"]
        .filter(perfilMinimo => perfilPodeExecutar(perfil, perfilMinimo))
        .forEach(perfilMinimo => {
            const tarefas = todosOsArtigos
                .filter(artigo => artigo.metadados?.estado !== "absorver")
                .filter(artigo => artigo.metadados?.tipo === "tarefa")
                .filter(artigo => artigo.metadados?.perfilMinimo === perfilMinimo)
                .sort(compararArtigosPorArquivo);

            adicionarGrupoAoPerfil(`tarefas de ${perfilMinimo}`, tarefas);
        });

    leitorDePerfil.classList.remove("escondido");
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.GUIA_FINALIZAR_TRANSICAO) {
        window.GUIA_FINALIZAR_TRANSICAO();
    }
}

function encontrarAlvoDaBuscaNoArtigo(termos) {
    if (!termos?.length) return null;

    const secoes = Array.from(artigoCorpo.querySelectorAll("h2"));
    for (const secao of secoes) {
        let textoDaSecao = secao.textContent || "";
        for (let no = secao.nextElementSibling; no && no.tagName !== "H2"; no = no.nextElementSibling) {
            textoDaSecao += ` ${no.textContent || ""}`;
        }
        if (contemTodosOsTermos(textoDaSecao, termos)) return secao;
    }

    return Array.from(artigoCorpo.querySelectorAll("p, li, blockquote, td"))
        .find(elemento => contemTodosOsTermos(elemento.textContent, termos)) || null;
}

function abrirArtigo(titulo, conteudoMarkdown, atualizarRota = true, termosBusca = []) {
    if (window.GUIA_MOSTRAR_TRANSICAO) {
        window.GUIA_MOSTRAR_TRANSICAO("Abrindo artigo");
    }

    divResultados.classList.add("escondido");
    leitorDePerfil.classList.add("escondido");
    const pastasContainer = document.getElementById("pastas-container");
    if (pastasContainer) pastasContainer.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-perfis")?.classList.add("escondido");

    artigoAtual = todosOsArtigos.find(artigo =>
        artigo.titulo === titulo && artigo.conteudo === conteudoMarkdown
    ) || todosOsArtigos.find(artigo => artigo.titulo === titulo) || null;
    artigoTitulo.textContent = tituloDaAcao(artigoAtual?.titulo || titulo);
    atualizarIndiceDaNavbar(artigoAtual?.categoria || "");

    if (artigoAtual && atualizarRota) {
        const hash = `#/${rotaDoArtigo(artigoAtual).split("/").map(encodeURIComponent).join("/")}`;
        if (window.location.hash !== hash) {
            history.pushState({ rota: rotaDoArtigo(artigoAtual) }, "", hash);
        }
    }

    if (artigoAtual) {
        renderizarBreadcrumbs(artigoAtual);
        renderizarNavegacaoSequencial(artigoAtual);
        renderizarContextoDoArtigo(artigoAtual);
        btnVoltar.textContent = `← ver outras ações em ${artigoAtual.categoria.toLowerCase()}`;
        btnVoltar.setAttribute("aria-label", `Voltar para as ações de ${artigoAtual.categoria}`);
        if (retornoArtigoTexto) retornoArtigoTexto.innerHTML = `Terminou este procedimento? <strong>Continue pelas outras ações de ${artigoAtual.categoria}.</strong>`;
    } else {
        btnVoltar.textContent = "← voltar para o guia";
        btnVoltar.setAttribute("aria-label", "Voltar para o guia");
        if (retornoArtigoTexto) retornoArtigoTexto.textContent = "Quer continuar no guia?";
    }
    
    // Filtra e remove o bloco de metadados/atributos (YAML Frontmatter --- ... ---)
    const markdownLimpo = removerFrontmatter(conteudoMarkdown);

    // O Obsidian usa ![[caminho|descrição]] para anexos locais. No site, a
    // mesma imagem é carregada da cópia versionada no GitHub antes de o
    // Markdown ser convertido para HTML.
    const markdownComImagens = converterImagensObsidian(markdownLimpo);

    // Converte a sintaxe de highlight do Obsidian ==texto== para <mark class="obsidian-highlight">texto</mark>
    const markdownComHighlight = markdownComImagens.replace(/==([^=]+)==/g, '<mark class="obsidian-highlight">$1</mark>');

    // Converte Markdown para HTML com marked
    if (typeof marked !== 'undefined') {
        artigoCorpo.innerHTML = marked.parse(markdownComHighlight);
    } else {
        artigoCorpo.innerText = markdownComHighlight;
    }

    removerTituloInicialDuplicado();

    // Processa callouts / caixas de aviso do Obsidian ([!IMPORTANT], [!NOTE], [!TIP], etc.)
    processarCalloutsObsidian();

    // Processa os links do Obsidian [[Nome do Artigo]] depois dos callouts,
    // para manter links clicáveis também dentro de caixas de aviso.
    processarLinksObsidian();
    aprimorarImagensDoArtigo();
    aprimorarBlocosDePrompt();
    window.GuiaGrafoPortal?.renderizarSePresente(artigoCorpo);

    // Formata itens de lista de tarefas (Checkboxes / Study Roadmap)
    artigoCorpo.querySelectorAll('li input[type="checkbox"]').forEach(checkbox => {
        checkbox.disabled = false;
        const li = checkbox.parentElement;
        if (li) {
            li.classList.add('task-list-item');
            const textNodes = Array.from(li.childNodes).filter(node => node !== checkbox);
            const wrapper = document.createElement('span');
            wrapper.className = 'task-item-content';
            textNodes.forEach(node => wrapper.appendChild(node));
            li.appendChild(wrapper);
            li.addEventListener('click', (event) => {
                if (event.target === checkbox || event.target.closest('a, button, input')) return;
                checkbox.click();
            });
        }
    });

    // Processa blocos Mermaid se houver
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            fontFamily: 'Archivo, sans-serif',
            themeVariables: {
                fontFamily: 'Archivo, sans-serif',
                darkMode: true,
                background: '#0d0d0d',
                primaryColor: '#007aff',
                primaryTextColor: '#ffffff',
                primaryBorderColor: '#007aff',
                lineColor: '#007aff',
                secondaryColor: '#1a1a1a',
                tertiaryColor: '#222222'
            }
        });
        const blocosMermaid = artigoCorpo.querySelectorAll('pre code.language-mermaid, pre.language-mermaid');
        blocosMermaid.forEach((bloco, idx) => {
            const containerPre = bloco.tagName.toLowerCase() === 'pre' ? bloco : bloco.parentElement;
            const codigoMermaid = bloco.textContent;
            const divMermaid = document.createElement('div');
            divMermaid.className = 'mermaid';
            divMermaid.textContent = codigoMermaid;
            containerPre.replaceWith(divMermaid);
        });
        setTimeout(() => {
            try {
                mermaid.run({ nodes: artigoCorpo.querySelectorAll('.mermaid') });
            } catch (err) {
                console.error("Erro ao renderizar Mermaid:", err);
            }
        }, 50);
    }

    gerarTableOfContents();
    leitorDeArtigo.classList.remove("escondido");
    const alvoDaBusca = encontrarAlvoDaBuscaNoArtigo(termosBusca);
    if (alvoDaBusca) {
        window.setTimeout(() => alvoDaBusca.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (window.GUIA_FINALIZAR_TRANSICAO) {
        window.GUIA_FINALIZAR_TRANSICAO();
    }
}

function renderizarContextoDoArtigo(artigo) {
    const contexto = document.getElementById("artigo-contexto");
    if (!contexto) return;

    const informacao = informacoesCategorias[artigo.categoria] || informacoesCategorias.Fundamentos;
    const perfilMinimo = artigo.metadados?.perfilMinimo;
    const tarefaOperacional = artigo.metadados?.tipo === "tarefa"
        && ["editor", "moderador", "administrador"].includes(perfilMinimo);

    if (tarefaOperacional) {
        contexto.innerHTML = `<span class="contexto-icone">${iconeNeutro(informacao.icone)}</span><p><strong>Perfil mínimo: ${perfilMinimo}</strong><span>Para realizar esta tarefa, seu acesso ao Wagtail precisa estar configurado, no mínimo, como ${perfilMinimo}.</span></p>`;
        return;
    }

    contexto.innerHTML = `<span class="contexto-icone">${iconeNeutro(informacao.icone)}</span><p><strong>${artigo.categoria}</strong><span>${informacao.descricao}</span></p>`;
}

function aprimorarImagensDoArtigo() {
    artigoCorpo.querySelectorAll("img").forEach((imagem) => {
        if (imagem.closest("figure")) return;
        const figura = document.createElement("figure");
        figura.className = "imagem-contextual";
        const legenda = imagem.alt && !/\.(png|jpe?g|gif|webp)$/i.test(imagem.alt) ? imagem.alt : "Clique para ampliar a imagem.";
        const paragrafo = imagem.parentElement?.tagName === "P" ? imagem.parentElement : null;
        imagem.addEventListener("click", () => abrirImagemAmpliada(imagem));
        imagem.setAttribute("role", "button");
        imagem.setAttribute("tabindex", "0");
        imagem.setAttribute("aria-label", `Ampliar imagem: ${legenda}`);
        imagem.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                abrirImagemAmpliada(imagem);
            }
        });
        if (paragrafo) {
            paragrafo.replaceWith(figura);
        } else {
            imagem.replaceWith(figura);
        }
        figura.appendChild(imagem);
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = legenda;
        figura.appendChild(figcaption);
    });
}

function aprimorarBlocosDePrompt() {
    artigoCorpo.querySelectorAll("pre code.language-prompt").forEach((codigo) => {
        const pre = codigo.parentElement;
        if (!pre || pre.classList.contains("prompt-copiavel")) return;

        pre.classList.add("prompt-copiavel");

        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "botao-copiar-prompt";
        botao.textContent = "Copiar prompt";
        botao.setAttribute("aria-label", "Copiar prompt para a área de transferência");

        botao.addEventListener("click", async () => {
            const texto = codigo.textContent.trim();
            try {
                await navigator.clipboard.writeText(texto);
                botao.textContent = "Prompt copiado";
                botao.classList.add("copiado");
                setTimeout(() => {
                    botao.textContent = "Copiar prompt";
                    botao.classList.remove("copiado");
                }, 2200);
            } catch (erro) {
                botao.textContent = "Não foi possível copiar";
                setTimeout(() => {
                    botao.textContent = "Copiar prompt";
                }, 2200);
            }
        });

        pre.insertBefore(botao, codigo);
    });
}

function abrirImagemAmpliada(imagem) {
    const modal = document.createElement("div");
    modal.className = "imagem-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Imagem ampliada");
    modal.innerHTML = `<button type="button" class="imagem-modal-fechar" aria-label="Fechar imagem ampliada">×</button><img src="${imagem.src}" alt="${imagem.alt}">`;
    const fechar = () => modal.remove();
    modal.addEventListener("click", (event) => { if (event.target === modal) fechar(); });
    modal.querySelector("button").addEventListener("click", fechar);
    document.addEventListener("keydown", function fecharComEsc(event) {
        if (event.key !== "Escape") return;
        fechar();
        document.removeEventListener("keydown", fecharComEsc);
    });
    document.body.appendChild(modal);
    modal.querySelector("button").focus();
}

function renderizarBreadcrumbs(artigo) {
    const breadcrumbs = document.getElementById("artigo-breadcrumbs");
    if (!breadcrumbs) return;

    breadcrumbs.innerHTML = "";

    const criarBotao = (texto, acao) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "breadcrumb-link";
        botao.textContent = texto;
        botao.addEventListener("click", acao);
        return botao;
    };

    breadcrumbs.appendChild(criarBotao("início", () => voltarParaHome(true)));

    const separador = document.createElement("span");
    separador.className = "breadcrumb-separator";
    separador.textContent = "/";
    breadcrumbs.appendChild(separador);

    breadcrumbs.appendChild(criarBotao(artigo.categoria, () => {
        abrirPerfil(artigo.categoria);
    }));
}

function criarCartaoDeNavegacao(artigo, direcao) {
    const cartao = document.createElement("a");
    cartao.className = `nav-card nav-card-${direcao}`;
    cartao.href = `#/${rotaDoArtigo(artigo).split("/").map(encodeURIComponent).join("/")}`;

    const rotulo = document.createElement("span");
    rotulo.className = "nav-card-label";
    rotulo.textContent = direcao === "anterior" ? "← artigo anterior" : "próximo artigo →";

    const titulo = document.createElement("span");
    titulo.className = "nav-card-title";
    titulo.textContent = tituloDaAcao(artigo.titulo);

    cartao.append(rotulo, titulo);
    cartao.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
        event.preventDefault();
        abrirArtigo(artigo.titulo, artigo.conteudo);
    });
    return cartao;
}

function renderizarNavegacaoSequencial(artigo) {
    const navegacao = document.getElementById("artigo-nav-rodape");
    if (!navegacao) return;

    navegacao.innerHTML = "";
    const artigosDaCategoria = (todasAsPastas[artigo.categoria] || [])
        .filter(item => item.metadados?.estado !== "absorver");
    const indice = artigosDaCategoria.findIndex(item => item.sourcePath === artigo.sourcePath);
    const anterior = indice > 0 ? artigosDaCategoria[indice - 1] : null;
    const proximo = indice >= 0 && indice < artigosDaCategoria.length - 1
        ? artigosDaCategoria[indice + 1]
        : null;

    if (!anterior && !proximo) return;

    const grade = document.createElement("div");
    grade.className = "artigo-nav-cards-grid";
    if (anterior) grade.appendChild(criarCartaoDeNavegacao(anterior, "anterior"));
    else grade.appendChild(document.createElement("span"));
    if (proximo) grade.appendChild(criarCartaoDeNavegacao(proximo, "proximo"));
    navegacao.appendChild(grade);
}

function abrirPastaPorNome(nomeCategoria) {
    document.querySelectorAll(".pasta-item").forEach(item => {
        const nome = item.querySelector(".pasta-nome");
        if (nome?.textContent.trim() === nomeCategoria) {
            item.classList.add("aberta");
            item.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            item.classList.remove("aberta");
        }
    });
}

let scrollSpyObserver = null;

function gerarTableOfContents() {
    const tocNav = document.getElementById("toc-nav");
    const tocSidebar = document.getElementById("artigo-toc-sidebar");
    if (!tocNav || !tocSidebar) return;

    tocNav.innerHTML = "";
    const headings = Array.from(artigoCorpo.querySelectorAll("h2"));

    if (headings.length === 0) {
        tocSidebar.hidden = true;
        return;
    }

    tocSidebar.hidden = false;
    const lista = document.createElement("ul");
    lista.className = "toc-list";
    const idsUsados = new Set();

    headings.forEach((heading, index) => {
        const baseId = heading.textContent
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-") || `secao-${index + 1}`;
        let id = heading.id || baseId;
        let sufixo = 2;
        while (idsUsados.has(id)) {
            id = `${baseId}-${sufixo++}`;
        }
        idsUsados.add(id);
        heading.id = id;

        const item = document.createElement("li");
        item.className = "toc-item";
        const link = document.createElement("a");
        link.href = rotaComSecao(artigoAtual, id);
        link.textContent = heading.textContent.trim();
        link.dataset.headingId = id;
        link.addEventListener("click", (event) => {
            event.preventDefault();
            history.pushState({ rota: rotaDoArtigo(artigoAtual), secao: id }, "", rotaComSecao(artigoAtual, id));
            const navegacao = document.getElementById("sticky-nav");
            const deslocamento = (navegacao ? navegacao.offsetHeight : 0) + 20;
            const posicao = heading.getBoundingClientRect().top + window.scrollY - deslocamento;
            window.scrollTo({ top: posicao, behavior: "smooth" });
        });
        item.appendChild(link);
        lista.appendChild(item);
    });

    tocNav.appendChild(lista);
    configurarFiltroDoSumario(lista, headings.length);
    iniciarScrollSpy(headings);
}

function configurarFiltroDoSumario(lista, totalDeSecoes) {
    const container = document.getElementById("toc-filter-container");
    const campo = document.getElementById("toc-filter-input");
    if (!container || !campo) return;
    container.hidden = totalDeSecoes < 4;
    campo.value = "";
    campo.oninput = () => {
        const termo = campo.value.trim().toLocaleLowerCase("pt-BR");
        lista.querySelectorAll(".toc-item").forEach((item) => {
            item.hidden = Boolean(termo) && !item.textContent.toLocaleLowerCase("pt-BR").includes(termo);
        });
    };
}

function iniciarScrollSpy(headings) {
    if (scrollSpyObserver) scrollSpyObserver.disconnect();

    scrollSpyObserver = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            document.querySelectorAll(".toc-nav a").forEach((link) => {
                link.classList.toggle("toc-active", link.dataset.headingId === entrada.target.id);
            });
        });
    }, { rootMargin: "-80px 0px -70% 0px", threshold: 0.1 });

    headings.forEach((heading) => scrollSpyObserver.observe(heading));
}

function converterImagensObsidian(markdown) {
    const repositorioRaw = "https://raw.githubusercontent.com/leorruas/guiaportalifmg/main/";
    const regexEmbed = /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

    return markdown.replace(regexEmbed, (match, caminho, descricao) => {
        const caminhoNormalizado = caminho.trim().replace(/\\/g, "/");
        if (!caminhoNormalizado.startsWith("imagens/")) return match;

        const textoAlternativo = (descricao || caminhoNormalizado.split("/").pop()).trim();
        return `![${textoAlternativo}](${encodeURI(repositorioRaw + caminhoNormalizado)})`;
    });
}

function processarLinksObsidian() {
    const htmlAtual = artigoCorpo.innerHTML;
    // Regex para substituir [[Caminho/Artigo|Texto]] ou [[Artigo]]
    const regexObsidian = /\[\[(?:([^\]\|]+)\|)?([^\]]+)\]\]/g;

    artigoCorpo.innerHTML = htmlAtual.replace(regexObsidian, (match, caminho, textoExibicao) => {
        const destino = caminho || textoExibicao;
        const rotulo = textoExibicao || destino;
        const resolvido = resolverLinkObsidian(destino);
        if (!resolvido) {
            return `<span class="obsidian-link-indisponivel" title="Destino não encontrado no guia">${escaparHtml(rotulo)}</span>`;
        }

        return `<a href="${escaparHtml(resolvido.href)}" class="obsidian-link" data-destino="${escaparHtml(destino)}">${escaparHtml(rotulo)}</a>`;
    });
}

function processarCalloutsObsidian() {
    const blockquotes = artigoCorpo.querySelectorAll('blockquote');
    blockquotes.forEach(bq => {
        const conteudo = bq.innerHTML;
        // Um título customizado só pode estar na mesma linha do marcador.
        // Assim, o texto do aviso não é promovido indevidamente a título.
        const match = conteudo.match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]+([^\n<]+))?/i);
        if (match) {
            const tipo = match[1].toUpperCase();
            const tituloCustomizado = match[2] ? match[2].trim() : '';
            
            // Remove a tag [!TIPO] e o título do conteúdo do parágrafo
            let htmlLimpo = conteudo.replace(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]+[^\n<]+)?/i, '');
            
            // Remove parágrafos vazios gerados na conversão
            htmlLimpo = htmlLimpo.replace(/<p>\s*<\/p>/g, '');

            const rotulos = {
                'NOTE': 'NOTA',
                'TIP': 'DICA',
                'IMPORTANT': 'IMPORTANTE',
                'WARNING': 'AVISO',
                'CAUTION': 'ATENÇÃO'
            };

            const tituloExibicao = tituloCustomizado || rotulos[tipo] || tipo;

            const divCallout = document.createElement('div');
            divCallout.className = `obsidian-callout callout-${tipo.toLowerCase()}`;

            divCallout.innerHTML = `
                <div class="callout-header">
                    <span class="callout-title">${tituloExibicao}</span>
                </div>
                <div class="callout-content">
                    ${htmlLimpo}
                </div>
            `;

            bq.replaceWith(divCallout);
        }
    });
}

function navegarParaLinkObsidian(nomeOuCaminho) {
    const resolvido = resolverLinkObsidian(nomeOuCaminho);
    if (!resolvido) {
        console.warn("Artigo não encontrado para o link Obsidian:", nomeOuCaminho);
        return;
    }

    window.location.hash = resolvido.href.slice(1);
}

function tratarRotaDaUrl() {
    const hash = window.location.hash;
    if (!hash || hash === "#" || hash === "#/") {
        if (!leitorDeArtigo.classList.contains("escondido")) voltarParaHome(false);
        return;
    }

    const [rotaCodificada, secaoCodificada] = hash.replace(/^#\/?/, "").split("#");
    const rota = decodeURIComponent(rotaCodificada).replace(/\.md$/i, "");
    if (rota.startsWith("perfil/")) {
        abrirPerfil(rota.slice("perfil/".length), false);
        return;
    }
    const artigo = todosOsArtigos.find(item => rotaDoArtigo(item) === rota);
    if (artigo) {
        abrirArtigo(artigo.titulo, artigo.conteudo, false);
        if (secaoCodificada) {
            const secao = decodeURIComponent(secaoCodificada);
            window.setTimeout(() => document.getElementById(secao)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
        }
    }
}

function renderizarPastas() {
    const pastasContainer = document.getElementById("pastas-container");
    const orientacoesContainer = document.getElementById("orientacoes-container");
    if (!pastasContainer || !orientacoesContainer) return;

    pastasContainer.innerHTML = "";
    orientacoesContainer.innerHTML = "";
    const categoriasOrdenadas = ordenarCategorias(Object.keys(todasAsPastas));
    const categoriasDeOrientacao = ["Comece aqui", "Fundamentos"];
    const numerosDoIndice = {
        "Comece aqui": "01",
        "Fundamentos": "02",
        "Sou administrador": "03",
        "Sou moderador": "04",
        "Sou editor": "05",
        "Sou gestor": "06"
    };
    categoriasOrdenadas.forEach(categoria => {
        const perfil = document.createElement("a");
        perfil.className = `perfil-card ${classeDoPerfil(categoria)}`;
        perfil.href = rotaDoPerfil(categoria);
        const resumo = resumosDoIndice[categoria] ? `<span class="indice-resumo">${resumosDoIndice[categoria]}</span>` : "";
        perfil.innerHTML = `<span class="indice-numero">${numerosDoIndice[categoria] || "•"}</span><span class="perfil-card-conteudo"><strong>${tituloDoIndice(categoria)}</strong>${resumo}</span>`;
        perfil.addEventListener("click", (event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
            event.preventDefault();
            abrirPerfil(categoria);
        });
        (categoriasDeOrientacao.includes(categoria) ? orientacoesContainer : pastasContainer).appendChild(perfil);
    });
}

// Event Listeners para buscas
function executarBuscaGlobal(termo, campoDeOrigem) {
    [campoTexto, campoTextoNav].forEach(campo => {
        if (campo && campo !== campoDeOrigem) campo.value = termo;
    });
    filtrarArtigos(termo);
}

function limparBuscaGlobal() {
    [campoTexto, campoTextoNav].forEach(campo => {
        if (campo) campo.value = "";
    });
    resultadosDaBuscaAtual = [];
    filtroDePerfilAtivo = "";
    filtrarArtigos("");
}

if (campoTexto) {
    campoTexto.addEventListener("input", (e) => {
        executarBuscaGlobal(e.target.value, e.currentTarget);
    });
}

if (campoTextoNav) {
    campoTextoNav.addEventListener("input", (e) => {
        executarBuscaGlobal(e.target.value, e.currentTarget);
    });
}

if (btnPesquisar) {
    btnPesquisar.addEventListener("click", () => {
        if (campoTexto) filtrarArtigos(campoTexto.value);
    });
}

document.addEventListener("keydown", (event) => {
    const comandoDeBusca = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (comandoDeBusca) {
        event.preventDefault();
        const campoVisivel = campoTextoNav?.offsetParent !== null ? campoTextoNav : campoTexto;
        campoVisivel?.focus();
        campoVisivel?.select();
        return;
    }

    if (event.key === "Escape" && [campoTexto, campoTextoNav].includes(document.activeElement)) {
        limparBuscaGlobal();
        document.activeElement?.blur();
    }
});

if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
        if (artigoAtual?.categoria) abrirPerfil(artigoAtual.categoria);
        else voltarParaHome();
    });
}

if (btnVoltarPerfil) {
    btnVoltarPerfil.addEventListener("click", () => voltarParaHome(true));
}

if (btnTema) {
    btnTema.addEventListener("click", () => {
        aplicarTema(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
}

// Configuração do Sticky Navbar baseada no scroll
const headerEl = document.querySelector("header");
const stickyNav = document.getElementById("sticky-nav");

window.addEventListener("scroll", () => {
    if (!headerEl || !stickyNav) return;
    const headerHeight = headerEl.offsetHeight;
    if (window.scrollY > headerHeight) {
        stickyNav.classList.add("visible");
    } else {
        stickyNav.classList.remove("visible");
    }
});

function voltarParaHome(atualizarRota = true) {
    atualizarIndiceDaNavbar("");

    if (window.GUIA_MOSTRAR_TRANSICAO) {
        window.GUIA_MOSTRAR_TRANSICAO("Abrindo início");
    }

    leitorDeArtigo.classList.add("escondido");
    leitorDePerfil.classList.add("escondido");
    divResultados.classList.remove("escondido");
    const pastasContainer = document.getElementById("pastas-container");
    if (pastasContainer) {
        pastasContainer.classList.remove("escondido");
    }
    document.getElementById("orientacoes-iniciais")?.classList.remove("escondido");
    document.getElementById("explorar-perfis")?.classList.remove("escondido");
    if (campoTexto) campoTexto.value = "";
    if (campoTextoNav) campoTextoNav.value = "";
    containerResultados.innerHTML = "";
    artigoAtual = null;
    if (atualizarRota && window.location.hash) {
        history.pushState({}, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.GUIA_FINALIZAR_TRANSICAO) {
        window.GUIA_FINALIZAR_TRANSICAO();
    }
}

const navLogo = document.getElementById("nav-logo");
if (navLogo) {
    navLogo.addEventListener("click", voltarParaHome);
}

const mainTitle = document.querySelector("header h1");
if (mainTitle) {
    mainTitle.addEventListener("click", voltarParaHome);
}

const navLinkPastas = document.getElementById("nav-link-pastas");
if (navLinkPastas) {
    navLinkPastas.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();

        const perfilContextual = navLinkPastas.dataset.perfil;
        if (perfilContextual) {
            abrirPerfil(perfilContextual);
            return;
        }

        voltarParaHome(true);
        const pastasContainer = document.getElementById("pastas-container");
        if (pastasContainer) {
            pastasContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

window.addEventListener("popstate", tratarRotaDaUrl);
window.addEventListener("hashchange", tratarRotaDaUrl);

// Inicializar na carga da página
inicializarTema();
carregarTodosOsArtigos()
    .catch((erro) => {
        console.error("Erro ao carregar o conteúdo inicial:", erro);
        const pastasContainer = document.getElementById("pastas-container");
        if (pastasContainer) {
            pastasContainer.innerHTML = '<p class="mensagem-busca">Não foi possível carregar o índice do guia. Recarregue a página em alguns instantes.</p>';
        }
    })
    .finally(() => {
        if (window.GUIA_FINALIZAR_CARREGAMENTO) {
            window.GUIA_FINALIZAR_CARREGAMENTO();
        }
    });
