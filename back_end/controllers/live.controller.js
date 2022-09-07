var db = require('../config/db.config');

var https = require('https');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var concat = require('concat-stream');

exports.GetLive = (req,res) => {

    let GetLive = 
    `CALL GetLive();`;
     
    db.query(GetLive, (err,data,fields) =>{
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.send(data[0]);
    });
}

exports.GetGuide = (req,res) => {
    parser.on('error', function(err) { console.log('Parser error', err); });

    https.get('https://raw.githubusercontent.com/matthuisman/i.mjh.nz/master/PlutoTV/us.xml', function(resp) {
    
        resp.on('error', function(err) {
          console.log('Error while reading', err);
        });
    
        resp.pipe(concat(function(buffer) {
          var str = buffer.toString();
          parser.parseString(str, function(err, result) {
            if(err) console.log(err.message)
            res.send(result.tv.programme);
          });
        }));
    
    }).on('error', function(err) {
      console.log('Error while reading', err);
    });
}