// ============================================================
//  STRECKEN + LAYOUTS (Namen wie in Le Mans Ultimate)
//  km = offizielle Länge (wird für die Meter-Berechnung benutzt)
//  geo = Schlüssel in tracks-geo.js
// ============================================================
const TRACKS = [
  { id: "portimao", name: "Algarve International Circuit", country: "Portimão, Portugal", layouts: [
    { id: "gp", tab: "GP", name: "Algarve International Circuit", km: 4.653, geo: "portimao" },
  ]},
  { id: "bahrain", name: "Bahrain International Circuit", country: "Sakhir, Bahrain", layouts: [
    { id: "gp",        tab: "GP",        name: "Bahrain International Circuit",           km: 5.412, geo: "bahrain_gp" },
    { id: "endurance", tab: "Endurance", name: "Bahrain International Endurance Circuit", km: 6.299, geo: "bahrain_endurance" },
    { id: "outer",     tab: "Outer",     name: "Bahrain International Outer Circuit",     km: 3.543, geo: "bahrain_outer" },
    { id: "paddock",   tab: "Paddock",   name: "Bahrain International Paddock Circuit",   km: 3.823, geo: "bahrain_paddock" },
  ]},
  { id: "lemans", name: "Circuit de la Sarthe", country: "Le Mans, Frankreich", layouts: [
    { id: "gp",       tab: "24h",      name: "Circuit de la Sarthe",                      km: 13.626, geo: "lemans" },
    { id: "mulsanne", tab: "Mulsanne", name: "Circuit de la Sarthe Mulsanne No Chicanes", km: 13.56,  geo: "lemans_mulsanne" },
  ]},
  { id: "fuji", name: "Fuji Speedway", country: "Oyama, Japan", layouts: [
    { id: "gp",      tab: "GP",      name: "Fuji Speedway",                  km: 4.563, geo: "fuji" },
    { id: "classic", tab: "Classic", name: "Fuji Classic Layout No Chicane", km: 4.529, geo: "fuji_classic" },
  ]},
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Monza, Italien", layouts: [
    { id: "gp",          tab: "GP",           name: "Autodromo Nazionale Monza", km: 5.793, geo: "monza" },
    { id: "curvagrande", tab: "Curva Grande", name: "Monza Curva Grande Layout", km: 5.750, geo: "monza_cg" },
  ]},
  { id: "sebring", name: "Sebring International Raceway", country: "Florida, USA", layouts: [
    { id: "gp",     tab: "GP",     name: "Sebring International Raceway", km: 6.019, geo: "sebring" },
    { id: "school", tab: "School", name: "Sebring School Circuit",        km: 3.219, geo: "sebring_school" },
  ]},
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgien", layouts: [
    { id: "gp",        tab: "GP",        name: "Circuit de Spa-Francorchamps", km: 7.004, geo: "spa" },
    { id: "endurance", tab: "Endurance", name: "Spa Endurance Layout",         km: 7.004, geo: "spa" },
  ]},
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari", country: "Imola, Italien", layouts: [
    { id: "gp", tab: "GP", name: "Autodromo Enzo e Dino Ferrari", km: 4.909, geo: "imola" },
  ]},
  { id: "interlagos", name: "Autódromo José Carlos Pace", country: "Interlagos, Brasilien", layouts: [
    { id: "gp", tab: "GP", name: "Autódromo José Carlos Pace", km: 4.309, geo: "interlagos" },
  ]},
  { id: "cota", name: "Circuit of the Americas", country: "Austin, USA", layouts: [
    { id: "gp",       tab: "GP",       name: "Circuit of the Americas", km: 5.513, geo: "cota" },
    { id: "national", tab: "National", name: "COTA National",           km: 3.702, geo: "cota_national" },
  ]},
  { id: "lusail", name: "Lusail International Circuit", country: "Katar", layouts: [
    { id: "gp",    tab: "GP",    name: "Lusail International Circuit",       km: 5.418, geo: "lusail" },
    { id: "short", tab: "Short", name: "Lusail International Circuit Short", km: 3.684, geo: "lusail_short" },
  ]},
  { id: "daytona", name: "Daytona International Speedway", country: "Florida, USA", layouts: [
    { id: "gp", tab: "Road Course", name: "Daytona International Speedway Road Course", km: 5.729, geo: "daytona" },
  ]},
  { id: "laguna", name: "WeatherTech Raceway Laguna Seca", country: "Kalifornien, USA", layouts: [
    { id: "gp", tab: "GP", name: "WeatherTech Raceway Laguna Seca", km: 3.602, geo: "laguna" },
  ]},
  { id: "roadatlanta", name: "Michelin Raceway Road Atlanta", country: "Georgia, USA", layouts: [
    { id: "gp", tab: "Grand Prix", name: "Michelin Raceway Road Atlanta", km: 4.088, geo: "roadatlanta" },
  ]},
  { id: "longbeach", name: "Streets of Long Beach", country: "Kalifornien, USA", layouts: [
    { id: "gp", tab: "GP", name: "Streets of Long Beach", km: 3.167, geo: "longbeach" },
  ]},
  { id: "silverstone", name: "Silverstone Circuit", country: "Grossbritannien", layouts: [
    { id: "gp",            tab: "GP",            name: "Silverstone",               km: 5.891, geo: "silverstone" },
    { id: "wec",           tab: "GP - WEC",      name: "Silverstone GP - WEC",      km: 5.891, geo: "silverstone" },
    { id: "national",      tab: "National",      name: "Silverstone National",      km: 2.639, geo: "silverstone_national" },
    { id: "international", tab: "International", name: "Silverstone International", km: 2.979, geo: "silverstone_intl" },
  ]},
  { id: "ricard", name: "Circuit Paul Ricard", country: "Le Castellet, Frankreich", layouts: [
    { id: "gp",        tab: "GP",          name: "Paul Ricard",             km: 5.842, geo: "ricard" },
    { id: "1a",        tab: "1a",          name: "Paul Ricard 1a",          km: 5.752, geo: "ricard_1a" },
    { id: "1av2",      tab: "1av2",        name: "Paul Ricard 1av2",        km: 5.791, geo: "ricard_1av2" },
    { id: "1av2short", tab: "1av2-short",  name: "Paul Ricard 1av2-short",  km: 4.379, geo: "ricard_1av2s" },
    { id: "3a",        tab: "3a",          name: "Paul Ricard 3a",          km: 3.793, geo: "ricard_3a" },
  ]},
];

