import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
  {
    path: "/auth",
    element: <h1>Authentication layout</h1>,
  },
  {
    path: "/news",
    element: <h1>news layout</h1>,
  },

]);