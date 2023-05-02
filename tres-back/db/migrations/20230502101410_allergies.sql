-- migrate:up
CREATE TABLE allergies(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    allergy VARCHAR(100)
)

-- migrate:down
DROP TABLE allergies
