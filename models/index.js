const User = require('./User');
const Cohort = require('./Cohort');
const Student = require('./Student');
const Group = require('./Group');
const StudentGroup = require('./StudentGroup');

User.hasMany(Cohort, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Cohort.belongsTo(User, {
  foreignKey: 'user_id',
});

Cohort.hasMany(Student, {
  foreignKey: 'cohort_id',
  onDelete: 'CASCADE',
});

Student.belongsTo(Cohort, {
  foreignKey: 'cohort_id',
});

Cohort.hasMany(Group, {
  foreignKey: 'cohort_id',
  onDelete: 'CASCADE',
});

Group.belongsTo(Cohort, {
  foreignKey: 'cohort_id',
});

// Student belongToMany Group (through StudentGroup)
Student.belongsToMany(Group, {
  // Define the third table needed to store the foreign keys
  through: {
    model: StudentGroup,
    unique: false,
  },
});

// Group belongToMany Student (through StudentGroup)
Group.belongsToMany(Student, {
  // Define the third table needed to store the foreign keys
  through: {
    model: StudentGroup,
    unique: false,
  },
});

module.exports = { User, Cohort, Student, StudentGroup, Group };
