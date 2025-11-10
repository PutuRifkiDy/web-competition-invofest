import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Blog from "./pages/Blog";
import DetailProduct from "./pages/DetailProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterShop from "./pages/RegisterShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/detail-product",
    element: <DetailProduct />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: 'register-shop',
    element: <RegisterShop />
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
