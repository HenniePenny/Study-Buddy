const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cohort extends Model {}

Cohort.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    graduationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    //not needed here, already linked
    // student_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'student',
    //     key: 'id',
    //   },
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cohort',
  }
);

module.exports = Cohort;
