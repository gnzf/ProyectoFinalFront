import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Registro from "./pages/registro";
import Home from "./pages/home";
import RegistoCrearCuenta from "./pages/RegistoCrearCuenta";

const router = createBrowserRouter([
  /*   {
    path: "/home",
    element: <Home />,
  }, */
  /*   {
    path: "/login",
    element: <InicioDeSesion />,
  },
 */
  {
    path: "/register",
    element: <Registro />,
  },
  {
    path: "/create-account" /*En realidad creo que deberia ser path: "/register/create-account" */,
    element: <RegistoCrearCuenta />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
