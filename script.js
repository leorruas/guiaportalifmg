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
let artigoAtual = null;

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
    "Fundamentos": "princípios para escrever, estruturar e medir"
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

    // A sequência de leitura acompanha os números e nomes reais dos arquivos
    // do vault, sem manter uma ordem paralela no JavaScript.
    Object.values(todasAsPastas).forEach(artigos => {
        artigos.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath, "pt-BR", {
            numeric: true,
            sensitivity: "base"
        }));
    });

    // Renderiza a estrutura de pastas na página inicial
    renderizarPastas();

    tratarRotaDaUrl();
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

    const termo = termoBusca.toLowerCase().trim();
    
    // Oculta container de pastas ao fazer busca
    const pastasContainer = document.getElementById("pastas-container");
    if (pastasContainer) pastasContainer.classList.add("escondido");
    document.getElementById("orientacoes-iniciais")?.classList.add("escondido");
    document.getElementById("explorar-perfis")?.classList.add("escondido");

    if (termo.length < 3) {
        containerResultados.innerHTML = `<p class="mensagem-busca">Digite ao menos <strong>três letras</strong> para encontrar uma tarefa. Por exemplo: “notícia”, “imagem” ou “permissões”.</p>`;
        return;
    }

    const filtrados = todosOsArtigos
        .filter(artigo => artigo.titulo.toLowerCase().includes(termo) || artigo.conteudo.toLowerCase().includes(termo))
        .sort((a, b) => {
            const prioridadeA = a.titulo.toLowerCase().includes(termo) ? 0 : 1;
            const prioridadeB = b.titulo.toLowerCase().includes(termo) ? 0 : 1;
            return prioridadeA - prioridadeB || a.titulo.localeCompare(b.titulo, "pt-BR", { numeric: true });
        });

    exibirResultados(filtrados, termo);
}

function destacarTexto(texto, termo) {
    if (!termo) return texto;
    const regex = new RegExp(`(${termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return texto.replace(regex, '<mark class="highlight">$1</mark>');
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
        containerResultados.innerHTML = `<p class="mensagem-busca">Nenhum procedimento encontrado para <strong>“${escaparHtml(termo)}”</strong>. Tente uma palavra ligada à tarefa, como “publicar”, “página” ou “coleção”.</p>`;
        return;
    }

    const resumoBusca = document.createElement("p");
    resumoBusca.className = "resumo-busca";
    resumoBusca.textContent = `${artigos.length} ${artigos.length === 1 ? "procedimento encontrado" : "procedimentos encontrados"} para “${termo}”`;
    containerResultados.appendChild(resumoBusca);

    // Agrupa resultados por categoria (pasta)
    const grupos = {};
    artigos.forEach(artigo => {
        if (!grupos[artigo.categoria]) grupos[artigo.categoria] = [];
        grupos[artigo.categoria].push(artigo);
    });

    ordenarCategorias(Object.keys(grupos))
        .sort((a, b) => {
            const tituloEmA = grupos[a].some(artigo => artigo.titulo.toLowerCase().includes(termo));
            const tituloEmB = grupos[b].some(artigo => artigo.titulo.toLowerCase().includes(termo));
            return Number(tituloEmB) - Number(tituloEmA);
        })
        .forEach(categoria => {
        const grupoDiv = document.createElement("div");
        grupoDiv.className = "busca-grupo-assunto";

        const tituloGrupo = document.createElement("h3");
        tituloGrupo.className = "busca-assunto-titulo";
        tituloGrupo.textContent = categoria;
        grupoDiv.appendChild(tituloGrupo);

        const subCardsContainer = document.createElement("div");
        subCardsContainer.className = "resultados-lista";

        grupos[categoria].forEach((artigo, indice) => {
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

            const trecho = document.createElement("span");
            trecho.className = "resultado-trecho";
            const textoTrecho = extrairTrechoRelevante(artigo.conteudo, termo);
            trecho.innerHTML = destacarTexto(textoTrecho, termo);

            conteudoResultado.appendChild(titulo);
            conteudoResultado.appendChild(trecho);
            card.appendChild(numero);
            card.appendChild(conteudoResultado);

            card.addEventListener("click", (event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
                event.preventDefault();
                abrirArtigo(artigo.titulo, artigo.conteudo);
            });

            subCardsContainer.appendChild(card);
        });

        grupoDiv.appendChild(subCardsContainer);
        containerResultados.appendChild(grupoDiv);
    });
}

function rotaDoArtigo(artigo) {
    return artigo.sourcePath
        .replace(/^.*guia-do-portal\//, "")
        .replace(/\.md$/i, "");
}

function rotaDoPerfil(categoria) {
    return `#/perfil/${encodeURIComponent(categoria)}`;
}

function abrirPerfil(categoria, atualizarRota = true) {
    const informacao = informacoesCategorias[categoria];
    const artigos = todasAsPastas[categoria] || [];
    if (!informacao || artigos.length === 0) return;

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
    perfilCabecalho.innerHTML = `<p class="perfil-rotulo">${categoria.startsWith("Sou ") ? "sou..." : "guia do portal ifmg"}</p><h2>${tituloDoIndice(categoria)}</h2>`;
    perfilAcoes.className = `perfil-acoes ${classeDoPerfil(categoria)}`;
    perfilAcoes.innerHTML = "";
    artigos.forEach((artigo) => {
        const acao = document.createElement("a");
        acao.className = "perfil-acao";
        acao.href = `#/${rotaDoArtigo(artigo).split("/").map(encodeURIComponent).join("/")}`;
        acao.setAttribute("aria-label", tituloDaAcao(artigo.titulo));
        acao.innerHTML = `<span class="perfil-acao-numero">${artigo.titulo.match(/^\d+/)?.[0] || "•"}</span><span class="perfil-acao-conteudo"><strong>${tituloDaAcao(artigo.titulo)}</strong></span>`;
        acao.addEventListener("click", (event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
            event.preventDefault();
            abrirArtigo(artigo.titulo, artigo.conteudo);
        });
        perfilAcoes.appendChild(acao);
    });

    leitorDePerfil.classList.remove("escondido");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function abrirArtigo(titulo, conteudoMarkdown, atualizarRota = true) {
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

    // Processa callouts / caixas de aviso do Obsidian ([!IMPORTANT], [!NOTE], [!TIP], etc.)
    processarCalloutsObsidian();

    // Processa os links do Obsidian [[Nome do Artigo]] depois dos callouts,
    // para manter links clicáveis também dentro de caixas de aviso.
    processarLinksObsidian();
    aprimorarImagensDoArtigo();

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
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderizarContextoDoArtigo(artigo) {
    const contexto = document.getElementById("artigo-contexto");
    if (!contexto) return;
    const informacao = informacoesCategorias[artigo.categoria] || informacoesCategorias.Fundamentos;
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
    const artigosDaCategoria = todasAsPastas[artigo.categoria] || [];
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

function rotaComSecao(artigo, secao) {
    const rota = `#/${rotaDoArtigo(artigo).split("/").map(encodeURIComponent).join("/")}`;
    return secao ? `${rota}#${encodeURIComponent(secao)}` : rota;
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
carregarTodosOsArtigos();
