const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/program-managers', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['firstName', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    // console.log(users)
    // res.json(users)
    res.render('pms-list', {
      users,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//this route will serve the user dashboard based on type of logged in user
router.get('/', withAuth, async (req, res) => {
  res.render('dashboard');
});

// This is complete
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
  // res.json('this will be the login page');
});

module.exports = router;
