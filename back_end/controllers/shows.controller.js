var db = require('../config/db.config');

exports.GetShowsByPage = (req,res) => {

    let GetShowsByPage = 
    `CALL GetShowsByPage(${req.query.currentPage || 1 },${req.query.size || 20},'${req.query.search || ''}','${req.query.genre || ''}','${req.query.orderBy || 'id'}','${req.query.orderDir || 'DESC'}', @totalRecords, @totalPages);
     SELECT @totalRecords as totalRecords, @totalPages as totalPages;`;
    console.log(GetShowsByPage);

    db.query(GetShowsByPage, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data);
    });
}