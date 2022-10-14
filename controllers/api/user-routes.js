const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
        res.status(200).json(dbUserData);
    });

} catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Login
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
        console.log(
          '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
          req.session.cookie
        );
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  router.post('/collection', async (req, res) => {
    try{
      if(!req.session.loggedIn) {
        res.render('login');    
      }
      else {
        const addFavorite = Favorite.create(req.body, {
  
        })     
      }
    }
    catch(err) {
      res.status(400).json(err);
    }
  })

  module.exports = router;