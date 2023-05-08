function filterBuilder(countryId, spiceLevel, allergyId, meatId) {
  let conditionArr = [];

  if (countryId) {
    conditionArr.push(`f.country_id = ${countryId}`);
  }

  if (spiceLevel) {
    conditionArr.push(`f.spice_level = ${spiceLevel}`);
  }

  if (allergyId) {
    conditionArr.push(`a.id = ${allergyId}`);
  }

  if (meatId) {
    conditionArr.push(`m.id = ${meatId}`);
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

module.exports = {
  filterBuilder,
  orderByBuilder,
  limitBuilder,
};
