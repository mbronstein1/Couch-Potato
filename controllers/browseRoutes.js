const { Movie } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');

const router = require('express').Router();
// route /browse
router.get('/', async (req, res) => {
    //get 10 random items
    try {
        const movies = [];
        for(let i = 0; i < 10; i++) {
            let randId = Math.floor((Math.random() * 199) +1) 
            const browse = await Movie.findOne({where: {id: randId}})
            movies.push(browse.get({plain:true}))
        }
        res.status(200).render('results', {movies})
        // res.status(200).json(resultArr)
    }
    catch(e) {
        res.status(500).json({message: "GET random failed."})
    }
});

router.get('/:genre', withAuth, async (req, res) => {
    try {
            const genreResultsDB = await Movie.findAll({
                where: {Genre: {[Op.like]: `%${req.params.genre}%`}}
            });
            if(genreResultsDB) {
                const genreResults = genreResultsDB.map((result) => result.get({plain:true}));
                var movies = genreResults.map(result => ({ value: result, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value).slice(0, 10);
                res.status(200).render('results', {movies})
                // res.status(200).json(movies)
            }
            else {
                res.status(404).json({message: "No matching results"})
            }
        }
    catch(e) {
        res.status(500).json({message: "GET genre failed"})
    }
});

//get search for movie by title with post


module.exports = router;