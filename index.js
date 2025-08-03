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

# Additional Implementation 1760741405

# Code Update 1760741405-31464

# Code Update 1760741406-26836

# Code Update 1760741406-417

# Additional Implementation 1760741407

# Code Update 1760741407-24245

# Additional Implementation 1760741407

# Code Update 1760741408-22599
