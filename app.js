-- import-crawler database setup snippet

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email)
VALUES ('alice', 'alice@example.com'),
       ('bob', 'bob@example.com');

SELECT * FROM users WHERE username = 'import-crawler';

# Code Update 1760741404-23911

# Code Update 1760741405-9845

# Additional Implementation 1760741406

# Additional Implementation 1760741406
