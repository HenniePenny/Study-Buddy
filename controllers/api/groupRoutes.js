// See the groups for a given cohort
// Create groups for a cohort


const router = require('express').Router();
const { Group } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get groups for a given Cohorts
router.get('/:cohortId', withAuth, async (req, res) => {
    res.json('groups for a given Cohorts')
});

// Create a group
router.post('/', withAuth, async (req, res) => {

})



module.exports = router;
