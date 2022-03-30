# io
## Application Programing Interface
The `io.thechaoticweb.tk` service has an API that you can use, taking advantage of the `socket.io` library.
```javascript
var socket = io.connect('io.thechaoticweb.tk');
socket.on('connection', function() {
  socket.emit('namespace:function', parameters); // Replace `namespace:function` with the function you want to execute and `parameters` with the parameters to pass to the function.
  socket.on('namespace:function', function(returnValue) {
    // React to the to the response of `namespace:function` here.
  });
});
```
Function names and very detailed descriptions are stated in the subheadings below.
### `core:ping`
pong
