let {DataTypes}  = require('sequelize');
let sequelize = require('../config/bd');

let Libro = sequelize.define('Libro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  añoPublicacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disponibilidad: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  fechaPrestamo: {
    type: DataTypes.DATE,
  }
}, {
  timestamps: false,
  tableName: 'Libros' // Corrección del nombre de la opción
});

module.exports = Libro;

