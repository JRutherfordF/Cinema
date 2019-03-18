

class _adm {
   constructor( 
    _ID,
    _NAME,
    _KEY,
    _EMAIL,
    _STATE,
    _IMAGE) {
    this._ID = _ID;
    this._NAME=_NAME ;
    this._KEY=_KEY;
    this._EMAIL=_EMAIL;
    this._STATE= _STATE;
    this._IMAGE = _IMAGE;
        
   }
Guardar() {
   var objetoaenviar = this;

  return new Promise(function(resolve, reject) {

       
      try {

          
          
          
          
               var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/nuevoadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
      
     
    

  });
    
}
    

    
    Login() {
         var objetoaenviar = this;
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      
      try {
           var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/loginadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar)); 
}
catch(err) {
     reject(err.message);

}
      
     
    

  });
    
    
}
    
   
}
