const express = require('express');

const apiController = require('../controllers/api');

const router = express.Router();

router.get('/items/:id', apiController.getItem);

router.get('/items', apiController.getItems);

module.exports = router;