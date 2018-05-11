var mysql = require('mysql');
var db;

var settings = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ieeedb',
    multipleStatements: true
};

function connectDatabase() {
    if(!db){
        db = mysql.createConnection(settings);
        db.connect(function (err){

            if(err){
                console.log("error database conncetion");
            }else{
                console.log("successfully connected database");
            }
        })
    }

    return db;
}

module.exports = connectDatabase();
