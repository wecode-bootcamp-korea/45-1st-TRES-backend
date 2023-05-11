const dataSource = require("./dataSource");
const queryRunner = dataSource.createQueryRunner();

const getUserInfo = async (user) => {
  try {
    return await dataSource.query(
      `
      SELECT
      u.id userId,
      u.email,
      u.last_name,
      u.first_name,
      u.phone_number,
      u.points,
      a.address
      FROM addresses a
      JOIN users u ON a.id = u.id
      WHERE u.id = ?;
    `,
      [user.id]
    );
  } catch (err) {
    error = new Error("USER_DATA_NOT_FOUND");
    error.statusCode = 500;
    return error;
  }
};

const getCartFoodInfo = async (user) => {
  try {
    return await dataSource.query(
      `
      SELECT
      f.id,
      f.food foodKrName,
      f.eng_food foodEngName,
      c.country country,
      o_i.order_price,
      o_i.order_count quantitiy
      FROM users u
      JOIN orders o ON u.id = o.user_id
      JOIN order_items o_i ON o_i.id = o.order_items_id
      JOIN foods f ON f.id = o_i.food_id
      JOIN countries c ON c.id = f.country_id
      WHERE u.id = ?;
    `,
      [user.id]
    );
  } catch (err) {
    error = new Error("CART_DATA_NOT_FOUND");
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
      orders o
      JOIN order_items o_i ON o.order_items_id = o_i.id
      SET o_i.order_status_id = 2,
      o.order_number = ?
      WHERE o.user_id = 2 AND o_i.order_status_id = 1;
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
  // getUserCartInfo,
  getUserInfo,
  getCartFoodInfo,
  checkPoint,
  payment,
};
