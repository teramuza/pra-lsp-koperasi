'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Promise.all([
        queryInterface.addConstraint('sales', {
          fields: ['id_customer'],
          type: 'foreign key',
          name: 'fk_customer',
          references: {
            table: 'customers',
            field: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
    ])
  },

  async down (queryInterface, Sequelize) {
    await Promise.all([
        queryInterface.removeConstraint('sales', 'fk_customer'),
    ])
  }
};
