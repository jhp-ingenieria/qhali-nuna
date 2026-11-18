/* Qhali Nuna: funciones compartidas por todas las páginas */
(() => {
  const root = document.documentElement;
  root.classList.remove('no-js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const QN = window.QN || { whatsapp: {}, precios: {}, promociones: [] };
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- WhatsApp links ---------- */
  const waUrl = (sede, msg) => {
    const n = (QN.whatsapp[sede] || {}).numero;
    const text = msg || `Hola, quiero pedir una cita${sede === 'espinar' ? ' en Espinar' : sede === 'sicuani' ? ' en Sicuani' : ''}`;
    return n ? `https://wa.me/${n}?text=${encodeURIComponent(text)}` : '#locales';
  };
  window.qnWa = waUrl;
  $$('[data-wa]').forEach(a => { a.href = waUrl(a.dataset.wa, a.dataset.waMsg); a.target = '_blank'; a.rel = 'noopener'; });
  $$('[data-wa-num]').forEach(el => { el.textContent = (QN.whatsapp[el.dataset.waNum] || {}).visible || ''; });

  /* ---------- prices ---------- */
  $$('[data-price]').forEach(el => {
    const v = (QN.precios || {})[el.dataset.price];
    if (v) { el.textContent = v; el.classList.remove('ask'); }
    else { el.textContent = 'Consulta el precio'; el.classList.add('ask'); }
  });

  /* ---------- promotions ---------- */
  const promos = (QN.promociones || []).filter(p => p.activa);
  const rot = $('.promo-rotator');
  if (rot) {
    const msgs = [...promos.map(p => `<b>${p.titulo}:</b> ${p.texto}`), 'Atendemos en Espinar, en Sicuani y en línea por videollamada'];
    rot.innerHTML = msgs.map((m, i) => `<span class="${i ? '' : 'is-on'}">${m}</span>`).join('');
    const items = $$('span', rot);
    if (items.length > 1 && !reduce) { let i = 0; setInterval(() => { items[i].classList.remove('is-on'); i = (i + 1) % items.length; items[i].classList.add('is-on'); }, 4500); }
  }
  $$('[data-promo]').forEach(el => {
    const p = promos[0];
    if (!p) { el.hidden = true; return; }
    const f = el.dataset.promo;
    if (f === 'box') return;
    el.textContent = p[f] || '';
  });

  /* ---------- hero entrance ---------- */
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-loaded')));

  /* ---------- marquees ---------- */
  $$('.marquee__track').forEach(t => { const item = $('[data-loop]', t); if (item) t.appendChild(item.cloneNode(true)); });

  /* ---------- scroll reveal ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  $$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));

  /* ---------- "cómo funciona" mocks ---------- */
  const opts = $$('[data-cycle] .option');
  if (opts.length && !reduce) { let i = 0; setInterval(() => { opts[i].classList.remove('is-picked'); i = (i + 1) % opts.length; opts[i].classList.add('is-picked'); }, 2200); }
  $$('.typing').forEach(t => {
    const card = t.closest('.reveal'); if (!card) return;
    const done = () => setTimeout(() => t.remove(), 900);
    if (card.classList.contains('is-in')) return done();
    const obs = new MutationObserver(() => { if (card.classList.contains('is-in')) { done(); obs.disconnect(); } });
    obs.observe(card, { attributes: true });
  });

  /* ---------- header, floating button ---------- */
  const header = $('#header'), wa = $('#wa-float'), hero = $('.hero');
  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', scrollY > 8);
    if (wa) wa.classList.toggle('is-on', scrollY > (hero ? hero.offsetHeight * 0.8 : 200));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- mobile menu ---------- */
  const btn = $('.menu-btn'), menu = $('#menu');
  if (btn && menu) {
    const setMenu = open => { btn.setAttribute('aria-expanded', open); btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); menu.classList.toggle('is-open', open); };
    btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
    $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---------- FAQ accordion ---------- */
  $$('.faq details').forEach(d => {
    const s = $('summary', d), a = $('.answer', d);
    s.addEventListener('click', e => {
      if (reduce) return;
      e.preventDefault();
      if (d.open) {
        a.animate([{ height: a.offsetHeight + 'px' }, { height: '0px' }], { duration: 300, easing: 'ease' }).onfinish = () => { d.open = false; };
      } else {
        $$('.faq details[open]').forEach(o => { if (o !== d) $('summary', o).click(); });
        d.open = true; const h = a.offsetHeight;
        a.animate([{ height: '0px' }, { height: h + 'px' }], { duration: 350, easing: 'ease' });
      }
    });
  });

  /* ---------- choose office sheet ---------- */
  const sheet = $('#sheet');
  if (sheet) {
    const open = e => { e.preventDefault(); sheet.classList.add('is-open'); $('a', sheet).focus(); };
    const close = () => sheet.classList.remove('is-open');
    $$('[data-choose]').forEach(b => b.addEventListener('click', open));
    sheet.addEventListener('click', e => { if (e.target === sheet || e.target.closest('[data-close]')) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- installable app (PWA) ---------- */
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
  let deferred = null;
  const installBtns = $$('[data-install]');
  const help = $('#install-help');
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; });
  addEventListener('appinstalled', () => { deferred = null; if (help) { help.hidden = false; help.textContent = 'Listo: la app de Qhali Nuna ya está instalada.'; } });
  installBtns.forEach(b => b.addEventListener('click', async () => {
    if (standalone) { if (help) { help.hidden = false; help.textContent = 'Ya estás usando la app de Qhali Nuna.'; } return; }
    if (deferred) { deferred.prompt(); await deferred.userChoice; deferred = null; return; }
    if (!help) return;
    help.hidden = false;
    help.innerHTML = isIOS
      ? 'En iPhone: abre esta página en <b>Safari</b>, toca el botón <b>Compartir</b> y elige <b>“Agregar a inicio”</b>.'
      : location.protocol.startsWith('http')
        ? 'En Android: abre el menú de Chrome (⋮) y toca <b>“Instalar app”</b>. En computadora: haz clic en el ícono de instalar que aparece en la barra de direcciones de Chrome o Edge.'
        : 'La instalación funciona cuando la página esté publicada en internet. Por ahora puedes usar la app aquí mismo.';
  }));
})();

/* filtro de servicios */
(() => {
  const btns = document.querySelectorAll('.svc-filter__btn'); if (!btns.length) return;
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', x === b); });
    document.querySelectorAll('.services--grid .service').forEach(s => {
      const show = b.dataset.filter === 'todos' || s.dataset.group === b.dataset.filter;
      s.classList.toggle('is-hidden', !show); if (show) s.classList.add('is-in');
    });
  }));
})();

/* "Mi sesión en línea" solo aparece cuando hay al menos una sala de Meet configurada */
(() => {
  const ok = ((window.QN || {}).psicologos || []).some(p => p.meet);
  if (!ok) document.querySelectorAll('[data-meet-link]').forEach(el => { el.hidden = true; el.style.display = 'none'; });
})();
