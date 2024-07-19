'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    const servicios = [];
    for (let i = 0; i < 10; i++) {
      servicios.push({
        descripcion: 'Servicio ' + (i + 1),  // Genera una descripción de servicio aleatoria
        precio: faker.commerce.price(10, 200, 2),  // Genera un precio aleatorio entre 10 y 200 con 2 decimales
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('servicios', servicios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
