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
    LEFT JOIN countries c ON c.id = f.country_id
    LEFT JOIN meat_foods mf ON f.id = mf.food_id
    LEFT JOIN meats m ON mf.meat_id = m.id
    LEFT JOIN allergy_foods af ON f.id = af.food_id
    LEFT JOIN allergies a ON a.id = af.allergy_id
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

const getProductInfo = async (foodId) => {
  try {
    return await dataSource.query(
      `SELECT
            f.id,
            f.food,
            f.eng_food,
            f.price,
            f.description,
            f.eng_description,
            f.spice_level,
            fi.food_image,
            m.meat,
            m.eng_meat,
            a.allergy,
            a.eng_allergy,
            r.review
       FROM foods f 
       LEFT JOIN food_images fi ON f.id = fi.food_id
       LEFT JOIN meat_foods mf ON f.id = mf.food_id
       LEFT JOIN meats m ON mf.meat_id = m.id
       LEFT JOIN allergy_foods af ON f.id = af.food_id
       LEFT JOIN allergies a ON a.id = af.allergy_id
       LEFT JOIN reviews r ON r.food_id = f.id
       WHERE f.id = ?`,
      [foodId]
    );
  } catch (error) {
    error = new Error("FAILED_TO_BUILD_FILTER_QUERY");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductInfo,
};
