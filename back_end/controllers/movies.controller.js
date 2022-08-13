var db = require('../config/db.config');

exports.GetMoviesByPage = (req,res) => {

    let GetMoviesByPage = 
    `CALL GetMoviesByPage(${req.query.currentPage},${req.query.size},'${req.query.search}','${req.query.genre}','${req.query.orderBy}','${req.query.orderDir}', @totalRecords, @totalPages);
     SELECT @totalRecords as totalRecords, @totalPages as totalPages;`;
    console.log(GetMoviesByPage);

    db.query(GetMoviesByPage, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data);
    });
}

exports.GetMovieByUrl = (req,res) => {

    let GetMovie = 
    `CALL GetMovieByUrl('${req.query.v}');`;
    db.query(GetMovie, (err,data,fields) => {
        if(err){
            return console.err(err.message);
        }
        res.send(data[0]);
    });

}

exports.GetAllGenres = (req,res) => {

    let GetAllGenres =
    `CALL GetAllGenres()`;

    db.query(GetAllGenres, (err,data,fields) => {
        if(err){
            return console.err(err.message);
        }
        res.send(data[0]);
    });
}