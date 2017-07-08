var database = require('../config/database.config');

var usuario = {};

usuario.selectAll = function(callback) {
    if (database) {
        database.query('SELECT * FROM usuario', function(error, resultados) {
            if (error) throw error;
            if (resultados.length > 0) {
                callback(resultados);
            } else {
                callback(0);
            }
        });
    }
}

usuario.getUsuario = function(idUsuario, callback) {
    if (database) {
        var sql = 'SELECT * FROM Usuario WHERE idUsuario = ?';
        database.query(sql, idUsuario, 
        function(error, result) {
            if (error) {
                throw error;
            } else {
                callback(result);
            }
        });
    }
}

usuario.insert = function(data, callback) {
    if (database) {
        var sql = 'INSERT INTO Usuario (nick, contrasena, correo) '
        + 'VALUES (?,?,?)';
        database.query(sql, [data.nick, data.contrasena, data.correo], 
        function(error, result) {
            if (error) {
                throw error;
            } else {
                callback({'insertId': result.insertId});
            }
        });
    }
}

usuario.update = function(data, callback) {
    if (database) {
        var sql = 'UPDATE Usuario SET nick = ?, contrasena = ? WHERE '
        + 'idUsuario = ?';
        database.query(sql, [data.nick, data.contrasena, data.idUsuario], 
        function(error, result) {
            if (error) {
                throw error;
            } else {
                callback(null, {'resultId': result.insertId});
            }
        });
    }
}

usuario.delete = function(idUsuario, callback) {
    if (database) {
        var sql = 'DELETE FROM Usuario WHERE idUsuario = ?';
        database.query(sql, idUsuario, 
        function(error, result) {
            if (error) {
                throw error;
            } else {
                callback(null, {'Mensaje': 'Eliminado con exito'});
            }
        });
    }
}

module.exports = usuario;