const User = require('./User');
const Cohort = require('./Cohort');
const Student = require('./Student');

User.belongsToMany(Cohort, {
  foreignKey: 'user_id',
});

Cohort.belongsTo(User, {
  foreignKey: 'cohort_id',
});

Cohort.hasMany(Student, {
  foreignKey: 'cohort_id',
});

Student.belongsTo(Cohort, {
  foreignKey: 'cohort_id',
});

module.exports = { User, Cohort, Student };
