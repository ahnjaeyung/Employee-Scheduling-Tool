const router = require('express').Router();
const { Gallery, Painting } = require('../models');
const { Employees } = require('../models');

router.get('/', async (req, res) => {

  try {

    if (req.session.loggedIn) {
      res.redirect('/calendar');
      return;
    }
    res.render('homepage', {
      // galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/calendar', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  try {
    const dbEmployees = await Employees.findAll();
    const employees = dbEmployees.map(emp => emp.get({ plain: true }));
    res.render('calendarView', { employees, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/form', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('form');
});

module.exports = router;
