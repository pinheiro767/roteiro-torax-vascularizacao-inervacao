const CACHE='torax-g1-g2-v6-zoom-final';
const ASSETS=['./','./index.html','./data.json','./manifest.json','./icon-192.png','./icon-512.png',
'./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg','./images/7.jpg','./images/8.jpg','./images/9.jpg','./images/10.jpg','./images/11.jpg','./images/12.jpg','./images/13.jpg','./images/14.jpg','./images/15.jpg','./images/16.jpg','./images/17.jpg','./images/18.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
