import React from "react";
import imgCardAlbum from "../../../public/images/Buscador/image-placeholder (3).svg";
import neighborhoods from "../../../public/images/Buscador/image-placeholder (4).svg";
import complicated from "../../../public/images/Buscador/image-placeholder (6).svg";
import mafiosa from "../../../public/images/Buscador/image-placeholder (8).svg";
import imgCross from "../../../public/images/Buscador/icon-right-placeholder.svg";
import "../../styles/Buscador/Buscador.css";
import CardArtista from "./CardArtista";
import bizarrap from "../../../public/images/Buscador/image-placeholder (5).svg";
import "../../styles/Buscador/BusquedaReciente.css"
import CardSong from "./CardSong";

function BusquedaReciente() {
  return (
    <div>
      <div className="recent-search-wrapper">
        <span>Búsquedas recientes:</span>
        <hr
          style={{
            borderTop: "2px solid #E4E6E8",
            width: "123px",
          }}
        />
      </div>
      <div className="busquedas-recientes-cards-container">
        <CardSong
          imgCardAlbum={imgCardAlbum}
          name={"LLYM"}
          type={"Canción"}
          artistName={"ROSALÍA"}
          imgCross={imgCross}
        />
        <CardSong
          imgCardAlbum={neighborhoods}
          name={"Neighbordhoods"}
          type={"Álbum"}
          artistName={"Blink-182"}
          imgCross={imgCross}
        />
        <CardArtista
          imgCardArtista={bizarrap}
          artistName={"Bizarrap"}
          imgCross={imgCross}
        />
        <CardSong
          imgCardAlbum={complicated}
          name={"Complicated"}
          type={"Canción"}
          artistName={"Avril Lavigne"}
          imgCross={imgCross}
        />
        <CardSong
          imgCardAlbum={mafiosa}
          name={"Mafiosa"}
          type={"Canción"}
          artistName={"NATHY PELUSO"}
          imgCross={imgCross}
        />
      </div>
      <p className="clear-recent-search-history">Borrar búsquedas recientes</p>
    </div>
  );
}

export default BusquedaReciente;
