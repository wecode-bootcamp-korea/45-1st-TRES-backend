-- migrate:up
CREATE TABLE addresses(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(400) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
)

-- migrate:down
DROP TABLE addresses

