const { Employees } = require('../models');

const employeedata = [
    {
      "firstname": "Sal",
      "lastname": "Goodman",
      "day1": "false",
      "day2": "false",
      "day3": "true",
      "day4": "true",
      "day5": "true",
      "day6": "true",
      "day7": "false",
      "day8": "false",
      "day9": "true",
      "day10": "true", 
      "day11": "true",
      "day12": "false",
      "day13": "false",
      "day14": "false"
    },
    {
        "firstname": "Walter",
        "lastname": "White",
        "day1": "true",
        "day2": "true",
        "day3": "true",
        "day4": "true",
        "day5": "true",
        "day6": "true",
        "day7": "false",
        "day8": "false",
        "day9": "true",
        "day10": "true", 
        "day11": "true",
        "day12": "true",
        "day13": "true",
        "day14": "false"
      },
      {
        "firstname": "Jesse",
        "lastname": "Pinkman",
        "day1": "true",
        "day2": "true",
        "day3": "true",
        "day4": "true",
        "day5": "false",
        "day6": "false",
        "day7": "true",
        "day8": "false",
        "day9": "false",
        "day10": "true", 
        "day11": "true",
        "day12": "false",
        "day13": "false",
        "day14": "false"
      },
      {
        "firstname": "Gus",
        "lastname": "Fringe",
        "day1": "false",
        "day2": "false",
        "day3": "true",
        "day4": "true",
        "day5": "false",
        "day6": "false",
        "day7": "true",
        "day8": "true",
        "day9": "true",
        "day10": "true", 
        "day11": "true",
        "day12": "false",
        "day13": "false",
        "day14": "false"
      }
  ];

const seedEmployees = () => Employees.bulkCreate(employeedata);

module.exports = seedEmployees;