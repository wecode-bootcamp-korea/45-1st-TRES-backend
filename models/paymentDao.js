const dataSource = require("./dataSource");
const queryRunner = dataSource.createQueryRunner();

const getUserCartInfo = async (user) => {
  try {
    return await dataSource.query(
      `
      SELECT
      u.id userId,
      u.email,
      u.first_name firstName,
      u.last_name lastName,
      u.phone_number phoneNumber,
      u.points point,
      o.order_number orderNumber,
      o.user_id,
      o.order_items_id,
      o_i.id,
      o_i.food_id,
      f.country_id,
      c.id,
      c.country,
        JSON_OBJECT(
          'foodId', f.id,
          'foodName', f.food,
          'foodNameEng', f.eng_food,
          'country', c.country,
          'quantity', o_i.order_count,
          'price', o_i.order_price
        ) AS food
       FROM users u
      JOIN addresses a ON a.id = u.address_id
      JOIN orders o ON o.user_id = u.id
      JOIN order_items o_i ON o.order_items_id = o_i.id
      JOIN foods f ON f.id = o_i.food_id
      JOIN countries c ON f.country_id = c.id
      WHERE u.id = ?
      GROUP BY u.id, o.order_number, o.order_items_id, o_i.id, o_i.food_id, f.country_id, c.id;
    `,
      [user.id]
    );
  } catch (error) {
    error = new Error("DATA_NOT_FOUND");
    error.statusCode = 500;
    return error;
  }
};

const checkPoint = async (user) => {
  try {
    return await dataSource.query(
      `
      SELECT
      u.id,
      u.points
      FROM users u
      WHERE u.id = ?
    `,
      [user.id]
    );
  } catch (error) {
    console.log(err);
    error = new Error("DATA_NOT_FOUND");
    error.statusCode = 500;
    return error;
  }
};

const payment = async (user, point) => {
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    const orderNumber = Date.now().toString();

    await queryRunner.query(
      `
            UPDATE
            users u
            SET points = u.points - ?
            WHERE id = ?
        `,
      [point, user.id]
    );
    await queryRunner.query(
      `
          UPDATE
          orders
          SET order_status_id = 2  ,  order_number = ?
          WHERE user_id = ? AND order_status_id = 1
        `,
      [orderNumber, user.id]
    );

    const userFinalPoint = await queryRunner.query(
      `
      SELECT
      u.points
      FROM users u
      WHERE u.id = ?
    `,
      [user.id]
    );
    await queryRunner.commitTransaction();
    return userFinalPoint;
  } catch (err) {
    await queryRunner.rollbackTransaction();
    console.log(err);
    err = new Error("DATA_NOT_FOUND");
    err.statusCode = 500;
    throw err;
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  getUserCartInfo,
  checkPoint,
  payment,
};
