let  usuarioService =require('../services/usuarioService');

class UsuarioController {
        static async traerLibros(req, res) {
            try {
                let libritito = await usuarioService.traerLibros();
                res.json(libritito );
            } catch (e) {
                res.json("Error al traer libros" );
            }
        }
    
    static async registrarLibro(req, res) {
        try {
            let libro = await usuarioService.agregarLibro(req.body);
            res.json(libro );
        } catch (e) {
            res.json({ error: "Error al añadir libro" });
        }
    }

}
 module.exports = UsuarioController;