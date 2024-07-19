'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicioXCliente extends Model {
    static associate(models) {
      // Define associations if necessary
    }
  }
  ServicioXCliente.init({
    id_cliente: DataTypes.INTEGER,
    id_servicio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServicioXCliente',
    tableName: 'servicioxclientes',
  });
  return ServicioXCliente;
};
