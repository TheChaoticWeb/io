const{green,blue,red}=require('colors');

class Terminal {
  static print ( txt ) {
    console.log (
      green ( 'TheChaoticWeb.IO ' ) +
      blue ( '>> ' ) +
      red ( txt )
    );
  }
}
module.exports={Terminal};
