const router = require('express').Router();
const { Favorite } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/collection

//add favorite
router.post('/', withAuth, async (req, res) => {
    try {
        //check for dups
        const dupFavorite = await Favorite.findOne({
            where: {
                user_id: req.session.user_id,
                movie_id: req.body.movie_id
            }
        });
        if (dupFavorite) {
            //return "partial success" and don't update favorites
            res.status(203).json({ message: "Favorite already exisits" })
        }
        else {
            //add favorite
            const addFavorite = await Favorite.create({
                user_id: req.session.user_id,
                movie_id: req.body.movie_id,
            });
            res.status(200).json(addFavorite);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//remove favorite
router.delete('/:movie_id', withAuth, async (req, res) => {
    try {
        if (!req.params.movie_id) {
            res.status(400).json({ message: "Movie ID must be included." })
        }
        else {
            const deletedFavorite = await Favorite.destroy({
                where: {
                    user_id: req.session.user_id,
                    movie_id: req.params.movie_id
                }
            });
            res.status(200).json({ message: "Favorite deleted," })
        }
    }
    catch (err) {
        res.status(500).json({ message: "Error deleting from collection" })
    }
});

module.exports = router;
