-- migrate:up
-- modified_order_number_email
ALTER TABLE orders MODIFY order_number VARCHAR(300) NULL;

ALTER TABLE users MODIFY email VARCHAR(400) NOT NULL UNIQUE;

-- migrate:down

