// Kizz Web — motor de routing + render (sin dependencias externas, salvo KaTeX para las fórmulas)

const ROOT = document.getElementById("app");
const LETRAS = ["A", "B", "C", "D"];
const CONFETTI_COLORES = CURSO.confeti;

// Todo texto que viene de los datos se inserta como TEXTO, nunca como HTML. Sin esto, algo
// como "3x-2<x+6" se leía como una etiqueta <x...> y cortaba la pregunta. KaTeX trabaja
// después sobre el texto ya mostrado, así que las fórmulas no se ven afectadas.
function esc(texto) {
  return String(texto).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Formato de los textos de las preguntas (sobre texto ya escapado, así que es seguro):
//  - Viñetas: cada línea que empieza con "• " forma parte de una lista.
//  - Imágenes: [img:archivo.png] (o [img:archivo.png|descripción]) -> la imagen, guardada en la carpeta "imagen" del curso.
const IMG_RE = /\[img:([A-Za-z0-9._-]+)(?:\|([^\]]*))?\]/g; // la descripción es opcional
function fmt(texto) {
  const partes = [];
  let suelto = [];
  let lista = [];
  const cerrarSuelto = () => {
    if (suelto.length) partes.push(suelto.join("\n"));
    suelto = [];
  };
  const cerrarLista = () => {
    if (lista.length) partes.push('<ul class="vinetas">' + lista.map((x) => `<li>${x}</li>`).join("") + "</ul>");
    lista = [];
  };
  const imgHtml = (f, alt = "") => `<img class="img-pregunta" src="imagen/${f}" alt="${alt.replace(/"/g, "&quot;")}">`;
  for (const linea of esc(texto).split("\n")) {
    // Una línea que es solo una imagen se trata como bloque (sin salto de línea extra a su alrededor).
    const mi = linea.match(/^\s*\[img:([A-Za-z0-9._-]+)(?:\|([^\]]*))?\]\s*$/);
    if (mi) {
      cerrarSuelto();
      cerrarLista();
      partes.push(imgHtml(mi[1], mi[2]));
      continue;
    }
    const m = linea.match(/^\s*•\s+(.*)$/);
    if (m) {
      cerrarSuelto();
      lista.push(m[1]);
    } else {
      cerrarLista();
      suelto.push(linea);
    }
  }
  cerrarLista();
  cerrarSuelto();
  return partes.join("").replace(IMG_RE, (_, f, alt) => imgHtml(f, alt)); // imágenes dentro de una línea con texto
}

// ---------------------------------------------------------------------------
// Sorteo de preguntas. Cada vez que se entra a un inicio o cierre se eligen al azar
// N preguntas del banco aprobado (N = CURSO.porMomento) con las alternativas mezcladas.
// - Se recuerda en este navegador cuáles salieron: las menos vistas tienen prioridad,
//   así no se repiten hasta agotar el banco.
// - La ronda se conserva mientras se navega Anterior/Siguiente o se recarga la página,
//   y se descarta al salir del quiz: volver a entrar sortea de nuevo.
// ---------------------------------------------------------------------------
const ORDEN_FIJO = /^(I|II|III|IV)$/; // cuadrantes: se dejan en su orden natural
const PREFIJO_RONDA = `kizz:${CURSO.slug}:ronda:`;
const CLAVE_RONDA = `${PREFIJO_RONDA}${CURSO.version}:`; // incluye la versión del armado: una web nueva nunca reusa rondas viejas
const PREFIJO_VISTAS = `kizz:${CURSO.slug}:vistas:`;
let rondaActual = null; // { clave, preguntas }

function almacen(tipo) {
  try {
    return window[tipo];
  } catch {
    return null;
  }
}

function leerJSON(tipo, clave, porDefecto) {
  try {
    const v = almacen(tipo)?.getItem(clave);
    return v ? JSON.parse(v) : porDefecto;
  } catch {
    return porDefecto;
  }
}

function guardarJSON(tipo, clave, valor) {
  try {
    almacen(tipo)?.setItem(clave, JSON.stringify(valor));
  } catch {
    /* sin almacenamiento: funciona igual, solo sin memoria */
  }
}

