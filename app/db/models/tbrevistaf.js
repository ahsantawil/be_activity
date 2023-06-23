'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbrevistaf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbrevistaf.init({
    idempl: DataTypes.INTEGER,
    iddept: DataTypes.INTEGER,
    perimont: DataTypes.STRING,
    periyear: DataTypes.STRING,
    dept01: DataTypes.INTEGER,
    name01: DataTypes.STRING,
    avg01: DataTypes.FLOAT,
    issubm01: DataTypes.INTEGER,
    dept02: DataTypes.INTEGER,
    name02: DataTypes.STRING,
    avg02: DataTypes.FLOAT,
    issubm02: DataTypes.INTEGER,
    dept03: DataTypes.INTEGER,
    name03: DataTypes.STRING,
    avg03: DataTypes.FLOAT,
    issubm03: DataTypes.INTEGER,
    dept04: DataTypes.INTEGER,
    name04: DataTypes.STRING,
    avg04: DataTypes.FLOAT,
    issubm04: DataTypes.INTEGER,
    dept05: DataTypes.INTEGER,
    name05: DataTypes.STRING,
    avg05: DataTypes.FLOAT,
    issubm05: DataTypes.INTEGER,
    dept06: DataTypes.INTEGER,
    name06: DataTypes.STRING,
    avg06: DataTypes.FLOAT,
    issubm06: DataTypes.INTEGER,
    dept07: DataTypes.INTEGER,
    name07: DataTypes.STRING,
    avg07: DataTypes.FLOAT,
    issubm07: DataTypes.INTEGER,
    dept08: DataTypes.INTEGER,
    name08: DataTypes.STRING,
    avg08: DataTypes.FLOAT,
    issubm08: DataTypes.INTEGER,
    dept09: DataTypes.INTEGER,
    name09: DataTypes.STRING,
    avg09: DataTypes.FLOAT,
    issubm09: DataTypes.INTEGER,
    dept10: DataTypes.INTEGER,
    name10: DataTypes.STRING,
    avg10: DataTypes.FLOAT,
    issubm10: DataTypes.INTEGER,
    dept11: DataTypes.INTEGER,
    name11: DataTypes.STRING,
    avg11: DataTypes.FLOAT,
    issubm11: DataTypes.INTEGER,
    dept12: DataTypes.INTEGER,
    name12: DataTypes.STRING,
    avg12: DataTypes.FLOAT,
    issubm12: DataTypes.INTEGER,
    dept13: DataTypes.INTEGER,
    name13: DataTypes.STRING,
    avg13: DataTypes.FLOAT,
    issubm13: DataTypes.INTEGER,
    dept14: DataTypes.INTEGER,
    name14: DataTypes.STRING,
    avg14: DataTypes.FLOAT,
    issubm14: DataTypes.INTEGER,
    dept15: DataTypes.INTEGER,
    name15: DataTypes.STRING,
    avg15: DataTypes.FLOAT,
    issubm15: DataTypes.INTEGER,
    stat: DataTypes.INTEGER,
    creaby: DataTypes.STRING,
    creadate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbrevistaf',
  });
  return tbrevistaf;
};