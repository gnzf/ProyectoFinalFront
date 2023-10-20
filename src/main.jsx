import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InicioDeSesion from './pages/InicioDeSesion'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <InicioDeSesion/>
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
    path: "/busquedaReciente",
    element: <BusquedaReciente/>
  },

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
