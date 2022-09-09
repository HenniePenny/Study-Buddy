const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gender extends Model {}

Gender.init (
    {
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
    },
    {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'gender',
          }
);

module.exports = Gender;