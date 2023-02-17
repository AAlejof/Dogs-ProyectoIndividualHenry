const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs');
const temps = require('./temps')

const router = Router();

router.use('/dogs', dogs)
router.use('/temps', temps)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
