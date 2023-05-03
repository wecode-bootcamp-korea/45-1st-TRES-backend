-- migrate:up
CREATE TABLE order_items(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    price DECIMAL NOT NULL,
    quantity INT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES foods(id)
)

-- migrate:down
DROP TABLE order_items

