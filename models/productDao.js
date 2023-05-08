const dataSource  = require('./dataSource');
const builder = require("./builder");

const getRandomProducts = async (offset, limit) => {
  try {
    return await dataSource.query(
      `SELECT 
      c.country, 
      f.food, 
      f.price, 
      CONCAT('[', GROUP_CONCAT(fi.food_image SEPARATOR ','), ']') AS food_images
      FROM countries c
      JOIN foods f ON c.id = f.country_id
      JOIN food_images fi ON f.id = fi.food_id
      GROUP BY c.country, f.food, f.price
      ORDER BY RAND()
      LIMIT ${ limit }
      OFFSET ${ offset }
      `
      );
  } catch(err){
      const error = new Error("FAILED_TO_BUILD_FILTER_QUERY");
      error.statusCode(400);
      throw error;
    };
};

const getAllProducts = async (
  orderBy,
  countryId,
  spiceLevel,
  allergyId,
  meatId,
  limit,
  offset
) => {
  try {
    const baseQuery = `
    SELECT
    f.food,
    f.eng_food,
    f.price,
    (SELECT COUNT(*) FROM likes l WHERE l.food_id = f.id) likes_count
    FROM foods f
    JOIN countries c ON c.id = f.country_id
    `;
    const whereCondition = builder.filterBuilder(
      countryId,
      spiceLevel,
      allergyId,
      meatId
    );
    const sortQuery = builder.orderByBuilder(orderBy);
    const limitQuery = builder.limitBuilder(limit, offset);
    const rooms = await dataSource.query(
      `${baseQuery} ${whereCondition} ${sortQuery} ${limitQuery}`
    );
    return rooms;
  } catch (error) {
    error = new Error("FAILED_TO_BUILD_FILTER_QUERY");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getRandomProducts,
  getAllProducts,
};
