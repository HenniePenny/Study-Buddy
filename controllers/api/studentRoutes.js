// Add Students to a given cohort
// Delete a student

const router = require('express').Router();
const { Student } = require('../../models/');
const withAuth = require('../../utils/auth');

// Add a student to a given Cohort (done)
router.post('/', async (req, res) => {
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

// Delete a student (done)
router.delete('/:studentId', async (req, res) => {
  try {
    const studentData = await Student.destroy({
      where: {
        id: req.params.studentId,
      },
    });

    if (studentData) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
