const dataSource = require("./dataSource");
const builder = require("./builder");

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
          f.id,
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
    console.log(sortQuery);
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
  getAllProducts,
};
