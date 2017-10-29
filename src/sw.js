/* eslint-disable */

var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        'index.html',
        '_config.yml',
        'img/favicon.png',
        'img/icon-72x72.png',
        'img/icon-96x96.png',
        'img/icon-128x128.png',
        'img/icon-144x144.png',
        'img/icon-152x152.png',
        'img/icon-192x192.png',
        'img/icon-384x384.png',
        'img/icon-512x512.png',
        'img/logo.png',
        'fonts/ionicons.eot',
        'fonts/ionicons.svg',
        'fonts/ionicons.ttf',
        'fonts/ionicons.woff',
        'fonts/Josefin-Sans.ttf.eot',
        'fonts/Josefin-Sans.ttf.svg',
        'fonts/Josefin-Sans.ttf.woff',
        'css/app.css',
        'css/lib.css',
        'js/app.js',
        'js/lib.js',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});
