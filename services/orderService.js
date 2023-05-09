const orderDao = require("../models/orderDao");

const addCart = async (user, products) => {
  return await orderDao.addCart(user, products);
};

const getCart = async (user) => {
  return await orderDao.getCart(user);
};

module.exports = {
  addCart,
  getCart,
};
