const PrestamoService = require('../services/prestamoService');

class PrestamoController {
    static async traerPrestamos(req, res) {
        try {
            let prestamos = await PrestamoService.traerPrestamos();
            res.json({ prestamos });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al traer préstamos" });
        }
    }

    static async agregarPrestamo(req, res) {
        try {
            let prestamo = await PrestamoService.agregarPrestamo(req.body);
            res.json({ prestamo });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al añadir préstamo" });
        }
    }

    static async actualizarPrestamo(req, res) {
        try {
            let prestamo = await PrestamoService.actualizarPrestamo(req.params.id, req.body);
            res.json({ prestamo });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al actualizar préstamo" });
        }
    }

    static async eliminarPrestamo(req, res) {
        try {
            let resultado = await PrestamoService.eliminarPrestamo(req.params.id);
            res.json({ resultado });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al eliminar préstamo" });
        }
    }
}

module.exports = PrestamoController;
