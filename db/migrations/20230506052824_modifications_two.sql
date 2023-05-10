-- migrate:up
ALTER TABLE orders ALTER COLUMN order_status_id INT NOT NULL DEFAULT 1,


-- migrate:down

