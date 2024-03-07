import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add-client",
      element: <Form />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
