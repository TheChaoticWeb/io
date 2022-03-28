const express=require('express');
const{createServer}=require('http');
const socket$io=require('socket.io');
const{Terminal}=require('./Terminal');

class Server {
  constructor() {
    this.init();
    
    this.socketRoute();
    this.httpRoute();
  }
  init() {
    this.app = express();
    this.http = createServer(this.app);
    this.io = socket$io(this.http);
  }
  socketRoute() {
    this.io.on('connection', function(socket) {
      socket.emit('connection');
      socket.on('core:ping', function() {
        Terminal.print("Got a ping from "+socket.id);
      });
    });
  }
  httpRoute() {
    
  }
  listen(cb) {
    this.http.listen(8888, cb);
  }
}
module.exports={Server}
