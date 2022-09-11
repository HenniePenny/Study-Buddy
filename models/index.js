const User = require('./User');
const Cohort = require('./Cohort');
const Student = require('./Student');
const UserCohort = require('./UserCohort');

User.belongsToMany(Cohort, {
  foreignKey: 'user_id',
  through: UserCohort,
});

Cohort.belongsToMany(User, {
  foreignKey: 'cohort_id',
  through: UserCohort,
});

Cohort.hasMany(Student, {
  foreignKey: 'cohort_id',
});

Student.belongsTo(Cohort, {
  foreignKey: 'cohort_id',
});

module.exports = { User, Cohort, Student };
