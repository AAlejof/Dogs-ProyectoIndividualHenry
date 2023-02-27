const { Router } = require('express');
const dogs = require('./dogs');
const temps = require('./temps');
const router = Router();

router.use('/dogs', dogs)
router.use('/temps', temps)


module.exports = router;
