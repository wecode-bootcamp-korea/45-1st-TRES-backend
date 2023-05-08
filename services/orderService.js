const orderDao = require("../models/orderDao");

const addCart = async (user, product) => {
  return await orderDao.addCart(user, product);
};

const getCart = async (user) => {
  return await orderDao.getCart(user);
};

const updateOrderStatus = async (user) => {
  return await orderDao.updateOrderStatus(user);
};

module.exports = {
  addCart,
  getCart,
  updateOrderStatus,
};
