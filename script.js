// Função para buscar automaticamente todos os arquivos .md do seu GitHub (sem precisar de token)
async function obterListaDeArquivos() {
    try {
        const resposta = await fetch("https://api.github.com/repos/leorruas/guiaportalifmg/git/trees/main?recursive=1");
        if (!resposta.ok) throw new Error("Erro na API do GitHub");

        const dados = await resposta.json();

        // Filtra apenas os arquivos Markdown (.md), ignorando pastas internas do Obsidian/Git/Agents
        return dados.tree
            .filter(item => item.path.endsWith(".md") && item.path.includes("guia-do-portal/") && !item.path.includes(".obsidian") && !item.path.includes(".git") && !item.path.includes(".gemini") && !item.path.includes(".agents") && item.path !== "me.md" && item.path !== "log.md")
            .map(item => {
                const nomeSemExtensao = item.path.split("/").pop().replace(".md", "");
                const partes = item.path.split("/");
                const indiceGuia = partes.indexOf("guia-do-portal");
                return {
                    titulo: nomeSemExtensao,
                    path: encodeURI(`https://raw.githubusercontent.com/leorruas/guiaportalifmg/main/${item.path}`),
                    sourcePath: item.path,
                    categoria: indiceGuia >= 0 ? partes[indiceGuia + 1].replace(/^\d+\s*-\s*/, "") : ""
                };
            });
    } catch (erro) {
        console.warn("Não foi possível carregar o índice do guia:", erro);
        return [];
    }
}

// Variáveis globais
let todosOsArtigos = [];
let todasAsPastas = {};

const campoTexto = document.getElementById("main-search-input");
const campoTextoNav = document.getElementById("nav-search-input");
const btnPesquisar = document.querySelector("main button");
const containerResultados = document.querySelector(".cards-container");
const divResultados = document.querySelector(".resultados");
const leitorDeArtigo = document.getElementById("leitor-artigo");
const artigoTitulo = document.getElementById("artigo-titulo");
const artigoCorpo = document.getElementById("artigo-corpo");
const btnVoltar = document.getElementById("btn-voltar");

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

            return {
                titulo: item.titulo,
                path: item.path,
                sourcePath: item.sourcePath,
                categoria: categoria,
                conteudo: texto
            };
        } catch (e) {
            console.error(`Erro ao carregar ${item.path}:`, e);
            return null;
        }
    });

    const resultados = await Promise.all(promessas);
    todosOsArtigos = resultados.filter(artigo => artigo !== null);

    // Organiza artigos em estrutura de pasta para o accordion
    todasAsPastas = {};
    todosOsArtigos.forEach(artigo => {
        if (!todasAsPastas[artigo.categoria]) {
            todasAsPastas[artigo.categoria] = [];
        }
        todasAsPastas[artigo.categoria].push(artigo);
    });

    // Renderiza a estrutura de pastas na página inicial
    renderizarPastas();
}

function filtrarArtigos(termoBusca) {
    if (!termoBusca || termoBusca.trim() === "") {
        containerResultados.innerHTML = "";
        const pastasContainer = document.getElementById("pastas-container");
        if (pastasContainer) pastasContainer.classList.remove("escondido");
        return;
    }

    const termo = termoBusca.toLowerCase().trim();
    
    // Oculta container de pastas ao fazer busca
    const pastasContainer = document.getElementById("pastas-container");
    if (pastasContainer) pastasContainer.classList.add("escondido");

    const filtrados = todosOsArtigos.filter(artigo => {
        const tituloMatch = artigo.titulo.toLowerCase().includes(termo);
        const conteudoMatch = artigo.conteudo.toLowerCase().includes(termo);
        return tituloMatch || conteudoMatch;
    });

    exibirResultados(filtrados, termo);
}

