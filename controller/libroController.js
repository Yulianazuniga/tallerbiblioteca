
let LibroService = require('../services/libroService');

class LibroController {
   

    static async agregarLibro(req, res) {
        try {
            let libro = await LibroService.agregarLibro(req.body);
            res.json(libro );
        } catch (e) {
            res.json({ error: "Error al añadir libro" });
        }
    }

    static async actualizarLibro(id, datos){
        try{
            let [respuesta] = await LibroService.actualizarTarea(req.params.id, req.body);
            if(respuesta == 0){
                return res.json({mensaje:"libro no encontrada o no actualizada"});
            }
            else{
                return res.json({mensaje:"libro no encontrada o no actualizada"});
            }
        }catch(e){
            console.log("error al actualizar la libro");
            res.json({mensaje: "error al actualizar la libro"})
        }
    }

    static async eliminarLibro(req, res) {
        try {
            let eliminarlibo = await LibroService.eliminarLibro(req.params.id);
            res.json( eliminarlibo );
        } catch (e) {
            res.json({ error: "Error al eliminar libro" });
        }
    }
}





module.exports = LibroController;
