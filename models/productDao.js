const dataSource = require("./dataSource");
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
      LIMIT ${limit}
      OFFSET ${offset}
      `
    );
  } catch (err) {
    const error = new Error("FAILED_TO_BUILD_FILTER_QUERY");
    error.statusCode(400);
    throw error;
  }
};

const getAllProducts = async (
  orderBy,
  countryId,
  spiceLevel,
  allergyId,
  meatId,
  vegetarian,
  limit,
  offset
) => {
  try {
    const baseQuery = `
    SELECT DISTINCT
          f.id,
          f.food,
          f.eng_food,
          f.price,
          ct.id AS continent_id,
          (SELECT COUNT(*) FROM likes l WHERE l.food_id = f.id) likes_count,
          (SELECT JSON_ARRAYAGG(
	                              JSON_OBJECT(
		                                "id", co.id , 
		                                "country", co.country
	                              ))
          FROM countries co 
          WHERE continent_id = (
                  SELECT co.continent_id 
                  FROM continents c
                  JOIN countries co on co.continent_id = c.id
                  JOIN foods f on co.id = f.country_id
                  WHERE f.id = ?
                  )
          )as countries
    FROM foods f
    LEFT JOIN countries c ON c.id = f.country_id
    LEFT JOIN continents ct ON ct.id = c.continent_id
    LEFT JOIN meat_foods mf ON f.id = mf.food_id
    LEFT JOIN meats m ON mf.meat_id = m.id
    LEFT JOIN allergy_foods af ON f.id = af.food_id
    LEFT JOIN allergies a ON a.id = af.allergy_id
    WHERE f.id = ?
    `;
    const whereCondition = builder.filterBuilder(
      countryId,
      spiceLevel,
      allergyId,
      meatId,
      vegetarian
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
          f.vegetarian,
          ct.continent,
          ct.eng_continent,
          c.country,
          c.eng_country,
          f.spice_level,
          f.description,
          f.eng_description,
          GROUP_CONCAT(DISTINCT a.allergy SEPARATOR ',') AS allergy,
          GROUP_CONCAT(DISTINCT a.eng_allergy SEPARATOR ',') AS eng_allergy,
          GROUP_CONCAT(DISTINCT m.meat SEPARATOR ',') AS meat,
          GROUP_CONCAT(DISTINCT m.eng_meat SEPARATOR ',') AS eng_meat,
          fi.food_image,
          r.review
      FROM foods f
      LEFT JOIN food_images fi ON f.id = fi.food_id
      LEFT JOIN meat_foods mf ON f.id = mf.food_id
      LEFT JOIN meats m ON mf.meat_id = m.id
      LEFT JOIN allergy_foods af ON f.id = af.food_id
      LEFT JOIN allergies a ON a.id = af.allergy_id
      LEFT JOIN reviews r ON r.food_id = f.id
      LEFT JOIN countries c ON f.country_id = c.id
      LEFT JOIN continents ct ON ct.id = c.continent_id
      WHERE f.id = ?
      GROUP BY
          f.id,
          f.food,
          f.eng_food,
          f.price, 
          f.vegetarian,
          ct.continent,
          ct.eng_continent,
          c.country,
          c.eng_country,
          f.spice_level,
          f.description,
          f.eng_description,
          fi.food_image,
          r.review
`,
      [foodId]
    );
  } catch (error) {
    error = new Error("FAILED_TO_BUILD_FILTER_QUERY");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getRandomProducts,
  getAllProducts,
  getProductInfo,
};
