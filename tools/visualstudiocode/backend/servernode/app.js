var express = require('express');
var app = express();
const bodyParser = require("body-parser");

const conexionesRoutes = require('./api/routes/conexiones');
const userRoutes = require('./api/routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})


app.use('/conexion', conexionesRoutes.router);
app.use('/user', userRoutes.router);


app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

module.exports = app;