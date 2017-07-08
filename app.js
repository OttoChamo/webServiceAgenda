var express = require('express');

var bodyParser = require('body-parser');

//Importar las rutas
var usuarioRoute = require('./routes/usuario.route');

//Configuracion Body parser
var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/', usuarioRoute);

app.listen(port, function() {
    console.log('Se inicio el servidor');
});
