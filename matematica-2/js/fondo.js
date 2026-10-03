// Kizz Web — efecto de fondo "símbolos y curvas flotantes" para la vista Home.
// Distinto al de otros cursos de Kizz Web (que usan una red de nodos tipo circuito):
// aquí flotan glifos y trazos ligados al propio temario de Matemática II
// (Σ, √, π, matrices, parábola, circunferencia, ejes). Solo corre en Home
// (app.js lo enciende/apaga al cambiar de vista). Sin dependencias, respeta
// prefers-reduced-motion y se pausa cuando la pestaña no está visible.

window.KizzFondo = (function () {
  const canvas = document.getElementById("fx");
  if (!canvas) return { iniciar() {}, detener() {} };

  const ctx = canvas.getContext("2d");
  const COLOR_STEEL = "79, 131, 163";
  const COLOR_AMBER = "242, 165, 58";
  const GLIFOS = ["Σ", "√", "π", "Δ", "∞", "x²", "ƒ(x)", "∂"];
  const FORMAS = ["circunferencia", "parabola", "matriz", "ejes"];
  const DENSIDAD = 0.00004;
  const MAX_ITEMS = 34;
  const MIN_ITEMS = 14;
  const RADIO_MOUSE = 140;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let items = [];
  let mouse = { x: -9999, y: -9999 };
  let frameId = null;
  let activo = false;

  function crearItems() {
    const cantidad = Math.min(MAX_ITEMS, Math.max(MIN_ITEMS, Math.round(width * height * DENSIDAD)));
    items = new Array(cantidad).fill(null).map(() => {
      const esTexto = Math.random() < 0.6;
      return {
        tipo: esTexto ? "texto" : "forma",
        valor: esTexto ? GLIFOS[Math.floor(Math.random() * GLIFOS.length)] : FORMAS[Math.floor(Math.random() * FORMAS.length)],
        color: Math.random() < 0.7 ? COLOR_STEEL : COLOR_AMBER,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.004,
        tam: esTexto ? 22 + Math.random() * 26 : 26 + Math.random() * 30,
        alfaBase: 0.14 + Math.random() * 0.16,
      };
    });
  }

  function ajustarTamano() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    crearItems();
  }

  function dibujarForma(item, alfa, escala) {
    const s = item.tam * escala;
    ctx.strokeStyle = `rgba(${item.color}, ${alfa})`;
    ctx.lineWidth = 1.4;
    ctx.beginPath();

    if (item.valor === "circunferencia") {
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
    } else if (item.valor === "parabola") {
      ctx.moveTo(-s / 2, s / 4);
      ctx.quadraticCurveTo(0, -s * 0.75, s / 2, s / 4);
    } else if (item.valor === "matriz") {
      const w = s * 0.55;
      const h = s * 0.7;
      // corchete izquierdo
      ctx.moveTo(-w / 2 + 4, -h / 2);
      ctx.lineTo(-w / 2, -h / 2);
      ctx.lineTo(-w / 2, h / 2);
      ctx.lineTo(-w / 2 + 4, h / 2);
      // corchete derecho
      ctx.moveTo(w / 2 - 4, -h / 2);
      ctx.lineTo(w / 2, -h / 2);
      ctx.lineTo(w / 2, h / 2);
      ctx.lineTo(w / 2 - 4, h / 2);
    } else if (item.valor === "ejes") {
      ctx.moveTo(-s / 2, 0);
      ctx.lineTo(s / 2, 0);
      ctx.moveTo(0, -s / 2);
      ctx.lineTo(0, s / 2);
    }
    ctx.stroke();
  }

  function dibujarFrame() {
    ctx.clearRect(0, 0, width, height);

    for (const it of items) {
      if (!prefersReducedMotion) {
        it.x += it.vx;
        it.y += it.vy;
        it.rot += it.vrot;
        if (it.x < -40) it.x = width + 40;
        if (it.x > width + 40) it.x = -40;
        if (it.y < -40) it.y = height + 40;
        if (it.y > height + 40) it.y = -40;
      }

      const dist = Math.hypot(it.x - mouse.x, it.y - mouse.y);
      const cerca = Math.max(0, 1 - dist / RADIO_MOUSE);
      const alfa = Math.min(0.85, it.alfaBase + cerca * 0.6);
      const escala = 1 + cerca * 0.35;
      const color = cerca > 0.15 ? COLOR_AMBER : it.color;

      ctx.save();
      ctx.translate(it.x, it.y);
      ctx.rotate(it.rot);

      if (it.tipo === "texto") {
        ctx.fillStyle = `rgba(${color}, ${alfa})`;
        ctx.font = `600 ${it.tam}px "Space Grotesk", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(it.valor, 0, 0);
      } else {
        dibujarForma({ ...it, color }, alfa, escala);
      }

      ctx.restore();
    }

    if (activo && !prefersReducedMotion) {
      frameId = requestAnimationFrame(dibujarFrame);
    }
  }

  function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function onMouseLeave() {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  function onVisibilityChange() {
    if (!activo) return;
    if (document.hidden) {
      if (frameId) cancelAnimationFrame(frameId);
    } else if (!prefersReducedMotion) {
      dibujarFrame();
    }
  }

  window.addEventListener("resize", () => {
    if (activo) ajustarTamano();
  });
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseleave", onMouseLeave);
  document.addEventListener("visibilitychange", onVisibilityChange);

  function iniciar() {
    if (activo) return;
    activo = true;
    canvas.style.display = "block";
    ajustarTamano();
    dibujarFrame();
  }

  function detener() {
    if (!activo) return;
    activo = false;
    if (frameId) cancelAnimationFrame(frameId);
    canvas.style.display = "none";
    ctx.clearRect(0, 0, width, height);
  }

  return { iniciar, detener };
})();
