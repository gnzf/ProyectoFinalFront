import React from "react";
import SortBtn from "./SortBtn";
import CardArtista from "./CardArtista";
import PanicDisco from "../../../public/images/Buscador/image-placeholder (9).svg";
import vengeance from "../../../public/images/Buscador/image-placeholder (10).svg";
import caravan from "../../../public/images/Buscador/image-placeholder (11).svg";
import bachelor from "../../../public/images/Buscador/image-placeholder (12).svg";
import panicRoom from "../../../public/images/Buscador/image-placeholder (13).svg";
import roaring from "../../../public/images/Buscador/image-placeholder (14).svg";
import Panico from "../../../public/images/Buscador/image-placeholder (15).svg";
import station from "../../../public/images/Buscador/image-placeholder (16).svg";
import "../../styles/Buscador/BusquedaResultado.css"
import CardBusqueda from "./CardBusqueda";

function BusquedaResultado() {
  return (
    <div className="busqueda-results-wrapper">
      <div className="sort-cards-container">
        <SortBtn/>
      </div>
      <div className="suggested-result">
      <p className="sugerencia-title">Resultado Sugerido: </p>
      <CardArtista
        imgCardArtista={PanicDisco}
        artistName="Panic! At the Disco"
      />
      <hr />
      </div>
      <div className="search-results-container">
        <div className="search-cards-wrapper">
        <CardBusqueda
          imgCardAlbum={vengeance}
          name="Viva Las Vengeance"
          type="Álbum"
          artistName="Panic! At The Disco"
        />
        <CardBusqueda
          imgCardAlbum={caravan}
          name="Panic"
          type="Álbum"
          artistName="Caravan Palace"
        />
        <CardBusqueda
          imgCardAlbum={bachelor}
          name="Death of a Bachelor"
          type="Álbum"
          artistName="Panic! At The Disco"
        />
        <CardBusqueda
          imgCardAlbum={panicRoom}
          name="Panic Room"
          type="Canción"
          artistName="Au/Ra"
        />
        <CardBusqueda
          imgCardAlbum={roaring}
          name="Roaring 20s"
          type="Canción"
          artistName="Panic! At the Disco"
        />
        <CardArtista imgCardArtista={Panico} artistName="Pánico" />
        <CardBusqueda
          imgCardAlbum={station}
          name="Panic Station"
          type="Canción"
          artistName="Muse"
        />
        </div>
      </div>
    </div>
  );
}

export default BusquedaResultado;
