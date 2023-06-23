'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbworkdays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      perimont: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      periyear: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      workdays: {
        type: Sequelize.INTEGER
      },
      stat: {
        type: Sequelize.INTEGER
      },
      creaby: {
        type: Sequelize.STRING
      },
      creadate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbworkdays');
  }
};