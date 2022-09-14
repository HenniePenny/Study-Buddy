const router = require('express').Router();

const cohortRoutes = require('./cohortRoutes');
const groupRoutes = require('./groupRoutes');
const studentRoutes = require('./studentRoutes');
const userRoutes = require('./userRoutes');

router.use('/cohorts', cohortRoutes);
router.use('/groups', groupRoutes);
router.use('/students', studentRoutes);
router.use('/users', userRoutes);

module.exports = router;
