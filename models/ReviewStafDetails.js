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
     dept01: {
        type: DataTypes.INTEGER,
     },
     name01: {
        type: DataTypes.STRING,
     },
     avg01: {
        type: DataTypes.INTEGER,
     },
     issubm01: {
        type: DataTypes.INTEGER,
     },
     dept02: {
        type: DataTypes.INTEGER,
     },
     name02: {
        type: DataTypes.STRING,
     },
     avg02: {
        type: DataTypes.FLOAT,
     },
     issubm02: {
        type: DataTypes.INTEGER,
     },
     dept03: {
        type: DataTypes.INTEGER,
     },
     name03: {
        type: DataTypes.STRING,
     },
     avg03: {
        type: DataTypes.FLOAT,
     },
     issubm03: {
        type: DataTypes.FLOAT,
     },
     dept04: {
        type: DataTypes.INTEGER,
     },
     name04: {
        type: DataTypes.STRING,
     },
     avg04: {
        type: DataTypes.FLOAT,
     },
     issubm04: {
        type: DataTypes.INTEGER,
     },
     dept05: {
        type: DataTypes.INTEGER,
     },
     name05: {
        type: DataTypes.STRING,
     },
     avg05: {
        type: DataTypes.FLOAT,
     },
     issubm05: {
        type: DataTypes.INTEGER,
     },
     dept06: {
        type: DataTypes.INTEGER,
     },
     name06: {
        type: DataTypes.STRING,
     },
     avg06: {
        type: DataTypes.FLOAT,
     },
     issubm06: {
        type: DataTypes.INTEGER,
     },
     dept07: {
        type: DataTypes.INTEGER,
     },
     name07: {
        type: DataTypes.STRING,
     },
     avg07: {
        type: DataTypes.FLOAT,
     },
     issubm07: {
        type: DataTypes.INTEGER,
     },
     dept08: {
        type: DataTypes.INTEGER,
     },
     name08: {
        type: DataTypes.STRING,
     },
     avg08: {
        type: DataTypes.FLOAT,
     },
     issubm08: {
        type: DataTypes.INTEGER,
     },
     dept10: {
        type: DataTypes.INTEGER,
     },
     name10: {
        type: DataTypes.STRING,
     },
     avg09: {
        type: DataTypes.FLOAT,
     },
     issubm09: {
        type: DataTypes.INTEGER,
     },
     dept10: {
        type: DataTypes.INTEGER,
     },
     name10: {
        type: DataTypes.STRING,
     },
     avg10: {
        type: DataTypes.FLOAT,
     },
     issubm10: {
        type: DataTypes.INTEGER,
     },
     dept11: {
        type: DataTypes.INTEGER,
     },
     name11: {
        type: DataTypes.STRING,
     },
     avg11: {
        type: DataTypes.FLOAT,
     },
     issubm11: {
        type: DataTypes.INTEGER,
     },
     dept12: {
        type: DataTypes.INTEGER,
     },
     name12: {
        type: DataTypes.STRING,
     },
     avg12: {
        type: DataTypes.FLOAT,
     },
     issubm12: {
        type: DataTypes.INTEGER,
     },
     dept13: {
        type: DataTypes.INTEGER,
     },
     name13: {
        type: DataTypes.STRING,
     },
     avg13: {
        type: DataTypes.FLOAT,
     },
     issubm13: {
        type: DataTypes.INTEGER,
     },
     dept14: {
        type: DataTypes.INTEGER,
     },
     name14: {
        type: DataTypes.STRING,
     },
     avg14: {
        type: DataTypes.FLOAT,
     },
     issubm14: {
        type: DataTypes.INTEGER,
     },
     dept15: {
        type: DataTypes.INTEGER,
     },
     name15: {
        type: DataTypes.STRING,
     },
     avg15: {
        type: DataTypes.FLOAT,
     },
     issubm15: {
        type: DataTypes.INTEGER,
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

module.exports = Sequelize.model('tbrevistafdeta', ReviewStafDetaSchema)