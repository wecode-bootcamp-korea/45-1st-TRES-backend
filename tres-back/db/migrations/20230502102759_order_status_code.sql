-- migrate:up
CREATE TABLE order_status_codes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    status_code VARCHAR(100)
)

-- migrate:down
DROP TABLE order_status_codes
