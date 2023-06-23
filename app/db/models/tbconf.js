'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbconf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbconf.init({
    daterevistar: DataTypes.INTEGER,
    datereviend: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    phon: DataTypes.STRING,
    emai: DataTypes.STRING,
    addr: DataTypes.STRING,
    foot01: DataTypes.STRING,
    foot02: DataTypes.STRING,
    foot03: DataTypes.STRING,
    foot04: DataTypes.STRING,
    foot05: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbconf',
  });
  return tbconf;
};