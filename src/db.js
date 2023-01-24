require("dotenv").config();
const Sequelize = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;


const sequelize = new Sequelize(
    DB_DEPLOY,
    {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
);

module.exports = sequelize;
