'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbrevidepts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iddept: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iddepteval: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      q01: {
        type: Sequelize.STRING
      },
      q02: {
        type: Sequelize.STRING
      },
      q03: {
        type: Sequelize.STRING
      },
      q05: {
        type: Sequelize.STRING
      },
      q06: {
        type: Sequelize.STRING
      },
      q07: {
        type: Sequelize.STRING
      },
      q08: {
        type: Sequelize.STRING
      },
      q09: {
        type: Sequelize.STRING
      },
      q10: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tbrevidepts');
  }
};