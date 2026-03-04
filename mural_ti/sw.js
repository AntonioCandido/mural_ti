
const CACHE_NAME = 'muralti-v4-offline';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/index.tsx',
  '/App.tsx',
  // Pre-cache fonts and icons
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm4df9O7CxNEqj59.woff2'
];

// Installation: Cache core static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Pre-caching core assets');
      return cache.addAll(STATIC_ASSETS).catch(err => console.warn('Some assets failed to pre-cache', err));
    })
  );
  self.skipWaiting();
});

// Activation: Clean up old caches
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

// Interception: Dynamic caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests and exclude internal tools
  if (request.method !== 'GET' || !request.url.startsWith('http')) return;

  // Strategy: Network First for API/Dynamic content, Cache First for Static/Media
  const isStatic = STATIC_ASSETS.some(asset => request.url.includes(asset)) || 
                   request.url.includes('unsplash.com') || 
                   request.url.includes('lucide-react');

  if (isStatic) {
    // Cache-First with Network Fallback
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            const cacheCopy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, cacheCopy));
          }
          return networkResponse;
        });
      })
    );
  } else {
    // Network-First with Cache Fallback for dynamic content (API-like resources)
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse.status === 200) {
            const cacheCopy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, cacheCopy));
          }
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
  }
});
