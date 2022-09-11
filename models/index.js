const User = require('./User');
const Cohort = require('./Cohort');
const Student = require('./Student');

User.belongsToMany(Cohort, {
  foreignKey: 'user_id',
});

Cohort.belongsToMany(Student, {
  foreignKey: 'cohort_id',
});

Student.belongsToOne(Cohort, {
  foreignKey: 'cohort_id',
});

module.exports = { User, Cohort, Student };
