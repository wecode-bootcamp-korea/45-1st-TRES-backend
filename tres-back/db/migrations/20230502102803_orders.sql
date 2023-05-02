-- migrate:up
CREATE TABLE orders(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_number VARCHAR(100),
    status_code_id INT,
    users_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(users_id) REFERENCES users(id),
    FOREIGN KEY(status_code_id) REFERENCES order_status_codes(id)
)

-- migrate:down

