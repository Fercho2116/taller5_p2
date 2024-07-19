'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      models.Cliente.belongsToMany(models.Servicio, {
        through: 'ServicioXCliente',
        foreignKey: 'id_cliente',
        as: 'servicios'
      });
    }
  }

  Cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });

  return Cliente;
};
