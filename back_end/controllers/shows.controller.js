var db = require('../config/db.config');
const Joi = require('joi');
const { validateParamsGetMoviesByPage, validateParamsGetShowByUrl, validateParamsGetEpisodesByShowSeason } = require('../validation/validator');

exports.GetShowsByPage = (req,res) => {

    const { error, value } = validateParamsGetMoviesByPage(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).send(res.statusMessage);
    }

    let GetShowsByPage = 
    `CALL GetShowsByPage(${req.query.currentPage},${req.query.size},'${req.query.search}','${req.query.genre}','${req.query.orderBy}','${req.query.orderDir}', @totalRecords, @totalPages);
     SELECT @totalRecords as totalRecords, @totalPages as totalPages;`;

    db.query(GetShowsByPage, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data);
    });
}
exports.GetShowByUrl = (req,res) => {

    const { error, value } = validateParamsGetShowByUrl(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).send(res.statusMessage);
    }

    let GetShowByUrl =
    `CALL GetShowByUrl('${req.query.v}', @totalSeasons);
    SELECT @totalSeasons as totalSeasons;`;

    db.query(GetShowByUrl, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data);
    });


}

exports.GetEpisodesByShowSeason = (req,res) => {

    const { error, value } = validateParamsGetEpisodesByShowSeason(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).send(res.statusMessage);
    }

    let GetEpisodesByShowSeason =
    `CALL GetEpisodesByShowSeason('${req.query.showName}',${req.query.season}, @totalEpisodes);
     SELECT @totalEpisodes as totalEpisodes;`;

    db.query(GetEpisodesByShowSeason, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data);
    }); 
}