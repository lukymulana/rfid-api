module.exports = (sequelize, Sequelize) => {
  const RFID_Mesin = sequelize.define("rfid_mesin1", {
    no_rfid: {
      primaryKey: true,
      type: Sequelize.STRING
    },
    kode_akses: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  return RFID_Mesin;
};