function mezclar(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function idPregunta(texto) {
  // huella corta y estable del enunciado
  let h = 5381;
  for (const c of texto) h = ((h << 5) + h + c.charCodeAt(0)) | 0;
  return (h >>> 0).toString(36);
}

function mezclarAlternativas(q) {
  const posiciones = q.alternativas.map((_, i) => i);
  const fijo = q.alternativas.every((a) => ORDEN_FIJO.test(a.trim()));
  const orden = fijo ? posiciones : mezclar(posiciones);
  return {
    pregunta: q.pregunta,
    alternativas: orden.map((i) => q.alternativas[i]),
    correcta: orden.indexOf(q.correcta),
  };
}

function sortearPreguntas(sesion, momento) {
  const banco = sesion[momento];
  const cuantas = Math.min(CURSO.porMomento[momento], banco.length);
  const claveVistas = `${PREFIJO_VISTAS}${sesion.numero}-${momento}`;
  const vistas = leerJSON("localStorage", claveVistas, {});
  const masNueva = (lista, n) => {
    const candidatas = mezclar(lista).map((q) => ({ q, id: idPregunta(q.pregunta) }));
    candidatas.sort((a, b) => (vistas[a.id] ?? 0) - (vistas[b.id] ?? 0)); // estable: los empates siguen al azar
    return candidatas.slice(0, n);
  };
  // Las preguntas con posicion "final" (p. ej. "¿Qué aprendimos hoy?") van siempre al final de la ronda.
  const finales = banco.filter((q) => q.posicion === "final");
  const normales = banco.filter((q) => q.posicion !== "final");
  const elegidaFinal = masNueva(finales, Math.min(1, finales.length, cuantas));
  const elegidasNormales = masNueva(normales, cuantas - elegidaFinal.length);
  const ahora = Date.now();
  [...elegidasNormales, ...elegidaFinal].forEach((e) => {
    vistas[e.id] = ahora;
  });
  guardarJSON("localStorage", claveVistas, vistas);
  return [...mezclar(elegidasNormales.map((e) => e.q)), ...elegidaFinal.map((e) => e.q)].map(mezclarAlternativas);
}

function obtenerRonda(sesion, momento) {
  const clave = `${sesion.numero}-${momento}`;
  if (rondaActual?.clave === clave) return rondaActual.preguntas;
  const preguntas = leerJSON("sessionStorage", CLAVE_RONDA + clave, null) ?? sortearPreguntas(sesion, momento);
  rondaActual = { clave, preguntas };
  guardarJSON("sessionStorage", CLAVE_RONDA + clave, preguntas);
  return preguntas;
}

function descartarRonda() {
  rondaActual = null;
  const s = almacen("sessionStorage");
  try {
    for (let i = s.length - 1; i >= 0; i--) {
      const k = s.key(i);
      if (k?.startsWith(PREFIJO_RONDA)) s.removeItem(k);
    }
  } catch {
    /* sin almacenamiento */
  }
}

// Botón de Inicio/Cierre sin preguntas aprobadas: visible pero sin acceso.
function sinPreguntas(sesion, momento) {
  return sesion[momento].length ? "" : ' style="opacity:.4;pointer-events:none" aria-disabled="true"';
}

// El número de pregunta vive en la URL (#/sesion/11/inicio/2), no en una variable
// en memoria: así "Anterior" es solo navegar el hash, y volver a entrar a una
// sesión (desde Sesión o desde Home) siempre arranca fresco en la pregunta 1,
// sin arrastrar en qué pregunta se había quedado la vez anterior.
function parseHash() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  if (parts[0] === "sesion" && parts[1]) {
    const numero = Number(parts[1]);
    if (parts[2] === "inicio" || parts[2] === "cierre") {
      const preguntaNum = parts[3] ? Number(parts[3]) : 1;
      return { view: "quiz", numero, momento: parts[2], preguntaIndex: preguntaNum - 1 };
    }
    return { view: "sesion", numero };
  }
  return { view: "home" };
}

function findSesion(numero) {
  return SESSIONS.find((s) => s.numero === numero);
}

// Las sesiones integradoras y las de evaluación (PC, exámenes) se marcan con un
// borde distinto en la grilla para que se ubiquen de un vistazo al proyectar.
function esIntegradora(tema) {
  return /integradora/i.test(tema);
}

function esEvaluacion(tema) {
  return /pr[aá]ctica calificada|examen parcial|examen final/i.test(tema);
}

