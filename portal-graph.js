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

    function filhosEstruturais(data) {
        const filhos = new Map();

        data.edges
            .filter(edge => edge.type === "estrutura")
            .forEach(edge => {
                if (!filhos.has(edge.source)) filhos.set(edge.source, []);
                filhos.get(edge.source).push(edge.target);
            });

        return filhos;
    }

    function distribuirEmAneis(ids, centro, fase = 0) {
        const posicoes = new Map();
        const total = ids.length;
        if (!total) return posicoes;

        const aneis = total <= 8
            ? [{ ids, raio: Math.max(165, total * 22) }]
            : [
                { ids: ids.slice(0, Math.ceil(total / 2)), raio: 175 },
                { ids: ids.slice(Math.ceil(total / 2)), raio: 270 }
            ];

        aneis.forEach((anel, indiceAnel) => {
            const quantidade = anel.ids.length;
            const deslocamento = fase + (indiceAnel * (Math.PI / Math.max(quantidade, 1)));

            anel.ids.forEach((id, indice) => {
                const angulo = deslocamento + ((Math.PI * 2 * indice) / quantidade);
                posicoes.set(id, {
                    x: centro.x + (Math.cos(angulo) * anel.raio),
                    y: centro.y + (Math.sin(angulo) * anel.raio)
                });
            });
        });

        return posicoes;
    }

    function separarSobreposicoes(posicoes, idsFixos, distanciaMinima = 104) {
        const ids = [...posicoes.keys()];
        const fixos = new Set(idsFixos);

        for (let iteracao = 0; iteracao < 90; iteracao += 1) {
            let houveAjuste = false;

            for (let i = 0; i < ids.length; i += 1) {
                for (let j = i + 1; j < ids.length; j += 1) {
                    const idA = ids[i];
                    const idB = ids[j];
                    const a = posicoes.get(idA);
                    const b = posicoes.get(idB);
                    if (!a || !b) continue;

                    let dx = b.x - a.x;
                    let dy = b.y - a.y;
                    let distancia = Math.hypot(dx, dy);

                    if (distancia >= distanciaMinima) continue;
                    if (fixos.has(idA) && fixos.has(idB)) continue;

                    if (distancia < 0.001) {
                        const semente = Math.abs(hash(`${idA}|${idB}`));
                        const angulo = (semente % 360) * (Math.PI / 180);
                        dx = Math.cos(angulo);
                        dy = Math.sin(angulo);
                        distancia = 1;
                    }

                    const excesso = (distanciaMinima - distancia) / 2;
                    const ux = dx / distancia;
                    const uy = dy / distancia;

                    if (!fixos.has(idA)) {
                        a.x -= ux * excesso;
                        a.y -= uy * excesso;
                    }
                    if (!fixos.has(idB)) {
                        b.x += ux * excesso;
                        b.y += uy * excesso;
                    }

                    houveAjuste = true;
                }
            }

            if (!houveAjuste) break;
        }
    }

    function calcularPosicoesRadiais(data) {
        const raiz = "https://portal.ifmg.edu.br/";
        const filhos = filhosEstruturais(data);
        const posicoes = new Map([[raiz, { x: 0, y: 0 }]]);
        const profundidades = new Map([[raiz, 0]]);
        const filhosDaRaiz = filhos.get(raiz) || [];

        const maiorGrupo = Math.max(
            0,
            ...filhosDaRaiz.map(id => (filhos.get(id) || []).length)
        );
        const raioRaiz = Math.max(600, 500 + (Math.max(0, maiorGrupo - 8) * 18));

        filhosDaRaiz.forEach((id, indice) => {
            const angulo = (-Math.PI / 2) + ((Math.PI * 2 * indice) / Math.max(filhosDaRaiz.length, 1));
            posicoes.set(id, {
                x: Math.cos(angulo) * raioRaiz,
                y: Math.sin(angulo) * raioRaiz
            });
            profundidades.set(id, 1);
        });

        const fila = [...filhosDaRaiz];

        while (fila.length) {
            const pai = fila.shift();
            const filhosDoPai = filhos.get(pai) || [];
            const centro = posicoes.get(pai);
            if (!centro || !filhosDoPai.length) continue;

            const anguloPai = Math.atan2(centro.y, centro.x);
            const locais = distribuirEmAneis(filhosDoPai, centro, anguloPai + (Math.PI / 7));

            filhosDoPai.forEach(id => {
                if (!posicoes.has(id)) posicoes.set(id, locais.get(id));
                profundidades.set(id, (profundidades.get(pai) || 0) + 1);
                fila.push(id);
            });
        }

        const idsEstruturais = new Set(posicoes.keys());
        const naoEstruturais = data.nodes
            .map(node => node.id)
            .filter(id => !idsEstruturais.has(id));

        naoEstruturais.forEach((id, indice) => {
            const conexoes = data.edges
                .filter(edge => edge.source === id || edge.target === id)
                .map(edge => edge.source === id ? edge.target : edge.source)
                .map(outroId => posicoes.get(outroId))
                .filter(Boolean);

            let angulo;
            if (conexoes.length) {
                const centroide = conexoes.reduce(
                    (acc, posicao) => ({ x: acc.x + posicao.x, y: acc.y + posicao.y }),
                    { x: 0, y: 0 }
                );
                centroide.x /= conexoes.length;
                centroide.y /= conexoes.length;
                angulo = Math.atan2(centroide.y, centroide.x);
            } else {
                angulo = (-Math.PI / 2) + ((Math.PI * 2 * indice) / Math.max(naoEstruturais.length, 1));
            }

            const raioExterno = raioRaiz + 390 + (indice * 70);
            posicoes.set(id, {
                x: Math.cos(angulo) * raioExterno,
                y: Math.sin(angulo) * raioExterno
            });
        });

        separarSobreposicoes(
            posicoes,
            [raiz, ...filhosDaRaiz],
            104
        );

        return posicoes;
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

            const posicoesRadiais = calcularPosicoesRadiais(data);
            const elements = [
                ...data.nodes.map(node => ({
                    data: {
                        ...node,
                        branch: ramoDaUrl(node.url)
                    },
                    position: posicoesRadiais.get(node.id) || { x: 0, y: 0 }
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
                minZoom: 0.28,
                maxZoom: 2.2,
                wheelSensitivity: 0.18,
                layout: {
                    name: "preset",
                    fit: false
                },
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
                        selector: 'edge[type = "redireciona"]',
                        style: {
                            "line-style": "dashed",
                            "line-color": accent,
                            "opacity": 0.8,
                            "target-arrow-shape": "triangle",
                            "target-arrow-color": accent,
                            "arrow-scale": 0.75
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
            const idsPrimeiroNivel = data.edges
                .filter(edge => edge.type === "estrutura" && edge.source === "https://portal.ifmg.edu.br/")
                .map(edge => edge.target);

            const relaxarLayout = () => {
                const ancoraIds = ["https://portal.ifmg.edu.br/", ...idsPrimeiroNivel];
                const ancoras = cy.collection(
                    ancoraIds
                        .map(id => cy.getElementById(id))
                        .filter(elemento => elemento.length)
                );

                ancoras.lock();

                const elementosEstruturais = cy.nodes().union(
                    cy.edges().filter(edge => edge.data("type") === "estrutura")
                );

                elementosEstruturais.layout({
                    name: "cose",
                    animate: false,
                    fit: false,
                    randomize: false,
                    nodeDimensionsIncludeLabels: true,
                    componentSpacing: 110,
                    nodeRepulsion: 9200,
                    nodeOverlap: 34,
                    idealEdgeLength: 145,
                    edgeElasticity: 90,
                    nestingFactor: 1.15,
                    gravity: 0.18,
                    numIter: 700,
                    initialTemp: 160,
                    coolingFactor: 0.96,
                    minTemp: 1
                }).run();

                ancoras.unlock();
            };

            const rodarLayout = () => {
                const posicoes = calcularPosicoesRadiais(data);
                cy.nodes().positions(node => posicoes.get(node.id()) || node.position());
                relaxarLayout();
                cy.fit(cy.elements(), 72);
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
