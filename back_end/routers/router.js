let express = require('express');
let router = express.Router();
let moviescontroller = require('../controllers/movies.controller');

router.get('/api', (req,res) =>{
    res.send("VIDEO WEBSITE API");
});

router.get('/api/movies',moviescontroller.GetMoviesByPage);
router.get('/api/movies/records', moviescontroller.GetRecords);
router.get('/api/movies/video', moviescontroller.GetMovieByUrl);
router.get('/api/genres', moviescontroller.GetAllGenres);
module.exports = router;