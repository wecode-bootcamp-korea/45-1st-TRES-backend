-- migrate:up
CREATE TABLE countries(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(100) NOT NULL
)

-- migrate:down
DROP TABLE countries
