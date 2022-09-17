// See the groups for a given cohort
// Create groups for a cohort

const router = require('express').Router();
const { Group } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get groups for a given Cohorts (not done)
router.get('/:cohortId', async (req, res) => {
  try {
    const groupData = await Group.findAll({
      order: [['group_number', 'ASC']],
    });

    if (!groupData) {
      res
        .status(404)
        .json({ message: 'Group does not exists, please try again' });
      return;
    }
    const groups = groupData.map((project) => project.get({ plain: true }));
    res.json(groups);
  } catch (err) {
    res.status(500).json(err);
  }
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
