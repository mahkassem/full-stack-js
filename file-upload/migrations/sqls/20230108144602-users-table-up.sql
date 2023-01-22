CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    avatar TEXT,
    username VARCHAR(100) NOT NULL UNIQUE,
    password CHAR(60) NOT NULL
);