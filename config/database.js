require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_development`,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_test`,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT,
        dialect: "postgres",
    },
};
