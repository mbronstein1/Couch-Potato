const { Movie } = require('../models');

const router = require('express').Router();
// route /browse
router.get('/', async (req, res) => {
    //get random items  TABLESAMPLE()?
    let randId = Math.floor(Math.random() * 100) 
    console.log(randId);
    const browse = await Movie.findOne({where: {id: randId}})
    console.log(browse);

    res.send("home route")
});

// router.get('/:genre', async (req, res) => {
//     const genreResults = await Movie.findAll({
//         where: {Genre: {op.like}}
//     })
// })

//get /browse - random movies for collection results.handlebbars
//get search for movie by title with post
//get /browse/:genre


module.exports = router;