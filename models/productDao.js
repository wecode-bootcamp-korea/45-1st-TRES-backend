const dataSource  = require('./dataSource');

const getMainProducts = async (count) => {
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
            LIMIT ${ count }
            `
        );
    } catch(err){
        const error = new Error(error.message);
        error.statusCode(400);
        throw error;
    };
};


module.exports = { getMainProducts };