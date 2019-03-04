     
            
    class _Movie {
      moviesbydateandyear(month,year)
    {
      var pack = this;
      var filteredmovievector = [];
      return new Promise(function(resolve, reject){
        try{
          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:8080/api/selectmovie');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload=function() {
            if(xhr.status === 200){
              var movies=JSON.parse(xhr.responseText);
              for(var element in movies){
                var moviedate=new Date(movies[element].DATE);
                if((moviedate.getMonth()+1==month) &&(moviedate.getFullYear()==year)){
              filteredmovievector.push(movies[element]);
                }
              }
              resolve(filteredmovievector);
            }
            else{
              reject(xhr);
            }
          };
          xhr.send(JSON.stringify(pack));
        }
        catch(err){
          reject(err.message);
        }
      });
}
   constructor(
    _id, 
    NAME,
    DURATIONMINUTES,
    GENRE,
    LANGUAGEAUDIO,
    LANGUAGESUB,
    SYNOPSIS,
    RATING,
    HOURSTART,
    DATE,
    PRICE,
    MINUTESTART,
    SEATS,
    IMAGE,
    STATE
            ) {
    this._id = _id;
    this.NAME = NAME;
    this.DURATIONMINUTES=DURATIONMINUTES;
    this.GENRE=GENRE;
    this.LANGUAGEAUDIO=LANGUAGEAUDIO;
    this.LANGUAGESUB=LANGUAGESUB;
    this.SYNOPSIS=SYNOPSIS;
    this.RATING=RATING;
    this.PRICE=PRICE;
    this.HOURSTART=HOURSTART;
    this.DATE=DATE;
    this.MINUTESTART=MINUTESTART;
    this.SEATS=SEATS;
    this.IMAGE=IMAGE;
    this.STATE=STATE;
   }
