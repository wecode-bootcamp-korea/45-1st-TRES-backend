const dataSource = require("./dataSource");

function filterBuilder(countryId, spiceLevel) {
  let conditionArr = [];

  if (countryId) {
    conditionArr.push(`f.country_id = ${countryId}`);
  }

  if (spiceLevel) {
    conditionArr.push(`f.spice_level = ${spiceLevel}`);
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
} //(SELECT food_id, COUNT(*) FROM likes GROUP BY food_id)

const filter = async (orderBy, countryId, spiceLevel) => {
  try {
    const baseQuery = `SELECT f.food, f.price, (SELECT COUNT(*) FROM likes l WHERE l.food_id = f.id) likes_count FROM foods f JOIN countries c ON c.id = f.country_id`;
    const whereCondition = filterBuilder(countryId, spiceLevel);
    const sortQuery = orderByBuilder(orderBy);
    const rooms = await dataSource.query(
      `${baseQuery} ${whereCondition} ${sortQuery}`
    );
    return rooms;
  } catch (err) {
    const error = new Error("errrrrror");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  filter,
};
