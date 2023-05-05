const orderDao = require('../models/orderDao');

const getOrder = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    err = new Error('SERVICE_ERROR');
    throw err;
  }
};

module.exports = { getOrder };
