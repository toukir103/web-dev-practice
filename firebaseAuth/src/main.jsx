import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./index.css";
import Root from "./layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,     
        element: <Home/>,
      },
      {
        path: "login", 
        element:<Login/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
