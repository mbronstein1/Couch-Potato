const router = require('express').Router();
const userRoutes = require('./user-routes');

router.get('/', (req, res) => {
    res.send(`api route ${req.session}`)
});

router.use('/users', userRoutes);

module.exports = router;