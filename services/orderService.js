const orderDao = require("../models/orderDao");

const addCart = async (user, products) => {
  try {
    const userId = user.id;
    const foodId = products.foodId;
    const count = products.count;
    const price = products.price;
    const foodExists = await orderDao.foodExists(userId, foodId);

    if (foodExists) {
      return await orderDao.updateFoodCount(userId, foodId, count);
    }

    return await orderDao.addCart(userId, foodId, count, price);
  } catch (error) {
    err = new Error("NOT ABLE TO ADD TO CART");
    err.statusCode = 400;
    throw err;
  }
};

const getCart = async (user) => {
  return await orderDao.getCart(user);
};

const modifyOrderCount = async (foodId, quantity, userId) => {
  return await orderDao.modifyOrderCount(foodId, quantity, userId);
};

const deleteOrder = async (deleteOrderItem, userId) => {
  const isExist = await orderDao.checkDeleteQuery(deleteOrderItem, userId);

  const inputLength = deleteOrderItem.length;
  const isExistLength = isExist.length;

  if (inputLength !== isExistLength) return false;

  await orderDao.deleteOrderItems(deleteOrderItem, userId);

  return true;
};

module.exports = { modifyOrderCount, deleteOrder, addCart, getCart };
