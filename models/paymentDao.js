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
          'foodId', f.food,
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
      WHERE u.id = 45
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

module.exports = {
  getUserCartInfo,
};
