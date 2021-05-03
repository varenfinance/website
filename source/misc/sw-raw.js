if (location.hostname !== "localhost" ) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

  workbox.precaching.precacheAndRoute([]);

  self.addEventListener('install', event => {
    const urls = [
      'https://cdn.ampproject.org/v0.js',
      'https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js'
    ];
    const cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(urls)));
  });

  workbox.routing.registerRoute(/(.*)html|(.*)\/$/, workbox.strategies.networkFirst())
  workbox.routing.registerRoute(/\.(?:js|css|png|gif|jpg|webp|svg)$/,
    workbox.strategies.cacheFirst()
  );
  workbox.routing.registerRoute(/(.*)cdn\.ampproject\.org(.*)/,
    workbox.strategies.staleWhileRevalidate()
  );
}
