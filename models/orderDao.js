const dataSource  = require('./dataSource');

const doubleCheck = async (foodId, quantity, userId) => {
    return await dataSource.query(
        `SELECT order_items.order_count > ${quantity} AS result
        FROM order_items
        INNER JOIN orders ON order_items.order_id = orders.id
        WHERE orders.user_id = ?
        AND order_items.food_id = ${foodId})
        `), [ userId ]
};

const modifyOrderCount = async () => {
    return await dataSource.query(
        `UPDATE
        
        `
    )
}

const deleteOrderItem = async (product, userId) => {
    return await dataSource.query(
        `DELETE FROM orders 
        WHERE user_id = ?
        AND order_items_id IN 
        (SELECT id FROM order_items WHERE food_id = ${product})
        `, [ userId ]
    )
}




module.exports = { doubleCheck, modifyOrderCount, deleteOrderItem };