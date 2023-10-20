import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Home from './pages/home'
import MusicaContextual from './pages/musicaContextual'
import PlaylistGenerada from './pages/PlaylistGenerada'

const router = createBrowserRouter([
  {
    path: "/",
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
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
