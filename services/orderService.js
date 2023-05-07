const orderDao = require('../models/orderDao');

const addCart = async (user, product) => {
  try {
    return await orderDao.addCart(user, product);
  } catch (err) {
    console.log(err);
    err = new Error('ADD_CART_SERVICE_ERROR');
    throw err;
  }
};

const getCart = async (user) => {
  try {
    return await orderDao.getCart(user);
  } catch (err) {
    console.log(err);
    err = new Error('GET_CART_SERVICE_ERROR');
    throw err;
  }
};

const updateOrderStatus = async (user) => {
  try {
    return await orderDao.updateOrderStatus(user);
  } catch (err) {
    console.log(err);
    err = new Error('UPDATE_STATUS_CODE_SERVICE_ERROR');
  }
};

module.exports = {
  addCart,
  getCart,
  updateOrderStatus,
};
