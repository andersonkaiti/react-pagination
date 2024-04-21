process.loadEnvFile(".env");
const mysql2 = require("mysql2");

const connection = mysql2.createConnection(
    `mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`
);

connection.connect(error => {
    if(error) throw error;
    console.log("Database connected");
})

module.exports = connection;