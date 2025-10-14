// In the name of Allah
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Home from './Components/Home/Home';
import './index.css';
import Root from './layout/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",  // Register route
        element: <Home/>,
      },
      {
        path: "/register",  // Register route
        element: <Register />,
      },
            {
        path: "/login",  // Register route
        element: <Login/>,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
