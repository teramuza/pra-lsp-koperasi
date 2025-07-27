'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.addConstraint('transactions', {
                fields: ['id_item'],
                type: 'foreign key',
                name: 'fk_item_transaction',
                references: {
                    table: 'items',
                    field: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
            queryInterface.addConstraint('transactions', {
                fields: ['id_sales'],
                type: 'foreign key',
                name: 'fk_item_sales',
                references: {
                    table: 'sales',
                    field: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            })
        ])
    },

    async down(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.removeConstraint('transactions', 'fk_item_transaction'),
        ])
    }
};
