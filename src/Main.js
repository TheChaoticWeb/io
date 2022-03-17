const{Server}=require('./Server');

class Main {
  static main(args) {
    new Server().listen(function(){
      
    })
    return 0;
  }
}
module.exports = {Main}
