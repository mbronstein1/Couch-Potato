const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("home route")
});

module.exports = router;