const express = require('express');
const userController = require('../controllers/userController');
// const { authorization } = require('../utils/authorization');
const router = express.Router();

router.post('/user-check', userController.userEmailCheck);
router.post('/login', userController.login);
router.get('/join', userController.getCountriesList);
router.post('/join-ok', userController.joinOk);

module.exports = { router };
