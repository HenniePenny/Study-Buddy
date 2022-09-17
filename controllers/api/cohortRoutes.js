// list the cohort
// add a cohort /cohort
// delete /cohort/cohortId
// details of single cohort(students, groups, otherinfo)

const router = require('express').Router();
const { Cohort, Student } = require('../../models');
const withAuth = require('../../utils/auth');

// Get All Cohorts (Done)
router.get('/', async (req, res) => {
  try {
    const cohortData = await Cohort.findAll({
      order: [['startDate', 'ASC']],
    });

    if (!cohortData) {
      res
        .status(404)
        .json({ message: 'User does not exists, please try again' });
      return;
    }
    const cohorts = cohortData.map((project) => project.get({ plain: true }));
    res.render('cohorts-list');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a new cohort
router.post('/', withAuth, async (req, res) => {
  res.json('add new cohort');
});

// Get details of a single cohort
router.get('/:cohortId', withAuth, async (req, res) => {
  res.json('details of a single  cohort');
});

// Add Multiple students to cohort
router.post('/:cohortId/add-students', withAuth, async (req, res) => {
  res.json('Add Multiple students to cohort');
});

// Delete a new cohort
router.delete('/:cohortId', withAuth, async (req, res) => {
  res.json('Delete a new cohort');
});

module.exports = router;
