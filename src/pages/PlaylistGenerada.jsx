import React from 'react'
import "../styles/home/playlistGenerada.css"
import FooterHome from '../components/home/footerHome';
import backArrow from "../../public/images/home/leftarrowback.svg"
import pointSearch from "../../public/images/home/right-icon-placeholder.svg"
import logoSmall from "../../public/images/playlistgenerada/logo-small.svg"
import verified from "../../public/images/playlistgenerada/verified.svg"
import sharePlaylist from "../../public/images/playlistgenerada/share.svg"
import historyPlaylist from "../../public/images/playlistgenerada/history.svg"
import Reproducir from '../components/playlistgenerada/reproducir.jsx';
import makeCopy from "../../public/images/playlistgenerada/icon-left-placeholder.svg"
import randomPlaylist from "../../public/images/playlistgenerada/shuffle.svg"
import playPlaylist from "../../public/images/playlistgenerada/play-btn.svg"
import AllSongs from '../components/playlistgenerada/AllSongs';
import CaratulaPlaylist from '../components/playlistgenerada/CaratulaPlaylist';

function PlaylistGenerada() {
  return (
    <div className='playlist-generada-container'>
        <div className='header-playlist-content'>
            <img src="/images/home/leftarrowback.svg"/>
            <div className='text-playlist-header'>
                <p>Generada del Cupido Musical</p>
                <h4>Playlist Generada</h4>
            </div>
            <img src="/images/home/right-icon-placeholder.svg"/>
        </div>
        <div className='caratula-playlist-container'>
          <CaratulaPlaylist/>
        </div>
        <div className='playlist-generada-main'>
          <div></div>
          <div className='share-playlist-verified'>
            <img src="/images/playlistgenerada/logo-small.svg"/>
            <img src="/images/playlistgenerada/verified.svg"/>
            <img src="/images/playlistgenerada/share.svg"/>
            <p>duracion</p>
            <img src="/images/playlistgenerada/history.svg"/>
          </div>
          <Reproducir imagen1="/images/playlistgenerada/icon-left-placeholder.svg" imagen2="/images/playlistgenerada/shuffle.svg" imagen3="/images/playlistgenerada/play-btn.svg"></Reproducir>
          <div className='allSongs-containerall'>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          <AllSongs></AllSongs>
          </div>

        </div>


        <FooterHome/>
    </div>
  )
}

export default PlaylistGenerada;