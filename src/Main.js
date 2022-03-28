const{Server}=require('./Server');
const{Terminal}=require('./Terminal');

class Main {
  static main(args) {
    new Server().listen(function(){
      Terminal.info("Server is up and running.")
    })
    return 0;
  }
}
module.exports = {Main}
