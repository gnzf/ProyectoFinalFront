import React from "react";

function CardBusqueda(props) {
  return (
    <div className="card-busqueda-reciente">
      <img className="busqueda-reciente-albumImg" src={props.imgCardAlbum} alt="" />
      <div className="card-busqueda-reciente-wrapper">
        <p>{props.albumName}</p>
        <ul className="breadcrumb-busqueda-reciente">
          <li>{props.song}</li>
          <li>{props.artistName}</li>
        </ul>
      </div>
        <img className="busqueda-borrar-cruzImg" src={props.imgCross} alt="" />
    </div>
  );
}

export default CardBusqueda;
