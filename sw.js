var CACHE_NAME = 'petrick-cache-v1'
var urlsToCache = [
    'css/bootstrap.min.css',
    'img/icon (2).png',
    'js/jquery-3.5.1.js',
    'js/bootstrap.min.js'
]
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('Cache aberto...')   
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', function(event){
    event.responWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response
            }
            return fetch(event.request)
        })
    )
})