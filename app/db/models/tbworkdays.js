'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbworkdays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbworkdays.init({
    perimont: DataTypes.STRING,
    periyear: DataTypes.STRING,
    workdays: DataTypes.INTEGER,
    stat: DataTypes.INTEGER,
    creaby: DataTypes.STRING,
    creadate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbworkdays',
  });
  return tbworkdays;
};