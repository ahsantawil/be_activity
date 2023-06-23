'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbrevistafdeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbrevistafdeta.init({
    idrevistaf: DataTypes.INTEGER,
    iddept: DataTypes.INTEGER,
    idempl: DataTypes.INTEGER,
    perimont: DataTypes.STRING,
    periyear: DataTypes.STRING,
    q01: DataTypes.STRING,
    a01: DataTypes.FLOAT,
    q02: DataTypes.STRING,
    a02: DataTypes.FLOAT,
    q03: DataTypes.STRING,
    a03: DataTypes.FLOAT,
    q04: DataTypes.STRING,
    a04: DataTypes.FLOAT,
    q05: DataTypes.STRING,
    a05: DataTypes.FLOAT,
    q06: DataTypes.STRING,
    a06: DataTypes.FLOAT,
    q07: DataTypes.STRING,
    a07: DataTypes.FLOAT,
    q08: DataTypes.STRING,
    a08: DataTypes.FLOAT,
    q09: DataTypes.STRING,
    a09: DataTypes.FLOAT,
    q10: DataTypes.STRING,
    a10: DataTypes.FLOAT,
    q11: DataTypes.STRING,
    a11: DataTypes.FLOAT,
    q12: DataTypes.STRING,
    a12: DataTypes.FLOAT,
    q13: DataTypes.STRING,
    a13: DataTypes.FLOAT,
    q14: DataTypes.STRING,
    a14: DataTypes.FLOAT,
    q15: DataTypes.STRING,
    a15: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'tbrevistafdeta',
  });
  return tbrevistafdeta;
};