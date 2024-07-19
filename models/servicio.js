'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Servicio extends Model {
    static associate(models) {
      models.Servicio.belongsToMany(models.Cliente, {
        through: 'ServicioXCliente',
        foreignKey: 'id_servicio',
        as: 'clientes'
      });
    }
  }

  Servicio.init({
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Servicio',
    tableName: 'servicios'
  });

  return Servicio;
};
