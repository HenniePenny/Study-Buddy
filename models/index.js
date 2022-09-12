const User = require('./User');
const Cohort = require('./Cohort');
const Student = require('./Student');

User.hasMany(Cohort, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Cohort.belongsTo(User, {
  foreignKey: 'user_id',
});

Cohort.hasMany(Student, {
  foreignKey: 'cohort_id',
  onDelete: 'CASCADE'
});

Student.belongsTo(Cohort, {
  foreignKey: 'cohort_id',
});

module.exports = { User, Cohort, Student };
