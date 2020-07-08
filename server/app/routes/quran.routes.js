const router = require('express').Router();
const quran = require('../controllers/quran.controller.js');

// Retrieve all Tutorials
router.get('/', quran.findAll);

// Retrieve a single Tutorial with id
router.get('/:id', quran.findOne);
module.exports = router;
