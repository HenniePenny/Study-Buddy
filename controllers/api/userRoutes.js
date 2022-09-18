// For user routes
// List all the users findall except the current user (Name, email, program)
// Add a user
// Delete a user
// login
// logout
// find all cohort for given userid (:userId)

const router = require('express').Router();
const { User, Cohort } = require('../../models');
const withAuth = require('../../utils/auth');

// List all users (Name, email)
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['firstName', 'ASC']],
    });

    if (!userData) {
      res
        .status(404)
        .json({ message: 'User does not exists, please try again' });
      return;
    }
    // const users = userData.map((project) => project.get({ plain: true }));
    res.render('pms-list', { userData });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a user
router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;

    res.status(200).json(userData);
    // });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a user
router.delete('/:userId', withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.userId,
      },
    });

    if (userData) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find all cohort with userId
router.get('/cohort/:userId', withAuth, async (req, res) => {
  try {
    const cohortData = await Cohort.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['firstName', 'ASC']],
      // where: {
      //   id: req.params.id,
      //   user_id: req.session.user_id,
      // },
    });

    if (!cohortData) {
      res
        .status(404)
        .json({ message: 'Cohort does not exists, please try again' });
      return;
    }
    const cohorts = cohortData.map((project) => project.get({ plain: true }));
    res.json(cohorts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
