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
    res.json(cohorts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a new cohort (Done)
router.post('/', async (req, res) => {
  try {
    const cohortData = await Cohort.create(req.body);

    req.session.save(() => {
      req.session.user_id = cohortData.id;
      req.session.logged_in = true;

      res.status(200).json(cohortData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get details of a single cohort (done)
router.get('/:cohortId',  async (req, res) => {
  try {
    const cohortData = await Cohort.findAll({
      where: { id: req.params.cohortId }
    });

    if (!cohortData) {
      res
        .status(404)
        .json({ message: 'User does not exists, please try again' });
      return;
    }
    const cohorts = cohortData.map((project) => project.get({ plain: true }));
    res.json(cohorts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Multiple students to cohort (not done)
router.post('/:cohortId/add-students', async (req, res) => {
  try {
    const studentData = await Student.create(req.body);

    req.session.save(() => {
      req.session.cohort_id = studentData.id;
      req.session.logged_in = true;

      res.status(200).json(studentData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a new cohort (Done)
router.delete('/:cohortId', async (req, res) => {
  try {
    const cohortData = await Cohort.destroy({
      where: {
        id: req.params.cohortId,
      },
    });

    if (cohortData) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
