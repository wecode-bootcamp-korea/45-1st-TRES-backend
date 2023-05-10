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

const checkDeleteQuery = async (food_id, userId) => {
  try {
    const isExist = await dataSource.query(
      `SELECT
      oi.id,
      o.user_id,
      oi.order_price,
      oi.order_count
      FROM order_items oi
      INNER JOIN orders o ON o.order_items_id = oi.id
      WHERE o.user_id = ? AND oi.food_id IN (?)
      `, [ userId, food_id ]
    );
    return isExist;

  } catch (err) {
    const error = new Error("DataSource Error");
    error.statusCode = 400;
    throw error;
  }
}

const deleteOrderItems = async (food_id, userId) => {
  const queryRunner = dataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try{
    await queryRunner.query(
      `DELETE orders, order_items
      FROM order_items
      JOIN orders
      ON order_items.id = orders.order_items_id
      WHERE order_items.food_id IN (?)
      AND orders.user_id = ?
      `, [food_id, userId]
    )

    await queryRunner.commitTransaction();
  } catch(err){
    await queryRunner.rollbackTransaction();
    const error = new Error("Query Transaction failed... Rolling Back");
    error.statusCode = 400;
    throw error;
  } finally {
    await queryRunner.release();
  }
};

module.exports = { modifyOrderCount, checkDeleteQuery, deleteOrderItems };