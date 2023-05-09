const orderDao = require("../models/orderDao");

const modifyOrderCount = async (foodId, quantity, userId) => {
        return await orderDao.modifyOrderCount(foodId, quantity, userId);
};

const deleteOrder = async(deleteOrderItem, userId) =>{

  const food_id = [];
  deleteOrderItem.map((item)=>{
    food_id.push(item.foodId)
  })
  const isExist = await orderDao.checkDeleteQuery(food_id, userId);
  
  const inputLength = food_id.length;
  const isExistLength = isExist.length;

  if(inputLength !== isExistLength) return false  

  await orderDao.deleteOrderItems(food_id, userId);
  return true;

};

module.exports = { modifyOrderCount, deleteOrder };
