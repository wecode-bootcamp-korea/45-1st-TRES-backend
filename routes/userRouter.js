const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/join', userController.getCountriesList);
router.post('/join-ok', userController.joinOk);

module.exports = { router };
