const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`api route ${req.session}`)
});

module.exports = router;