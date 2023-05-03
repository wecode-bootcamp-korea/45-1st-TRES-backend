-- migrate:up
CREATE TABLE continents(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    continent VARCHAR(100) NOT NULL,
    country_id INT NOT NULL,
    FOREIGN KEY(country_id) REFERENCES countries(id)
)
-- migrate:down
DROP TABLE continents
