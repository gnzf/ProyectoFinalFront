import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
