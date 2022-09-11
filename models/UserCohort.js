const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserCohort extends Model {}

UserCohort.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    cohort_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cohort',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_cohort',
  }
);

module.exports = UserCohort;
