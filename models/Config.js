const {Sequelize} = require ('sequelize');

const {DataTypes} = Sequelize;

const Config = db.define('tbconf', {
    daterevistar: { 
        type: DataTypes.INTEGER,
     },
    datereviend: { 
        type: DataTypes.INTEGER,
     },
     fullname: {
        type: DataTypes.VARCHAR,
     },
     phon: {
        type: DataTypes.VARCHAR,
     },
     emai: {
        type: DataTypes.VARCHAR,
     },
     addr: {
        type: DataTypes.VARCHAR,
     }
}, {
    freezeTableName: true
});

module.exports = Sequelize.model('tbconf', ConfigSchema)