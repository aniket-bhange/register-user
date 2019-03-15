var express = require('express')
var app = express()
var db = require('./core/db')
const user = require('./user/controls')
const auth = require('./auth/authenticate')
const bodyParser = require('body-parser')


var conn = new db()
let query = "create table if not exists users (id smallint unsigned not null auto_increment, name varchar(50) not null, email varchar(20) not null, phone varchar(20) not null, password varchar(255) not null, PRIMARY KEY (id))"
conn.connect().query(query, (err, result)=>{
    console.log(err)
})
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', user)
app.use('/api', auth)

app.get('*', (req, res)=>{
    res.sendfile('../dist/index.html');
})

app.listen(3001, function(e){
    conn.disconnect()
    console.log("app started to work on localhost:3001")
})