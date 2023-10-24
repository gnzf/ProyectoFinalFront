import React from 'react'
import blueCheck from "../../../public/images/Buscador/verified.svg"

function CardArtista(props) {
  return (
    <div className="card-busqueda-reciente">
      <img className="busqueda-reciente-albumImg" src={props.imgCardArtista} alt="" />
      <div className="card-busqueda-reciente-wrapper">
        <p>{props.artistName} <img src={blueCheck} alt="" /></p>
        <p>Artista</p>
      </div>
      {props.imgCross && <img className="busqueda-borrar-cruzImg" src={props.imgCross} alt="" />}
    </div>
  )
}

export default CardArtista