let LAPTIMES = {}; // wird aus data.json geladen

const CLASSES = ["GTP", "LMP2", "GTE", "LMGT3", "LMP3"];
const DRIVERS = { stefan: "Stefan", joel: "Joel" };
const ANIM_MS = 6000; // Dauer der Animation (Runde des Schnelleren)

// ============================================================
//  HELFER
// ============================================================
function parseTime(str) {
  if (!str || !str.trim()) return null;
  const m = str.trim().match(/^(?:(\d+):)?(\d+(?:\.\d+)?)$/);
  if (!m) return null;
  return (m[1] ? parseInt(m[1]) * 60 : 0) + parseFloat(m[2]);
}
function fmtTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec - m * 60;
  return `${m}:${s.toFixed(3).padStart(6, "0")}`;
}

// Geometrie dekodieren (Differenzen -> Punkte in Metern)
const geoCache = {};
function getPts(key) {
  if (geoCache[key]) return geoCache[key];
  let x = 0, y = 0;
  const pts = TRACK_GEO[key].split(" ").map(s => {
    const [dx, dy] = s.split(",").map(Number);
    x += dx; y += dy;
    return [x, y];
  });
  return (geoCache[key] = pts);
}
function pathD(pts) {
  return "M" + pts.map(p => p[0] + "," + p[1]).join("L") + "Z";
}
function bbox(pts) {
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const x0 = Math.min(...xs), y0 = Math.min(...ys);
  return { x0, y0, w: Math.max(...xs) - x0, h: Math.max(...ys) - y0 };
}
function viewBox(pts, padFrac) {
  const b = bbox(pts);
  const pad = Math.max(b.w, b.h) * padFrac;
  return `${b.x0 - pad} ${b.y0 - pad} ${b.w + 2 * pad} ${b.h + 2 * pad}`;
}
// Start/Ziel-Strich quer zur Fahrtrichtung
function sfLine(pts, size) {
  const [a, b] = [pts[0], pts[1]];
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len * size, ny = dx / len * size;
  return { x1: a[0] - nx, y1: a[1] - ny, x2: a[0] + nx, y2: a[1] + ny };
}
const NS = "http://www.w3.org/2000/svg";
function el(tag, attrs = {}, parent) {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}
const NSS = { "vector-effect": "non-scaling-stroke" };

