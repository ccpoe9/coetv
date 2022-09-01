let express = require('express');
let router = express.Router();
let moviescontroller = require('../controllers/movies.controller');
let showscontroller = require('../controllers/shows.controller');
const { GetShowsByPage } = require('../controllers/shows.controller');

router.get('/api', (req,res) =>{
    res.send("VIDEO WEBSITE API");
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
router.get('/api/shows/video',showscontroller.GetShowByUrl);
router.get('/api/shows/episodes',showscontroller.GetEpisodesByShowSeason);
router.post('/api/shows/episodes', showscontroller.PostEpisode);
module.exports = router;