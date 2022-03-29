addEventListener("fetch", function(event) {
  var url = new URL(event.request.url);
  if(url.pathname.startsWith('/socket.io/') || url.pathname == "/__devtools_wrapper.html") {
    fetch(event.request).then(function(response) {
      event.respondWith(response);
    }, function(err) {
      event.respondWith(Response.redirect("/FatalError.sh?~="+encodeURIComponent(err));
    });
  } else if(url.pathname == "/") {
    event.respondWith(Response.redirect("/Homepage.sh"));
  } else {
    event.respondWith(handleRequest(event.request));
  }
});

async function handleRequest(request) {
  try {
    var url = new URL(request.url);
    if(url.pathname == "/FatalError.sh") {
      return new Response(`
<!DOCTYPE html>
<title>FatalError.sh</title>
<style>body{background:red;color:white;text-align:center}</style>
<br><br><br><br><br>
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
  } catch(err) {
    return Response.redirect("/FatalError.sh?~="+encodeURIComponent(err);
  }
}
