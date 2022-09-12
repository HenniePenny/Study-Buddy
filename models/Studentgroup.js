const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Studentgroup extends Model {}

Studentgroup.init(
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
      modelName: 'studentgroup',
    }
  );
  
  module.exports = Studentgroup;
  