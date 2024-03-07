import { useEffect, useState } from "react";
import api from "./api";

function ClientTable() {
  const [clients, setClients] = useState([]);

  async function fetchClients() {
    const response = await api.get("/clients");

    if (response.status === 200) return setClients(response.data.users);
  }

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <>
      <table className="mt-6 m-auto w-full border-2">
        <thead className="border-b-2">
          <tr>
            <th className="p-2">Client</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="p-2">{client.name}</td>
              <td className="p-2">{client.email}</td>
              <td className="p-2">{client.phone}</td>
              <td className="p-2">
                {client.location_x}, {client.location_y}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ClientTable;
