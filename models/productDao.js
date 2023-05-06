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


module.exports = { getMainPage };