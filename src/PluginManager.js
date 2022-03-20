const{readdirSync}=require('fs');

class PluginManager {
  static listPlugins() {
    var files = readdirSync('../plugins'), plugins = [];
    for(let file of files) {
      if(file.endsWith('.zip')) {
        if(file.endsWith('.disabled.zip')) continue;
        plugins.push(file.slice(0,-4));
      }
    }
  }
}
module.exports={PluginManager};
