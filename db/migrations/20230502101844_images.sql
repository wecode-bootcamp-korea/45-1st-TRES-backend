-- migrate:up
CREATE TABLE food_images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(2000)
)

-- migrate:down
DROP TABLE food_images
