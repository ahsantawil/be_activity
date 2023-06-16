const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize();

class Department extends Model{}
// const Department = sequelize.define('tbdept', {
Department.init({
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
    fullname: { 
        type: DataTypes.STRING,
     },
     orde: {
        type: DataTypes.INTEGER,
     },
     stat: {
        type: DataTypes.INTEGER,
     },
     creaby: {
        type: DataTypes.STRING,
     },
     creadate: {
        type: DataTypes.STRING,
     }
}, {
    freezeTableName: true,
    sequelize,
    modelName: 'tbdept'
});

module.exports = {Department};