const sequelize = require('../config/connection');
const { Cohort, User, Student } = require('../models');

const userData = require('./userData.json');
const cohortData = require('./cohortData.json');
const studentData = require('./studentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const cohorts = await Cohort.bulkCreate(cohortData, {
    individualHooks: true,
    returning: true,
  });

  const students = await Student.bulkCreate(studentData, {
    individualHooks: true,
    returning: true,
  });

  // for (const cohort of cohortData) {
  //   await cohort.create({
  //     ...cohort,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  // for (const student of studentData) {
  //   await student.create({
  //     ...student,
  //     cohort_id: students[Math.floor(Math.random() * students.length)].id,
  //   });
  // }

  // for (const user of userData) {
  //   await user.create({
  //     ...user,
  //     cohort_id: cohorts[Math.floor(Math.random() * cohorts.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
