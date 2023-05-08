const dataSource  = require('./dataSource');


const modifyOrderCount = async (foodId, quantity, userId) => {
  try {
    return await dataSource.query(
    `UPDATE order_items
    JOIN orders ON orders.order_items_id = order_items.id
    JOIN foods ON foods.id = order_items.food_id
    SET order_items.order_count = ?, order_items.order_price = foods.price * ?
    WHERE order_items.food_id = ?
    AND orders.user_id = ?
    `, [ quantity, quantity, foodId, userId ]
    );
  }catch (err) {
    const error = new Error("DataSource Error");
    error.statusCode = 400;
    throw error;
  };
};

const deleteOrderItems = async (food_id, userId) => {
  try {
    return await dataSource.query(
    `DELETE order_items, orders
    FROM order_items
    JOIN orders ON order_items.id = orders.order_items_id
    WHERE order_items.food_id = ?
    AND orders.user_id = ?
    `, [ food_id, userId ]
    )
  } catch (err) {
    const error = new Error("DataSource Error");
    error.statusCode = 400;
    throw error;
  }
};




module.exports = { modifyOrderCount, deleteOrderItems };