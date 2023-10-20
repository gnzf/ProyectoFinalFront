import React from 'react'
import "./footerHome.css"
import homeFooter from "../../../public/images/home/inicio.svg"
import searchFooter from "../../../public/images/home/search.svg"
import friendsFooter from "../../../public/images/home/amigos.svg"
import userFooter from "../../../public/images/home/perfil.svg"

function FooterHome() {

  let ruta = "inicio"

  return (
    <div className={'container-footer-home ' + ruta}>
            <a className='container-explorer-home'>
                <img src="/images/home/inicio.svg" alt='home'/>
                <span>Inicio</span>
            </a>
            <a className='container-explorer-home'>
                <img src="/images/home/search.svg" alt='search'/>
                <span>Buscador</span>
            </a>
            <a className='container-explorer-home'>
                <img src="/images/home/amigos.svg" alt='profile'/>
                <span>Perfil</span>
            </a>
            <a className='container-explorer-home'>
                <img src="/images/home/perfil.svg" alt='friends'/>
                <span>Amigos</span>
            </a>
    </div>
  )
}

export default FooterHome