const express = require('express');
var cors = require('cors')
const bodyparser = require('body-parser');
var app = express();
var db = require('./config/db.config');
let router = require('./routers/router');


app.use(bodyparser.json());
app.use(cors({origin: "http://localhost:4200"}))

app.use('/', router);


const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
