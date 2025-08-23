const { logger } = require("sequelize/lib/utils/logger");
const config = require("../config/config.js");
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create a Sequelize instance with connection pool settings
const database = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    pool: config.db.pool,
    logging: config.db.logging,
  }
);

// Test the connection
database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = database;
