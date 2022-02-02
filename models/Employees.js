const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employees extends Model {}

Employees.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    day1: {
       type: DataTypes.BOOLEAN,
       defaultValue: false,
    }, day2: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day3: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day4: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day5: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day6: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day7: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day8: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day9: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day10: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day11: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day12: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day13: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    }, 
    day14: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    },
    calendar_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'calendar',
      key: 'id',
    },
  },
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'employees',
  }
);

module.exports = Employees;
