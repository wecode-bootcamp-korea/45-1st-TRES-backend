const orderDao = require("../models/orderDao");

const addCart = async (user, products) => {
  return await orderDao.addCart(user, products);
};

const getCart = async (user) => {
  return await orderDao.getCart(user);
};

const modifyOrderCount = async (foodId, quantity, userId) => {
  return await orderDao.modifyOrderCount(foodId, quantity, userId);
};

const deleteOrder = async (deleteOrderItem, userId) => {

  const isExist = await orderDao.checkDeleteQuery(deleteOrderItem, userId);
  
  console.log(deleteOrderItem);
  console.log("in service ", deleteOrderItem);

  const inputLength = deleteOrderItem.length;
  const isExistLength = isExist.length;

  if (inputLength !== isExistLength) return false;

  await orderDao.deleteOrderItems(deleteOrderItem, userId);
  return true;
};

module.exports = { modifyOrderCount, deleteOrder, addCart, getCart };
