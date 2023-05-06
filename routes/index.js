const express = require('express');

const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');

const router = express.Router();

router.use('/products', productRouter.router);
router.use('/orders', orderRouter.router)

module.exports = router;