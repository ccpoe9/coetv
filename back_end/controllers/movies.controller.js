var db = require('../config/db.config');
const Joi = require('joi');
const { validateParamsGetMoviesByPage, validateParamsGetMovieByUrl } = require('../validation/validator');

exports.GetMoviesByPage = (req,res) => {

    const { error, value } = validateParamsGetMoviesByPage(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).send(res.statusMessage);
    }

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

    const { error, value } = validateParamsGetMovieByUrl(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).send(res.statusMessage);
    }

    let GetMovie = 
    `CALL GetMovieByUrl('${req.query.v}');`;
    console.log(GetMovie);
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