const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const { query, checkDatabaseConnection } = require("./database");
const { getDistances } = require('./utils/getDistances');

app.use(express.json());
app.use(cors());

app.get('/distances', async (_, res) => {
  const result = await getDistances();
  return res.json({ result });
});

app.get("/clients", async (_, res) => {
  const users = await query("SELECT * FROM users");

  return res.json({ users: users.rows });
});

app.post("/clients", async (req, res) => {
  const data = req.body;

  const user = await query(
    "INSERT INTO users (name, email, phone, location_x, location_y) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [data.name, data.email, data.phone, data.location.x, data.location.y],
  );

  return res.json({ user: user.rows[0] });
});

app.listen(port, () => {
  try {
    checkDatabaseConnection();
  } catch (error) {
    console.error("Error loading database", error);
  }
  console.log(`Example app listening on port ${port}`);
});
