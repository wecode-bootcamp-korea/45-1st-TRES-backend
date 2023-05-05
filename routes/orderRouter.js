const express = requir('express');
const userController = require('../controllers/userController');
const router = express.Router();

const { authorization } = require('../utils/authorization');

router.get('/');
