import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InicioDeSesion from './pages/inicioDeSesion'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/login",
    element: <InicioDeSesion/>
  },

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
