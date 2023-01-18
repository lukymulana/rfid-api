const db = require("../models");
const Data_RFID_History = db.m_rfid_history;
const Op = db.Sequelize.Op;

// Create data_rfid
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
    kode_mesin: req.body.kode_mesin
  };

  // Save data_rfid in the database
  Data_RFID_History.create(data_rfid)
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

// Retrieve all Data_RFID_History from the database.
exports.findAll = (req, res) => {
  // const id = req.query.id;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Data_RFID_History.findAll()
    .then(data_rfid => {
      res.send(data_rfid);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data_rfid."
      });
    });
};

// Find a single data_rfid with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Data_RFID_History.findAll({
    where: {
      no_rfid: id
    }
  })
    .then(data_rfid => {
      res.send(data_rfid);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Data_RFID_History with id=" + id
      });
    });
};

// Update a data_rfid by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Data_RFID_History.update(req.body, {
    where: { no_rfid: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Data_RFID_History was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Data_RFID_History with id=${id}. Maybe Data_RFID_History was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Data_RFID_History with id=" + id
      });
    });
};

// Delete a data_rfid with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Data_RFID_History.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Data_RFID_History was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Data_RFID_History with id=${id}. Maybe Data_RFID_History was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Data_RFID_History with id=" + id
      });
    });
};

// Delete all datas from the database.
// exports.deleteAll = (req, res) => {
//   Data_RFID_History.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Data_RFID_History were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all datas."
//       });
//     });
// };

// find all published data_rfid
// exports.findAllPublished = (req, res) => {
//   Data_RFID_History.findAll({ where: { published: true } })
//     .then(data_rfid => {
//       res.send(data_rfid);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving datas."
//       });
//     });
// };
