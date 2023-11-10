import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InicioDeSesion from './pages/inicioDeSesion'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InicioDeApp from "./pages/inicioDeApp";
import Carrusel from "./components/cupidomusical/Carrusel";
import PerfilUsuario from "./pages/perfil";
import Configuration from "./components/perfil/Configuration";
import Registro from "./pages/registro";
import Home from "./pages/home";
import RegistoCrearCuenta from "./pages/RegistoCrearCuenta";
import MusicaContextual from './pages/musicaContextual'
import PlaylistGenerada from './pages/PlaylistGenerada'
import RecuperarCuenta from './pages/RecuperarCuenta';
import Buscador from './pages/Buscador';
import Error404 from './components/error404/error404';
import Searcher from './pages/Searcher';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InicioDeApp/>,
    errorElement: <Error404/>
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
    path: "/login",
    element: <InicioDeSesion/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/musicaContextual",
    element: <MusicaContextual/>
  },
  {
    path: "/playlistGenerada",
    element: <PlaylistGenerada/>
  },
  {
    path: "/tinderMusica",
    element: <Carrusel/>
  },
  {
    path: "/perfil",
    element: <PerfilUsuario/>
  },
  {
    path: "/configuracionPerfil",
    element: <Configuration/>
  },
  {
    path: "/recuperar-cuenta",
    element: <RecuperarCuenta/>
  },
  {
    path: "/buscador",
    element: <Buscador/>
  },
  {
    path: "/searcher",
    element: <Searcher/>
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
