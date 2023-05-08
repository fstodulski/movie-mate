/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

declare let self: ServiceWorkerGlobalScope;

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
  const addFilesToCache = async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  };

  event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
  const deleteOldCaches = async () => {
    const keys = await caches.keys();
    for (const key of keys) {
      if (key !== CACHE) await caches.delete(key);
    }
  };

  event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
  // ignore POST requests etc
  if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

  async function respond() {
    const url = new URL(event.request.url);
    url.hostname === self.location.hostname && url.port !== self.location.port;
    const isStaticAsset = url.host === self.location.host && ASSETS.includes(url.pathname);

    const cache = await caches.open(CACHE);

    // `build`/`files` can always be served from the cache
    if (ASSETS.includes(url.pathname)) {
      return cache.match(url.pathname);
    }

    // for everything else, try the network first, but
    // fall back to the cache if we're offline
    try {
      const response = await fetch(event.request);

      if (response.status === 200) {
        cache.put(event.request, response.clone());
      }

      return response;
    } catch {
      return cache.match(event.request);
    }
  }

  event.respondWith(respond());
});
