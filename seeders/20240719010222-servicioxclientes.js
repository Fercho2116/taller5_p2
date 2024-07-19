'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Obtener todos los IDs de clientes y servicios
    let [clientes] = await queryInterface.sequelize.query('SELECT id FROM clientes');
    let [servicios] = await queryInterface.sequelize.query('SELECT id FROM servicios');

    // Crear una lista de asociaciones aleatorias
    const servicioxclientes = [];
    
    // Asegúrate de que cada cliente tenga entre 1 y 2 servicios
    clientes.forEach(cliente => {
      const numeroDeServicios = Math.floor(Math.random() * 2) + 1; // Número aleatorio de servicios entre 1 y 2
      const serviciosAsignados = [];
      
      // Asignar servicios aleatorios al cliente
      for (let i = 0; i < numeroDeServicios; i++) {
        let servicio;
        do {
          servicio = servicios[Math.floor(Math.random() * servicios.length)]; // Selección aleatoria de un servicio
        } while (serviciosAsignados.includes(servicio.id)); // Asegúrate de no repetir el servicio
        
        serviciosAsignados.push(servicio.id);
        servicioxclientes.push({
          id_cliente: cliente.id,
          id_servicio: servicio.id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    });

    // Insertar los datos en la tabla servicioxclientes
    await queryInterface.bulkInsert('servicioxclientes', servicioxclientes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicioxclientes', null, {});
  }
};
