import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import InicioDeApp from "./pages/iniciodeapp";
// import Carrusel from "./components/cupidomusical/Carrusel";
import Perfil from "./pages/perfil";
// import Configuration from "./components/perfil/Configuration";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Perfil />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
