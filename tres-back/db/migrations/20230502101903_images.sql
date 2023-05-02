-- migrate:up
CREATE TABLE images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    food_image VARCHAR(200)
)

-- migrate:down
DROP TABLE images
