const {Sequelize} = require ('sequelize');

const {DataTypes} = Sequelize;

const ReviewSum = db.define('tbrevisumm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idempl: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       foreignKey: true,
    },
    iddept: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
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
     dept01: {
        type: DataTypes.INTEGER
     },
     name01: {
        type: DataTypes.STRING
     },
     avg01: {
        type: DataTypes.FLOAT
     },
     dept02: {
        type: DataTypes.INTEGER
     },
     name02: {
        type: DataTypes.STRING
     },
     avg02: {
        type: DataTypes.FLOAT
     },
     dept03: {
        type: DataTypes.INTEGER
     },
     name03: {
        type: DataTypes.STRING
     },
     avg03: {
        type: DataTypes.FLOAT
     },
     dept04: {
        type: DataTypes.INTEGER
     },
     name04: {
        type: DataTypes.STRING
     },
     avg04: {
        type: DataTypes.FLOAT
     },
     dept05: {
        type: DataTypes.INTEGER
     },
     name05: {
        type: DataTypes.STRING
     },
     avg05: {
        type: DataTypes.FLOAT
     },
     dept06: {
        type: DataTypes.INTEGER
     },
     name06: {
        type: DataTypes.STRING
     },
     avg06: {
        type: DataTypes.FLOAT
     },
     dept07: {
        type: DataTypes.INTEGER
     },
     name07: {
        type: DataTypes.STRING
     },
     avg07: {
        type: DataTypes.FLOAT
     },
     dept08: {
        type: DataTypes.INTEGER
     },
     name08: {
        type: DataTypes.STRING
     },
     avg08: {
        type: DataTypes.FLOAT
     },
     dept09: {
        type: DataTypes.INTEGER
     },
     name09: {
        type: DataTypes.STRING
     },
     avg09: {
        type: DataTypes.FLOAT
     },
     dept10: {
        type: DataTypes.INTEGER
     },
     name10: {
        type: DataTypes.STRING
     },
     avg10: {
        type: DataTypes.FLOAT
     },
     dept11: {
        type: DataTypes.INTEGER
     },
     name11: {
        type: DataTypes.STRING
     },
     avg11: {
        type: DataTypes.FLOAT
     },
     dept12: {
        type: DataTypes.INTEGER
     },
     name12: {
        type: DataTypes.STRING
     },
     avg12: {
        type: DataTypes.FLOAT
     },
     dept13: {
        type: DataTypes.INTEGER
     },
     name13: {
        type: DataTypes.STRING
     },
     avg13: {
        type: DataTypes.FLOAT
     },
     dept14: {
        type: DataTypes.INTEGER
     },
     name14: {
        type: DataTypes.STRING
     },
     avg14: {
        type: DataTypes.FLOAT
     },
     dept15: {
        type: DataTypes.INTEGER
     },
     name15: {
        type: DataTypes.STRING
     },
     avg15: {
        type: DataTypes.FLOAT
     },
    stat: {
        type: DataTypes.INTEGER
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