'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbacti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbacti.hasOne(tbempl, {foreignKey: idempl});
      tbacti.hasOne(tbjobs, {foreignKey: idjobs});
    }
  }
  tbacti.init({
    idempl: DataTypes.INTEGER,
    idjobs: DataTypes.INTEGER,
    idrevistaf: DataTypes.INTEGER,
    actidate: DataTypes.DATE,
    actidead: DataTypes.DATE,
    actiloca: DataTypes.STRING,
    picname: DataTypes.STRING,
    picposi: DataTypes.STRING,
    picphon: DataTypes.STRING,
    casetitl: DataTypes.STRING,
    casedesc: DataTypes.TEXT,
    caseanal: DataTypes.TEXT,
    casesolv: DataTypes.TEXT,
    caseatta: DataTypes.STRING,
    casestat: DataTypes.INTEGER,
    casescor: DataTypes.INTEGER,
    casefeed: DataTypes.TEXT,
    stat: DataTypes.INTEGER,
    creaby: DataTypes.STRING,
    creadate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbacti',
  });
  return tbacti;
};