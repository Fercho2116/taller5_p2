'use strict';

/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    const clientes = [];
    for (let i = 0; i < 10; i++) {
      clientes.push({
        nombre: faker.name.firstName(),  // Genera un primer nombre aleatorio
        apellido: faker.name.lastName(), // Genera un apellido aleatorio
        cedula: faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString(), // Genera un número de 10 dígitos
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Clientes', clientes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
