import React from 'react'
import CardBusqueda from './CardBusqueda'
import imgCardAlbum from "../../../public/images/image-placeholder (3).svg"
import imgCross from "../../../public/images/Buscador/icon-right-placeholder.svg"

function BusquedaReciente() {
  return (
    <div>
        <span className='recent-search'>Búsquedas reciente:</span>
        <CardBusqueda
            imgCardAlbum={imgCardAlbum}
            albumName={"LLYM"}
            song={"Canción"}
            artistName={"ROSALÍA"}
            imgCross={imgCross}
        />
    </div>
  )
}

export default BusquedaReciente