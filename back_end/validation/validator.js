const { valid } = require('joi');
const Joi = require('joi');
var db = require('../config/db.config');

const validator = (schema) => (payload) => 
    schema.validate(payload);

const GetMoviesByPageSchema =  Joi.object({
    currentPage : Joi.number().min(1).required(),
    size : Joi.number().min(1).required(),
    search : Joi.string().max(100,'utf8').allow('').required(),
    genre : Joi.string().max(100,'utf8').allow('').required(),
    orderBy : Joi.string().valid("id","Name","Rating").required(),
    orderDir: Joi.string().valid("ASC","DESC").required()
});

exports.validateParamsGetMoviesByPage = validator(GetMoviesByPageSchema);

const GetMovieByUrlSchema = Joi.object({
    t : Joi.string().valid("m").required(),
    v : Joi.string().required()
});

exports.validateParamsGetMovieByUrl = validator(GetMovieByUrlSchema);

const GetShowByUrlSchema = Joi.object({
    t : Joi.string().valid("s").required(),
    v : Joi.string().required()
});

exports.validateParamsGetShowByUrl = validator(GetShowByUrlSchema);

const GetEpisodesByShowSeasonSchema = Joi.object({
    showName : Joi.string().required(),
    season : Joi.number().min(1).required()
});

exports.validateParamsGetEpisodesByShowSeason = validator(GetEpisodesByShowSeasonSchema);

const PostMovieSchema = Joi.object({
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    Genre : Joi.string().required(),
    Rating : Joi.number().min(0).required(),
    Thumbnail : Joi.string().required(),
    Video : Joi.string().required()
});

exports.validateParamsPostMovie = validator(PostMovieSchema);

const PostShowSchema = Joi.object({
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    Genre : Joi.string().required(),
    Rating : Joi.number().min(0).required(),
    Thumbnail : Joi.string().required()
});

exports.validateParamsPostShow = validator(PostShowSchema);

const UpdateMovieSchema = Joi.object({
    id : Joi.number().min(1).required(),
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    Genre : Joi.string().required(),
    Rating : Joi.number().min(0).required(),
    Thumbnail : Joi.string().required(),
    Video : Joi.string().required()
});

exports.validateParamsUpdateMovie = validator(UpdateMovieSchema);

const DeleteMovieSchema = Joi.object({
    id : Joi.number().min(1).required()
});

exports.validateParamsDeleteMovie = validator(DeleteMovieSchema);

const PostEpisodeSchema = Joi.object({
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    showName : Joi.string().required(),
    season : Joi.number().min(1).required(),
    Video : Joi.string().required()
});

exports.validateParamsPostEpisode = validator(PostEpisodeSchema);

const UpdateShowSchema = Joi.object({
    id : Joi.number().min(1).required(),
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    Genre : Joi.string().required(),
    Rating : Joi.number().min(0).required(),
    Thumbnail : Joi.string().required()
});

exports.validateParamsUpdateShow = validator(UpdateShowSchema);

const UpdateEpisodeSchema = Joi.object({
    id : Joi.number().min(1).required(),
    Name : Joi.string().required(),
    Desc : Joi.string().required(),
    Video : Joi.string().required()
});

exports.validateParamsUpdateEpisode = validator(UpdateEpisodeSchema);

const DeleteShowSchema = Joi.object({
    id : Joi.number().min(1).required()
});

exports.validateParamsDeleteShow = validator(DeleteShowSchema);

const DeleteEpisodeSchema = Joi.object({
    id : Joi.number().min(1).required()
});

exports.validateParamsDeleteEpisode = validator(DeleteEpisodeSchema);