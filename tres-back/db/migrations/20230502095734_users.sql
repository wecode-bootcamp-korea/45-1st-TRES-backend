-- migrate:up
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(300) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    country_preference_id INT NOT NULL,
    phone_number VARCHAR(200) NOT NULL UNIQUE,
    gender VARCHAR(100),
    birth_date DATE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    FOREIGN KEY(country_preference_id) REFERENCES countries (id);
)

-- migrate:down
DROP TABLE users

