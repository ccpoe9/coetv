var db = require('../config/db.config');

exports.GetAllMovies = (req,res)=>{

    let GetAllMovies = `CALL GetAllMovies()`
    db.query(GetAllMovies, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data[0]);
    });
}