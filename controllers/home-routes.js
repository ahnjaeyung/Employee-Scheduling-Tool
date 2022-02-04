const router = require('express').Router();
const { Gallery, Painting } = require('../models');
const { Employees } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {

  try {
    // const dbGalleryData = await Gallery.findAll({
    //   include: [
    //     {
    //       model: Painting,
    //       attributes: ['filename', 'description'],
    //     },
    //   ],
    // });

    // const galleries = dbGalleryData.map((gallery) =>
    //   gallery.get({ plain: true })
    // );
    if (req.session.loggedIn) {
      res.redirect('/api/calendar');
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

// router.get('/calendar', async (req, res) => {
//   try {
//     res.render('calendarView'
//     // , {// loggedIn: req.session.loggedIn,}
//       );
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/calendar', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
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
