const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    group_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    // project_number: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },

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
    modelName: 'group',
  }
);

module.exports = Group;
