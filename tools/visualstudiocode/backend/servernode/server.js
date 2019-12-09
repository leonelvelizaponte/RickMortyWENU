const http = require('http');
const app = require('./app');
var env = require('./config.js');
var request = require('request');
const BodyParser = require("body-parser");

//En el config.js tenemos seteado el puerto que usaremos 
const port = env.port;

const server = http.createServer(app);

server.listen(port, function () {
    console.log('Servidor esta corriendo en el puerto ' + port + ', Express está escuchando...');
});
