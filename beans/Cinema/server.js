var express   = require('express');
var app       = express();
var mongoose  = require('mongoose');
var port      = process.env.PORT || 8080;

mongoose.connect('mondodb://localhost:27617/Cinema');

var db =mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error'));

app.configure(function() {
    app.use(express.static(__dirname + '/'));
    app.use(express.logger('dev'));
    app.use(express.methodOverride());
})
var bodyParser= require("body-parser");
app.use(bodyParser.json({limit: '50mb', extended: true}));
//max file size user can upload
require('./router.js')(app);

//"app" constantly listens for this event
app.listen(port);
console.log("APP por el puerto "+port);