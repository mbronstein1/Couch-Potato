const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("home route")
});

//get /browse - random movies for collection results.handlebbars
//get search for movie by title with post
//get /browse/:genre


module.exports = router;