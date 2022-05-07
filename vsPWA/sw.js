self.addEventListener('install', (e) => {
    e.waitUntil(caches.open('static').then(cache =>{
        return cache.addAll(['https://vs4apps.blogspot.com/'])
    }));
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then( response => {
        return response || fetch(e.request);
        })
    );
});