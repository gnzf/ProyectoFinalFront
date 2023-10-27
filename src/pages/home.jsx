import React from 'react'
import "../styles/home/home.css"
import FooterHome from '../components/home/footerHome';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='all-home-stats'>
        <div className='notifications-bar-home'>
            <h1>Música ya</h1>
            <img src="/images/home/Vector.svg" alt='clock'/>
            <img src="/images/home/bell.svg" alt='campaign'/>
        </div>
        <div className='container-main-home'>
                <Link to={"/tinderMusica"}><div className='container-options-home'>
                    <div className='container-imagenhome-animation1'>
                        <img className='cupido-musical-image1' src="/images/home/cherub.svg" alt='imagen'/>
                        <img className='cupido-musical-image2' src="/images/home/headphones.svg" alt='imagen'/>
                    </div>
                
                    <div className='texto-options-home'>
                        <h4>Cupido Musical</h4>
                        <p>Tus artistas favoritos nunca van a dejarte con el corazón roto.</p>
                    </div>
                </div></Link>
            <Link to={"/musicaContextual"}><div className='container-options-home'>
                <div className='container-imagenhome-animation1'>
                    <img className='cupido-musical-image3' src="/images/home/map.svg" alt='imagen'/>
                    <img className='cupido-musical-image4' src="/images/home/question.svg" alt='imagen'/>
                </div>
                <div className='texto-options-home'>
                    <h4>Música Contextual</h4>
                    <p>Creamos la playlist perfecta para cualquier situación.</p>
                </div>
            </div></Link>
        </div>
        <FooterHome ruta="inicio"/>
    
    
    </div>
  )
}

export default Home;
