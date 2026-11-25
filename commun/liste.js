// Affiche les simulations d'un niveau (page seconde/ ou quatrieme/).
// Le niveau est lu dans <body data-niveau="...">. Les liens pointent vers ../<dossier>/.
(() => {
  const NIV = document.body.dataset.niveau || 'seconde';
  const niveau = (window.NIVEAUX || []).find(n => n.id === NIV) || { id: NIV, titre: NIV };
  const THEMES = niveau.themes || window.THEMES || [];
  const niveauDe = window.niveauDe || (s => s.niveau || 'seconde');
  const CAT = (window.CATALOGUE || []).filter(s => niveauDe(s) === NIV);
  const list = document.getElementById('list'), chips = document.getElementById('chips'), q = document.getElementById('q'), none = document.getElementById('none');
  const KEY = 'sim-filtre-' + NIV;
  let filtre = 'tous';
  try { filtre = localStorage.getItem(KEY) || 'tous'; } catch (e) {}
  if (filtre !== 'tous' && !THEMES.some(t => t.id === filtre)) filtre = 'tous';
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function makeChips() {
    const opts = [{ id: 'tous', titre: 'Tous les thèmes' }, ...THEMES];
    chips.innerHTML = opts.map(t => `<button type="button" class="chip" data-id="${t.id}" aria-pressed="${t.id === filtre}">${esc(t.titre)}</button>`).join('');
    chips.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
      filtre = b.dataset.id; try { localStorage.setItem(KEY, filtre); } catch (e) {}
      chips.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', x === b)); render();
    }));
  }
  function card(s, th) {
    const tags = (s.mots || []).slice(0, 4).map(m => `<span class="tag">${esc(m)}</span>`).join('');
    const thumb = s.statut === 'en-ligne'
      ? `<img src="../${esc(s.dossier)}/apercu.jpg" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'ph',textContent:'⚗️'}))">`
      : `<span class="ph">⏳</span>`;
    const inner = `<div class="thumb">${thumb}</div><div class="body">
      <span class="kicker" style="color:${th.couleur}">${esc(s.chapitre || '')}</span>
      <h3>${esc(s.titre)}</h3>${s.statut === 'bientot' ? '<span class="badge">Bientôt</span>' : ''}
      <p>${esc(s.resume || '')}</p><div class="tags">${tags}</div></div>`;
    return s.statut === 'en-ligne'
      ? `<a class="card" href="../${esc(s.dossier)}/">${inner}</a>`
      : `<div class="card soon" aria-disabled="true">${inner}</div>`;
  }
  function render() {
    const term = norm(q.value.trim());
    let total = 0, html = '';
    for (const th of THEMES) {
      if (filtre !== 'tous' && filtre !== th.id) continue;
      const items = CAT.filter(s => s.theme === th.id && (!term ||
        norm([s.titre, s.resume, s.chapitre, ...(s.mots || [])].join(' ')).includes(term)));
      items.sort((a, b) => (a.statut === 'bientot') - (b.statut === 'bientot'));
      total += items.length;
      if (term && !items.length) continue;
      const online = items.filter(s => s.statut === 'en-ligne').length;
      html += `<section class="theme" aria-labelledby="h-${th.id}"><h2 id="h-${th.id}"><span class="dot" style="background:${th.couleur}"></span>${esc(th.titre)}
        <span class="count">${online} simulation${online > 1 ? 's' : ''}</span></h2>
        ${items.length ? `<div class="grid">${items.map(s => card(s, th)).join('')}</div>` : `<div class="empty">Les simulations de ce thème arrivent bientôt.</div>`}</section>`;
    }
    list.innerHTML = html;
    none.hidden = !(term && total === 0);
  }
  makeChips(); render();
  q.addEventListener('input', render);
})();
