const dataSource = require("./dataSource");

const getUserCartInfo = async (user) => {
  console.log(user.id);
  try {
    return await dataSource.query(
      `
        SELECT
        u.id,
        u.email,
        u.first_name,
        u.last_name,
        u.phone_number,
        u.points,
        o.user_id,
        o.order_item_id,
        o_i.id,
        o_i.food_id,
        JSON_ARRAYAGG(JSON_OBJECT(
          'foodId',f.food,
          'foodName',f.food,
          'foodNameEng',f.eng_food,
          'country',f.country,
          'quantity',o_i.order_count,
          'price',o_i.order_price
        )) AS food
        FROM users u
        JOIN address a ON a.id = u.address_id
        JOIN orders o ON o.user_id = u.id
        JOIN orders_item o_i ON o.order_items_id = o_i.id
        JOIN foods f ON f.id = o_i.food_id
        WHERE u.id = ?;
    `,
      [user.id]
    );
  } catch (error) {
    error = new Error("DATA_NOT_FOUND");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  getUserCartInfo,
};
