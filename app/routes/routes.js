module.exports = app => {
  const history = require("../controllers/RFID_History_Controller.js");
  const mesin = require("../controllers/RFID_Mesin_Controller.js");

  var router = require("express").Router();

  // History
  router.post("/history/", history.create);
  router.get("/history/", history.findAll);
  router.get("/history/:id", history.findOne);
  router.put("/history/:id", history.update);
  router.delete("/history/:id", history.delete);

  // Mesin
  router.post("/mesin/", mesin.create);
  router.get("/mesin/", mesin.findAll);
  router.get("/mesin/:id", mesin.findOne);
  router.put("/mesin/:id", mesin.update);

  app.use('/api/rfid', router);
};
