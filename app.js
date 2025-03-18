if (navigator.serviceWorker.controller) {
console.log('[PWA Builder] active service worker found, no need to register')
} else {
navigator.serviceWorker.register('/sw.js', {
scope: 'https://alexandrwalker.github.io/WA/'
}).then(function(reg) {
console.log('Service worker has been registered for scope:'+ reg.scope);
});
}
