var db = require('../config/db.config');
const Joi = require('joi');
const { validateParamsGetMoviesByPage, validateParamsGetMovieByUrl, validateParamsPostMovie , validateParamsUpdateMovie, validateParamsDeleteMovie} = require('../validation/validator');
const { urlGenerator } = require('../generators/urlGenerate');

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

    const { error, value } = validateParamsPostMovie(req.body);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }
    let PostMovie =
    `CALL InsMovie('${req.body.Name}','${req.body.Genre}','${req.body.Thumbnail}','${req.body.Video}','${req.body.Desc}', ${req.body.Rating},'${urlGenerator('movie')}');`;

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

exports.UpdateMovie = (req,res) => {

    const { error, value } = validateParamsUpdateMovie(req.body);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let UpdateMovie = 
    `CALL UpdMovie(${req.body.id},'${req.body.Name}','${req.body.Genre}','${req.body.Thumbnail}','${req.body.Video}','${req.body.Desc}',${req.body.Rating});`;

    db.query(UpdateMovie, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "PUT SUCCESFUL";
        res.status(200).end();
    });
}

exports.DeleteMovie = (req,res) => {

    const { error, value } = validateParamsDeleteMovie(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let DeleteMovie = 
    `CALL DeleteMovie(${req.query.id});`;

    db.query(DeleteMovie, (err,data,fields) => {
        if(err){
            console.error(err);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "DELETE SUCCESFUL";
        res.status(200).end();
    });
}