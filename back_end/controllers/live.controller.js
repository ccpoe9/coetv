var db = require('../config/db.config');
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