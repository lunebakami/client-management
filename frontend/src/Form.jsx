import { useState } from "react";
import { Link } from "react-router-dom";
import api from "./api";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/clients", {
      name,
      email,
      phone,
      location: {
        x: Number(locationX),
        y: Number(locationY),
      },
    });

    if (response.status === 200) {
      return alert("Client added successfully");
    }

    console.log({ response })
    setError("An error occurred");
  }

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-2xl mb-4">Add new client</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="w-1/3i m-auto flex flex-col items-start">
          <label>Enter your name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mb-4" type="text" placeholder="Enter your name" />

          <label>Enter your email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4" type="text" placeholder="Enter your email" />


          <label>Enter your phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mb-4" type="phone" placeholder="Enter your phone" />

          <label>Enter your location</label>
          <input value={locationX} onChange={(e) => setLocationX(e.target.value)} type="number" placeholder="Enter your location x" />
          <input value={locationY} onChange={(e) => setLocationY(e.target.value)} className="mb-4" type="number" placeholder="Enter your location y" />

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            Add client
          </button>
          <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded-md w-full mt-4">Back</Link>
        </form>
      </div>
    </>
  );
}

export default Form;
