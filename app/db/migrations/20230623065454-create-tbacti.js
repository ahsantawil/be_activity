'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbactis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idempl: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idjobs: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      idrevistaf: {
        type: Sequelize.INTEGER
      },
      actidate: {
        primaryKey: true,
        type: Sequelize.DATE
      },
      actidead: {
        type: Sequelize.DATE
      },
      actiloca: {
        type: Sequelize.STRING
      },
      picname: {
        type: Sequelize.STRING
      },
      picposi: {
        type: Sequelize.STRING
      },
      picphon: {
        type: Sequelize.STRING
      },
      casetitl: {
        type: Sequelize.STRING
      },
      casedesc: {
        type: Sequelize.TEXT
      },
      caseanal: {
        type: Sequelize.TEXT
      },
      casesolv: {
        type: Sequelize.TEXT
      },
      caseatta: {
        type: Sequelize.STRING
      },
      casestat: {
        type: Sequelize.INTEGER
      },
      casescor: {
        type: Sequelize.INTEGER
      },
      casefeed: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('tbactis');
  }
};