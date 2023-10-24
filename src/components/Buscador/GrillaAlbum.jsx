import React from 'react'
import "../../styles/Buscador/GrillaAlbum.css"
function GrillaAlbum(props) {
  return (
    <div className='album-Grilla'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>{props.artistName}</p>
    </div>
  )
}

export default GrillaAlbum