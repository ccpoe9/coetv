const mysql = require('mysql');
const express = require('express');
var cors = require('cors')
let config = require('./config');
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(cors())

var mysqlConnection = mysql.createConnection(config);

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("DB Connected");
    }
    else{
        console.log("DB Connection failed \n Error: "+ JSON.stringify(err,undefined,2));
    }
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`));

app.get('/api', (req,res) =>{
    res.send("VIDEO WEBSITE API");
});


app.get('/api/movies',(req,res)=>{

    let GetAllMovies = `CALL GetAllMovies()`
    mysqlConnection.query(GetAllMovies, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data[0]);
    });
});
