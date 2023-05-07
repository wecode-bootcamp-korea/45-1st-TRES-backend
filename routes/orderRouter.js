const express = require('express');
const orderController = require('../controllers/orderController');
const { authorization } = require('../utils/authorization');
const router = express.Router();

router.post('/', authorization, orderController.addCart);
router.get('/cart', authorization, orderController.getCart);
router.post('/shipping', authorization, orderController.updateOrderStatus);

module.exports = { router };
