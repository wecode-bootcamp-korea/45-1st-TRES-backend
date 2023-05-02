-- migrate:up
CREATE TABLE allergy_foods(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    foods_id INT,
    allergy_id INT,
    FOREIGN KEY(foods_id) REFERENCES foods (id),
    FOREIGN KEY(allergy_id) REFERENCES allergies (id) 
)

-- migrate:down
DROP TABLE allergy_foods
