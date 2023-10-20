import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import InicioDeApp from "./pages/iniciodeapp";
// import Carrusel from "./components/cupidomusical/Carrusel";
// import Perfil from "./pages/perfil";
// import Configuration from "./components/perfil/Configuration";
import Registro from "./pages/registro";
import Home from "./pages/home";
import RegistoCrearCuenta from "./pages/RegistoCrearCuenta";
import MusicaContextual from './pages/musicaContextual'
import PlaylistGenerada from './pages/PlaylistGenerada'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
},
    {
    path: "/register",
    element: <Registro />,
  },
  {
    path: "/create-account" /*En realidad creo que deberia ser path: "/register/create-account" */,
    element: <RegistoCrearCuenta />,
  },
  {
    path: "/musicaContextual",
    element: <MusicaContextual/>
  },
  {
    path: "/playlistGenerada",
    element: <PlaylistGenerada/>
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
