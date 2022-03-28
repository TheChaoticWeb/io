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
    event.respondWith(handleRequest(event.request));
  }
});

async function handleRequest(request) {
  var url = new URL(request.url);
  if(url.pathname == "/FatalError.sh") {
    return new Response(`
<!DOCTYPE html>
<title>FatalError.sh</title>
<style>body{background:red;color:white;text-align:center}</style>
<h1>${new URLSearchParams(url.search).get('~')}</h1>
    `, {
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
  else {
    return Response.redirect("/FatalError.sh?~="+encodeURIComponent("404 Not Found: " + url.pathname + url.search + url.hash));
  }
}
