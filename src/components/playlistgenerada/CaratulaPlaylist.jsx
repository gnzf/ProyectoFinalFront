import "../playlistgenerada/CaratulaPlaylist.css";
import pruebaCaratula from "../../../public/images/playlistgenerada/image-placeholder.svg";

import React from "react";

function CaratulaPlaylist(props) {
  if (!Array.isArray(props.imagenes)) {
    console.error("props.imagenes is not an array.");
    return null;
  }

  return (
    <div className="card-playlists-caratula">
      {props.imagenes.map((imagen, index) => (
        <img key={index} src={imagen} alt={`Imagen ${index}`} />
      ))}
    </div>
  );
}

export default CaratulaPlaylist;
