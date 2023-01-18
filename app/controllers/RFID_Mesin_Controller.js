const db = require("../models");
const Data_RFID_Mesin = db.m_rfid_mesin;
const Op = db.Sequelize.Op;

// Create data
exports.create = (req, res) => {
  // Validate request
  if (!req.body.no_rfid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const data_rfid = {
    no_rfid: req.body.no_rfid,
    kode_akses: req.body.kode_akses
  };

  // Save data in the database
  Data_RFID_Mesin.create(data_rfid)
    .then(data_rfid => {
      res.send(data_rfid);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating"
      });
    });
};

// Retrieve all Data from the database.
exports.findAll = (req, res) => {
  Data_RFID_Mesin.findAll()
    .then(data_rfid => {
      res.send(data_rfid);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};

// Find a single data with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Data_RFID_Mesin.findByPk(id)
    .then(data_rfid => {
      res.send(data_rfid);
    })
    .catch(err => {
      res.status(500).send({
        meesage :
          err.message || "Some error occurred while retrieving data."
        // message: "Error retrieving Data with id=" + id
      });
    });
};

// Update a data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Data_RFID_Mesin.update(req.body, {
    where: { no_rfid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Data with id=" + id
      });
    });
};
