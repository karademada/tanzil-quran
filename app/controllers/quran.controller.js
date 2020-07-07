const Quran = require('../models').quran;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Quran.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Quran.',
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Quran.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send({
        message: `Error retrieving Tutorial with id=${id}`,
      });
    });
};
