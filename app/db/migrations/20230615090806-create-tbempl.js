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
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      nik: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      gend: {
        type: Sequelize.INTEGER
      },
      emai: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      lastlogi: {
        type: Sequelize.DATETIME
      },
      stat: {
        type: Sequelize.INTEGER
      },
      creaby: {
        type: Sequelize.STRING
      },
      creadate: {
        type: Sequelize.DATETIME
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