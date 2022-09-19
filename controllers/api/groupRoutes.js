// See the groups for a given cohort
// Create groups for a cohort

const router = require('express').Router();
const { Group, Student } = require('../../models/');
const withAuth = require('../../utils/auth');
const generateGroups = require('../../utils/helpers');

// Get groups for a given Cohorts (not done)
router.get('/get-groups/:cohortId', async (req, res) => {
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

//  (not done)
// Generate groups
router.get('/:cohortId', async (req, res) => {
  try {
    const cohortId = req.params.cohortId;
    const studentData = await Student.findAll({
      where: { cohort_id: cohortId },
    });

    const students = studentData.map((student) => student.get({ plain: true }));

    const groupedStudents = generateGroups(students, 6);

    res.status(200).json(groupedStudents);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
