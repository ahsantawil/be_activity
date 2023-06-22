'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbjobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbjobs.init({
    iddept: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    stat: DataTypes.INTEGER,
    creaby: DataTypes.STRING,
    creadate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbjobs',
  });
  return tbjobs;
};