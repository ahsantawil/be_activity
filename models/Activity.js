const {Sequelize} = require ('sequelize');

const {DataTypes} = Sequelize;

const Activity = db.define('tbacti', {
    id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
     },
     idempl: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
        foreignKey: true
     },
     idjobs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
     },
     idrevistaf: {
        type: DataTypes.INTEGER,
        allowNull: true,
     },
     actidate: {
        type: DataTypes.DATETIME
     },
     actidead: {
        type: DataTypes.DATETIME
     },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
}, {
    freezeTableName: true
});

Users.hasMany(Activity);
Products.belongsTo(Users, (foreignKey: 'id'));

module.exports = Sequelize.model('tbacti', ActivitySchema)