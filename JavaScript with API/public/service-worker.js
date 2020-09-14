"use strict";

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";
// Add list of files to cache here.
const FILES_TO_CACHE = [
  "/index.html",
  "/about.html",
  "/index.js",
  "/images/icons/icon-32x32.png",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-256x256.png",
  "/images/icons/icon-512x512.png",
  "/images/add.svg",
  "/images/clear-day.svg",
  "/images/clear-night.svg",
  "/images/cloudy.svg",
  "/images/favicon.ico",
  "/images/fog.svg",
  "/images/hail.svg",
  "/images/install.svg",
  "/images/partly-cloudy-day.svg",
  "/images/partly-cloudy-night.svg",
  "/images/rain.svg",
  "/images/refresh.svg",
  "/images/sleet.svg",
  "/images/snow.svg",
  "/images/thunderstorm.svg",
  "/images/tornado.svg",
  "/images/wind.svg",
];
// Install event
self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  // Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});
// Activate event
self.addEventListener("activate", (evt) => {
  console.log("[ServiceWorker] Activate");
  // Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);
  // CODELAB: Add fetch event handler here.
  if (evt.request.url.includes("/forecast/")) {
    console.log("[Service Worker] Fetch (data)", evt.request.url);
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(evt.request)
          .then((response) => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }
            return response;
          })
          .catch((err) => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      })
    );
    return;
  }
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return response || fetch(evt.request);
      });
    })
  );
});
