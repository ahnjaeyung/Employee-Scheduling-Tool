const router = require('express').Router();
const { Employees } = require('../../models');

// CREATE new Employee
router.post('/', async (req, res) => {
  try {
    const dbEmployees = await Employees.create({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      day1: req.body.day1,
      day2: req.body.day2,
      day3: req.body.day3,
      day4: req.body.day4,
      day5: req.body.day5,
      day6: req.body.day6,
      day7: req.body.day7,
      day8: req.body.day8,
      day9: req.body.day9,
      day10: req.body.day10,
      day11: req.body.day11,
      day12: req.body.day12,
      day13: req.body.day13,
      day14: req.body.day14
    });
    console.log(dbEmployees);
      res.status(200).json(dbEmployees);
      // res.redirect('/calendar');
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {
  try {
    const dbEmployees = await Employees.findAll();
    // res.status(200).json(dbEmployees);
// console.log(dbEmployees);
    const employees = dbEmployees.map(emp => emp.get({ plain: true }));
    res.render('calendarView', { employees, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;