// Renderiza las fórmulas \( ... \) con KaTeX dentro del contenedor dado.
// Si el script de auto-render aún no cargó (red lenta), no rompe la app.
function renderMath(container) {
  if (window.renderMathInElement) {
    renderMathInElement(container, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }
}

function render() {
  const route = parseHash();
  // La red de nodos de fondo (efecto de bienvenida) solo corre en Home:
  // se apaga en Sesión/Quiz para no distraer durante la proyección.
  if (window.KizzFondo) {
    if (route.view === "home") window.KizzFondo.iniciar();
    else window.KizzFondo.detener();
  }
  if (route.view !== "quiz") descartarRonda();
  if (route.view === "home") return renderHome();
  const sesion = findSesion(route.numero);
  if (!sesion) return renderHome();
  if (route.view === "sesion") return renderSesion(sesion);
  if (route.view === "quiz") return renderQuiz(sesion, route.momento, route.preguntaIndex);
}

function renderHome() {
  const unidadesOrdenadas = Object.keys(UNIDADES).map(Number).sort((a, b) => a - b);

  const grupos = unidadesOrdenadas
    .map((unidadNum) => {
      const sesiones = SESSIONS.filter((s) => s.unidad === unidadNum);
      if (!sesiones.length) return "";
      const cards = sesiones
        .map((s) => {
          const claseExtra = esIntegradora(s.tema) ? "is-integradora" : esEvaluacion(s.tema) ? "is-evaluacion" : "";
          const hito = HITOS[s.numero];
          const tarjetaSesion = `
          <a class="session-card ${claseExtra}" href="#/sesion/${s.numero}">
            <span class="session-card-num">Sesión ${s.numero}</span>
            <span class="session-card-tema">${esc(s.tema)}</span>
          </a>`;
          const tarjetaHito = hito
            ? `
          <div class="hito-card">
            <span class="hito-codigo">${esc(hito.codigo)}</span>
            <span class="hito-nombre">${esc(hito.nombre)}</span>
            <span class="hito-detalle">${esc(hito.detalle)}</span>
          </div>`
            : "";
          return tarjetaSesion + tarjetaHito;
        })
        .join("");
      return `
        <section class="unidad-group">
          <h2 class="unidad-title">${esc(UNIDADES[unidadNum])}</h2>
          <div class="session-grid">${cards}</div>
        </section>`;
    })
    .join("");

  ROOT.className = "view-home";
  ROOT.innerHTML = `
    <header class="home-header">
      <p class="home-eyebrow">${esc(CURSO.eyebrow)}</p>
      <h1 class="home-title">Kizz Web</h1>
      <p class="home-docente">${esc(CURSO.docente)}</p>
      <p class="home-subtitle">Elige una sesión para proyectar sus preguntas de inicio o de cierre.</p>
    </header>
    ${grupos}
  `;
}

function renderSesion(sesion) {
  ROOT.className = "view-sesion";
  ROOT.innerHTML = `
    <a class="back-link" href="#/">&larr; Todas las sesiones</a>
    <div class="sesion-panel">
      <p class="sesion-eyebrow">Sesión ${sesion.numero}</p>
      <h1 class="sesion-tema">${esc(sesion.tema)}</h1>
      <div class="sesion-botones">
        <a class="momento-btn momento-inicio" href="#/sesion/${sesion.numero}/inicio"${sinPreguntas(sesion, "inicio")}>
          <span class="momento-icon">▶</span>
          <span>Preguntas de Inicio</span>
        </a>
        <a class="momento-btn momento-cierre" href="#/sesion/${sesion.numero}/cierre"${sinPreguntas(sesion, "cierre")}>
          <span class="momento-icon">🏁</span>
          <span>Preguntas de Cierre</span>
        </a>
      </div>
    </div>
  `;
}

function renderQuiz(sesion, momento, preguntaIndexPedido) {
  const preguntas = obtenerRonda(sesion, momento);
  if (!preguntas.length) {
    ROOT.className = "view-sesion";
    ROOT.innerHTML = `
      <a class="back-link" href="#/sesion/${sesion.numero}">&larr; Sesión ${sesion.numero}</a>
      <div class="sesion-panel"><h1 class="sesion-tema">Aún no hay preguntas de ${momento} para esta sesión</h1></div>`;
    return;
  }
  const index = Math.min(Math.max(preguntaIndexPedido, 0), preguntas.length - 1);
  const pregunta = preguntas[index];
  const esPrimera = index === 0;
  const esUltima = index === preguntas.length - 1;
  const base = `#/sesion/${sesion.numero}/${momento}`;

  const dots = preguntas
    .map((_, i) => `<span class="${i === index ? "is-active" : ""}"></span>`)
    .join("");

  const tiles = pregunta.alternativas
    .map((texto, i) => {
      const esCorrecta = i === pregunta.correcta;
      return `
        <div class="flip-card" data-index="${i}" data-correcta="${esCorrecta}">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <span class="tile-letra">${LETRAS[i]}</span>
              <span class="tile-texto">${fmt(texto)}</span>
            </div>
            <div class="flip-card-back ${esCorrecta ? "is-correct" : "is-incorrect"}">
              <p class="result-line">
                <span class="result-icon">${esCorrecta ? "✓" : "✕"}</span>
                <span>${esCorrecta ? "¡Correcto!" : "Aún no"}</span>
              </p>
            </div>
            <div class="confetti-layer"></div>
          </div>
        </div>`;
    })
    .join("");

  ROOT.className = "view-quiz";
  ROOT.innerHTML = `
    <a class="back-link" href="#/sesion/${sesion.numero}">&larr; Sesión ${sesion.numero}</a>
    <div class="quiz-panel">
      <p class="quiz-progreso">${momento === "inicio" ? "Inicio" : "Cierre"} · Pregunta ${index + 1} de ${preguntas.length}</p>
      <div class="quiz-dots">${dots}</div>
      <h1 class="quiz-pregunta">${fmt(pregunta.pregunta)}</h1>
      <div class="answer-grid">${tiles}</div>
      <div class="quiz-siguiente-wrap">
        ${esPrimera ? "" : `<a class="anterior-btn" href="${base}/${index}">← Pregunta anterior</a>`}
        <a class="siguiente-btn" id="btn-siguiente" href="${esUltima ? `#/sesion/${sesion.numero}` : `${base}/${index + 2}`}">${esUltima ? "Volver a la sesión →" : "Siguiente pregunta →"}</a>
      </div>
    </div>
  `;

  ROOT.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      const estabaVolteada = card.classList.contains("is-flipped");
      card.classList.toggle("is-flipped");
      if (!estabaVolteada && card.dataset.correcta === "true") {
        lanzarConfeti(card.querySelector(".confetti-layer"));
      }
    });
  });
}

function lanzarConfeti(layer) {
  if (!layer) return;
  for (let i = 0; i < 16; i++) {
    const pieza = document.createElement("span");
    pieza.className = "confetti-piece";
    const angulo = Math.random() * Math.PI * 2;
    const distancia = 70 + Math.random() * 90;
    pieza.style.setProperty("--dx", `${Math.cos(angulo) * distancia}px`);
    pieza.style.setProperty("--dy", `${Math.sin(angulo) * distancia - 40}px`);
    pieza.style.setProperty("--rot", `${Math.random() * 480 - 240}deg`);
    pieza.style.background = CONFETTI_COLORES[i % CONFETTI_COLORES.length];
    pieza.style.animationDelay = `${Math.random() * 0.08}s`;
    layer.appendChild(pieza);
    pieza.addEventListener("animationend", () => pieza.remove());
  }
}

// Atajos de teclado para presentar sin depender del mouse:
// 1-4 voltea/regresa esa tarjeta, Enter/Espacio/→ avanza, ← retrocede, Esc vuelve a la sesión.
document.addEventListener("keydown", (e) => {
  const route = parseHash();
  if (route.view !== "quiz") return;

  if (e.key === "Escape") {
    location.hash = `#/sesion/${route.numero}`;
    return;
  }

  if (["1", "2", "3", "4"].includes(e.key)) {
    const idx = Number(e.key) - 1;
    const card = ROOT.querySelector(`.flip-card[data-index="${idx}"]`);
    if (card) card.click();
    return;
  }

  if (["Enter", " ", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
    const btn = document.getElementById("btn-siguiente");
    if (btn) btn.click();
    return;
  }

  if (e.key === "ArrowLeft") {
    const btn = ROOT.querySelector(".anterior-btn");
    if (btn) btn.click();
  }
});

// Botón de pantalla completa / modo presentación (útil al proyectar).
const btnFullscreen = document.getElementById("btn-fullscreen");
if (btnFullscreen) {
  btnFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  });
  document.addEventListener("fullscreenchange", () => {
    const enPantallaCompleta = Boolean(document.fullscreenElement);
    btnFullscreen.textContent = enPantallaCompleta ? "⤡" : "⛶";
    btnFullscreen.title = enPantallaCompleta ? "Salir de pantalla completa" : "Pantalla completa";
  });
}

function renderYFormatear() {
  render();
  renderMath(ROOT);
}

window.addEventListener("hashchange", renderYFormatear);
window.addEventListener("DOMContentLoaded", renderYFormatear);
