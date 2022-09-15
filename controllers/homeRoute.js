const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//this route will serve the user dashboard based on type of logged in user
router.get('/', async (req, res) => {
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // res.render('login');
  res.json('this will be the login page');
});

module.exports = router;
