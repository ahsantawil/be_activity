const {Sequelize} = require ('sequelize');
const Department = require ('./Department');

const {DataTypes} = Sequelize;

const ReviewDep = db.define('tbrevidept', {
    iddept: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        foreignKey: true,
        primaryKey: true
     },
     iddepteval: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
     },
     q01: {
        type: DataTypes.STRING,
     },
     q02: {
        type: DataTypes.STRING,
     },
     q03: {
        type: DataTypes.STRING,
     },
     q04: {
        type: DataTypes.STRING,
     },
     q05: {
        type: DataTypes.STRING,
     },
     q06: {
        type: DataTypes.STRING,
     },
     q07: {
        type: DataTypes.STRING,
     },
     q08: {
        type: DataTypes.STRING,
     },
     q09: {
        type: DataTypes.STRING,
     },
     q10: {
        type: DataTypes.STRING,
     },
     stat: {
        type: DataTypes.INTEGER,
     },
     creaby: {
        type: DataTypes.STRING,
     },
     creadate: {
        type: DataTypes.DATE,
     }
}, {
    freezeTableName: true
});

ReviewDep.hasOne(Department);
Department.belongsTo(ReviewDep);

module.exports = Sequelize.model('tbrevidept', ReviewDepSchema)