import React from 'react'
import "../../styles/Buscador/SortBtn.css"
export default function SortBtn() {
  return (
    <div className='sortbutton-button'>
    <button className='first-sort'>Top</button>
    <button className='sort-search-btn'>Canciones</button>
    <button className='sort-search-btn'>Álbumes</button>
    <button className='sort-search-btn'>Artistas</button>
    <button className='sort-search-btn'>Playlists</button>
    </div>
  )
}
