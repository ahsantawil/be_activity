import { Sequelize } from "sequelize";

const db  = new Sequelize('activity_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;