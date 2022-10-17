const { Movie } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');

const router = require('express').Router();
// route /browse
router.get('/', async (req, res) => {
    //get 10 random items
    try {
        const movies = [];
        for (let i = 0; i < 10; i++) {
            let randId = Math.floor((Math.random() * 199) + 1)
            const browse = await Movie.findOne({ where: { id: randId } })
            movies.push(browse.get({ plain: true }))
        }
        res.status(200).render('browse', { movies, loggedIn: req.session.loggedIn })
    }
    catch (e) {
        res.status(500).json({ message: "GET random failed." })
    }
});

//search by genre and return 10 random results
router.get('/:genre', withAuth, async (req, res) => {
    try {
        //goes through movie table and checks the genre column to get movies that has the user inputted genre listed
        const genreResultsDB = await Movie.findAll({
            where: { Genre: { [Op.like]: `%${req.params.genre}%` } }
        });
        //goes through the results we got and randomly picks 10 movies to display
        if (genreResultsDB) {
            const genreResults = genreResultsDB.map((result) => result.get({ plain: true }));
            var movies = genreResults.map(result => ({ value: result, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value).slice(0, 10);
            res.status(200).render('results', { movies, loggedIn: req.session.loggedIn, searchTerm: req.params.genre })
        }
        else {
            res.status(404).json({ message: "No matching results" })
        }
    }
    catch (e) {
        res.status(500).json({ message: "GET genre failed" })
    }
});


module.exports = router;