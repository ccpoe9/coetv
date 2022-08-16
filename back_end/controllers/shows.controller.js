var db = require('../config/db.config');

exports.GetShowsByPage = (req,res) => {

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

    let GetShowByUrl =
    `CALL GetShowByUrl('${req.query.v}')`;

    db.query(GetShowByUrl, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data[0]);
    });


}

exports.GetEpisodesByShowSeason = (req,res) => {

    let GetEpisodesByShowSeason =
    `CALL GetEpisodesByShowSeason(${req.query.showName},${req.query.season}, @totalEpisodes);
     SELECT @totalEpisodes as totalEpisodes;`;

    db.query(GetEpisodesByShowSeason, (err,data,fields) =>{
        if(err){
            return console.err(err.message);
        }
        res.send(data);
    });
}