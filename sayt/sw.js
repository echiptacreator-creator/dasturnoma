/* FK Andijon — xizmat ishchisi (2026-10-16) */
var K = "fka-v2";
/* GOL BILDIRISHNOMASI: agent yuborgan xabar {t, b, u, g}. Bir o'yin
   xabarlari bitta teg (g) bilan — telefonda ustma-ust yig'ilmaydi,
   eng yangisi ko'rinadi, lekin har biri ovoz/tebranish beradi. */
self.addEventListener("push", function(e){
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = {t: "FK Andijon", b: e.data ? e.data.text() : ""}; }
  e.waitUntil(self.registration.showNotification(d.t || "FK Andijon", {
    body: d.b || "", tag: d.g || "fka", renotify: true,
    icon: "/sayt/ikon-192.png", badge: "/sayt/ikon-192.png",
    data: {u: d.u || "/sayt/"}, vibrate: [120, 60, 120]
  }));
});
self.addEventListener("notificationclick", function(e){
  e.notification.close();
  var u = (e.notification.data && e.notification.data.u) || "/sayt/";
  e.waitUntil(clients.matchAll({type: "window", includeUncontrolled: true}).then(function(ws){
    for (var i = 0; i < ws.length; i++) {
      if (ws[i].url.indexOf(u) >= 0 && "focus" in ws[i]) return ws[i].focus();
    }
    return clients.openWindow(u);
  }));
});
self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(K).then(function(c){ return c.add("/sayt/"); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){ return k !== K; })
      .map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(function(j){
      var n = j.clone(); caches.open(K).then(function(c){ c.put(r, n); });
      return j;
    }).catch(function(){
      return caches.match(r).then(function(m){ return m || caches.match("/sayt/"); });
    }));
    return;
  }
  /* Rasm/shrift: keshdagini darrov beradi, ORQADAN yangisini
     olib keshni yangilaydi — surat almashsa keyingi safar yangisi. */
  if (/\.(png|jpe?g|webp|svg|ttf|otf|woff2?)$/i.test(new URL(r.url).pathname)) {
    e.respondWith(caches.match(r).then(function(m){
      var yangi = fetch(r).then(function(j){
        if (j.ok) { var n = j.clone(); caches.open(K).then(function(c){ c.put(r, n); }); }
        return j;
      });
      if (m) { yangi.catch(function(){}); return m; }
      return yangi;
    }));
  }
});