function destacarTexto(texto, termo) {
    if (!termo) return texto;
    const regex = new RegExp(`(${termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return texto.replace(regex, '<mark class="highlight">$1</mark>');
}

function removerFrontmatter(markdown) {
    if (!markdown) return "";
    // Remove cabeçalho YAML entre --- e --- no início do arquivo
    return markdown.replace(/^---[\s\S]*?---\s*/, "");
}

function extrairTrechoRelevante(conteudo, termo) {
    const conteudoSemFrontmatter = removerFrontmatter(conteudo);
    const textoLimpo = conteudoSemFrontmatter.replace(/==/g, '').replace(/[#*`_~\[\]]/g, ' ');
    const pos = textoLimpo.toLowerCase().indexOf(termo.toLowerCase());
    
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
        containerResultados.innerHTML = "<p class='sem-resultados'>Nenhum resultado encontrado.</p>";
        return;
    }

    // Agrupa resultados por categoria (pasta)
    const grupos = {};
    artigos.forEach(artigo => {
        if (!grupos[artigo.categoria]) grupos[artigo.categoria] = [];
        grupos[artigo.categoria].push(artigo);
    });

    Object.keys(grupos).sort().forEach(categoria => {
        const grupoDiv = document.createElement("div");
        grupoDiv.className = "busca-grupo-assunto";

        const tituloGrupo = document.createElement("h3");
        tituloGrupo.className = "busca-assunto-titulo";
        tituloGrupo.textContent = categoria;
        grupoDiv.appendChild(tituloGrupo);

        const subCardsContainer = document.createElement("div");
        subCardsContainer.className = "cards-container";

        grupos[categoria].forEach(artigo => {
            const card = document.createElement("div");
            card.className = "card";

            const tag = document.createElement("span");
            tag.className = "card-tag";
            tag.textContent = artigo.categoria;

            const h2 = document.createElement("h2");
            h2.innerHTML = destacarTexto(artigo.titulo, termo);

            const p = document.createElement("p");
            p.className = "conteudo";
            const trecho = extrairTrechoRelevante(artigo.conteudo, termo);
            p.innerHTML = destacarTexto(trecho, termo);

            card.appendChild(tag);
            card.appendChild(h2);
            card.appendChild(p);

            card.addEventListener("click", () => {
                abrirArtigo(artigo.titulo, artigo.conteudo);
            });

            subCardsContainer.appendChild(card);
        });

        grupoDiv.appendChild(subCardsContainer);
        containerResultados.appendChild(grupoDiv);
    });
}

function abrirArtigo(titulo, conteudoMarkdown) {
    divResultados.classList.add("escondido");
    const pastasContainer = document.getElementById("pastas-container");
    if (pastasContainer) pastasContainer.classList.add("escondido");

    artigoTitulo.textContent = titulo;
    
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

    // Processa callouts / caixas de aviso do Obsidian ([!IMPORTANT], [!NOTE], [!TIP], etc.)
    processarCalloutsObsidian();

    // Processa os links do Obsidian [[Nome do Artigo]] depois dos callouts,
    // para manter links clicáveis também dentro de caixas de aviso.
    processarLinksObsidian();

    // Formata itens de lista de tarefas (Checkboxes / Study Roadmap)
    artigoCorpo.querySelectorAll('li input[type="checkbox"]').forEach(checkbox => {
        const li = checkbox.parentElement;
        if (li) {
            li.classList.add('task-list-item');
            const textNodes = Array.from(li.childNodes).filter(node => node !== checkbox);
            const wrapper = document.createElement('span');
            wrapper.className = 'task-item-content';
            textNodes.forEach(node => wrapper.appendChild(node));
            li.appendChild(wrapper);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        link.href = `#${id}`;
        link.textContent = heading.textContent.trim();
        link.dataset.headingId = id;
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const navegacao = document.getElementById("sticky-nav");
            const deslocamento = (navegacao ? navegacao.offsetHeight : 0) + 20;
            const posicao = heading.getBoundingClientRect().top + window.scrollY - deslocamento;
            window.scrollTo({ top: posicao, behavior: "smooth" });
        });
        item.appendChild(link);
        lista.appendChild(item);
    });

    tocNav.appendChild(lista);
    iniciarScrollSpy(headings);
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
        return `<a href="#" class="obsidian-link" data-destino="${destino}">${rotulo}</a>`;
    });

    // Adiciona evento de clique para os links obsidian internos
    artigoCorpo.querySelectorAll(".obsidian-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const destino = link.getAttribute("data-destino");
            navegarParaLinkObsidian(destino);
        });
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
    const normalizar = (str) => str.trim().toLowerCase().replace(/:/g, " -").replace(/\s+/g, " ");
    const limpo = normalizar(nomeOuCaminho);
    
    // Procura o artigo correspondente pelo título ou nome de arquivo
    const encontrado = todosOsArtigos.find(a => {
        const tituloMatch = normalizar(a.titulo) === limpo;
        const caminhoFonte = a.sourcePath || a.path;
        const nomeArquivo = normalizar(decodeURI(caminhoFonte).split("/").pop().replace(".md", ""));
        const caminhoSemExtensao = normalizar(decodeURI(caminhoFonte).replace("./", "").replace(/\.md$/, ""));
        return tituloMatch || nomeArquivo === limpo || caminhoSemExtensao === limpo;
    });

    if (encontrado) {
        abrirArtigo(encontrado.titulo, encontrado.conteudo);
    } else {
        console.warn("Artigo não encontrado para o link Obsidian:", nomeOuCaminho);
    }
}

