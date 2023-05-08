const express = require('express');
const orderController = require('../controllers/orderController');
const {authorization} = require('../utils/authorization');

const router = express.Router();

router.patch('', authorization, orderController.modifyOrderCount);
router.delete('', authorization, orderController.deleteOrder);

module.exports = { router };