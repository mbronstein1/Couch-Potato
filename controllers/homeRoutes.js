const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("home route")
});

router.get('/login', async (req, res) => {
    res.render('login')
})

module.exports = router;