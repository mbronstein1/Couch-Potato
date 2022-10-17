const { Movie, Favorite, User } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');
const formatTitle = require('../utils/format');
const router = require('express').Router();

//home screen
router.get('/', (req, res) => {
    res.render('home', { loggedIn: req.session.loggedIn })
});

//login screen
router.get('/login', async (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn
    })
});

//users collection
router.get('/collection', withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            //does not send back the password and email of user
            attributes: {
                exclude: ['password', 'email']
            },
            where: {
                id: req.session.user_id
            },
            //includes the movie table so we have access to the information from the columns needed to display
            include: [{
                model: Movie, through: Favorite, as: 'movies',
                //excludes column information from movie table that are not in use
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

//search by title
router.get('/search/:title', withAuth, async (req, res) => {
    try {
        if (!req.params.title) {
            res.status(400).json({ message: "Request must include title" })
        }
        else {
            //format user input title to match data imported to database
            const formattedTitle = formatTitle(req.params.title);
            const searchResult = await Movie.findAll(
                {
                    where: {
                        Series_Title: { [Op.like]: `%${formattedTitle}%` }
                    }
                }
            )
            //returns a message to display on results page if no movie found in database with searched title
            if (searchResult[0] == null) {
                res.status(404).render('results', { message: `No results found matching ${formattedTitle}` })
            }
            else {
                const movies = searchResult.map(result => result.get({ plain: true }))
                res.status(200).render('results', { movies, loggedIn: req.session.loggedIn, searchTerm: req.params.title })
            }
        }
    }
    catch (e) {
        res.status(500).json({ message: "Error in search" })
    }
});

module.exports = router;
