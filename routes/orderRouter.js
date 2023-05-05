const express = require('express');
const userController = require('../controllers/userController');
const { authorization } = require('../utils/authorization');
const router = express.Router();

router.get('/', authorization);

module.exports = { router };
