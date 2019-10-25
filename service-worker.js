const version = "1.07";
const cacheName = "jb-${version}";

self.addEventListener("install", e => {
	console.log('Service worker installing...');
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				"/",
				"/android-icon-36.png",
				"/android-icon-48.png",
				"/android-icon-72.png",
				"/android-icon-96.png",
				"/android-icon-144.png",
				"/android-icon-192.png",
				"/apple-icon.png",
				"/apple-icon-57.png",
				"/apple-icon-60.png",
				"/apple-icon-72.png",
				"/apple-icon-76.png",
				"/apple-icon-114.png",
				"/apple-icon-120.png",
				"/apple-icon-144.png",
				"/apple-icon-152.png",
				"/apple-icon-180.png",
				"/apple-icon-192.png",
				"/apple-icon-192.svg",
				"/apple-icon-precomposed.png",
				"/apple-touch-icon.png",
				"/browserconfig.xml",
				"/favicon.ico",
				"/favicon-16.png",
				"/favicon-32.png",
				"/favicon-96.png",
				"/index.html",
				"/Joshua-Bee-CV.pdf",
				"/manifest.json",
				"/ms-icon-70.png",
				"/ms-icon-144.png",
				"/ms-icon-150.png",
				"/ms-icon-310.png",
				"/safari-pinned-tab.svg",
				"/css/button.css",
				"/css/card.css",
				"/css/color.css",
				"/css/elevation.css",
				"/css/font.css",
				"/css/header.css",
				"/css/main.css",
				"/css/reset.css",
				"https://fonts.googleapis.com/css?family=Roboto",
				"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2",
				"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2",
				"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",
				"https://fonts.googleapis.com/icon?family=Material+Icons",
				"https://fonts.gstatic.com/s/materialicons/v43/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
				"https://fonts.gstatic.com/s/materialicons/v43/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff",
				"/images/education/background-600.webp",
				"/images/education/background-800.webp",
				"/images/education/background-1000.webp",
				"/images/education/background-1200.webp",
				"/images/education/background-1400.webp",
				"/images/education/background-1600.webp",
				"/images/education/background-1800.webp",
				"/images/education/background-2000.webp",
				"/images/education/background-2200.webp",
				"/images/education/background-2400.jpg",
				"/images/education/background-2400.webp",
				"/images/education/hull-media-1000.webp",
				"/images/education/hull-media-1500.jpg",
				"/images/education/hull-media-1500.webp",
				"/images/education/hull-thumbnail-40.jpg",
				"/images/education/hull-thumbnail-40.webp",
				"/images/education/nottingham-media-1000.webp",
				"/images/education/nottingham-media-1500.jpg",
				"/images/education/nottingham-media-1500.webp",
				"/images/education/nottingham-thumbnail-40.jpg",
				"/images/education/nottingham-thumbnail-40.webp",
				"/images/experience/background-600.webp",
				"/images/experience/background-800.webp",
				"/images/experience/background-1000.webp",
				"/images/experience/background-1200.webp",
				"/images/experience/background-1400.webp",
				"/images/experience/background-1600.webp",
				"/images/experience/background-1800.webp",
				"/images/experience/background-2000.webp",
				"/images/experience/background-2200.webp",
				"/images/experience/background-2400.jpg",
				"/images/experience/background-2400.webp",
				"/images/experience/meta-media-1000.webp",
				"/images/experience/meta-media-1500.jpg",
				"/images/experience/meta-media-1500.webp",
				"/images/experience/meta-thumbnail-40.jpg",
				"/images/experience/meta-thumbnail-40.webp",
				"/images/experience/symphony-media-1000.webp",
				"/images/experience/symphony-media-1500.jpg",
				"/images/experience/symphony-media-1500.webp",
				"/images/experience/symphony-thumbnail-40.jpg",
				"/images/experience/symphony-thumbnail-40.webp",
				"/images/hobbies/background-600.webp",
				"/images/hobbies/background-800.webp",
				"/images/hobbies/background-1000.webp",
				"/images/hobbies/background-1200.webp",
				"/images/hobbies/background-1400.webp",
				"/images/hobbies/background-1600.webp",
				"/images/hobbies/background-1800.webp",
				"/images/hobbies/background-2000.webp",
				"/images/hobbies/background-2200.webp",
				"/images/hobbies/background-2400.jpg",
				"/images/hobbies/background-2400.webp",
				"/images/hobbies/language-media-1000.webp",
				"/images/hobbies/language-media-1500.jpg",
				"/images/hobbies/language-media-1500.webp",
				"/images/hobbies/language-thumbnail-40.jpg",
				"/images/hobbies/language-thumbnail-40.webp",
				"/images/hobbies/music-media-1000.webp",
				"/images/hobbies/music-media-1500.jpg",
				"/images/hobbies/music-media-1500.webp",
				"/images/hobbies/music-thumbnail-40.jpg",
				"/images/hobbies/music-thumbnail-40.webp",
				"/images/hobbies/sport-media-1000.webp",
				"/images/hobbies/sport-media-1500.jpg",
				"/images/hobbies/sport-media-1500.webp",
				"/images/hobbies/sport-thumbnail-40.jpg",
				"/images/hobbies/sport-thumbnail-40.webp",
				"/images/home/background-600.webp",
				"/images/home/background-800.webp",
				"/images/home/background-1000.webp",
				"/images/home/background-1200.webp",
				"/images/home/background-1400.webp",
				"/images/home/background-1600.webp",
				"/images/home/background-1800.webp",
				"/images/home/background-2000.webp",
				"/images/home/background-2200.webp",
				"/images/home/background-2400.jpg",
				"/images/home/background-2400.webp",
				"/images/home/media-1000.webp",
				"/images/home/media-1500.jpg",
				"/images/home/media-1500.webp",
				"/images/home/thumbnail-40.jpg",
				"/images/home/thumbnail-40.webp",
				"/images/icon/icon-192.png",
				"/images/icon/icon-192.svg",
				"/images/icon/icon-512.png",
				"/images/icon/icon-512.svg",
				"/js/main.js"
			])
			.then(() => self.skipWaiting());
		})
	);
});

self.addEventListener("activate", event => {
	console.log('Service worker activating...');
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
	console.log('Service worker fetching:', event.request.url);
	event.respondWith(
		caches.open(cacheName)
		.then(cache => cache.match(event.request, {ignoreSearch: true}))
		.then(response => {
			return response || fetch(event.request);
		})
	);
});
