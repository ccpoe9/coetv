let express = require('express');
let router = express.Router();
let moviescontroller = require('../controllers/movies.controller');

router.get('/api', (req,res) =>{
    res.send("VIDEO WEBSITE API");
});

router.get('/api/movies',moviescontroller.GetAllMovies);
router.get('/api/movies/records', moviescontroller.GetRecords);

module.exports = router;