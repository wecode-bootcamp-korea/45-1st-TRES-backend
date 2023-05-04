const dataSource = require("./dataSource");

// const viewCountries = async (countryId) => {
//   try {
//     console.log(countryId);
//     return dataSource.query(
//       `SELECT
//             f.food,
//             f.price,
//             fi.image_url
//           FROM foods f
//           JOIN countries c ON c.id = f.country_id
//           JOIN food_images fi ON fi.id = f.food_image_id
//         WHERE f.country_id = ?
//       `,
//       [countryId]
//     );
//   } catch (err) {
//     console.log(countryId);
//     const error = new Error("errrrrror");
//     error.statusCode = 500;
//     throw error;
//   }
// };

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
  console.log(whereCondition);
  return whereCondition;
}

const filter = async (countryId, spiceLevel) => {
  try {
    const baseQuery = `SELECT * FROM foods f JOIN countries c ON c.id = f.country_id`;
    const whereCondition = filterBuilder(countryId, spiceLevel);
    const rooms = await dataSource.query(`${baseQuery} ${whereCondition}`);
    return rooms;
  } catch (err) {
    console.log(countryId, spiceLevel);
    const error = new Error("errrrrror");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  // viewCountries,
  filter,
};
