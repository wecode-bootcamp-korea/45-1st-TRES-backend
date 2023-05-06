const dataSource = require('./dataSource');

const addCart = async (user, product) => {
  try {
    // const cartResult = await dataSource.query(`
    //     SELECT
    //     f.id,
    //     f.food,
    //     f.price,
    //     f_i.food_image,
    //     f_i.food_id
    //     FROM food_images f_i
    //     JOIN foods f
    //     ON f.id = f_i.food_id;
    //     `);
    // console.log(`555555`, cartResult[0]);
    // console.log(`66666`, cartResult[0].id, `orderCount`, cartResult[0].food_id);
    const orderItemsResult = await dataSource.query(
      `
      INSERT INTO order_items (
        order_price,
        order_count,
        food_id
      ) VALUES (?, ?, ?);
    `,
      [product.price, product.count, product.foodId]
    );
    const orderNumber = Math.floor(Math.random() * 10000);
    await dataSource.query(
      `
        INSERT INTO orders (
          order_number,
          order_status_id,
          user_id,
          order_items_id
        ) VALUES (?, ?, ?, ?);
    `,
      [orderNumber, 'in_cart', user.id, orderItemsResult.insertId]
    );
  } catch (err) {
    console.log(err);
    err = new Error('DATA_NOT_FOUND');
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
      WHERE o.user_id = ?;
    `,
      [user.id]
    );
  } catch (err) {
    console.log(err);
    err = new Error('DATA_NOT_FOUND');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = {
  addCart,
  getCart,
};
