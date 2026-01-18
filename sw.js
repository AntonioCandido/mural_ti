
const CACHE_NAME = 'muralti-v2-offline';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/candido.png',
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
];

// Instalação: Cacheia os recursos estáticos principais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Pre-caching assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Ativação: Limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Interceptação de requisições: Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  // Ignorar requisições que não sejam GET ou de esquemas que não suportamos (ex: chrome-extension)
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Atualiza o cache com a nova versão
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        }).catch(() => {
          // Se falhar o fetch (offline total) e não houver cache, retorna erro amigável ou nada
          return cachedResponse;
        });

        // Retorna o cache imediatamente se houver, ou espera a rede
        return cachedResponse || fetchPromise;
      });
    })
  );
});
