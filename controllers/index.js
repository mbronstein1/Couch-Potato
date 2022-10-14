const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const browseRoutes = require('./browseRoutes');


router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/browse', browseRoutes);
module.exports = router;