// ============================================================
//  STATE
// ============================================================
let currentClass = "GTP";
const layoutSel = {}; // trackId -> layoutId

function getLayout(track) {
  const id = layoutSel[track.id];
  return track.layouts.find(l => l.id === id) || track.layouts[0];
}
function getEntry(cls, trackId, layoutId) {
  const e = (((LAPTIMES[cls] || {})[trackId]) || {})[layoutId] || {};
  return { stefan: parseTime(e.stefan), joel: parseTime(e.joel) };
}
function winner(e) {
  if (e.stefan == null || e.joel == null) return null;
  return e.stefan < e.joel ? "stefan" : e.joel < e.stefan ? "joel" : null;
}

// ============================================================
//  HERO SCORE (alle Klassen, alle Layouts)
// ============================================================
function renderScore() {
  let s = 0, j = 0;
  CLASSES.forEach(c => TRACKS.forEach(t => t.layouts.forEach(l => {
    const w = winner(getEntry(c, t.id, l.id));
    if (w === "stefan") s++; else if (w === "joel") j++;
  })));
  document.getElementById("scoreStefan").textContent = s;
  document.getElementById("scoreJoel").textContent = j;
  const total = s + j || 1;
  document.getElementById("barStefan").style.width = (s / total * 100) + "%";
  document.getElementById("barJoel").style.width = (j / total * 100) + "%";
}

// ============================================================
//  KLASSEN-TABS
// ============================================================
function renderTabs() {
  const wrap = document.getElementById("classTabs");
  wrap.innerHTML = "";
  CLASSES.forEach(c => {
    const b = document.createElement("button");
    b.className = "class-tab" + (c === currentClass ? " active" : "");
    b.textContent = c;
    b.setAttribute("role", "tab");
    b.onclick = () => { currentClass = c; renderTabs(); renderTable(); };
    wrap.appendChild(b);
  });
}

// ============================================================
//  LAYOUT-TABS (pro Strecke)
// ============================================================
function layoutPills(track, onPick) {
  const wrap = document.createElement("div");
  wrap.className = "layout-pills";
  const cur = getLayout(track);
  track.layouts.forEach(l => {
    const b = document.createElement("button");
    b.className = "layout-pill" + (l.id === cur.id ? " active" : "");
    b.textContent = l.tab;
    b.title = l.name;
    b.onclick = (ev) => { ev.stopPropagation(); layoutSel[track.id] = l.id; onPick(l); };
    wrap.appendChild(b);
  });
  return wrap;
}

// ============================================================
//  TABELLE
// ============================================================
function miniSvg(layout) {
  const pts = getPts(layout.geo);
  const svg = el("svg", { class: "mini", viewBox: viewBox(pts, 0.06) });
  el("path", { class: "track", d: pathD(pts), ...NSS }, svg);
  const b = bbox(pts);
  el("line", { class: "sf", ...sfLine(pts, Math.max(b.w, b.h) * 0.045), ...NSS }, svg);
  return svg;
}

function buildRow(t, i) {
  const layout = getLayout(t);
  const e = getEntry(currentClass, t.id, layout.id);
  const best = winner(e);

  const tr = document.createElement("tr");
  tr.style.animationDelay = (i * 25) + "ms";

  const tdL = document.createElement("td");
  tdL.appendChild(miniSvg(layout));
  tr.appendChild(tdL);

  const tdN = document.createElement("td");
  tdN.innerHTML = `<div class="track-name">${t.name}</div>
    <div class="track-sub">${t.country} · ${layout.km.toFixed(3)} km</div>`;
  if (t.layouts.length > 1) {
    tdN.appendChild(layoutPills(t, () => {
      const nr = buildRow(t, 0);
      nr.style.animation = "none";
      tr.replaceWith(nr);
      renderSummary();
    }));
  } else {
    const single = document.createElement("div");
    single.className = "layout-single";
    single.textContent = layout.name;
    tdN.appendChild(single);
  }
  tr.appendChild(tdN);

  ["stefan", "joel"].forEach(d => {
    const td = document.createElement("td");
    const v = e[d];
    if (v == null) {
      td.innerHTML = `<span class="time none">–</span>`;
    } else {
      const other = e[d === "stefan" ? "joel" : "stefan"];
      let delta = "";
      if (other != null && v !== other) {
        const diff = v - other;
        delta = `<span class="delta">${diff > 0 ? "+" : "−"}${Math.abs(diff).toFixed(3)}</span>`;
      }
      const isBest = best === d;
      td.innerHTML = `<span class="time ${isBest ? "best" : ""}">
        <span>${fmtTime(v)}${isBest ? '<span class="badge">P1</span>' : ""}</span>${delta}</span>`;
    }
    tr.appendChild(td);
  });

  tr.onclick = () => openModal(t);
  return tr;
}

