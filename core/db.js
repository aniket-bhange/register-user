var mysql      = require('mysql');
var HOST = 'localhost';
var USER = 'root'
var PWD = '123456789';
var DB = 'sample'
  
class DBManager{

    constructor(){
        this.connection = null
        return this
    }

    connect(){
        this.connection = mysql.createConnection({
            host     : HOST,
            user     : USER,
            password : PWD,
            database : DB
        })
        return this.connection
    }

    disconnect(){
        this.connection.end()
    }
}

module.exports = DBManager