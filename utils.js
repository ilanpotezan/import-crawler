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

# Additional Implementation 1760741404

# Code Update 1760741404-18931

# Code Update 1760741405-330

# Additional Implementation 1760741405

# Code Update 1760741406-15284

# Additional Implementation 1760741406

# Code Update 1760741406-31248

# Additional Implementation 1760741406

# Additional Implementation 1760741407

# Additional Implementation 1760741407

# Additional Implementation 1760741407
