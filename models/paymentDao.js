const dataSource = require("./dataSource");

const getUserCartInfo = async (user) => {
  console.log(`dao`, user.id);
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
        JSON_ARRAYAGG(JSON_OBJECT(
          'foodId', f.id,
          'foodName', f.food,
          'foodNameEng', f.eng_food,
          'country', c.country,
          'quantity', o_i.order_count,
          'price', o_i.order_price
        )) AS food
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

const updateOrderStatusOrderNumberPoints = async (user) => {
  console.log(user.id);
  try {
    const orderNumber = Date.now().toString();
    console.log(orderNumber);
    await dataSource.query(
      `
      UPDATE
      orders
      SET order_status_id = 2  ,  order_number = ?
      WHERE user_id = ? AND order_status_id = 1
    `,
      [orderNumber, user.id]
    );
    // return await dataSource.query(
    //   `
    //     UPDATE
    //     users
    //     SET points = ?
    //     WHERE id = ?
    // `,
    //   [point.point, user.id]
    // );
  } catch (err) {
    console.log(err);
    err = new Error("DATA_NOT_FOUND");
    err.statusCode = 500;
    throw err;
  }
};

module.exports = {
  getUserCartInfo,
  updateOrderStatusOrderNumberPoints,
};
