const filesToCache = [
	"TinyEPUBReader.htm",
	"TinyEPUBReader.json",
	"TinyEPUBReader.png",
	"TinyEPUBReaderFavIcon_16x16.png",
	"TinyEPUBReaderFavIcon_192x192.png",
	"TinyEPUBReaderFavIcon_512x512.png",
	"TinyEPUBReaderShare.png"
];

const staticCacheName = "tinyepubreader-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});