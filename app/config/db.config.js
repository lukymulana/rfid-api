module.exports = {
  HOST: "10.19.23.18",
  PORT: "1433",
  USER: "sa",
  PASSWORD: "admin",
  DB: "control",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
