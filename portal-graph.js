(() => {
    const CYTOSCAPE_URL = "https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.26.0/cytoscape.min.js";
    let cytoscapePromise = null;
    let instanciaAtiva = null;

    function normalizar(texto = "") {
        return String(texto)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase("pt-BR");
    }

    function escaparHtml(valor = "") {
        return String(valor)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function ramoDaUrl(url) {
        try {
            const caminho = new URL(url).pathname.split("/").filter(Boolean);
            return caminho[0] || "home";
        } catch {
            return "portal";
        }
    }

    function hash(texto) {
        return Array.from(String(texto)).reduce((total, caractere) => {
            return ((total << 5) - total + caractere.charCodeAt(0)) | 0;
        }, 0);
    }

    function corDoRamo(ramo, raiz) {
        if (ramo === "home") return raiz;
        const paleta = ["#2f6f3c", "#3b8048", "#489156", "#57a265", "#68b475", "#7cc586"];
        return paleta[Math.abs(hash(ramo)) % paleta.length];
    }

    function carregarCytoscape() {
        if (window.cytoscape) return Promise.resolve(window.cytoscape);
        if (cytoscapePromise) return cytoscapePromise;

        cytoscapePromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = CYTOSCAPE_URL;
            script.async = true;
            script.dataset.guiaCytoscape = "true";
            script.onload = () => window.cytoscape
                ? resolve(window.cytoscape)
                : reject(new Error("Cytoscape carregou sem expor a API esperada."));
            script.onerror = () => reject(new Error("Não foi possível carregar a biblioteca do grafo."));
            document.head.appendChild(script);
        });

        return cytoscapePromise;
    }

    function montarInterface(root, data) {
        root.innerHTML = `
            <div class="portal-graph-toolbar">
                <label class="portal-graph-search">
                    <span>buscar página</span>
                    <input type="search" placeholder="ex.: estudantes" autocomplete="off">
                </label>
                <button type="button" class="portal-graph-recenter">recentralizar</button>
                <span class="portal-graph-stats">${data.nodes.length} páginas · ${data.edges.length} relações</span>
            </div>
            <div class="portal-graph-stage">
                <div class="portal-graph-canvas" aria-label="Grafo da estrutura do Portal IFMG"></div>
                <aside class="portal-graph-details" aria-live="polite"></aside>
            </div>
        `;

        return {
            input: root.querySelector(".portal-graph-search input"),
            recenter: root.querySelector(".portal-graph-recenter"),
            canvas: root.querySelector(".portal-graph-canvas"),
            details: root.querySelector(".portal-graph-details")
        };
    }

    function mostrarDetalhes(painel, nodeData) {
        if (!painel || !nodeData) return;
        const descricao = nodeData.description
            ? `<p>${escaparHtml(nodeData.description)}</p>`
            : "<p>Página mapeada na estrutura do Portal.</p>";

        painel.innerHTML = `
            <span class="portal-graph-details-kicker">${escaparHtml(ramoDaUrl(nodeData.url))}</span>
            <h3>${escaparHtml(nodeData.title)}</h3>
            ${descricao}
            <code>${escaparHtml(nodeData.url)}</code>
            <a href="${escaparHtml(nodeData.url)}" target="_blank" rel="noopener noreferrer">abrir página no Portal ↗</a>
        `;
    }

    async function renderizar(root) {
        const data = window.PortalGraphData;
        if (!data?.nodes?.length) {
            root.innerHTML = '<p class="portal-graph-error">Ainda não há páginas mapeadas para exibir.</p>';
            return;
        }

        const ui = montarInterface(root, data);

        try {
            const cytoscape = await carregarCytoscape();
            if (!document.body.contains(root)) return;
            if (instanciaAtiva) instanciaAtiva.destroy();

            const estiloRaiz = getComputedStyle(document.documentElement);
            const accent = estiloRaiz.getPropertyValue("--accent-blue").trim() || "#74b77b";
            const text = estiloRaiz.getPropertyValue("--text").trim() || "#f1f0eb";
            const muted = estiloRaiz.getPropertyValue("--muted").trim() || "#a4a39e";
            const bg = estiloRaiz.getPropertyValue("--bg").trim() || "#101010";

            const elements = [
                ...data.nodes.map(node => ({
                    data: {
                        ...node,
                        branch: ramoDaUrl(node.url)
                    }
                })),
                ...data.edges.map((edge, index) => ({
                    data: {
                        id: `portal-edge-${index + 1}`,
                        ...edge
                    }
                }))
            ];

            const cy = cytoscape({
                container: ui.canvas,
                elements,
                style: [
                    {
                        selector: "node",
                        style: {
                            "background-color": node => corDoRamo(node.data("branch"), accent),
                            "border-width": 1.5,
                            "border-color": bg,
                            "width": 38,
                            "height": 38,
                            "label": "data(title)",
                            "color": text,
                            "font-family": "Archivo, sans-serif",
                            "font-size": 11,
                            "font-weight": 500,
                            "text-wrap": "wrap",
                            "text-max-width": 120,
                            "text-valign": "bottom",
                            "text-margin-y": 8,
                            "text-background-color": bg,
                            "text-background-opacity": 0.88,
                            "text-background-padding": 3
                        }
                    },
                    {
                        selector: 'node[id = "https://portal.ifmg.edu.br/"]',
                        style: {
                            "width": 54,
                            "height": 54,
                            "border-width": 3,
                            "border-color": accent,
                            "font-size": 12,
                            "font-weight": 700
                        }
                    },
                    {
                        selector: "edge",
                        style: {
                            "width": 1.4,
                            "line-color": muted,
                            "opacity": 0.45,
                            "curve-style": "bezier",
                            "target-arrow-shape": "none"
                        }
                    },
                    {
                        selector: ".portal-graph-dimmed",
                        style: { "opacity": 0.12 }
                    },
                    {
                        selector: ".portal-graph-match",
                        style: {
                            "border-width": 4,
                            "border-color": accent,
                            "z-index": 10
                        }
                    }
                ]
            });

            instanciaAtiva = cy;

            const rootNode = cy.getElementById("https://portal.ifmg.edu.br/");
            const rodarLayout = () => {
                cy.layout({
                    name: "breadthfirst",
                    directed: true,
                    roots: rootNode,
                    spacingFactor: 1.45,
                    padding: 46,
                    animate: false
                }).run();
                cy.fit(cy.elements(), 54);
            };

            rodarLayout();
            window.setTimeout(rodarLayout, 40);

            if (rootNode.length) {
                mostrarDetalhes(ui.details, rootNode.data());
                rootNode.select();
            }

            cy.on("tap", "node", event => {
                mostrarDetalhes(ui.details, event.target.data());
            });

            ui.recenter.addEventListener("click", () => {
                cy.elements().removeClass("portal-graph-dimmed portal-graph-match");
                ui.input.value = "";
                rodarLayout();
            });

            ui.input.addEventListener("input", () => {
                const consulta = normalizar(ui.input.value.trim());
                cy.elements().removeClass("portal-graph-dimmed portal-graph-match");

                if (!consulta) {
                    cy.fit(cy.elements(), 54);
                    return;
                }

                const matches = cy.nodes().filter(node => {
                    return normalizar(`${node.data("title")} ${node.data("url")}`).includes(consulta);
                });

                if (!matches.length) {
                    cy.nodes().addClass("portal-graph-dimmed");
                    return;
                }

                cy.nodes().not(matches).addClass("portal-graph-dimmed");
                matches.addClass("portal-graph-match");
                cy.fit(matches, 100);

                const primeiro = matches[0];
                if (primeiro) mostrarDetalhes(ui.details, primeiro.data());
            });
        } catch (error) {
            console.error("Erro ao renderizar o mapa do Portal:", error);
            root.innerHTML = `
                <p class="portal-graph-error">
                    Não foi possível carregar o mapa interativo agora. O restante do guia continua disponível normalmente.
                </p>
            `;
        }
    }

    function renderizarSePresente(container = document) {
        const root = container.querySelector?.("[data-portal-graph]");
        if (!root || root.dataset.graphRendered === "true") return;
        root.dataset.graphRendered = "true";
        renderizar(root);
    }

    window.GuiaGrafoPortal = Object.freeze({
        renderizarSePresente
    });
})();
