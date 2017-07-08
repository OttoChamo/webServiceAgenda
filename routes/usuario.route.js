var express = require('express');

var usuarioModel = require('../model/usuario.model');

var usuarioRoute = express.Router();

usuarioRoute.route('/api/v1/usuario')
    .get(function(req, res) {
        usuarioModel.selectAll(function(resultados) {
            if (resultados !== 0) {
                res.json(resultados);
            } else {
                res.json({'Mensaje': 'No hay nada'})
            }
        });
    })
    .post(function(req, res) {
        var data = {
            nick: req.body.nick,
            contrasena: req.body.contrasena,
            correo: req.body.correo
        }

        usuarioModel.insert(data, function(resultado) {
            if (resultado.insertId > 0) {
                res.json(data);
            } else {
                res.json({'Mensaje': 'No se pudo guardar'});
            }
        })

    });

usuarioRoute.route('/api/v1/usuario/:idUsuario')
    .get(function(req, res) {

    })
    .put(function(req, res) {

    })
    .delete(function(req, res) {

    });

module.exports = usuarioRoute;