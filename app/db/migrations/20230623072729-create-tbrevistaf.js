'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbrevistafs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idempl: {
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      iddept: {
        foreignKey: true,
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
      dept01: {
        type: Sequelize.INTEGER
      },
      name01: {
        type: Sequelize.STRING
      },
      avg01: {
        type: Sequelize.FLOAT
      },
      issubm01: {
        type: Sequelize.INTEGER
      },
      dept02: {
        type: Sequelize.INTEGER
      },
      name02: {
        type: Sequelize.STRING
      },
      avg02: {
        type: Sequelize.FLOAT
      },
      issubm02: {
        type: Sequelize.INTEGER
      },
      dept03: {
        type: Sequelize.INTEGER
      },
      name03: {
        type: Sequelize.STRING
      },
      avg03: {
        type: Sequelize.FLOAT
      },
      issubm03: {
        type: Sequelize.INTEGER
      },
      dept04: {
        type: Sequelize.INTEGER
      },
      name04: {
        type: Sequelize.STRING
      },
      avg04: {
        type: Sequelize.FLOAT
      },
      issubm04: {
        type: Sequelize.INTEGER
      },
      dept05: {
        type: Sequelize.INTEGER
      },
      name05: {
        type: Sequelize.STRING
      },
      avg05: {
        type: Sequelize.FLOAT
      },
      issubm05: {
        type: Sequelize.INTEGER
      },
      dept06: {
        type: Sequelize.INTEGER
      },
      name06: {
        type: Sequelize.STRING
      },
      avg06: {
        type: Sequelize.FLOAT
      },
      issubm06: {
        type: Sequelize.INTEGER
      },
      dept07: {
        type: Sequelize.INTEGER
      },
      name07: {
        type: Sequelize.STRING
      },
      avg07: {
        type: Sequelize.FLOAT
      },
      issubm07: {
        type: Sequelize.INTEGER
      },
      dept08: {
        type: Sequelize.INTEGER
      },
      name08: {
        type: Sequelize.STRING
      },
      avg08: {
        type: Sequelize.FLOAT
      },
      issubm08: {
        type: Sequelize.INTEGER
      },
      dept09: {
        type: Sequelize.INTEGER
      },
      name09: {
        type: Sequelize.STRING
      },
      avg09: {
        type: Sequelize.FLOAT
      },
      issubm09: {
        type: Sequelize.INTEGER
      },
      dept10: {
        type: Sequelize.INTEGER
      },
      name10: {
        type: Sequelize.STRING
      },
      avg10: {
        type: Sequelize.FLOAT
      },
      issubm10: {
        type: Sequelize.INTEGER
      },
      dept11: {
        type: Sequelize.INTEGER
      },
      name11: {
        type: Sequelize.STRING
      },
      avg11: {
        type: Sequelize.FLOAT
      },
      issubm11: {
        type: Sequelize.INTEGER
      },
      dept12: {
        type: Sequelize.INTEGER
      },
      name12: {
        type: Sequelize.STRING
      },
      avg12: {
        type: Sequelize.FLOAT
      },
      issubm12: {
        type: Sequelize.INTEGER
      },
      dept13: {
        type: Sequelize.INTEGER
      },
      name13: {
        type: Sequelize.STRING
      },
      avg13: {
        type: Sequelize.FLOAT
      },
      issubm13: {
        type: Sequelize.INTEGER
      },
      dept14: {
        type: Sequelize.INTEGER
      },
      name14: {
        type: Sequelize.STRING
      },
      avg14: {
        type: Sequelize.FLOAT
      },
      issubm14: {
        type: Sequelize.INTEGER
      },
      dept15: {
        type: Sequelize.INTEGER
      },
      name15: {
        type: Sequelize.STRING
      },
      avg15: {
        type: Sequelize.FLOAT
      },
      issubm15: {
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
    await queryInterface.dropTable('tbrevistafs');
  }
};