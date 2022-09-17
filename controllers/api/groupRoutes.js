// See the groups for a given cohort
// Create groups for a cohort

const router = require('express').Router();
const { Group } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get groups for a given Cohorts
router.get('/:cohortId', withAuth, async (req, res) => {
  res.json('groups for a given Cohorts');
});

// Create a group (not done)
router.post('/', async (req, res) => {
  try {
    const groupData = await Group.create(req.body);

    req.session.save(() => {
      req.session.user_id = groupData.id;
      req.session.logged_in = true;

      res.status(200).json(groupData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
