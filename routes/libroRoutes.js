let express = require('express');
let router = express.Router();
const LibroController = require('../controller/libroController');

router.post('/libros', LibroController.agregarLibro);
router.put('/:id', LibroController.actualizarLibro);
router.delete('/:id', LibroController.eliminarLibro);

module.exports= router