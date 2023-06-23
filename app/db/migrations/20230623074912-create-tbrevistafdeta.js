'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbrevistafdeta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idrevistaf: {
        type: Sequelize.INTEGER
      },
      iddept: {
        type: Sequelize.INTEGER
      },
      idempl: {
        type: Sequelize.INTEGER
      },
      perimont: {
        type: Sequelize.STRING
      },
      periyear: {
        type: Sequelize.STRING
      },
      q01: {
        type: Sequelize.STRING
      },
      a01: {
        type: Sequelize.FLOAT
      },
      q02: {
        type: Sequelize.STRING
      },
      a02: {
        type: Sequelize.FLOAT
      },
      q03: {
        type: Sequelize.STRING
      },
      a03: {
        type: Sequelize.FLOAT
      },
      q04: {
        type: Sequelize.STRING
      },
      a04: {
        type: Sequelize.FLOAT
      },
      q05: {
        type: Sequelize.STRING
      },
      a05: {
        type: Sequelize.FLOAT
      },
      q06: {
        type: Sequelize.STRING
      },
      a06: {
        type: Sequelize.FLOAT
      },
      q07: {
        type: Sequelize.STRING
      },
      a07: {
        type: Sequelize.FLOAT
      },
      q08: {
        type: Sequelize.STRING
      },
      a08: {
        type: Sequelize.FLOAT
      },
      q09: {
        type: Sequelize.STRING
      },
      a09: {
        type: Sequelize.FLOAT
      },
      q10: {
        type: Sequelize.STRING
      },
      a10: {
        type: Sequelize.FLOAT
      },
      q11: {
        type: Sequelize.STRING
      },
      a11: {
        type: Sequelize.FLOAT
      },
      q12: {
        type: Sequelize.STRING
      },
      a12: {
        type: Sequelize.FLOAT
      },
      q13: {
        type: Sequelize.STRING
      },
      a13: {
        type: Sequelize.FLOAT
      },
      q14: {
        type: Sequelize.STRING
      },
      a14: {
        type: Sequelize.FLOAT
      },
      q15: {
        type: Sequelize.STRING
      },
      a15: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('tbrevistafdeta');
  }
};