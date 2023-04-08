import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Layout/Home";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartsProductsLoader from "./components/Loaders/cartLoaders";
import CheckOut from "./components/CheckOut/CheckOut";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        element: <Orders></Orders>,
        loader: cartsProductsLoader,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  // Children:[{

  // }]
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
