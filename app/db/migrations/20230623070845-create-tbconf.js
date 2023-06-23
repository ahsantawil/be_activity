'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbconfs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      daterevistar: {
        type: Sequelize.INTEGER
      },
      datereviend: {
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING
      },
      phon: {
        type: Sequelize.STRING
      },
      emai: {
        type: Sequelize.STRING
      },
      addr: {
        type: Sequelize.STRING
      },
      foot01: {
        type: Sequelize.STRING
      },
      foot02: {
        type: Sequelize.STRING
      },
      foot03: {
        type: Sequelize.STRING
      },
      foot04: {
        type: Sequelize.STRING
      },
      foot05: {
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
    await queryInterface.dropTable('tbconfs');
  }
};