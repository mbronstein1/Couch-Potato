const { Movie } = require('../models');
const { Op } = require("sequelize");

const router = require('express').Router();
// route /browse
router.get('/', async (req, res) => {
    //get 10 random items
    const resultArr = [];
    for(let i = 0; i < 10; i++) {
        let randId = Math.floor(Math.random() * 100) 
        const browse = await Movie.findOne({where: {id: randId}})
        resultArr.push(browse.get({plain:true}))
    }
    // res.status(200).render('results', resultArr)
    res.status(200).json(resultArr)
});

router.get('/:genre', async (req, res) => {
    const genreResultsDB = await Movie.findAll({
        where: {Genre: {[Op.like]: `%${req.params.genre}%`}}
    });
    const genreResults = genreResultsDB.map((result) => result.get({plain:true}))
    // res.status(200).render('results', genreResults.get({plain:true}))
    res.status(200).json(genreResults)
});

//get search for movie by title with post


module.exports = router;