const { query } = require("../database");
const { tsp } = require("./tsp");

const getDistances = async () => {
  const data = await query("SELECT * FROM users ORDER BY users.id ASC;");

  const clients = data.rows;
  clients.unshift({
    location_x: 0,
    location_y: 0,
    id: 0,
    name: "center",
  });

  const distances = [];

  for (let i = 0; i < clients.length; i++) {
    const clientDistances = [];

    const center = {
      x: 0,
      y: 0,
    };

    let distance = Math.sqrt(
      Math.pow(center.x - clients[i].location_x, 2) +
        Math.pow(center.y - clients[i].location_y, 2),
    );

    clientDistances.push(distance);

    for (let j = 0; j < clients.length; j++) {
      if (i !== j) {
        const firstLocation = {
          x: clients[i].location_x,
          y: clients[i].location_y,
        };

        const secondLocation = {
          x: clients[j].location_x,
          y: clients[j].location_y,
        };

        distance = Math.sqrt(
          Math.pow(firstLocation.x - secondLocation.x, 2) +
            Math.pow(firstLocation.y - secondLocation.y, 2),
        );

        clientDistances.push(distance);
      }
    }

    distances.push(clientDistances);
  }

  const result = tsp(distances);
  return result;
};

module.exports = {
  getDistances,
};
