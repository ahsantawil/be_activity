const {Sequelize} = require ('sequelize');

const db = new Sequelize('dbsar', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.export = db;