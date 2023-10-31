import React from "react";
import "../../styles/Buscador/CardSong.css"

function CardSong(props) {

  return (
    <div className="card-busqueda-reciente card-songs">
      <img className="busqueda-reciente-albumImg" src={props.imgCardAlbum} alt="" />
      <div className="card-busqueda-reciente-wrapper">
        <p>{props.title}</p>
        <ul className="breadcrumb-busqueda-reciente">
          <li>Artista</li>
          <li>{props.artistName}</li>
        </ul>
      </div>
       {props.imgCross && <img className="busqueda-borrar-cruzImg" src={props.imgCross} alt="" />}
    </div>
  );
}

export default CardSong;
