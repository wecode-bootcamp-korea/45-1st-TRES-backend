-- migrate:up
CREATE TABLE order_items(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_price VARCHAR(100),
    order_count int,
    foods_id int,
    FOREIGN KEY (foods_id) REFERENCES foods(id)
)

-- migrate:down
DROP TABLE order_items

