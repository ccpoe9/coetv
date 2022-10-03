let express = require('express');
let livecontroller = require('../controllers/live.controller');
let router = express.Router();
let moviescontroller = require('../controllers/movies.controller');
let showscontroller = require('../controllers/shows.controller');
let videocontroller = require('../controllers/video.controller');
const { GetShowsByPage } = require('../controllers/shows.controller');
const os = require('os');

router.get('/api', (req,res) =>{
    res.send(`VIDEO WEBSITE API", "${os.hostname()}}`);
});

router.get('/api/movies',moviescontroller.GetMoviesByPage);
router.post('/api/movies',moviescontroller.PostMovie);
router.put('/api/movies',moviescontroller.UpdateMovie);
router.delete('/api/movies',moviescontroller.DeleteMovie);
router.get('/api/movies/video', moviescontroller.GetMovieByUrl);
router.get('/api/genres', moviescontroller.GetAllGenres);
router.get('/api/shows',showscontroller.GetShowsByPage);
router.post('/api/shows',showscontroller.PostShow);
router.put('/api/shows',showscontroller.UpdateShow);
router.delete('/api/shows',showscontroller.DeleteShow);
router.get('/api/shows/video',showscontroller.GetShowByUrl);
router.get('/api/shows/episodes',showscontroller.GetEpisodesByShowSeason);
router.post('/api/shows/episodes', showscontroller.PostEpisode);
router.put('/api/shows/episodes', showscontroller.UpdateEpisode);
router.delete('/api/shows/episodes', showscontroller.DeleteEpisode);
router.get('/api/live', livecontroller.GetLive);
router.post('/api/live', livecontroller.PostChannel);
router.put('/api/live', livecontroller.UpdateChannel);
router.delete('/api/live', livecontroller.DeleteChannel);
router.get('/api/live/guide', livecontroller.GetGuide);
router.get('/api/video', videocontroller.GetMovieSource);
module.exports = router;