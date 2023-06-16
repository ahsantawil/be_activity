'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbdept extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbdept.init({
    fullname: DataTypes.STRING,
    orde: DataTypes.INTEGER,
    stat: DataTypes.INTEGER,
    creaby: DataTypes.STRING,
    creadate: DataTypes.DATETIME
  }, {
    sequelize,
    modelName: 'tbdept',
  });
  return tbdept;
};