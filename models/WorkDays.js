const { Sequelize } = require ('sequelize');

const { DataTypes } = Sequelize;
const WorkDays = db.define('tbworkdays', {
    perimont: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    periyear: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    workdays: {
        type: DataTypes.INTEGER
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

module.exports = Sequelize.model('tblworkdays', WorkDaysSchema);