function renderizarPastas() {
    const pastasContainer = document.getElementById("pastas-container");
    if (!pastasContainer) return;

    pastasContainer.innerHTML = "";

    const ordemCategorias = [
        "Comece aqui",
        "Sou administrador",
        "Sou moderador",
        "Sou editor",
        "Sou gestor",
        "Fundamentos"
    ];
    const categoriasOrdenadas = Object.keys(todasAsPastas).sort((a, b) => {
        const posicaoA = ordemCategorias.indexOf(a);
        const posicaoB = ordemCategorias.indexOf(b);
        const indiceA = posicaoA === -1 ? ordemCategorias.length : posicaoA;
        const indiceB = posicaoB === -1 ? ordemCategorias.length : posicaoB;
        return indiceA - indiceB || a.localeCompare(b, "pt-BR");
    });

    categoriasOrdenadas.forEach(categoria => {
        const pastaItem = document.createElement("div");
        pastaItem.className = "pasta-item";

        const header = document.createElement("div");
        header.className = "pasta-header";

        const nome = document.createElement("span");
        nome.className = "pasta-nome";
        nome.textContent = categoria;

        const icone = document.createElement("span");
        icone.className = "pasta-icone";
        icone.textContent = "+";

        header.appendChild(nome);
        header.appendChild(icone);

        const conteudo = document.createElement("div");
        conteudo.className = "pasta-conteudo";

        todasAsPastas[categoria].forEach(arquivo => {
            const linkArtigo = document.createElement("a");
            linkArtigo.className = "artigo-lista-link";
            linkArtigo.textContent = arquivo.titulo;
            
            linkArtigo.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();
                abrirArtigo(arquivo.titulo, arquivo.conteudo);
            });
            
            conteudo.appendChild(linkArtigo);
        });

        pastaItem.appendChild(header);
        pastaItem.appendChild(conteudo);

        header.addEventListener("click", () => {
            const jaAberta = pastaItem.classList.contains("aberta");
            
            document.querySelectorAll(".pasta-item").forEach(item => {
                item.classList.remove("aberta");
            });

            if (!jaAberta) {
                pastaItem.classList.add("aberta");
            }
        });

        pastasContainer.appendChild(pastaItem);
    });
}

// Event Listeners para buscas
if (campoTexto) {
    campoTexto.addEventListener("input", (e) => {
        filtrarArtigos(e.target.value);
    });
}

if (campoTextoNav) {
    campoTextoNav.addEventListener("input", (e) => {
        filtrarArtigos(e.target.value);
    });
}

if (btnPesquisar) {
    btnPesquisar.addEventListener("click", () => {
        if (campoTexto) filtrarArtigos(campoTexto.value);
    });
}

if (btnVoltar) {
    btnVoltar.addEventListener("click", voltarParaHome);
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

function voltarParaHome() {
    leitorDeArtigo.classList.add("escondido");
    divResultados.classList.remove("escondido");
    const pastasContainer = document.getElementById("pastas-container");
    if (pastasContainer) {
        pastasContainer.classList.remove("escondido");
    }
    if (campoTexto) campoTexto.value = "";
    if (campoTextoNav) campoTextoNav.value = "";
    containerResultados.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        e.preventDefault();
        leitorDeArtigo.classList.add("escondido");
        divResultados.classList.remove("escondido");
        const pastasContainer = document.getElementById("pastas-container");
        if (pastasContainer) {
            pastasContainer.classList.remove("escondido");
            pastasContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

// Inicializar na carga da página
carregarTodosOsArtigos();
