const {Sequelize} = require ('sequelize');
const Department = require ('./Department');

const {DataTypes} = Sequelize;

const Jobs = db.define('tbjobs', {
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
     fullname: {
        type: DataTypes.VARCHAR,
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

Jobs.hasOne(Department);
Department.belongsTo(Jobs);

module.exports = Sequelize.model('tbjobs', JobsSchema)