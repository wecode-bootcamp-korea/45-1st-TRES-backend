const orderDao = require('../models/orderDao');

const addCart = async (user, product) => {
  try {
    return await orderDao.addCart(user, product);
  } catch (err) {
    console.log(err);
    err = new Error('SERVICE_ERROR');
    throw err;
  }
};

const getCart = async (user) => {
  try {
    return await orderDao.getCart(user);
  } catch (err) {
    console.log(err);
    err = new Error('SERVICE_ERROR');
    throw err;
  }
};

module.exports = {
  addCart,
  getCart,
};
