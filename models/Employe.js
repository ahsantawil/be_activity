const {Sequelize} = require ('sequelize');
const Department = require ('./Department')

const {DataTypes} = Sequelize;

const Employe = db.define('tbempl', {
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
     iddept: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
     },
    nik: { 
        type: DataTypes.VARCHAR,
     },
     fullname: {
        type: DataTypes.VARCHAR,
     },
     gend: {
        type: DataTypes.INTEGER,
     },
     emai: {
        type: DataTypes.VARCHAR,
     },
     pass: {
        type: DataTypes.VARCHAR,
     },
     leve: {
        type: DataTypes.INTEGER,
     },
     lastlogi: {
        type: DataTypes.DATETIME,
     },
     stat: {
        type: DataTypes.INTEGER,
     },
     creaby: {
        type: DataTypes.VARCHAR,
     },
     creadate: {
        type: DataTypes.DATETIME,
     }
}, {
    freezeTableName: true
});

Department.hasOne(Employe);
Employe.belongsTo(Department);

module.exports = Sequelize.model('tbempl', EmployeSchema)