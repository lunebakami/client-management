import ClientTable from "./ClientTable";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-3/5 m-auto">
        <div className="flex justify-between items-center h-2/6">
          <h1 className="text-2xl">Client Management</h1>
          <div className="w-3/5">
            <Link
              to="/add-client"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add client
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 m-4 rounded-md">
              Calculate Distances
            </button>
          </div>
        </div>
        <ClientTable />
      </div>
    </>
  );
}

export default Home;
