require("dotenv").config();

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
    dialect: "mysql",
    pool: {
      min: 10,
      max: 100,
      acquire: 60000,
      idle: 20000,
    },
  },
  jwt: {
    secret: process.env.secret || "collabspacesecret",
    rememberMeExpiry: "5d",
    dontRememberMeExpiry: "5h",
    resetPasswordExpiry: "5d",
    refreshTokenSecret: process.env.secret || "collabspacesecret",
    refreshTokenExpiry: "30d",
  },
  rate_limit: {
    time: 60000,
    request: 200,
  },
};
