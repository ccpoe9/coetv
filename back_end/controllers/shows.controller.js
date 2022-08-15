var db = require('../config/db.config');

exports.GetShowsByPage = (req,res) => {

    let GetShowsByPage = 
    `CALL GetShowsByPage(${req.query.currentPage},${req.query.size},'${req.query.search}','${req.query.genre}','${req.query.orderBy}','${req.query.orderDir}', @totalRecords, @totalPages);
     SELECT @totalRecords as totalRecords, @totalPages as totalPages;`;
    console.log(GetShowsByPage);

    db.query(GetShowsByPage, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data);
    });
}