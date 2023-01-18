module.exports = {
  HOST: "10.19.16.21",
  PORT: "1433",
  USER: "sa",
  PASSWORD: "User@new1",
  DB: "prod_control",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
