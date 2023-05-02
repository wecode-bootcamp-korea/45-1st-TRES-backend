-- migrate:up
CREATE TABLE reviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    foods_id INT,
    review text
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(foods_id) REFERENCES foods(id)
)

-- migrate:down