Guardar() {
   var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/newmovie');
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
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
 Modificar() {
	
       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/editmovie');
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
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}   
    
    Eliminar() {

       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/deletemovie');
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
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
Seleccionartodos() {
	
       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmovie');
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
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporfecha() {

       var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmoviebydate');
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
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporid() {
	
      var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmoviebyid');
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
xhr.send(JSON.stringify(pack));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
    
    Seleccionarpornombre() {

    
    
      var pack = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/selectmoviebyname');
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
xhr.send(JSON.stringify(pack));   
          
          
          
}//err=error
catch(err) {
     reject(err.message);

}
    });
    
}
}
            
             let imagenenbase64 = "";

      $("#imgmovie").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }
    
    
            
            //seat data
           var asientos = new Object();
            var asientoA1 = new Object();
            asientoA1.NAMESTUDENT = null;
            asientoA1.SECTION=null;
            asientoA1.ID=null;
            asientos.A1= asientoA1;
            
            
            
             var asientoA2 = new Object();
            asientoA2.NAMESTUDENT = null;
            asientoA2.SECTION=null;
            asientoA2.ID=null;
            asientos.A2= asientoA2;
             
             var asientoA3 = new Object();
            asientoA3.NAMESTUDENT = null;
            asientoA3.SECTION=null;
            asientoA3.ID=null;
            asientos.A3= asientoA3;
            
            
            
             var asientoA4 = new Object();
            asientoA4.NAMESTUDENT = null;
            asientoA4.SECTION=null;
            asientoA4.ID=null;
            asientos.A4= asientoA4;
            
            var asientoA5 = new Object();
            asientoA5.NAMESTUDENT = null;
            asientoA5.SECTION=null;
            asientoA5.ID=null;
            asientos.A5= asientoA5;
            
            
            
             var asientoA6 = new Object();
            asientoA2.NAMESTUDENT = null;
            asientoA2.SECTION=null;
            asientoA2.ID=null;
            asientos.A6= asientoA6;

            var asientoB1 = new Object();
            asientoB1.NAMESTUDENT = null;
            asientoB1.SECTION=null;
            asientoB1.ID=null;
            asientos.B1= asientoB1;
            
            
            
             var asientoB2 = new Object();
            asientoB2.NAMESTUDENT = null;
            asientoB2.SECTION=null;
            asientoB2.ID=null;
            asientos.B2= asientoB2;

            var asientoB3 = new Object();
            asientoB3.NAMESTUDENT = null;
            asientoB3.SECTION=null;
            asientoB3.ID=null;
            asientos.B3= asientoB3;
            
            
            
             var asientoB4 = new Object();
            asientoB4.NAMESTUDENT = null;
            asientoB4.SECTION=null;
            asientoB4.ID=null;
            asientos.B4= asientoB4;

            var asientoB5 = new Object();
            asientoB5.NAMESTUDENT = null;
            asientoB5.SECTION=null;
            asientoB5.ID=null;
            asientos.B5= asientoB5;
            
            
            
             var asientoB6 = new Object();
            asientoB6.NAMESTUDENT = null;
            asientoB6.SECTION=null;
            asientoB6.ID=null;
            asientos.B6= asientoB6;

            var asientoC1 = new Object();
            asientoC1.NAMESTUDENT = null;
            asientoC1.SECTION=null;
            asientoC1.ID=null;
            asientos.C1= asientoC1;
            
            
            
             var asientoC2 = new Object();
            asientoC2.NAMESTUDENT = null;
            asientoC2.SECTION=null;
            asientoC2.ID=null;
            asientos.C2= asientoC2;
             
             var asientoC3 = new Object();
            asientoC3.NAMESTUDENT = null;
            asientoC3.SECTION=null;
            asientoC3.ID=null;
            asientos.C3= asientoC3;
            
            
            
             var asientoC4 = new Object();
            asientoC4.NAMESTUDENT = null;
            asientoC4.SECTION=null;
            asientoC4.ID=null;
            asientos.C4= asientoC4;
            
            var asientoC5 = new Object();
            asientoC5.NAMESTUDENT = null;
            asientoC5.SECTION=null;
            asientoC5.ID=null;
            asientos.C5= asientoC5;
            
            
            
             var asientoC6 = new Object();
            asientoC2.NAMESTUDENT = null;
            asientoC2.SECTION=null;
            asientoC2.ID=null;
            asientos.C6= asientoC6;

            var asientoD1 = new Object();
            asientoD1.NAMESTUDENT = null;
            asientoD1.SECTION=null;
            asientoD1.ID=null;
            asientos.D1= asientoD1;
            
            
            
             var asientoD2 = new Object();
            asientoD2.NAMESTUDENT = null;
            asientoD2.SECTION=null;
            asientoD2.ID=null;
            asientos.D2= asientoD2;

            var asientoD3 = new Object();
            asientoD3.NAMESTUDENT = null;
            asientoD3.SECTION=null;
            asientoD3.ID=null;
            asientos.D3= asientoD3;
            
            
            
             var asientoD4 = new Object();
            asientoD4.NAMESTUDENT = null;
            asientoD4.SECTION=null;
            asientoD4.ID=null;
            asientos.D4= asientoD4;

            var asientoD5 = new Object();
            asientoD5.NAMESTUDENT = null;
            asientoD5.SECTION=null;
            asientoD5.ID=null;
            asientos.D5= asientoD5;
            
            
            var asientoE1 = new Object();
            asientoE1.NAMESTUDENT = null;
            asientoE1.SECTION=null;
            asientoE1.ID=null;
            asientos.E1= asientoE1;
            
            
            
             var asientoE2 = new Object();
            asientoE2.NAMESTUDENT = null;
            asientoE2.SECTION=null;
            asientoE2.ID=null;
            asientos.E2= asientoE2;

            var asientoE3 = new Object();
            asientoE3.NAMESTUDENT = null;
            asientoE3.SECTION=null;
            asientoE3.ID=null;
            asientos.E3= asientoE3;
            
            
            
             var asientoE4 = new Object();
            asientoE4.NAMESTUDENT = null;
            asientoE4.SECTION=null;
            asientoE4.ID=null;
            asientos.E4= asientoE4;

            var asientoF1 = new Object();
            asientoF1.NAMESTUDENT = null;
            asientoF1.SECTION=null;
            asientoF1.ID=null;
            asientos.F1= asientoF1;
            
            
            
             var asientoF2 = new Object();
            asientoF2.NAMESTUDENT = null;
            asientoF2.SECTION=null;
            asientoF2.ID=null;
            asientos.F2= asientoF2;

            var asientoF3 = new Object();
            asientoF3.NAMESTUDENT = null;
            asientoF3.SECTION=null;
            asientoF3.ID=null;
            asientos.F3= asientoF3;
            
            
            
             var asientoF4 = new Object();
            asientoF4.NAMESTUDENT = null;
            asientoF4.SECTION=null;
            asientoF4.ID=null;
            asientos.F4= asientoF4;

            var asientoE1 = new Object();
            asientoE1.NAMESTUDENT = null;
            asientoE1.SECTION=null;
            asientoE1.ID=null;
            asientos.E1= asientoD1;
            
            
            
             var asientoG2 = new Object();
            asientoG2.NAMESTUDENT = null;
            asientoG2.SECTION=null;
            asientoG2.ID=null;
            asientos.G2= asientoG2;

            var asientoG3 = new Object();
            asientoG3.NAMESTUDENT = null;
            asientoG3.SECTION=null;
            asientoG3.ID=null;
            asientos.G3= asientoG3;
            
            
            
             var asientoG4 = new Object();
            asientoG4.NAMESTUDENT = null;
            asientoG4.SECTION=null;
            asientoG4.ID=null;
            asientos.G4= asientoG4;

            var asientoH1 = new Object();
            asientoH1.NAMESTUDENT = null;
            asientoH1.SECTION=null;
            asientoH1.ID=null;
            asientos.H1= asientoH1;
            
            
            
             var asientoH2 = new Object();
            asientoH2.NAMESTUDENT = null;
            asientoH2.SECTION=null;
            asientoH2.ID=null;
            asientos.H2= asientoH2;

            var asientoH3 = new Object();
            asientoH3.NAMESTUDENT = null;
            asientoH3.SECTION=null;
            asientoH3.ID=null;
            asientos.H3= asientoH3;
            
            
            
             var asientoH4 = new Object();
            asientoH4.NAMESTUDENT = null;
            asientoH4.SECTION=null;
            asientoH4.ID=null;
            asientos.H4= asientoH4;
            
        function botonguardarclick(){
                var peliculainstanciada = new _Movie(
                0, //gets data from the html
               document.getElementById("name").value,
               document.getElementById("duration").value,
               document.getElementById("genre").value,
               document.getElementById("languageaudio").value,
               document.getElementById("languagesub").value,
               document.getElementById("synopsis").value,
               document.getElementById("rating").value,
                document.getElementById("hour").value,
                  document.getElementById("date").value,
               document.getElementById("price").value,
               document.getElementById("minute").value,
         asientos,
          imagenenbase64,
         document.getElementById("state").value
                );
                                                        
                peliculainstanciada.Guardar().then(function(response) {
  console.log("Success!", response); //action complete
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);  //process failure
             alert("Error " + error);
           
});                                       
                                                        
            }
