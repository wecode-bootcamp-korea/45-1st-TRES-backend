const dataSource = require("./dataSource");
const queryRunner = dataSource.createQueryRunner();

const addCart = async (user, products) => {
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const orderItemsResult = await queryRunner.query(
      `
      INSERT INTO order_items (
        order_price,
        order_count,
        food_id
      ) VALUES (?, ?, ?);
    `, [products.price, products.count, products.foodId]
    );
    await queryRunner.query(
      `
      INSERT INTO orders (
        user_id,
        order_items_id
      ) VALUES (?, ?);
    `, [user.id, orderItemsResult.insertId]
    );

    await queryRunner.commitTransaction();
    return true;
  } catch (err) {
    await queryRunner.rollbackTransaction();
    err = new Error("DATA_NOT_FOUND");
    err.statusCode = 400;
    throw err;
  }
};

const checkDeleteQuery = async (deleteOrderItem, userId) => {
  try {
    return await dataSource.query(
      `
      SELECT
        oi.id,
        o.user_id,
        oi.order_price,
        oi.order_count
      FROM order_items oi
      INNER JOIN orders o ON o.order_items_id = oi.id
      WHERE o.user_id = ? AND oi.food_id IN (?)
      `, [userId, deleteOrderItem]
    );

  } catch (err) {
    const error = new Error("DATASOURCE ERROR");
    error.statusCode = 400;
    throw error;
  }
};

const getCart = async (user) => {
  try {
    return await dataSource.query(
      `
      SELECT
        o.user_id userId,
        o.order_items_id orderItemsId,
        o_i.id orderItemsId,
        o_i.order_price orderPrice,
        o_i.order_count orderCount,
        o_i.food_id foodId,
        f.id,
        f.food food,
        f.eng_food engFood,
        f.country_id countryId,
        c.id,
        c.country country,
        co.id,
        co.eng_continent continent
      FROM order_items o_i
      JOIN orders o ON o.order_items_id = o_i.id
      JOIN foods f ON f.id = o_i.food_id 
      JOIN countries c ON c.id = f.country_id
      JOIN continents co ON co.id = c.continent_id
      WHERE o.user_id = ? AND o.order_status_id = 1;
    `, [user.id]
    );
  } catch (err) {
    err = new Error("DATA_NOT_FOUND");
    err.statusCode = 400;
    throw err;
  }
};

const modifyOrderCount = async (foodId, quantity, userId) => {
  try {
    return await dataSource.query(
      `UPDATE order_items
      JOIN orders ON orders.order_items_id = order_items.id
      JOIN foods ON foods.id = order_items.food_id
      SET order_items.order_count = ?, order_items.order_price = foods.price * ?
      WHERE order_items.food_id = ? 
      AND orders.user_id = ?
    `, [quantity, quantity, foodId, userId]
    );
  } catch (err) {
    const error = new Error("DATASOURCE ERROR");
    error.statusCode = 400;
    throw error;
  }
};

const deleteOrderItems = async (deleteOrderItem, userId) => {

  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    console.log(deleteOrderItem);
    console.log(userId)
-   await queryRunner.query(
      `
      DELETE oi, o
      FROM order_items oi
      JOIN orders o ON oi.id = o.order_items_id
      WHERE oi.food_id IN (?)
      AND o.user_id = ?
      `, [deleteOrderItem, userId]
    );

    await queryRunner.commitTransaction();
  } catch (err) {
    await queryRunner.rollbackTransaction();
    const error = new Error("Query Transaction failed... Rolling Back");
    error.statusCode = 400;
    throw error;
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  addCart,
  getCart,
  modifyOrderCount,
  checkDeleteQuery,
  deleteOrderItems,
};
