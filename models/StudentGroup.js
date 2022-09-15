const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StudentGroup extends Model {}

StudentGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'group',
        key: 'id',
      },
    },

    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'student',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student_group',
  }
);

module.exports = StudentGroup;
