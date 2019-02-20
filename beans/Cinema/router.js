var controllermovie = require('./controllermovie.js');
module.exports = function(app){
	var classmovie=new controllermovie();
	app.post('/api/newmovie', classmovie.Guardar);
	app.post('/api/editmovie', classmovie.Editar);
	app.post('/api/deletemovie', classmovie.Borrar);
	app.post('/api/selectmovie', classmovie.Seleccionatodos);
	app.post('/api/selectmoviebydate', classmovie.Seleccionaporfecha);
	app.post('/api/selectmoviebyid', classmovie.Seleccionaporid);
	app.post('/api/selectmoviebyname', classmovie.Seleccionapornombre);
	app.get('*', function(req, res){
		res.sendfile('./login.html');
	});
}