-- migrate:up
CREATE TABLE reviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    food_id INT,
    content TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(food_id) REFERENCES foods(id)
)

-- migrate:down
DROP TABLE reviews
