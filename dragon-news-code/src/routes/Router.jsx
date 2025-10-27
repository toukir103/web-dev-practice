// In the name of Allah
import { createBrowserRouter } from "react-router-dom";
import CatagoriesNews from "../Components/CatagoriesNews";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element:<CatagoriesNews/>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Authentication layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News layout</h1>,
  },
]);
