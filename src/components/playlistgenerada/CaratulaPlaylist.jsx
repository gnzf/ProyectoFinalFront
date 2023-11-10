import "../playlistgenerada/CaratulaPlaylist.css";

import React from "react";

function CaratulaPlaylist(props) {
  if (!Array.isArray(props.imagenes)) {
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
