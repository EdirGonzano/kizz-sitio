// Kizz Web — fondo "red de nodos" para la vista Home, con motivo de ciencias
// de la salud (cruces, gotas y píldoras flotando y conectándose) en vez de
// puntos genéricos. Solo corre en Home (app.js lo enciende/apaga al cambiar
// de vista). Sin dependencias, respeta prefers-reduced-motion y se pausa
// cuando la pestaña no está visible.

window.KizzFondo = (function () {
  const canvas = document.getElementById("fx");
  if (!canvas) return { iniciar() {}, detener() {} };

  const ctx = canvas.getContext("2d");
  const COLOR_NODO = "rgba(75, 99, 88, 0.5)"; // sage
  const COLOR_NODO_CERCA = "rgba(201, 122, 93, 0.92)"; // terracota
  const COLOR_LINEA = "rgba(75, 99, 88, 0.15)"; // sage tenue
  const COLOR_LINEA_CERCA = "rgba(201, 138, 130, 0.4)"; // rosa viejo
  const DENSIDAD = 0.00009;
  const MAX_NODOS = 70;
  const MIN_NODOS = 22;
  const DIST_ENLACE = 150;
  const DIST_MOUSE = 170;

  // Mayoría puntos simples; el resto son pequeños íconos de salud para que
  // la red se lea como "cosas flotantes" temáticas, sin saturar la vista.
  const FORMAS = ["punto", "punto", "punto", "punto", "punto", "cruz", "gota", "pastilla"];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let nodos = [];
  let mouse = { x: -9999, y: -9999 };
  let frameId = null;
  let activo = false;

  function crearNodos() {
    const cantidad = Math.min(MAX_NODOS, Math.max(MIN_NODOS, Math.round(width * height * DENSIDAD)));
    nodos = new Array(cantidad).fill(null).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      forma: FORMAS[Math.floor(Math.random() * FORMAS.length)],
    }));
  }

  function ajustarTamano() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    crearNodos();
  }

  function dibujarForma(n, cerca) {
    ctx.fillStyle = cerca ? COLOR_NODO_CERCA : COLOR_NODO;
    const s = cerca ? 5.2 : 3.6;

    if (n.forma === "cruz") {
      ctx.fillRect(n.x - s * 0.26, n.y - s, s * 0.52, s * 2);
      ctx.fillRect(n.x - s, n.y - s * 0.26, s * 2, s * 0.52);
      return;
    }

    if (n.forma === "pastilla") {
      ctx.save();
      ctx.translate(n.x, n.y);
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 1.15, s * 0.62, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    }

    if (n.forma === "gota") {
      ctx.beginPath();
      ctx.moveTo(n.x, n.y - s * 1.2);
      ctx.quadraticCurveTo(n.x + s * 0.95, n.y + s * 0.25, n.x, n.y + s * 1.1);
      ctx.quadraticCurveTo(n.x - s * 0.95, n.y + s * 0.25, n.x, n.y - s * 1.2);
      ctx.fill();
      return;
    }

    ctx.beginPath();
    ctx.arc(n.x, n.y, s * 0.6, 0, Math.PI * 2);
    ctx.fill();
  }

  function dibujarFrame() {
    ctx.clearRect(0, 0, width, height);

    if (!prefersReducedMotion) {
      for (const n of nodos) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
    }

    for (let i = 0; i < nodos.length; i++) {
      for (let j = i + 1; j < nodos.length; j++) {
        const a = nodos[i];
        const b = nodos[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist >= DIST_ENLACE) continue;
        const cerca =
          Math.hypot(a.x - mouse.x, a.y - mouse.y) < DIST_MOUSE ||
          Math.hypot(b.x - mouse.x, b.y - mouse.y) < DIST_MOUSE;
        ctx.strokeStyle = cerca ? COLOR_LINEA_CERCA : COLOR_LINEA;
        ctx.globalAlpha = 1 - dist / DIST_ENLACE;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    for (const n of nodos) {
      const cerca = Math.hypot(n.x - mouse.x, n.y - mouse.y) < DIST_MOUSE;
      dibujarForma(n, cerca);
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
