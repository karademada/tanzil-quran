module.exports = {
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DATABASE,
  dialect: process.env.DIALECT,
  MYSQL_PORT: process.env.MYSQL_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
};
