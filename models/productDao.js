const dataSource  = require('./dataSource');

const getMainPage = async () => {
    try {
        return await dataSource.query(
            `SELECT c.country, f.food, f.price, 
            CONCAT('[', GROUP_CONCAT(fi.food_image SEPARATOR ','), ']') AS food_images
            FROM countries c
            JOIN foods f ON c.id = f.country_id
            JOIN food_images fi ON f.id = fi.food_id
            GROUP BY c.country, f.food, f.price
            ORDER BY RAND()
            LIMIT 10`
        );
    } catch(err){
        const error = new Error('CANNOT FIND DATA');
        error.statusCode(400);
        throw error;
    };
};

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

module.exports = {
  getProductsById,
};
