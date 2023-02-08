var express = require('express');
var router = express.Router();

const Movies = require('../models/Movies.model');
const Celebrity = require('../models/Celebrity.model');

//Iteration #6: Adding New Movies
router.get('/create', (req, res, next) => {  
    Celebrity.find()
    .then((celebsfound) => {
        console.log('here are the celebs I found:', celebsfound)
        res.render('movies/new-movie.hbs', {celebsfound})
    })
    .catch((err) => {
        console.log('Error creating a movie:', err)
    })


})

router.post('/create', (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    Movies.create({ title, genre, plot, cast})
    .then((newMovie) => {
        console.log('this is the new movie', newMovie)
        res.redirect('/movies')
    })
    .catch((err) => {
        res.render('movies/new-movie.hbs')
        console.log('Error posting a new movie:', err)
    })
});




module.exports = router; 