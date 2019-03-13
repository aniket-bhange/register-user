const express = require('express')
const routes = express.Router()
const db = require('../core/db')
const helper = require('../core/helper')


class Auth{
    login(req, res){
        let body = req.body
        if(!body.email && !body.password){
            let response = {
                msg: "Provide email and password",
                success: false
            }
            return res.status(400).send(response)
        }
        const conn = new db()
        body.password = helper.createHash(body.password)
        console.log(body.password)
        console.log(helper.createHash("Thanos@123"))
        let query = `select * from users where users.email="${body.email}" and users.password="${body.password}" limit 1`;
        conn.connect().query(query, (err, result)=>{
            console.log(err, result)
            if(err || !result.length){
                return res.status(400).send({
                    msg: "Login Unsuccessfull",
                    success: false,
                    data: result
                })    
            }
            res.send({
                msg: "Login Successfull",
                success: true,
                data: result
            })
            conn.disconnect()
        })
    }
}

var auth = new Auth()
routes.post('/authenticate', auth.login.bind(auth))
module.exports = routes




