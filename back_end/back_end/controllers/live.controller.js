var db = require('../config/db.config');
const { validateParamsPostChannel, validateParamsUpdateChannel, validateParamsDeleteChannel} = require('../validation/validator');
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

exports.PostChannel = (req,res) => {

  const { error, value } = validateParamsPostChannel(req.body);
  if(error){
      console.log(error);
      res.statusMessage = "Input Validation Error : " + error.details[0].message;
      return res.status(400).end();
  }
  let PostChannel =
  `CALL InsLive('${req.body.Name}','${req.body.EPGID}','${req.body.Thumbnail}','${req.body.Source}');`;

  db.query(PostChannel, (err,data,fields) => {
      if(err){
          console.error(err.message);
          res.statusMessage = "SQL Error : " + err.message;
          return res.status(400).end();
      }
      res.statusMessage = "POST SUCCESFUL";
      res.status(200).end();
  });
}

exports.UpdateChannel = (req,res) => {

  const { error, value } = validateParamsUpdateChannel(req.body);
  if(error){
      console.log(error);
      res.statusMessage = "Input Validation Error : " + error.details[0].message;
      return res.status(400).end();
  }
  let UpdateChannel =
  `CALL UpdLive(${req.body.id},'${req.body.Name}','${req.body.EPGID}','${req.body.Thumbnail}','${req.body.Source}');`;

  db.query(UpdateChannel, (err,data,fields) => {
      if(err){
          console.error(err.message);
          res.statusMessage = "SQL Error : " + err.message;
          return res.status(400).end();
      }
      res.statusMessage = "PUT SUCCESFUL";
      res.status(200).end();
  });
}

exports.DeleteChannel = (req,res) => {

  const { error, value } = validateParamsDeleteChannel(req.query);
  if(error){
      console.log(error);
      res.statusMessage = "Input Validation Error : " + error.details[0].message;
      return res.status(400).end();
  }
  let DeleteChannel =
  `CALL DeleteLive(${req.query.id});`;

  db.query(DeleteChannel, (err,data,fields) => {
      if(err){
          console.error(err.message);
          res.statusMessage = "SQL Error : " + err.message;
          return res.status(400).end();
      }
      res.statusMessage = "DELETE SUCCESFUL";
      res.status(200).end();
  });
}