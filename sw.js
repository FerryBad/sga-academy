const CACHE_NAME = 'sga-academy-v6-tier-recap';;
const APP_SHELL = [
  "./", "./index.html", "./manifest.json", "./favicon.png",
  "./icons/icon-32.png", "./icons/icon-48.png", "./icons/icon-64.png", "./icons/icon-96.png",
  "./icons/icon-120.png", "./icons/icon-152.png", "./icons/icon-167.png", "./icons/icon-180.png",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-1024.png",
  "./icons/icon-192-maskable.png", "./icons/icon-512-maskable.png", "./icons/icon-1024-maskable.png",
  "./icons/apple-touch-icon.png", "./icons/apple-touch-icon-120x120.png",
  "./icons/apple-touch-icon-152x152.png", "./icons/apple-touch-icon-167x167.png", "./icons/apple-touch-icon-180x180.png"
];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", event => { if (event.request.method !== "GET") return; event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy)); return response; }).catch(()=>caches.match("./index.html")))); });
