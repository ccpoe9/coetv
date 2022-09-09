var db = require('../config/db.config');
const Joi = require('joi');
const { validateParamsGetMoviesByPage, validateParamsGetShowByUrl, validateParamsGetEpisodesByShowSeason,
     validateParamsPostShow , validateParamsPostEpisode, validateParamsUpdateShow, validateParamsUpdateEpisode, 
     validateParamsDeleteShow,  validateParamsDeleteEpisode} = require('../validation/validator');
const { urlGenerator } = require('../generators/urlGenerate');

exports.GetShowsByPage = (req,res) => {

    const { error, value } = validateParamsGetMoviesByPage(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let GetShowsByPage = 
    `CALL GetShowsByPage(${req.query.currentPage},${req.query.size},'${req.query.search}','${req.query.genre}','${req.query.orderBy}','${req.query.orderDir}', @totalRecords, @totalPages);
     SELECT @totalRecords as totalRecords, @totalPages as totalPages;`;

    db.query(GetShowsByPage, (err,data,fields) =>{
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.send(data);
    });
}
exports.GetShowByUrl = (req,res) => {

    const { error, value } = validateParamsGetShowByUrl(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let GetShowByUrl =
    `CALL GetShowByUrl('${req.query.v}', @totalSeasons);
    SELECT @totalSeasons as totalSeasons;`;

    db.query(GetShowByUrl, (err,data,fields) =>{
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.send(data);
    });


}

exports.GetEpisodesByShowSeason = (req,res) => {

    const { error, value } = validateParamsGetEpisodesByShowSeason(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let GetEpisodesByShowSeason =
    `CALL GetEpisodesByShowSeason('${req.query.showName}',${req.query.season}, @totalEpisodes);
     SELECT @totalEpisodes as totalEpisodes;`;
    db.query(GetEpisodesByShowSeason, (err,data,fields) =>{
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.send(data);
    }); 
}

exports.PostShow = (req,res) => {

    const { error, value } = validateParamsPostShow(req.body);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }
    let PostShow =
    `CALL InsShow('${req.body.Name}','${req.body.Genre}','${req.body.Thumbnail}','${req.body.Desc}', ${req.body.Rating},'${urlGenerator('show')}');`;

    db.query(PostShow, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "POST SUCCESFUL";
        res.status(200).end();
    });
}

exports.UpdateShow = (req,res) => {

    const { error, value } = validateParamsUpdateShow(req.body);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let UpdateShow =
    `SET SQL_SAFE_UPDATES = 0;
    CALL UpdShow(${req.body.id},'${req.body.Name}','${req.body.Genre}', '${req.body.Thumbnail}','${req.body.Desc}',${req.body.Rating});
    SET SQL_SAFE_UPDATES = 1;`;

    db.query(UpdateShow, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "PUT SUCCESFUL";
        res.status(200).end();
    });
}

exports.PostEpisode = async (req,res) => {

    totalSeasons  = await getLatestSeason(req.body.showName);
    
    var totalEpisodes = await getTotalEpisodes(req.body.showName, req.body.season);

    if(req.body.season > totalSeasons + 1 || !totalSeasons && req.body.season > 1){
        res.statusMessage = "Input Validation Error : Cannot insert seasons out of order";
        return res.status(400).end();
    }
    const { error, value } = validateParamsPostEpisode(req.body);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }


    let PostEpisode =
    `CALL InsEpisode('${req.body.Name}', '${req.body.showName}',${req.body.season},${totalEpisodes+1},'${req.body.Video}','${req.body.Desc}');`;

    db.query(PostEpisode, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "POST SUCCESFUL";
        res.status(200).end();
    });
}

exports.UpdateEpisode = (req,res) => {

    const { error, value } = validateParamsUpdateEpisode(req.body);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let UpdateEpisode = 
    `CALL UpdEpisode(${req.body.id},'${req.body.Name}','${req.body.Video}', '${req.body.Desc}');`;

    db.query(UpdateEpisode, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "PUT SUCCESFUL";
        res.status(200).end();
    });
}

exports.DeleteShow = (req,res) => {

    const { error, value } = validateParamsDeleteShow(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let DeleteShow = 
    `SET SQL_SAFE_UPDATES = 0;
    CALL DeleteShow(${req.query.id});
    SET SQL_SAFE_UPDATES = 1;`;

    db.query(DeleteShow, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "DELETE SUCCESFUL";
        res.status(200).end();
    });
}
exports.DeleteEpisode = (req,res) => {

    const { error, value } = validateParamsDeleteEpisode(req.query);
    if(error){
        console.log(error);
        res.statusMessage = "Input Validation Error : " + error.details[0].message;
        return res.status(400).end();
    }

    let DeleteEpisode = 
    `CALL DeleteEpisode(${req.query.id});`;

    db.query(DeleteEpisode, (err,data,fields) => {
        if(err){
            console.error(err.message);
            res.statusMessage = "SQL Error : " + err.message;
            return res.status(400).end();
        }
        res.statusMessage = "DELETE SUCCESFUL";
        res.status(200).end();
    });
}



getLatestSeason = async (showName) => {

    let getTotalSeasons =
    `SET @totalSeasons := 
    (SELECT DISTINCT(\`Season\`) FROM \`mediatime-db\`.\`Episodes\` e
        WHERE e.\`ShowName\` = '${showName}'
        ORDER BY \`Season\` DESC LIMIT 1);
    SELECT @totalSeasons as totalSeasons;`;

    return new Promise((resolve, reject) => {
        db.query(getTotalSeasons, (err,data,fields) =>{
            if(err){
                console.error(err.message);
                reject(err.message);
            }
            resolve(data[1][0].totalSeasons);
        });
    });
}


getTotalEpisodes = async (showName, season) => {

    let GetEpisodesByShowSeason =
    `CALL GetEpisodesByShowSeason('${showName}',${season}, @totalEpisodes);
    SELECT @totalEpisodes as totalEpisodes`;

    return new Promise((resolve, reject) => {
        db.query(GetEpisodesByShowSeason, (err,data,fields) =>{
            if(err){
                reject(err.message);
            }   
            resolve(data[2][0].totalEpisodes);
        }); 
    });

}