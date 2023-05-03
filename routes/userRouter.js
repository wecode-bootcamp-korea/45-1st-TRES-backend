const express = require('express');
const userController = require('../controllers/userController');
// const { authorization } = require('../utils/authorization');
const router = express.Router();

router.get('/join', userController.getCountriesList);
router.post('/join-ok', userController.joinOk);
router.post('/login', userController.login);

module.exports = { router };
