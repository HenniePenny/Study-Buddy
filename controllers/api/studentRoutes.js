// Add Students to a given cohort
// Delete a student

const router = require('express').Router();
const { Student } = require('../../models/');
const withAuth = require('../../utils/auth');

// Add a student to a given Cohort
router.post('/', withAuth, async (req, res) => {
    res.json('Add a student to a given Cohort')
});

// Delete a student
router.delete('/:studentId', withAuth, async (req, res) => {
    res.json('Delete a student')
})

module.exports = router;