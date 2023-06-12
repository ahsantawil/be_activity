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
        type: DataTypes.INTEGER,
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
     actiloca: {
         type: DataTypes.VARCHAR,
         allowNull: true
     },
     piccomp: {
         type: DataTypes.VARCHAR
     },
     picname: {
         type: DataTypes.VARCHAR
     },
     picopsi: {
         type: DataTypes.VARCHAR
     },
     picphon: {
         type: DataTypes.VARCHAR
     },
     casetitl: {
         type: DataTypes.VARCHAR
     },
     casedesc: {
         type: DataTypes.TEXT
     },
     caseanal: {
         type: DataTypes.TEXT
     },
     casesolv: {
         type: DataTypes.TEXT
     },
     caseatta: {
         type: DataTypes.VARCHAR
     },
     casestat: {
         type: DataTypes.INTEGER
     },
     casescore: {
         type: DataTypes.INTEGER
     },
     casefeed: {
         type: DataTypes.TEXT
     },
     stat: {
         type: DataTypes.INTEGER
     },
     creaby: {
         type: DataTypes.VARCHAR
     },
     creadate: {
         type: DataTypes.DATETIME
     }
}, {
    freezeTableName: true
});

Users.hasMany(Activity);
Products.belongsTo(Users, (foreignKey: 'id'));

module.exports = Sequelize.model('tbacti', ActivitySchema)