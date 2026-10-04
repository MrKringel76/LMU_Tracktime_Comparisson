// ============================================================
//  ADMIN: Login + neue Zeiten speichern (über die GitHub-API)
// ============================================================
const GH = {
  owner:  "MrKringel76",
  repo:   "LMU_Tracktime_Comparisson",
  branch: "main",
  path:   "data.json",
};
const ADMIN_USER = "adminLMU";
// SHA-256 vom Passwort (das Passwort selbst steht nicht im Code)
const ADMIN_PW_HASH = "6a40cd9f8d32446645ac817d6a84bccd0ce3084044998bcfd2c8544599ac143e";

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}
const b64encode = (str) => { const bytes = new TextEncoder().encode(str); let bin = ""; bytes.forEach(b => bin += String.fromCharCode(b)); return btoa(bin); };
const b64decode = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, "")), c => c.charCodeAt(0)));

// ---------- GitHub lesen/schreiben ----------
function ghHeaders(token) {
  return { "Authorization": `Bearer ${token}`, "Accept": "application/vnd.github+json" };
}
const ghUrl = () => `https://api.github.com/repos/${GH.owner}/${GH.repo}/contents/${GH.path}`;

async function ghRead(token) {
  const r = await fetch(`${ghUrl()}?ref=${GH.branch}&t=${Date.now()}`, { headers: ghHeaders(token), cache: "no-store" });
  if (r.status === 404) return { data: {}, sha: null };
  if (r.status === 401 || r.status === 403) throw new Error("Token ungültig oder ohne Schreibrecht.");
  if (!r.ok) throw new Error(`GitHub-Fehler ${r.status}`);
  const j = await r.json();
  return { data: JSON.parse(b64decode(j.content) || "{}"), sha: j.sha };
}

async function ghWrite(token, data, sha, message) {
  const body = { message, content: b64encode(JSON.stringify(data, null, 2) + "\n"), branch: GH.branch };
  if (sha) body.sha = sha;
  const r = await fetch(ghUrl(), { method: "PUT", headers: ghHeaders(token), body: JSON.stringify(body) });
  if (r.status === 401 || r.status === 403) throw new Error("Token ungültig oder ohne Schreibrecht.");
  if (r.status === 409) throw new Error("Konflikt – bitte nochmal speichern.");
  if (!r.ok) throw new Error(`GitHub-Fehler ${r.status}`);
}

// ---------- Login-State ----------
const isLoggedIn = () => store.get("lmu_admin") === "1";

function updateAdminUI() {
  const on = isLoggedIn();
  document.getElementById("btnLogin").hidden = on;
  document.getElementById("btnAdd").hidden = !on;
  document.getElementById("btnLogout").hidden = !on;
}

// ---------- Dialog-Helfer ----------
function openDlg(id) { const d = document.getElementById(id); d.classList.add("open"); d.setAttribute("aria-hidden", "false"); }
function closeDlg(id) { const d = document.getElementById(id); d.classList.remove("open"); d.setAttribute("aria-hidden", "true"); }
document.querySelectorAll("[data-close-dlg]").forEach(b => b.addEventListener("click", () => closeDlg(b.dataset.closeDlg)));
document.addEventListener("keydown", e => { if (e.key === "Escape") ["dlgLogin", "dlgAdd"].forEach(closeDlg); });

// ---------- Login ----------
document.getElementById("btnLogin").onclick = () => {
  document.getElementById("loginErr").textContent = "";
  document.getElementById("formLogin").reset();
  openDlg("dlgLogin");
  setTimeout(() => document.getElementById("inUser").focus(), 50);
};
document.getElementById("formLogin").onsubmit = async (ev) => {
  ev.preventDefault();
  const u = document.getElementById("inUser").value.trim();
  const p = document.getElementById("inPw").value;
  if (u === ADMIN_USER && (await sha256(p)) === ADMIN_PW_HASH) {
    store.set("lmu_admin", "1");
    closeDlg("dlgLogin");
    updateAdminUI();
  } else {
    document.getElementById("loginErr").textContent = "Benutzername oder Passwort falsch.";
  }
};
document.getElementById("btnLogout").onclick = () => { store.del("lmu_admin"); updateAdminUI(); };

