module.exports = {
  HOST: process.env.HOST,
  USER: process.env.MYSQL_USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DATABASE,
  dialect: process.env.DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
