const orderService = require('../services/orderService');

const getOrder = async (req, res) => {
  try {
  } catch (err) {
    err = new Error('CONTROLLER_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

module.exports = { getOrder };
