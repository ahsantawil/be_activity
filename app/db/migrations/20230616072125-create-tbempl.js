'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbempls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iddept: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      gend: {
        type: Sequelize.STRING
      },
      emai: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      lastlogi: {
        type: Sequelize.STRING
      },
      stat: {
        type: Sequelize.STRING
      },
      creaby: {
        type: Sequelize.STRING
      },
      creadate: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tbempls');
  }
};