var db = require('../core/db')
var express = require('express')
var routes = express.Router()

var helper = require('../core/helper')

class UserControls{
    constructor(){
        this.dbConn = new db().connect()
    }

    create(req, res){
        console.log(req.body)
        let body = req.body,
        password = helper.createHash(body.password);
        
        let query = `insert into users(id, name, email, phone, password) values (null, "${body.name}", "${body.email}", "${body.phone}", "${password}")`;
        console.log(query)
        this.dbConn.query(query, (error, results)=>{
            if(error){
                let response = {
                    msg: "User Not Created",
                    success: false
                }
                return res.status(400).send(response)
            }
            delete body.password;
            res.send({
                msg: "User Created",
                success: true,
                data: body
            })
        })
    }

    edit(){

    }
}

var User = new UserControls()

routes.post('/register', User.create.bind(User))

module.exports = routes