// ---------- Neue Zeit ----------
const selClass = document.getElementById("inClass");
const selTrack = document.getElementById("inTrack");
const selLayout = document.getElementById("inLayout");
const selDriver = document.getElementById("inDriver");
const inTime = document.getElementById("inTime");
const inToken = document.getElementById("inToken");

function fillSelect(sel, items) {
  sel.innerHTML = items.map(([v, t]) => `<option value="${v}">${t}</option>`).join("");
}
function fillLayouts() {
  const t = TRACKS.find(t => t.id === selTrack.value);
  fillSelect(selLayout, t.layouts.map(l => [l.id, l.name]));
  selLayout.disabled = t.layouts.length < 2;
  showCurrent();
}
function showCurrent() {
  const e = (((LAPTIMES[selClass.value] || {})[selTrack.value]) || {})[selLayout.value] || {};
  const cur = e[selDriver.value];
  document.getElementById("curTime").textContent = cur ? `Aktuell eingetragen: ${cur}` : "Noch keine Zeit eingetragen.";
}
[selClass, selLayout, selDriver].forEach(s => s.addEventListener("change", showCurrent));
selTrack.addEventListener("change", fillLayouts);

document.getElementById("btnAdd").onclick = () => {
  fillSelect(selClass, CLASSES.map(c => [c, c]));
  selClass.value = currentClass;
  fillSelect(selTrack, TRACKS.map(t => [t.id, t.name]));
  fillLayouts();
  inTime.value = "";
  document.getElementById("addErr").textContent = "";
  document.getElementById("addOk").textContent = "";
  const hasToken = !!store.get("lmu_gh_token");
  document.getElementById("tokenRow").hidden = hasToken;
  document.getElementById("tokenSaved").hidden = !hasToken;
  openDlg("dlgAdd");
  setTimeout(() => inTime.focus(), 50);
};
document.getElementById("btnForgetToken").onclick = () => {
  store.del("lmu_gh_token");
  document.getElementById("tokenRow").hidden = false;
  document.getElementById("tokenSaved").hidden = true;
};

document.getElementById("formAdd").onsubmit = async (ev) => {
  ev.preventDefault();
  const err = document.getElementById("addErr"), ok = document.getElementById("addOk");
  err.textContent = ""; ok.textContent = "";

  const raw = inTime.value.trim().replace(",", ".");
  const m = raw.match(/^(\d{1,2}):([0-5]\d)\.(\d{3})$/);
  if (!m) { err.textContent = "Zeit bitte im Format m:ss.mmm eingeben, z.B. 1:47.312"; return; }
  const time = `${parseInt(m[1])}:${m[2]}.${m[3]}`;

  let token = store.get("lmu_gh_token");
  if (!token) {
    token = inToken.value.trim();
    if (!token) { err.textContent = "Bitte einmalig deinen GitHub-Token einfügen."; return; }
  }

  const cls = selClass.value, tr = selTrack.value, lay = selLayout.value, drv = selDriver.value;
  const btn = document.getElementById("btnSave");
  btn.disabled = true; btn.textContent = "Speichere …";
  try {
    const { data, sha } = await ghRead(token);
    data[cls] = data[cls] || {};
    data[cls][tr] = data[cls][tr] || {};
    data[cls][tr][lay] = data[cls][tr][lay] || {};
    data[cls][tr][lay][drv] = time;
    const t = TRACKS.find(x => x.id === tr), l = t.layouts.find(x => x.id === lay);
    await ghWrite(token, data, sha, `${DRIVERS[drv]}: ${time} – ${l.name} (${cls})`);
    store.set("lmu_gh_token", token);
    LAPTIMES = data;
    currentClass = cls;
    layoutSel[tr] = lay;
    renderScore(); renderTabs(); renderTable();
    ok.textContent = `Gespeichert! Für alle sichtbar in ca. 1 Minute.`;
    document.getElementById("tokenRow").hidden = true;
    document.getElementById("tokenSaved").hidden = false;
    inTime.value = "";
    showCurrent();
  } catch (e) {
    err.textContent = e.message || "Speichern fehlgeschlagen.";
  } finally {
    btn.disabled = false; btn.textContent = "Speichern";
  }
};

updateAdminUI();
