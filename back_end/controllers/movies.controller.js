var db = require('../config/db.config');
const Joi = require('joi');
const { validateParamsGetMoviesByPage, validateParamsGetMovieByUrl } = require('../validation/validator');

exports.GetMoviesByPage = (req,res) => {

    const { error, value } = validateParamsGetMoviesByPage(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let GetMoviesByPage = 
    `CALL GetMoviesByPage(${req.query.currentPage},${req.query.size},'${req.query.search}','${req.query.genre}','${req.query.orderBy}','${req.query.orderDir}', @totalRecords, @totalPages);
     SELECT @totalRecords as totalRecords, @totalPages as totalPages;`;

    console.log(GetMoviesByPage);
    db.query(GetMoviesByPage, (err,data,fields) =>{
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.send(data);
    });
}

exports.GetMovieByUrl = (req,res) => {

    const { error, value } = validateParamsGetMovieByUrl(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let GetMovie = 
    `CALL GetMovieByUrl('${req.query.v}');`;
    console.log(GetMovie);
    db.query(GetMovie, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.send(data[0]);
    }); 

}

exports.GetAllGenres = (req,res) => {

    let GetAllGenres =
    `CALL GetAllGenres()`;

    db.query(GetAllGenres, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.send(data[0]);
    });
}

exports.PostMovie = (req,res) => {


    let PostMovie =
    `CALL InsMovie('${req.body.Name}','${req.body.Genre}','${req.body.Thumbnail}','${req.body.Video}','${req.body.Desc}', ${req.body.Rating},'ODSD2Mg==');`;

    db.query(PostMovie, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "POST SUCCESFUL";
        res.status(200).end();
    });

}