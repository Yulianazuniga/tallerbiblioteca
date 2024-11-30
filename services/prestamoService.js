const Prestamo = require('../models/prestamo');

class PrestamoService {
    static async traerPrestamos() {
        try {
            let prestamos = await Prestamo.findAll();
            return prestamos;
        } catch (e) {
            console.error("Error al traer préstamos:", e);
            throw e;
        }
    }

    static async agregarPrestamo(datos) {
        try {
            let prestamo = await Prestamo.create(datos);
            return prestamo;
        } catch (e) {
            console.error("Error al agregar préstamo:", e);
            throw e;
        }
    }

    static async actualizarPrestamo(id, datos) {
        try {
            let prestamo = await Prestamo.findByPk(id);
            if (prestamo) {
                return await prestamo.update(datos);
            } else {
                throw new Error('Préstamo no encontrado');
            }
        } catch (e) {
            console.error("Error al actualizar préstamo:", e);
            throw e;
        }
    }

    static async eliminarPrestamo(id) {
        try {
            let prestamo = await Prestamo.findByPk(id);
            if (prestamo) {
                return await prestamo.destroy();
            } else {
                throw new Error('Préstamo no encontrado');
            }
        } catch (e) {
            console.error("Error al eliminar préstamo:", e);
            throw e;
        }
    }
}

module.exports = PrestamoService;
