addEventListener("fetch", function(event) {
  var url = new URL(event.request.url);
  if(url.pathname.startsWith('/socket.io/')) {
    fetch(event.request).then(function(response) {
      response.headers.set("Access-Aontrol-Allow-Origin", "*");
      event.respondWith(response);
    }, function(err) {
      event.respondWith(new Response(err,{status:500}));
    });
  } else {
  }
});
