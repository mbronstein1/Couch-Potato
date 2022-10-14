const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const browseRoutes = require('./browseRoutes');
const searchRoutes = require('./searchRoutes')


router.use('/api', apiRoutes);
router.use('/', homeRoutes)
router.use('/browse', browseRoutes);
router.use('/search', searchRoutes);
module.exports = router;