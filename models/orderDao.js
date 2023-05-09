const dataSource = require("./dataSource");

const addCart = async (user, products) => {
  try {
    const orderItemsResult = await dataSource.query(
      `
      INSERT INTO order_items (
        order_price,
        order_count,
        food_id
      ) VALUES (?, ?, ?);
    `,
      [products.price, products.count, products.foodId]
    );
    await dataSource.query(
      `
        INSERT INTO orders (
          user_id,
          order_items_id
        ) VALUES (?, ?);
    `,
      [user.id, orderItemsResult.insertId]
    );
  } catch (err) {
    console.log(err);
    err = new Error("DATA_NOT_FOUND");
    err.statusCode = 500;
    throw err;
  }
};

const getCart = async (user) => {
  try {
    return await dataSource.query(
      `
      SELECT
      o.user_id,
      o.order_items_id,
      o_i.id,
      o_i.order_price,
      o_i.order_count,
      o_i.food_id,
      f.id,
      f.food,
      f.eng_food,
      f.country_id,
      ctr.id,
      ctr.country,
      cti.id,
      cti.eng_continent
      FROM order_items o_i
      JOIN orders o
      ON o.order_items_id = o_i.id
      JOIN foods f
      ON f.id = o_i.food_id
      JOIN countries ctr
      ON ctr.id = f.country_id
      JOIN continents cti
      ON cti.id = ctr.continent_id
      WHERE o.user_id = ? AND o.order_status_id = 1;
    `,
      [user.id]
    );
  } catch (err) {
    console.log(err);
    err = new Error("DATA_NOT_FOUND");
    err.statusCode = 500;
    throw err;
  }
};

module.exports = {
  addCart,
  getCart,
};
