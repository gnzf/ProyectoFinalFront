import React from 'react'
import "./AllSongs.css"
import prueba from "../../../public/images/playlistgenerada/image-placeholder.svg"
import optionsSongs from "../../../public/images/playlistgenerada/icon-right-placeholder.svg"

function AllSongs() {
  return (
    <div className='allSongs-playlists'>
        <img src="/images/playlistgenerada/image-placeholder.svg" alt='caratula' />
        <div className='allSongs-title-playlist'>
            <h5>Waiting For Love</h5>
            <p>Avicii</p>
        </div>
        <img src="/images/playlistgenerada/icon-right-placeholder.svg"/>
    </div>
  )
}

export default AllSongs;