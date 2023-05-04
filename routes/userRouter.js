const express = require('express');
const userController = require('../controllers/userController');
// const { authorization } = require('../utils/authorization');
const router = express.Router();

router.post('/check', userController.userEmailCheck);
router.post('/login', userController.login);
router.get('/', userController.getCountriesList);
router.post('/', userController.joinOk);

module.exports = { router };
