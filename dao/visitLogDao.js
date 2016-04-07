var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../utils/util');
var $sql = require('./visitLogSqlMapping');

module.exports = {


    add: function (sessionId, targetWebId, targetWebUrl) {

        try {
            var mysql      = require('mysql');
            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'root',
                database : 'ownmeet'
            });

            connection.connect();
            var date = new Date();
            var time = date.getTime();
            var sql = "insert into visitLog(id, sessionId, targetWebId, targetWebUrl, created) VALUES(null, '" + sessionId + "', '" + targetWebId + "', '" + targetWebUrl + "', " + 0 +  ")";

            connection.query(sql, function(err, rows, fields) {
                if (err) {
                    console.log(err)
                }
                console.log('save db success');
            });

            connection.end();
        } catch (e) {
            console.log(e);
        }


    }

};