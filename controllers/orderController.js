const orderService = require('../services/orderService');

const addCart = async (req, res) => {
  try {
    const user = req.user;
    // 배열안 객체 형식으로 옴 [{id:1, foodName: 어쩌고, ...}]
    const [product] = req.body;
    const result = await orderService.addCart(user, product);
    return res.status(200).json({ message: 'ADD_CART_SUCCESS' });
  } catch (err) {
    err = new Error('CONTROLLER_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

const getCart = async (req, res) => {
  try {
    const user = req.user;
    const result = await orderService.getCart(user);
    console.log(`55555`, result);
    const renameResult = result.map((el) => ({
      userId: el.user_id,
      orderItemsId: el.order_items_id,
      orderItemsId: el.id,
      orderPrice: el.order_price,
      orderCount: el.order_count,
      foodId: el.food_id,
      food: el.food,
      engFood: el.eng_food,
      countryId: el.country_id,
      country: el.country,
      continent: el.eng_continent,
    }));
    return res.status(200).json(renameResult);
  } catch (err) {
    err = new Error('CONTROLLER_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const user = req.user;
    const result = await orderService.updateOrderStatus(user);
    console.log(result);
    return res.status(200).json({ message: 'UPDATE_ORDER_STATUS_CODE' });
  } catch (err) {
    err = new Error('CONTROLLER_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  addCart,
  getCart,
  updateOrderStatus,
};
