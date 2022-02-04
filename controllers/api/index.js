const router = require('express').Router();
const calendarRoutes = require('./calendarRoutes');
const userRoutes = require('./user-routes')

router.use('/calendar', calendarRoutes);
router.use('/users', userRoutes);

module.exports = router;