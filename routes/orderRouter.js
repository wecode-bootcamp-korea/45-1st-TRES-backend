const express = require('express');
const orderController = require('../models/orderController');

const router = express.Router();


router.put('', orderController.modifyOrder);

module.exports = { router };