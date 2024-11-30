let DataTypes = require('sequelize');
let sequelize = require('../config/bd');

const Usuario = sequelize.define('Usuario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  rol: { type: DataTypes.ENUM('admin', 'usuario'), defaultValue: 'usuario',
  }
});

module.exports = Usuario;
