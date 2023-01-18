module.exports = (sequelize, Sequelize) => {
  const Data = sequelize.define("rfid_history", {
    no_rfid: {
      primaryKey: true,
      type: Sequelize.STRING
    },
    kode_mesin: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.STRING
    },
    tanggal: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  return Data;
};
