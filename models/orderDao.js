const dataSource  = require('./dataSource');

const doubleCheck = async (foodId, quantity, userId) => {
  try {
    return await dataSource.query(
    `SELECT
    order_items.order_count > ${quantity} AS RESULT
    FROM order_items oi
    INNER JOIN orders ON oi.order_id = orders.id
    WHERE orders.user_id = ?
    AND oi.food_id = ${foodId}
    `, [userId]
    );
  }catch (err){

  }
};

const modifyOrderCount = async (foodId, quantity, userId) => {
  try {
    return await dataSource.query(
    `UPDATE order_items
    SET order_count = ${quantity}
    WHERE foods_id = ${foodId}
    AND id IN (
    SELECT order_items_id
    FROM orders
    WHERE users_id = ${userId}
    AND status_code_id = 1
    )`
    );
  }catch (err) {

  };
};

const deleteOrderItem = async (product, userId) => {
  try { 
    return await dataSource.query(
    `DELETE FROM orders
    WHERE user_id = ?
    AND order_items_id IN
    (SELECT id FROM order_items WHERE food_id = ${product})
    `, [ userId ]
    );
  } catch (err) {

  }
};




module.exports = { doubleCheck, modifyOrderCount, deleteOrderItem };