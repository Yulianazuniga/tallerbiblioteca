let DataTypes  = require('sequelize');
let sequelize = require('../config/bd');
let Libro = require('./libro');
let Usuario = require('./usuario');

const Prestamo = sequelize.define('Prestamo', {
  fechaPrestamo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaDevolucion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  libroId: {
    type: DataTypes.INTEGER,
    references: {
      model: Libro, // Modelo al que se referencia
      key: 'id'     // Clave primaria del modelo referenciado
    }
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario, // Modelo al que se referencia
      key: 'id'       // Clave primaria del modelo referenciado
    }
  }
}, {
  timestamps: false,
  tableName: 'Prestamos' // Asegura que el nombre de la tabla sea correcto
});

Prestamo.belongsTo(Libro, { foreignKey: 'libroId' });
Prestamo.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Prestamo;

