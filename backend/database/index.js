const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "db",
  user: "postgres",
  password: "postgres",
});

const createUserTableStr = `
`;

const checkDatabaseConnection = async () => {
  try {
    const client = await pool.connect();
    client.release();
  } catch (error) {
    console.error("Error loading database", error);
  }
};

const query = async (text, params) => {
  return await pool.query(text, params);
};

const getClient = async () => {
  return await pool.connect();
};

module.exports = {
  query,
  getClient,
  checkDatabaseConnection,
};
