let express = require('express');
let router = express.Router();
const UsuarioController = require('../controller/usuarioController');

router.get('/usuario', UsuarioController.traerLibros);
router.post('/usuario/:id', UsuarioController.registrarLibro);

module.exports= router;