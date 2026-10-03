(function () {
  const D = window.PORTFOLIO, C = D.comum;
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const mark = (t) => esc(t).replace(/\*(.+?)\*/g, "<em>$1</em>");
  const list = (sel, items, fn) => { $(sel).innerHTML = items.map(fn).join(""); };
  const ext = (href, label, cls = "") => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>`;
  const get = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);

  let lang = "pt";
  try { lang = localStorage.getItem("lang") || lang; } catch (e) {}
  if (location.hash === "#en" || location.hash === "#pt") lang = location.hash.slice(1);
  let T = D[lang];

  const num = (v, d) => v.toLocaleString(T.locale, { minimumFractionDigits: d, maximumFractionDigits: d });
  const grams = (g) => (g >= 1 ? num(g, 1) : g >= 0.01 ? num(g, 3) : num(g, 4)) + " g";

  function render() {
    T = D[lang];
    document.documentElement.lang = T.locale;
    document.querySelector('meta[name="description"]')?.setAttribute("content", T.descricao);
    document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = get(T, el.dataset.t) || ""; });

    // Navegação e idioma
    list("#nav", T.nav, ([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`);
    const btn = $("#lang");
    btn.textContent = T.trocar[0];
    btn.setAttribute("aria-label", T.trocar[1]);
    btn.title = T.trocar[1];

    // Topo
    $("#nome").textContent = C.nome;
    $("#tese").innerHTML = mark(T.tese);
    $("#foto").innerHTML =
      (C.foto ? `<img src="${esc(C.foto)}" alt="${esc(C.nome)}">` : `<div class="ph" aria-hidden="true">SF</div>`) +
      `<figcaption>${esc(T.legendaFoto)}</figcaption>`;
    const L = C.links;
    const social = [["LinkedIn", L.linkedin], ["GitHub", L.github], ["CV (PDF)", L.cv]].filter((l) => l[1]);
    $("#links").innerHTML = `<a class="btn primary" href="#casos">${esc(T.verCasos)}</a>` + social.map(([l, h]) => ext(h, l, "btn")).join("");
    $("#contato-links").innerHTML =
      (L.email ? `<a class="btn primary" href="mailto:${esc(L.email)}">${esc(L.email)}</a>` : "") +
      social.map(([l, h], i) => ext(h, l, `btn${!L.email && i === 0 ? " primary" : ""}`)).join("");
    list("#credenciais", C.credenciais, (c) => `<li>${esc(c)}</li>`);

    // O que eu trago
    list("#forcas", T.trago.itens, ([t, d, prova]) => `
      <div class="strength"><h3>${esc(t)}</h3><p>${esc(d)}</p><p class="proofline">${esc(prova)}</p></div>`);

    // Casos
    const R = T.casos.rotulos;
    list("#lista-casos", T.casos.lista, (c, i) => `
      <article class="case">
        <div class="case-text">
          <div class="case-meta">${c.meta.map((m) => `<span>${esc(m)}</span>`).join("")}${c.premio ? `<span class="award">${esc(c.premio)}</span>` : ""}</div>
          <h3>${esc(c.titulo)}</h3>
          <dl class="steps">
            <dt>${esc(R.desafio)}</dt><dd>${esc(c.desafio)}</dd>
            <dt>${esc(R.fiz)}</dt><dd>${esc(c.fiz)}</dd>
            <dt>${esc(R.resultado)}</dt><dd class="res">${esc(c.resultado)}</dd>
          </dl>
          <p class="why"><b>${esc(R.porque)}</b>${esc(c.porque)}</p>
          ${c.visual === "grafico" && c.link ? ext(C.grafico.repo, esc(c.link), "more") : ""}
        </div>
        <div class="case-visual" id="visual-${i}">
          ${c.visual === "numero" ? `
            <div class="bignum">
              <strong>${esc(c.numero)}</strong>
              <span>${esc(c.numeroTexto)}</span>
              <ul>${c.numeroItens.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            </div>` : ""}
        </div>
      </article>`);
    list("#outros", T.outros.itens, ([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`);

    // Projetos
    const pl = lang === "pt" ? "pt" : "en";
    list("#lista-projetos", C.projetos, (pr) => `
      <article class="project">
        <div class="top"><span>${esc(pr[pl].autoria)}</span><span>${esc(pr.ano)}</span></div>
        <h3>${esc(pr[pl].titulo)}</h3>
        <p>${esc(pr[pl].texto)}</p>
        <ul class="tags">${pr.tags.map((t) => `<li>${esc(Array.isArray(t) ? t[pl === "pt" ? 0 : 1] : t)}</li>`).join("")}</ul>
        <a class="repo-link" href="https://github.com/${esc(pr.repo)}" target="_blank" rel="noopener">
          <span>${esc(T.projetos.abrir)} →</span><code>${esc(pr.repo)}</code>
        </a>
      </article>`);
    $("#lista-projetos").insertAdjacentHTML("beforeend",
      `<a class="project all-tile" href="${esc(C.links.github)}" target="_blank" rel="noopener"><strong>${esc(T.projetos.todos)} →</strong><code>github.com/Sarah-Freire</code></a>`);

    // Sobre e como trabalho
    list("#historia", T.sobre.texto, (t) => `<p>${esc(t)}</p>`);
    list("#fatos", T.sobre.fatos, ([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`);
    list("#principios", T.penso.principios, ([t, d]) => `<li><strong>${esc(t)}</strong><p>${esc(d)}</p></li>`);
    $("#gp").setAttribute("aria-label", T.penso.aria);
    $("#rodape").textContent = `© ${new Date().getFullYear()} ${C.nomeCompleto}`;

    setupChart();
    draw();
  }

  $("#lang").addEventListener("click", () => {
    lang = lang === "pt" ? "en" : "pt";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    try { history.replaceState(null, "", "#" + lang); } catch (e) {}
    render();
  });

  // Gráfico acurácia × carbono (dados reais do TCC), desenhado na largura real do contêiner.
  let renderChart = () => {};
  function setupChart() {
    const gi = T.casos.lista.findIndex((c) => c.visual === "grafico");
    if (gi < 0) { renderChart = () => {}; return; }
    const G = C.grafico, U = T.grafico, ni = lang === "pt" ? 0 : 1;
    const host = $(`#visual-${gi}`);
    host.innerHTML = `
      <figure class="chart">
        <div class="chart-head">
          <strong>${esc(U.titulo)}</strong>
          <div class="legend"><span><i style="background:var(--c1)"></i>${esc(U.legenda[0])}</span><span><i style="background:var(--c2)"></i>${esc(U.legenda[1])}</span></div>
        </div>
        <svg role="img" aria-label="${esc(U.titulo)}"></svg>
        <div class="tip" hidden></div>
        <details>
          <summary>${esc(U.tabela)}</summary>
          <div class="table-wrap"><table>
            <thead><tr><th>${esc(U.colunas[0])}</th><th class="n">${esc(U.colunas[1])}</th><th class="n">${esc(U.colunas[2])}</th></tr></thead>
            <tbody>${G.pontos.map((p) => `<tr><td>${esc(p[ni])}</td><td class="n">${num(p[3] * 100, 1)}%</td><td class="n">${grams(p[4])}</td></tr>`).join("")}</tbody>
          </table></div>
        </details>
        <p class="src">${esc(U.fonte)}</p>
      </figure>`;
    const fig = host.querySelector(".chart"), tip = fig.querySelector(".tip"), svgEl = fig.querySelector("svg");

    const hide = () => { tip.hidden = true; svgEl.querySelectorAll(".dot.on").forEach((d) => d.classList.remove("on")); };
    const show = (el) => {
      const i = +el.dataset.i, p = G.pontos[i];
      hide();
      svgEl.querySelector(`.dot[data-i="${i}"]`).classList.add("on");
      tip.innerHTML = `${esc(p[ni])}<br>${num(p[3] * 100, 1)}% · ${grams(p[4])} CO₂`;
      tip.hidden = false;
      const r = svgEl.getBoundingClientRect(), fr = fig.getBoundingClientRect(), half = tip.offsetWidth / 2;
      const cx = r.left - fr.left + el.cx.baseVal.value;
      tip.style.left = `${Math.min(Math.max(cx, half + 4), fr.width - half - 4)}px`;
      tip.style.top = `${r.top - fr.top + el.cy.baseVal.value}px`;
    };

    renderChart = () => {
      const W = Math.max(280, Math.round(svgEl.parentElement.clientWidth - 36));
      const narrow = W < 520;
      const H = narrow ? 280 : 340, m = { l: 40, r: 12, t: 44, b: 40 };
      const x0 = -3.2, x1 = 1.8, y0 = 0.5, y1 = 0.9;
      const X = (g) => m.l + ((Math.log10(g) - x0) / (x1 - x0)) * (W - m.l - m.r);
      const Y = (v) => H - m.b - ((v - y0) / (y1 - y0)) * (H - m.t - m.b);
      let out = "";
      for (let v = 0.5; v <= 0.9001; v += 0.1) {
        out += `<line class="grid" x1="${m.l}" x2="${W - m.r}" y1="${Y(v)}" y2="${Y(v)}"/>`;
        out += `<text x="${m.l - 6}" y="${Y(v) + 4}" text-anchor="end">${Math.round(v * 100)}%</text>`;
      }
      [0.001, 0.01, 0.1, 1, 10].forEach((g) => {
        out += `<line class="grid" x1="${X(g)}" x2="${X(g)}" y1="${H - m.b}" y2="${H - m.b + 5}"/>`;
        out += `<text x="${X(g)}" y="${H - m.b + 18}" text-anchor="middle">${num(g, g < 1 ? String(g).split(".")[1].length : 0)} g</text>`;
      });
      out += `<text x="${W - m.r}" y="${H - 4}" text-anchor="end">${esc(U.eixoX)}</text>`;
      out += `<text x="0" y="${m.t - 18}">${esc(U.eixoY)}</text>`;
      G.pontos.map((p, i) => [p, i])
        .sort((u, v) => (u[0][2] === "gp") - (v[0][2] === "gp"))
        .forEach(([p, i]) => {
          out += `<circle class="dot" data-i="${i}" cx="${X(p[4])}" cy="${Y(p[3])}" r="5" fill="var(${p[2] === "gp" ? "--c1" : "--c2"})"/>`;
        });
      G.destaques.forEach((i, k) => {
        const p = G.pontos[i], px = X(p[4]), py = Y(p[3]), ly = k === 0 ? m.t - 18 : m.t - 2;
        const label = `${narrow ? U.curtos[k] : p[ni]}: ${num(p[3] * 100, 1)}% · ${grams(p[4])}`;
        out += `<line class="lead" x1="${px}" y1="${py - 7}" x2="${px}" y2="${ly + 5}"/>`;
        out += k === 0
          ? `<text class="lbl" x="${W - m.r}" y="${ly}" text-anchor="end">${esc(label)}</text>`
          : `<text class="lbl" x="${px - 4}" y="${ly}">${esc(label)}</text>`;
      });
      G.pontos.forEach((p, i) => {
        out += `<circle class="hit" data-i="${i}" cx="${X(p[4])}" cy="${Y(p[3])}" r="11" tabindex="0"><title>${esc(p[ni])}</title></circle>`;
      });
      svgEl.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svgEl.setAttribute("width", W);
      svgEl.setAttribute("height", H);
      svgEl.innerHTML = out;
      svgEl.querySelectorAll(".hit").forEach((h) => {
        h.addEventListener("mouseenter", () => show(h));
        h.addEventListener("focus", () => show(h));
        h.addEventListener("mouseleave", hide);
        h.addEventListener("blur", hide);
      });
    };
    renderChart();
  }

  // Processo Gaussiano interativo: regressão com kernel RBF, média e faixa de ±2σ.
  const canvas = $("#gp");
  const ctx = canvas.getContext("2d");
  const ELL = 0.11, SF2 = 1, SN2 = 0.004, YR = 2.6;
  const START = [[0.08, -0.6], [0.27, 0.9], [0.46, 0.2], [0.78, -1.1]];
  let pts = START.slice();
  const k = (u, v) => SF2 * Math.exp(-((u - v) ** 2) / (2 * ELL * ELL));

  function posterior(xs) {
    const n = pts.length;
    const Lm = Array.from({ length: n }, () => new Float64Array(n));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= i; j++) {
        let s = k(pts[i][0], pts[j][0]) + (i === j ? SN2 : 0);
        for (let q = 0; q < j; q++) s -= Lm[i][q] * Lm[j][q];
        Lm[i][j] = i === j ? Math.sqrt(Math.max(s, 1e-12)) : s / Lm[j][j];
      }
    }
    const fwd = (b) => { const z = new Float64Array(n); for (let i = 0; i < n; i++) { let s = b[i]; for (let q = 0; q < i; q++) s -= Lm[i][q] * z[q]; z[i] = s / Lm[i][i]; } return z; };
    const bwd = (z) => { const x = new Float64Array(n); for (let i = n - 1; i >= 0; i--) { let s = z[i]; for (let q = i + 1; q < n; q++) s -= Lm[q][i] * x[q]; x[i] = s / Lm[i][i]; } return x; };
    const alpha = bwd(fwd(pts.map((q) => q[1])));
    return xs.map((x) => {
      const ks = pts.map((q) => k(x, q[0]));
      const mu = ks.reduce((s, v, i) => s + v * alpha[i], 0);
      const v = fwd(ks);
      const sd = Math.sqrt(Math.max(SF2 - v.reduce((s, t) => s + t * t, 0), 0));
      return [x, mu, sd];
    });
  }

  function draw() {
    const css = getComputedStyle(document.documentElement);
    const c = (n) => css.getPropertyValue(n).trim();
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth, H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const pad = 18;
    const X = (x) => pad + x * (W - 2 * pad);
    const Y = (y) => H / 2 - (y / YR) * (H / 2 - pad);

    ctx.strokeStyle = c("--line"); ctx.lineWidth = 1;
    for (let g = -2; g <= 2; g++) { ctx.beginPath(); ctx.moveTo(pad, Y(g)); ctx.lineTo(W - pad, Y(g)); ctx.stroke(); }

    const post = posterior(Array.from({ length: 161 }, (_, i) => i / 160));
    ctx.fillStyle = c("--accent-soft");
    ctx.beginPath();
    post.forEach(([x, mu, s], i) => (i ? ctx.lineTo : ctx.moveTo).call(ctx, X(x), Y(mu + 2 * s)));
    for (let i = post.length - 1; i >= 0; i--) ctx.lineTo(X(post[i][0]), Y(post[i][1] - 2 * post[i][2]));
    ctx.closePath(); ctx.fill();

    ctx.strokeStyle = c("--accent"); ctx.lineWidth = 2.2;
    ctx.beginPath();
    post.forEach(([x, mu], i) => (i ? ctx.lineTo : ctx.moveTo).call(ctx, X(x), Y(mu)));
    ctx.stroke();

    ctx.fillStyle = c("--point");
    for (const [x, y] of pts) { ctx.beginPath(); ctx.arc(X(x), Y(y), 4.5, 0, Math.PI * 2); ctx.fill(); }

    ctx.fillStyle = c("--muted");
    ctx.font = `12px ${c("--mono")}`;
    ctx.fillText(T.penso.canvas.replace("{n}", pts.length), pad + 4, pad + 12);
  }

  canvas.addEventListener("click", (e) => {
    const r = canvas.getBoundingClientRect(), pad = 18;
    const x = Math.min(1, Math.max(0, (e.clientX - r.left - pad) / (r.width - 2 * pad)));
    const y = -((e.clientY - r.top - r.height / 2) / (r.height / 2 - pad)) * YR;
    if (pts.length >= 30) pts.shift();
    pts.push([x, Math.max(-YR, Math.min(YR, y))]);
    draw();
  });
  $("#gp-reset").addEventListener("click", () => { pts = START.slice(); draw(); });

  let t;
  window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(() => { renderChart(); draw(); }, 120); });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
  new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  render();
})();
