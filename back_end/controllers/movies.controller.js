var db = require('../config/db.config');

exports.GetAllMovies = (req,res) => {

    let GetMoviesByPage = 
    `CALL GetMoviesByPage(${req.query.currentPage || 1},${req.query.size || 20},'${req.query.search || ''}','${req.query.orderBy || 'id'}','${req.query.orderDir || 'DESC'}', @totalRecords, @totalPages);`;
    console.log(GetMoviesByPage);

    db.query(GetMoviesByPage, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data[0]);
    });
}

exports.GetRecords = (req,res) => {
    let GetRecords = 
    `SELECT @totalRecords as totalRecords, @totalPages as totalPages;`;

    db.query(GetRecords, (err,data,fields) => {
        if(err){
            return console.err(err.message);
        }
        res.send(data[0]);
    });
}