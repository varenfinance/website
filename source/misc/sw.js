if (location.hostname !== "localhost" ) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

  workbox.precaching.precacheAndRoute([
  {
    "url": "assets/images/banner-website.png",
    "revision": "d63f0480b32f444d3cfe1362465b225b"
  },
  {
    "url": "assets/images/coingecko.svg",
    "revision": "ee707ce1ece1064c13de425e706bea2d"
  },
  {
    "url": "assets/images/coinmarketcap.svg",
    "revision": "d2e0e2240231fba1ae0806bb9af699ac"
  },
  {
    "url": "assets/images/debank.svg",
    "revision": "751828fca674ea731a48932f119cbd97"
  },
  {
    "url": "assets/images/defipulse.svg",
    "revision": "ae826f4827c2d0c024cac417c2345fff"
  },
  {
    "url": "assets/images/discord.svg",
    "revision": "77de8f28ad9ff9d6c864cc0ca4ddd708"
  },
  {
    "url": "assets/images/github.png",
    "revision": "de02e5b7a940434921cfd5a10d0f7741"
  },
  {
    "url": "assets/images/github.svg",
    "revision": "b9783e366ad29eb3931e852f3de94765"
  },
  {
    "url": "assets/images/logo-square.png",
    "revision": "7652f54e4607d91f161388fc68268847"
  },
  {
    "url": "assets/images/logo-square.svg",
    "revision": "f730a01d340bcb7cc217cb5ceb132508"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "fdd46561dcc4e04dbe794df4d080fdca"
  },
  {
    "url": "assets/images/logo.svg",
    "revision": "ba7884c667cb6c2b01b73401621e6bd0"
  },
  {
    "url": "assets/images/medium.svg",
    "revision": "d324f839af313a4b7400705ca23de758"
  },
  {
    "url": "assets/images/telegram.svg",
    "revision": "ddd7e68c963fa4fefcd512545a4fc706"
  },
  {
    "url": "assets/images/twitter.svg",
    "revision": "25cf97a8fdd2930470140e83a1a4ab98"
  },
  {
    "url": "assets/images/zerion.svg",
    "revision": "99309ab572c838a38e56d99495dd3871"
  },
  {
    "url": "index.html",
    "revision": "87bbafd0fa43fe151b72a885c9ef6206"
  },
  {
    "url": "install-service-worker.html",
    "revision": "07f25cfdf2f183a15b6786169ed765f8"
  }
]);

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