function renderSummary() {
  let s = 0, j = 0;
  TRACKS.forEach(t => {
    const w = winner(getEntry(currentClass, t.id, getLayout(t).id));
    if (w === "stefan") s++; else if (w === "joel") j++;
  });
  document.getElementById("classSummary").innerHTML = `
    <div class="pill stefan">Stefan schneller: <b>${s}</b></div>
    <div class="pill joel">Joel schneller: <b>${j}</b></div>
    <div class="pill">Klasse: <b>${currentClass}</b></div>`;
}

function renderTable() {
  const body = document.getElementById("tableBody");
  body.innerHTML = "";
  TRACKS.forEach((t, i) => body.appendChild(buildRow(t, i)));
  renderSummary();
}

// ============================================================
//  MODAL + ANIMATION
// ============================================================
const modal = document.getElementById("modal");
let rafId = null;
let activeTrack = null;

function openModal(track) {
  activeTrack = track;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  runAnimation(track);
}
function closeModal() {
  cancelAnimationFrame(rafId);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  renderTable(); // Layout-Wahl aus dem Modal übernehmen
}
modal.querySelectorAll("[data-close]").forEach(b => b.onclick = closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });
document.getElementById("mReplay").onclick = () => activeTrack && runAnimation(activeTrack);

function runAnimation(track) {
  cancelAnimationFrame(rafId);
  const layout = getLayout(track);
  const e = getEntry(currentClass, track.id, layout.id);

  document.getElementById("mClass").textContent = currentClass;
  document.getElementById("mTitle").textContent = track.name;
  document.getElementById("mLength").textContent = `${layout.name} · ${layout.km.toFixed(3)} km`;
  document.getElementById("mTimeStefan").textContent = e.stefan != null ? fmtTime(e.stefan) : "–";
  document.getElementById("mTimeJoel").textContent = e.joel != null ? fmtTime(e.joel) : "–";

  const tabs = document.getElementById("mLayouts");
  tabs.innerHTML = "";
  if (track.layouts.length > 1) tabs.appendChild(layoutPills(track, () => runAnimation(track)));

  const pts = getPts(layout.geo);
  const b = bbox(pts);
  const S = Math.max(b.w, b.h);
  const svg = document.getElementById("mSvg");
  svg.innerHTML = "";
  svg.setAttribute("viewBox", viewBox(pts, 0.07));
  const d = pathD(pts);
  el("path", { class: "track-outer", d, ...NSS }, svg);
  const path = el("path", { class: "track-inner", d, ...NSS }, svg);
  const L = path.getTotalLength();
  const gap = el("path", { class: "gap-seg", d, "stroke-width": S * 0.014 }, svg);
  el("line", { class: "sf", ...sfLine(pts, S * 0.035), ...NSS }, svg);

  const result = document.getElementById("mResult");
  const clock = document.getElementById("mClock");
  const zoomWrap = document.getElementById("mZoomWrap");
  result.classList.remove("show");
  zoomWrap.classList.remove("show");
  document.getElementById("mReplay").style.display = "";

  if (e.stefan == null || e.joel == null) {
    clock.textContent = "–";
    const missing = [e.stefan == null && "Stefan", e.joel == null && "Joel"].filter(Boolean).join(" und ");
    result.innerHTML = `Für <b>${missing}</b> ist in ${currentClass} auf diesem Layout noch keine Zeit eingetragen.`;
    result.classList.add("show");
    document.getElementById("mReplay").style.display = "none";
    return;
  }

  const fast = e.stefan <= e.joel ? "stefan" : "joel";
  const slow = fast === "stefan" ? "joel" : "stefan";
  const tF = e[fast], tS = e[slow];
  const ratio = tF / tS;
  const meters = (1 - ratio) * layout.km * 1000;

  const cars = {};
  [slow, fast].forEach(dr => {
    const g = el("g", {}, svg);
    el("circle", { class: `car ${dr} halo`, r: S * 0.026 }, g);
    el("circle", { class: `car ${dr}`, r: S * 0.013, "stroke-width": S * 0.004 }, g);
    const tag = el("text", {
      class: "tag", fill: `var(--${dr})`, x: S * 0.022, y: dr === fast ? -S * 0.02 : S * 0.045,
      "font-size": S * 0.036, "stroke-width": S * 0.008,
    }, g);
    tag.textContent = DRIVERS[dr];
    cars[dr] = g;
  });
  const place = (dr, frac) => {
    const pt = path.getPointAtLength((frac % 1) * L);
    cars[dr].setAttribute("transform", `translate(${pt.x},${pt.y})`);
  };
  place(fast, 0); place(slow, 0);

  const sPos = ratio * L;
  gap.setAttribute("stroke", `var(--${slow})`);
  gap.setAttribute("stroke-dasharray", `0 ${sPos} ${L - sPos} ${L}`);
  gap.classList.remove("show");

  let start = null;
  function frame(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / ANIM_MS, 1);
    place(fast, p === 1 ? 0 : p);
    place(slow, p * ratio);
    clock.textContent = fmtTime(p * tF);
    if (p < 1) {
      rafId = requestAnimationFrame(frame);
    } else {
      gap.classList.add("show");
      if (tF === tS) {
        result.innerHTML = `<div class="big">Exakt gleich schnell!</div>Beide mit ${fmtTime(tF)}.`;
      } else {
        renderZoom(pts, path, L, ratio, fast, slow);
        result.innerHTML = `
          <div>Als <span class="${fast}"><b>${DRIVERS[fast]}</b></span> über die Ziellinie fuhr, war
          <span class="${slow}"><b>${DRIVERS[slow]}</b></span> noch ca.</div>
          <div class="big"><span class="${slow}">${Math.round(meters)} m</span> zurück
          <span style="color:var(--muted);font-size:.8em">(+${(tS - tF).toFixed(3)} s)</span></div>`;
      }
      result.classList.add("show");
    }
  }
  rafId = requestAnimationFrame(frame);
}

