CREATE DATABASE db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  location_x FLOAT,
  location_y FLOAT
);

