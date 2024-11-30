const Libro = require('../models/libro');

class LibroService {
    static async traerLibros() {
        try {
            let libros = await Libro.findAll();
            return libros;
        } catch (e) {
            console.log("Error al traer libros");
            throw e;
        }
    }

    static async agregarLibro(datos) {
        try {
            let libro = await Libro.create(datos);
            return libro;
        } catch (e) {
            console.log("Error al agregar libro");
            throw e;
        }
    }

    static async actualizarLibro(id, datos) {
        try {
            let libro = await Libro.findByPk(id);
            if (libro) {
                return await libro.update(datos);
            } else {
                throw new Error('Libro no encontrado');
            }
        } catch (e) {
            console.log("Error al actualizar libro");
            throw e;
        }
    }

    static async eliminarLibro(id) {
        try {
            let libro = await Libro.findByPk(id);
            if (libro) {
                return await libro.destroy();
            } else {
                throw new Error('Libro no encontrado');
            }
        } catch (e) {
            console.log("Error al eliminar libro");
            throw e;
        }
    }
}


module.exports = LibroService;


