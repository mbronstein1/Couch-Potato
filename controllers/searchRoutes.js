const { Movie } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');
const formatTitle = require('../utils/format');
const router = require('express').Router();

router.post('/', withAuth, async (req, res) => {
    try {
        if(!req.body.title) {
            res.status(429).json({message: "Request must include title in the body"})
        }
        else {
            const formattedTitle = formatTitle(req.body.title);
            const searchResult = await Movie.findAll(
                {where: {
                    Series_Title: {[Op.like]: `%${formattedTitle}%`} 
                }}
            )
            if(searchResult[0] == null) {
                res.status(404).json({message: `No results found matching ${formattedTitle}`})
            }
            else {
                const movies = searchResult.map(result => result.get({plain:true}))
                res.status(200).render('results', {movies})
            }
        }
    }
    catch(e) {
        res.status(500).json({message: "Error in search"})
    }
});

module.exports = router;