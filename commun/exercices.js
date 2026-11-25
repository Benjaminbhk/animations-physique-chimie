/* =====================================================================
   Moteur d'exercices commun (valeurs aléatoires, correction immédiate)
   ---------------------------------------------------------------------
   <link rel="stylesheet" href="../commun/exercices.css">
   <section class="scene exercices"> ... <div id="exo"></div> </section>
   <script src="../commun/exercices.js"></script>
   <script>
     Exo.monter('exo', [
       { id:'a', label:'Calculer n', rappel:'n = m / M ...', gen: () => ({
           enonce: 'html',
           questions: [
             { label:'1. Calcule n.', unite:'mol', rep: 0.0125, cs: 3 },       // nombre
             { label:'2. ...', choix:['flotte','coule'], rep: 0 },             // QCM
             { label:'3. ...', rep: 4, entier: true },                         // entier exact
             { label:'4. ...', rep: 10, cs: 0 }                                // nombre, CS non vérifiés
           ],
           correction: Exo.etape({ q:'1.', lit:'n = m / M', an:'n = …', res:'n = …' }) + ...
       }) }
     ]);
   </script>
   Règle : résultats avec le bon nombre de chiffres significatifs
   et en écriture scientifique (Exo.res).
   ===================================================================== */
(function () {
  'use strict';
  const SUP = { '-': '−' };

  /* ---------- hasard ---------- */
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const irnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  /* nombre aléatoire entre a et b arrondi à n chiffres significatifs */
  const rnd = (a, b, n = 3) => round(a + Math.random() * (b - a), n);
  const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };

  /* ---------- chiffres significatifs ---------- */
  const expo = x => x === 0 ? 0 : Math.floor(Math.log10(Math.abs(x)) + 1e-12);
  function round(x, n) {
    if (!isFinite(x) || x === 0) return x;
    const e = expo(x), f = Math.pow(10, n - 1 - e);
    return Math.round(x * f) / f;
  }
  const fr = (x, d) => x.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: false }).replace('-', '−');
  const sup = e => String(e).replace('-', SUP['-']);
  /* écriture scientifique : 1,25 × 10<sup>−2</sup> */
  function sci(x, n = 3) {
    if (x === 0) return fr(0, n - 1);
    let e = expo(round(x, n));
    const m = round(x, n) / Math.pow(10, e);
    return `${fr(m, n - 1)} × 10<sup>${sup(e)}</sup>`;
  }
  /* écriture « naturelle » quand elle garde les chiffres significatifs, scientifique sinon */
  function fmt(x, n = 3) {
    const r = round(x, n), e = expo(r);
    if (e >= n || e < -3) return sci(x, n);
    return fr(r, Math.max(0, n - 1 - e));
  }
  /* résultat final : valeur + unité, et écriture scientifique si l'exposant n'est pas 0 */
  function res(x, n = 3, unite = '') {
    const r = round(x, n), e = expo(r), u = unite ? ' ' + unite : '';
    const a = fmt(x, n), s = sci(x, n);
    return `<span class="exo-res">${a}${u}</span>` + (e !== 0 && a !== s ? ` = <span class="exo-res">${s}${u}</span>` : '');
  }

  /* ---------- lecture d'une réponse ---------- */
  function lire(txt) {
    let s = String(txt || '').trim().replace(/\s+/g, '').replace(/[−–]/g, '-').replace(/,/g, '.');
    if (!s) return null;
    let m = s.match(/^10\^([+-]?\d+)$/);
    if (m) return { v: Math.pow(10, +m[1]), cs: 1 };
    m = s.match(/^([+-]?(?:\d+\.?\d*|\.\d+))(?:(?:[x×*·]|\.)?10\^?([+-]?\d+)|e([+-]?\d+))?$/i);
    if (!m) return { v: NaN, cs: 0 };
    const mant = m[1], ex = m[2] !== undefined ? +m[2] : (m[3] !== undefined ? +m[3] : 0);
    const digits = mant.replace(/^[+-]/, '').replace('.', '').replace(/^0+/, '');
    return { v: parseFloat(mant) * Math.pow(10, ex), cs: Math.max(1, digits.length) };
  }
  /* compare une réponse numérique : 'ok', 'cs' (valeur juste, mauvais nombre de CS), 'ko' */
  function comparer(q, txt) {
    const r = lire(txt);
    if (!r) return { etat: 'vide' };
    if (!isFinite(r.v)) return { etat: 'illisible' };
    if (q.entier) return { etat: r.v === q.rep ? 'ok' : 'ko' };
    if (q.cs === 0) return { etat: Math.abs(r.v - q.rep) <= Math.abs(q.rep) * 0.005 + 1e-12 ? 'ok' : 'ko' };  // CS libres
    const n = q.cs || 3;
    const tol = Math.max(Math.pow(10, expo(q.rep) - n + 1) * (q.marge || 1), Math.abs(q.rep) * 1e-9);
    if (Math.abs(r.v - q.rep) > tol * 1.0001) return { etat: 'ko' };
    return { etat: r.cs === n ? 'ok' : 'cs', cs: r.cs };
  }

  /* ---------- blocs de correction ---------- */
  /* une étape : expression littérale, application numérique, résultat */
  function etape({ q = '', titre = '', lit = '', an = '', res: r = '', note = '' }) {
    let h = `<div class="exo-step">`;
    if (q || titre) h += `<div class="exo-st">${q} ${titre}</div>`;
    if (note) h += `<div>${note}</div>`;
    h += '<dl>';
    if (lit) h += `<dt>Expression littérale</dt><dd>${lit}</dd>`;
    if (an) h += `<dt>Application numérique</dt><dd>${an}</dd>`;
    if (r) h += `<dt>Résultat</dt><dd>${r}</dd>`;
    return h + '</dl></div>';
  }
  const texte = (q, html) => `<div class="exo-step"><div class="exo-st">${q}</div><div>${html}</div></div>`;

  /* ---------- montage d'un bloc d'exercices ---------- */
  let uid = 0;
  function monter(cible, types, opts = {}) {
    const box = typeof cible === 'string' ? document.getElementById(cible) : cible;
    if (!box || !types.length) return;
    const id = 'exo' + (++uid);
    const S = { type: types[0], ex: null, verifie: false, score: 0, total: 0 };
    box.innerHTML =
      (types.length > 1 ? `<div class="exo-types" role="group" aria-label="Type d'exercice">${types.map(t =>
        `<button type="button" data-t="${t.id}" aria-pressed="false">${t.label}</button>`).join('')}</div>` : '') +
      `<div class="exo-enonce" aria-live="polite"></div>
       <div class="exo-qs"></div>
       <div class="exo-btns">
         <button type="button" data-a="verif">Vérifier</button>
         <button type="button" class="ghost" data-a="corr">Voir la correction</button>
         <button type="button" class="ghost" data-a="new">Nouvel exercice</button>
         <span class="exo-score" aria-live="polite"></span>
       </div>
       <div class="exo-fb" aria-live="polite"></div>
       <div class="exo-corr"></div>
       <p class="exo-hint">Fais le calcul sur ta feuille : expression littérale, application numérique, puis résultat avec le bon nombre de chiffres significatifs.
         Tu peux écrire 0,0125 ou 1,25e-2 ou 1,25×10^-2.</p>
       <details class="exo-rappel" hidden><summary>Rappel</summary><div></div></details>`;
    const $ = s => box.querySelector(s);

    function nouveau() {
      S.ex = S.type.gen();
      S.verifie = false;
      $('.exo-enonce').innerHTML = S.ex.enonce;
      $('.exo-qs').innerHTML = S.ex.questions.map((q, i) => {
        const lid = `${id}-l${i}`;
        if (q.choix) {
          return `<div class="exo-q" role="radiogroup" aria-labelledby="${lid}"><div class="exo-lbl" id="${lid}">${q.label}</div>
            <div class="exo-row"><div class="exo-choices">${q.choix.map((c, j) =>
              `<label class="exo-choice"><input type="radio" name="${id}-q${i}" value="${j}"> ${c}</label>`).join('')}</div>
            <span class="exo-mark" data-m="${i}"></span></div></div>`;
        }
        return `<div class="exo-q"><label class="exo-lbl" id="${lid}" for="${id}-q${i}">${q.label}</label>
          <div class="exo-row"><input type="text" id="${id}-q${i}" inputmode="${q.entier ? 'numeric' : 'decimal'}" autocomplete="off" spellcheck="false">
          ${q.unite ? `<span class="exo-unit">${q.unite}</span>` : ''}<span class="exo-mark" data-m="${i}"></span></div></div>`;
      }).join('');
      $('.exo-fb').className = 'exo-fb'; $('.exo-fb').innerHTML = '';
      $('.exo-corr').innerHTML = '';
      const rp = $('.exo-rappel');
      if (S.type.rappel) { rp.hidden = false; rp.querySelector('div').innerHTML = S.type.rappel; } else rp.hidden = true;
      $('.exo-hint').hidden = !S.ex.questions.some(q => !q.choix && !q.entier);
      box.querySelectorAll('.exo-types button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.t === S.type.id)));
    }
    function correction() {
      $('.exo-corr').innerHTML = `<h3>Correction</h3>${S.ex.correction}`;
    }
    function verifier() {
      let nOk = 0, nCs = 0, vide = 0;
      S.ex.questions.forEach((q, i) => {
        const mk = $(`[data-m="${i}"]`);
        let etat;
        if (q.choix) {
          const c = box.querySelector(`input[name="${id}-q${i}"]:checked`);
          etat = !c ? 'vide' : (+c.value === q.rep ? 'ok' : 'ko');
        } else {
          const r = comparer(q, document.getElementById(`${id}-q${i}`).value);
          etat = r.etat;
          if (etat === 'cs') { mk.className = 'exo-mark mid'; mk.textContent = `≈ valeur juste, mais ${r.cs} chiffre${r.cs > 1 ? 's' : ''} significatif${r.cs > 1 ? 's' : ''} au lieu de ${q.cs || 3}`; nCs++; return; }
        }
        if (etat === 'ok') { nOk++; mk.className = 'exo-mark ok'; mk.textContent = '✓ Juste'; }
        else if (etat === 'vide') { vide++; mk.className = 'exo-mark ko'; mk.textContent = 'Pas de réponse'; }
        else if (etat === 'illisible') { mk.className = 'exo-mark ko'; mk.textContent = '✗ Écris un nombre (par exemple 2,50 ou 2,50e-3)'; }
        else { mk.className = 'exo-mark ko'; mk.textContent = '✗ Pas juste'; }
      });
      const N = S.ex.questions.length, tout = nOk === N;
      if (vide === N) { $('.exo-fb').className = 'exo-fb ko'; $('.exo-fb').textContent = 'Réponds d’abord aux questions.'; return; }
      if (!S.verifie) { S.verifie = true; S.total++; if (tout) S.score++; }
      const fb = $('.exo-fb');
      if (tout) { fb.className = 'exo-fb ok'; fb.innerHTML = '<strong>Bravo, tout est juste !</strong> Compare ta rédaction avec la correction.'; correction(); }
      else if (nOk + nCs === N) { fb.className = 'exo-fb mid'; fb.innerHTML = '<strong>Presque !</strong> Les valeurs sont justes, mais vérifie le nombre de chiffres significatifs : le résultat en a autant que la donnée qui en a le moins.'; }
      else { fb.className = 'exo-fb ko'; fb.innerHTML = `<strong>${nOk} réponse${nOk > 1 ? 's' : ''} juste${nOk > 1 ? 's' : ''} sur ${N}.</strong> Corrige puis vérifie à nouveau, ou regarde la correction.`; }
      $('.exo-score').textContent = `Score : ${S.score} / ${S.total}`;
    }
    box.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || !box.contains(b)) return;
      if (b.dataset.t) { S.type = types.find(t => t.id === b.dataset.t); nouveau(); }
      else if (b.dataset.a === 'verif') verifier();
      else if (b.dataset.a === 'corr') correction();
      else if (b.dataset.a === 'new') nouveau();
    });
    box.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('input[type=text]')) { e.preventDefault(); verifier(); } });
    nouveau();
    return { nouveau, choisir: tid => { S.type = types.find(t => t.id === tid) || S.type; nouveau(); } };
  }

  window.Exo = { monter, etape, texte, round, fmt, sci, res, fr, expo, lire, comparer, pick, irnd, rnd, shuffle };
})();
