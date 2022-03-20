const{Server}=require('./Server');
const{PluginManager}=require('./PluginManager');
const{Terminal}=require('./Terminal');

class Main {
  static main(args) {
    new Server().listen(function(){
      
    })
    return 0;
  }
}
module.exports = {Main}
