import React from "react";
import "../../styles/Buscador/CardBusqueda.css"
function CardBusqueda(props) {
  return (
    <div className="card-busqueda-reciente">
      <img className="busqueda-reciente-albumImg" src={props.imgCardAlbum} alt="" />
      <div className="card-busqueda-reciente-wrapper">
        <p>{props.name}</p>
        <ul className="breadcrumb-busqueda-reciente">
          <li>{props.type}</li>
          <li>{props.artistName}</li>
        </ul>
      </div>
       {props.imgCross && <img className="busqueda-borrar-cruzImg" src={props.imgCross} alt="" />}
    </div>
  );
}

export default CardBusqueda;
