const dataSource  = require('./dataSource');


const deleteOrderItem = async (product, userId) => {
    return await dataSource.query(
        `DELETE FROM orders 
        WHERE user_id = ?
        AND order_items_id IN 
        (SELECT id FROM order_items WHERE food_id = ${product})
        `, [ userId ]
    )
}

const changeQuantity = (foodId, quantity) => {

}



module.exports = { deleteOrderItem, changeQuantity };