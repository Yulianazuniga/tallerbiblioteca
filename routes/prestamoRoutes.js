let express = require('express');
let router = express.Router();
let PrestamoController= require('../controller/prestamoController');

router.get('/prestamo', PrestamoController.traerPrestamos);
router.post('/prestamo', PrestamoController.agregarPrestamo);
router.put('/prestamo/:id', PrestamoController.actualizarPrestamo);
router.delete('/prestamo/:id', PrestamoController.eliminarPrestamo);

module.exports= router