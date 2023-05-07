const dataSource  = require('./dataSource');

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
        const error = new Error("DataSource Error");
        error.statusCode(400);
        throw error;
    };
};


module.exports = { getRandomProducts };