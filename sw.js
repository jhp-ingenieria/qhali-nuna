/* Qhali Nuna: hace que la app se pueda instalar y abrir aunque la señal sea débil.
   Siempre intenta traer la versión más nueva de internet; si no hay conexión, usa la guardada. */
const CACHE = 'qhali-nuna-v10';
const CORE = [
  './', 'index.html', 'app.html', 'tests.html', 'blog.html', 'articulo.html', 'test.html', 'sesion.html', 'tests-data.js',
  'styles.css', 'main.js', 'config.js', 'articulos.js', 'logo-qhali-nuna.jpg',
  'icons/icon-192.png', 'icons/icon-512.png', 'manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: req.mode === 'navigate' }).then(r => r || caches.match('app.html')))
  );
});
