const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/joinOk', userController.joinOk);

module.exports = { router };
