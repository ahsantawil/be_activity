const {Sequelize} = require ('sequelize');

const {DataTypes} = Sequelize;

const ReviewStafDetails = db.define('tbrevistafdeta', {
    idrevistaf: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    iddept: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    idempl: { 
        type: DataTypes.INTEGER,
        allowNull: false,
     },
    perimont: { 
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
     },
    periyear: { 
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
     },
     q01: {
        type: DataTypes.STRING,
     },
     a01: {
        type: DataTypes.FLOAT,
     },
     q02: {
        type: DataTypes.STRING,
     },
     a02: {
        type: DataTypes.FLOAT,
     },
     q03: {
        type: DataTypes.STRING,
     },
     a03: {
        type: DataTypes.FLOAT,
     },
     q04: {
        type: DataTypes.STRING,
     },
     a04: {
        type: DataTypes.FLOAT,
     },
     q05: {
        type: DataTypes.STRING,
     },
     a05: {
        type: DataTypes.FLOAT,
     },
     q06: {
        type: DataTypes.STRING,
     },
     a06: {
        type: DataTypes.FLOAT,
     },
     q07: {
        type: DataTypes.STRING,
     },
     a07: {
        type: DataTypes.FLOAT,
     },
     q08: {
        type: DataTypes.STRING,
     },
     a08: {
        type: DataTypes.FLOAT,
     },
     q09: {
        type: DataTypes.STRING,
     },
     a09: {
        type: DataTypes.FLOAT,
     },
     q010: {
        type: DataTypes.STRING,
     },
     a010: {
        type: DataTypes.FLOAT,
     },
     q011: {
        type: DataTypes.STRING,
     },
     a011: {
        type: DataTypes.FLOAT,
     },
     q012: {
        type: DataTypes.STRING,
     },
     a012: {
        type: DataTypes.FLOAT,
     },
     q013: {
        type: DataTypes.STRING,
     },
     a013: {
        type: DataTypes.FLOAT,
     },
     q014: {
        type: DataTypes.STRING,
     },
     a014: {
        type: DataTypes.FLOAT,
     },
     q015: {
        type: DataTypes.STRING,
     },
     a015: {
        type: DataTypes.FLOAT,
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

module.exports = Sequelize.model('tbrevistafdeta', ReviewStafDetailsSchema)