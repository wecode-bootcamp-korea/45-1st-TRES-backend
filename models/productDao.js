const dataSource = require("./dataSource");

function filterBuilder(countryId, spiceLevel, allergyId, meatId) {
  let conditionArr = [];

  if (countryId) {
    conditionArr.push(`f.country_id = ${countryId}`);
  }

  if (spiceLevel) {
    conditionArr.push(`f.spice_level = ${spiceLevel}`);
  }

  if (allergyId) {
    conditionArr.push(`f.spice_level = ${allergyId}`);
  }

  if (meatId) {
    conditionArr.push(`f.spice_level = ${meatId}`);
  }

  let whereCondition = "";
  if (conditionArr.length > 0) {
    whereCondition = `WHERE ${conditionArr.join(" AND ")}`;
  }
  return whereCondition;
}

function orderByBuilder(orderBy) {
  let orderQuery = "";
  switch (orderBy) {
    case "priceAsc":
      orderQuery = "ORDER BY f.price ASC, f.id ASC";
      break;
    case "priceDesc":
      orderQuery = "ORDER BY f.price DESC, f.id DESC";
      break;
    case "best":
      orderQuery = "ORDER BY likes_count DESC";
      break;
    default:
      orderQuery = "ORDER BY f.id";
      break;
  }
  return orderQuery;
}

function limitBuilder(limit, offset) {
  if (!limit) {
    limit = 12;
  }

  if (!offset) {
    offset = 0;
  }

  return `LIMIT ${limit} OFFSET ${offset}`;
}

const getProductsById = async (
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
    const whereCondition = filterBuilder(
      countryId,
      spiceLevel,
      allergyId,
      meatId
    );
    const sortQuery = orderByBuilder(orderBy);
    const limitQuery = limitBuilder(limit, offset);
    const rooms = await dataSource.query(
      `${baseQuery} ${whereCondition} ${sortQuery} ${limitQuery}`
    );
    return rooms;
  } catch (err) {
    const error = new Error("DATABASE_CONNECTION_ERROR");
    error.statusCode = 400;
    throw error;
  }
};

const getProductInfo = async (foodId) => {
  try {
    return await dataSource.query(
      `SELECT
            f.food,
            f.eng_food AS engFood,
            f.price,
            f.description,
            f.spice_level AS spiceLevel,
            fi.food_image AS foodImage,
            m.meat,
            m.eng_meat AS engMeat,
            a.allergy,
            a.eng_allergy AS engAllergy
       FROM foods f 
       JOIN food_images fi ON f.id = fi.food_id
       JOIN meat_foods mf ON f.id = mf.food_id
       JOIN meats m ON mf.meat_id = m.id
       JOIN allergy_foods af ON f.id = af.food_id
       JOIN allergies a ON a.id = af.allergy_id
       WHERE f.id = ?`,
      [foodId]
    );
  } catch (err) {
    const error = new Error("DATABASE_CONNECTION_ERROR");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getProductsById,
  getProductInfo,
};
