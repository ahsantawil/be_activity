'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbempl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbempl.init({
    iddept: DataTypes.STRING,
    nik: DataTypes.STRING,
    fullname: DataTypes.STRING,
    gend: DataTypes.STRING,
    emai: DataTypes.STRING,
    pass: DataTypes.STRING,
    level: DataTypes.STRING,
    lastlogi: DataTypes.STRING,
    stat: DataTypes.STRING,
    creaby: DataTypes.STRING,
    creadate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbempl',
  });
  return tbempl;
};