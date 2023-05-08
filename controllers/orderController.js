const orderService = require("../services/orderService");

const addCart = async (req, res) => {
  const user = req.user;
  const [product] = req.body;
  const result = await orderService.addCart(user, product);
  if (!result) {
    error = new Error("ADD_CART_CONTROLLER_ERROR");
    error.statusCode = 400;
    throw error;
  }
  return res.status(200).json({ message: "ADD_CART_SUCCESS" });
};

const getCart = async (req, res) => {
  try {
    const user = req.user;
    const result = await orderService.getCart(user);
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
  } catch (error) {
    error = new Error("GET_CART_CONTROLLER_ERROR");
    error.statusCode = 400;
    throw error;
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const user = req.user;
    await orderService.updateOrderStatus(user);
    return res.status(200).json({ message: "UPDATE_ORDER_STATUS_CODE" });
  } catch (error) {
    error = new Error("UPDATE_CONTROLLER_ERROR");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  addCart,
  getCart,
  updateOrderStatus,
};