// Vergrösserte Ansicht rund um die Ziellinie
function renderZoom(pts, path, L, ratio, fast, slow) {
  const z = document.getElementById("mZoom");
  z.innerHTML = "";
  const fin = path.getPointAtLength(0);
  const sp = path.getPointAtLength(ratio * L);
  const dist = Math.hypot(fin.x - sp.x, fin.y - sp.y);
  const w = Math.max(dist * 2.4, 60), h = w * 150 / 220;
  const cx = (fin.x + sp.x) / 2, cy = (fin.y + sp.y) / 2;
  z.setAttribute("viewBox", `${cx - w / 2} ${cy - h / 2} ${w} ${h}`);
  const d = pathD(pts);
  el("path", { class: "track-outer", d, ...NSS }, z);
  el("path", { class: "track-inner", d, ...NSS }, z);
  const sPos = ratio * L;
  el("path", { class: "gap-seg", d, stroke: `var(--${slow})`, "stroke-dasharray": `0 ${sPos} ${L - sPos} ${L}`, "stroke-width": w * 0.04 }, z);
  el("line", { class: "sf", ...sfLine(pts, w * 0.09), ...NSS }, z);
  const r = w * 0.03;
  el("circle", { class: `car ${slow}`, cx: sp.x, cy: sp.y, r, "stroke-width": r * 0.3 }, z);
  el("circle", { class: `car ${fast}`, cx: fin.x, cy: fin.y, r, "stroke-width": r * 0.3 }, z);
  document.getElementById("mZoomWrap").classList.add("show");
}

// ============================================================
//  START
// ============================================================
// Zeiten aus data.json laden (wird über "+ Neue Zeit" gefüllt)
async function loadTimes() {
  try {
    const r = await fetch(`data.json?t=${Date.now()}`, { cache: "no-store" });
    if (r.ok) return await r.json();
  } catch {}
  return {};
}

(async function init() {
  LAPTIMES = await loadTimes();
  renderScore();
  renderTabs();
  renderTable();
})();
