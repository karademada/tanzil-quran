const Quran = require('../models').quran;

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Quran.findAll({ attributes: ['sura', 'aya', 'text'] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Quran.'
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const { id } = req.params;

  Quran.findAll({
    where: { sura: id },
    attributes: ['sura', 'aya', 'text']
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Quran.'
      });
    });
};
