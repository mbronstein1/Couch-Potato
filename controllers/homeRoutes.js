const { Movie, Favorite, User } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');
const formatTitle = require('../utils/format');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { loggedIn: req.session.loggedIn })
});

router.get('/login', async (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/collection', withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            attributes: {
                exclude: ['password', 'email']
            },
            where: {
                id: req.session.user_id
            },
            include: [{
                model: Movie, through: Favorite, as: 'movies',
                attributes: {
                    exclude: ['Certificate', 'Meta_score', 'No_of_Votes', 'Gross']
                }
            }]
        });
        const movies = dbUserData.movies.map(data => data.get({ plain: true }));
        res.status(200).render('collection', { movies, loggedIn: req.session.loggedIn });
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.get('/search/:title', withAuth, async (req, res) => {
    try {
        if (!req.params.title) {
            res.status(429).json({ message: "Request must include title" })
        }
        else {
            const formattedTitle = formatTitle(req.params.title);
            const searchResult = await Movie.findAll(
                {
                    where: {
                        Series_Title: { [Op.like]: `%${formattedTitle}%` }
                    }
                }
            )
            if (searchResult[0] == null) {
                res.status(404).json({ message: `No results found matching ${formattedTitle}` })
            }
            else {
                const movies = searchResult.map(result => result.get({ plain: true }))
                res.status(200).render('results', { movies, loggedIn: req.session.loggedIn })
            }
        }
    }
    catch (e) {
        res.status(500).json({ message: "Error in search" })
    }
});

module.exports = router;
