let express = require('express');
let router = express.Router();
let moviescontroller = require('../controllers/movies.controller');
let showscontroller = require('../controllers/shows.controller');
const { GetShowsByPage } = require('../controllers/shows.controller');

router.get('/api', (req,res) =>{
    res.send("VIDEO WEBSITE API");
});

router.get('/api/movies',moviescontroller.GetMoviesByPage);
router.get('/api/movies/video', moviescontroller.GetMovieByUrl);
router.get('/api/genres', moviescontroller.GetAllGenres);
router.get('/api/shows',showscontroller.GetShowsByPage);
router.get('/api/shows/video',showscontroller.GetShowByUrl);

module.exports = router;