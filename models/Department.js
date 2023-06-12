const {Sequelize} = require ('sequelize');

const {DataTypes} = Sequelize;

const Department = db.define('tbdept', {
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
    fullname: { 
        type: DataTypes.VARCHAR,
     },
     orde: {
        type: DataTypes.INTEGER,
     },
     stat: {
        type: DataTypes.INTEGER,
     },
     creaby: {
        type: DataTypes.VARCHAR,
     },
     creadate: {
        type: DataTypes.VARCHAR,
     }
}, {
    freezeTableName: true
});

module.exports = Sequelize.model('tbdept', DepartmentSchema)