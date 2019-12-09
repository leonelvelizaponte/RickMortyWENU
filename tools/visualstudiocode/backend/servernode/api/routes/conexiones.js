const express = require('express');
const router = express.Router();
var request = require('request');
var env = require('../../config.js');
const tinyRick = require('rickmortyapi');
const checkAuth = require('../middleware/check-auth');

const Fav = require('../../models/favoritos');
const mongo = require('../../database/database');

var app = express();

router.get('/up', (req, res, next) => {
    console.log("UP UP UP!");

    res.status(200).json({
        message: 'Servernode UP!'
    });
});

router.get('/personajes', (req, res, next) => {
    getPersonajes(null)
        .then((data) => {
            res.status(200).json({
                message: data
            });
        })
        .catch(err => {
            console.error('Error al consultar informacion de la API')
            res.status(500).json({
                message: err
            });
        });
});

router.get('/pagina/:page', (req, res, next) => {
    var page = req.params.page;
    getPersonajes(page)
        .then((data) => {
            res.status(200).json({
                message: data
            });
        })
        .catch(err => {
            console.error('Error al consultar informacion de la API')
            res.status(500).json({
                message: err
            });
        });
});


router.post('/agregarFavorito', checkAuth, (req, res, next) => {
    //console.log(req.body.id);
    var favId = req.body.id;

    Fav.findOne({ id: favId }, function (err, resFav) {
        if (err) console.log(err);
        if (resFav) {
            console.log("Este personaje esta creado");
            res.status(200).json({
                message: "Este personaje ya es Favorito"
            });
        } else {
            const favorito = new Fav({
                id: req.body.id,
                name: req.body.name,
                status: req.body.status,
                species: req.body.species,
                type: req.body.type,
                gender: req.body.gender,
                origin: req.body.origin,
                location: req.body.location,
                image: req.body.image,
                episode: req.body.episode,
                url: req.body.url,
                created: req.body.created,
                fav: true // si esta o no marcado como favorito
            })
            favorito.save()
                .then(result => {
                    console.log(result);
                    res.send(result);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    });
});


router.delete('/removerFavorito/:id', checkAuth, (req, res, next) => {

    var favId = req.params.id;

    Fav.findOne({ id: favId }, function (err, resFav) {
        if (err) console.log(err);
        if (resFav) {
            Fav.deleteOne({ id: favId })
                .then(result => {
                    //console.log("Este personaje ya no es rickoso");
                    //console.log(result);
                    res.status(200).json({
                        message: result
                    });

                })
                .catch(err => {
                    console.log(err.message);
                });
        } else {
            //la respuesta con 204 significa que se ejecuto correctamente, pero no habian favoritos con ese ID
            res.status(204).json({
                message: "Este personaje ya no es rickoso"
            });
        }
    });

});


//este metodo va a squanch los datos de los squanchies
router.get('/squanch', checkAuth, (req, res, next) => {

    Fav.find({ })
        .then(result => {
            res.status(200).json({
                message: result
            });

        })
        .catch(err => {
            console.log(err.message);
        });
});




//FUNCIONES

async function getPersonajes(pagina) {

    if (pagina != null) {
        //si la llamada no es nula sig que esta en la paginacion y hay que enviar nueva info
        let paginadata = await tinyRick.getCharacter({ "page": pagina });
        return paginadata;
    } else {
        //si es nulo solo trae la primera info de los personajes de la pag 1
        let personajesdata = await tinyRick.getCharacter();
        return personajesdata;
    }
}

module.exports = { router };