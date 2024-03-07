CREATE DATABASE IF NOT EXISTS db;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  location_x FLOAT,
  location_y FLOAT
);

