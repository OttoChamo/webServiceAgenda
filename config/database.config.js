var mysql = require('mysql');

var configuration = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agendain6av',
    port: 3306
};

var database = mysql.createConnection(configuration);

module.exports = database;