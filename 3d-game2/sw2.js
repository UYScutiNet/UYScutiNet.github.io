importScripts("precache-manifest.c72425452be00a56a2ff9bcb11ba3a88.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// Install stage sets up the index page (home page) in the cache and opens a new cache
self.addEventListener("install", event => {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  workbox.googleAnalytics.initialize();
  workbox.routing.registerRoute(
    new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
    workbox.strategies.cacheFirst({
      cacheName: "google-fonts",
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        })
      ]
    })
  );
});

