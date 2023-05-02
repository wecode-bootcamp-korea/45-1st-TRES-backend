-- migrate:up
CREATE TABLE user_addresses (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    addresses_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users (id),
    FOREIGN KEY(addresses_id) REFERENCES addresses (id)
)

-- migrate:down
DROP TABLE user_addresses
