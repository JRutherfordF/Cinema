var mongoose = require('mongoose');
var crypto = require('crypto'); 
var Schema = mongoose.Schema;
var adm = new Schema({
    NAME: String,
    KEY: String,
    EMAIL:String,
    IMAGE: String,
    STATE: Number,
    SALT:String
});

adm.methods.setPassword = function(password) { 
         console.log(password);
 // creating a unique salt for a particular user 
   var salt = crypto.randomBytes(16).toString('hex'); 
  
    // hashing user's salt and password with 1000 iterations, 
   // 64 length and sha512 digest 
    console.log(password);
    var claveysalt =[]
   // this.CLAVE = crypto.pbkdf2Sync(password, this.salt,  
  //  1000, 64, 'sha512').toString('hex'); 
    claveysalt.push(crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex'));
    claveysalt.push(salt);
    
    return claveysalt; 
}; 

adm.methods.validPassword = function(password,clavebuena,salt) { 
    console.log(this.KEY);
       console.log(password);
       console.log(clavebuena);
 
  
    var hash = crypto.pbkdf2Sync(password,salt, 1000, 64, 'sha512').toString('hex'); 
    return clavebuena === hash; 
};
module.exports = mongoose.model('Administrador',adm);