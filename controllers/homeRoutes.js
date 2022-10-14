const { Movie, Favorite, User } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("home route")
});

//get /browse - random movies for collection results.handlebbars
//get search for movie by title with post
//get /browse/:genre

router.get('/login', async (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn
    })
});

router.get('/collection', async (req, res) => {
    console.log(req.session.user_id)
    try {
        const dbUserData = await User.findAll({
            attributes: {
                exclude: ['password', 'email']
            },
            where: {
                id: req.session.user_id
            },
            include: [{
                model: Movie, through: Favorite, as: 'favorite_movies',
                attributes: {
                    exclude: ['Certificate', 'Meta_score', 'No_of_Votes', 'Gross']
                }
            }]
        });
        res.send(dbUserData);
    }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;