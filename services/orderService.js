const orderDao = require("../models/orderDao");

const addCart = async (user, products) => {
  try{
    const userId = user.id;
    const foodId = products.foodId;
    const count = products.count;
    const price = products.price;
    const foodExists = await orderDao.foodExists(userId, foodId);

    if(foodExists) return await orderDao.updateFoodCount(userId, foodId, count);

    return await orderDao.addCart(userId, foodId, count, price);
  } catch (err) {
    err = new Error("NOT ABLE TO ADD TO CART")
    err.statusCode = 400;
    throw err;
  };
};

const getCart = async (user) => {
  return await orderDao.getCart(user);
};

const modifyOrderCount = async (foodId, quantity, userId) => {
  return await orderDao.modifyOrderCount(foodId, quantity, userId);
};

const deleteOrder = async (deleteOrderItem, userId) => {
  const food_id = [];

  deleteOrderItem.map((item)=>{
    food_id.push(item.foodId)
  })

  const isExist = await orderDao.checkDeleteQuery(food_id, userId);

  const inputLength = food_id.length;
  const isExistLength = isExist.length;

  if (inputLength !== isExistLength) return false;

  await orderDao.deleteOrderItems(food_id, userId);
  
  return true;
};

module.exports = { modifyOrderCount, deleteOrder, addCart, getCart };
