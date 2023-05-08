const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.patch('', orderController.modifyOrderCount);
router.delete('', orderController.deleteOrder);

module.exports = { router };