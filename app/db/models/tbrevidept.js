'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbrevidept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbrevidept.init({
    iddept: DataTypes.INTEGER,
    iddepteval: DataTypes.INTEGER,
    q01: DataTypes.STRING,
    q02: DataTypes.STRING,
    q03: DataTypes.STRING,
    q05: DataTypes.STRING,
    q06: DataTypes.STRING,
    q07: DataTypes.STRING,
    q08: DataTypes.STRING,
    q09: DataTypes.STRING,
    q10: DataTypes.STRING,
    stat: DataTypes.INTEGER,
    creaby: DataTypes.STRING,
    creadate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbrevidept',
  });
  return tbrevidept;
};