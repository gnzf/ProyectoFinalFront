import SortBtn from "./SortBtn";
import CardArtista from "./CardArtista";
import PanicDisco from "../../../public/images/Buscador/image-placeholder (9).svg";
import vengeance from "../../../public/images/Buscador/image-placeholder (10).svg";
import "../../styles/Buscador/BusquedaResultado.css";
import CardSong from "./CardSong";

function BusquedaResultado(props) {

  return (
    <div className="busqueda-results-wrapper">
      <div className="sort-cards-container">
        <SortBtn />
      </div>
      <div className="suggested-result">
        <p className="sugerencia-title">Resultado Sugerido: </p>
        {props.suggestedArtist && 
       ( <CardArtista
          imgCardArtista={PanicDisco}
          artistName={props.suggestedArtist}
        />) }
        <hr />
      </div>
      {props.result?.map((canciones) =>
      <CardSong
        imgCardAlbum={vengeance}
        title={canciones.cancion_name}
        artistName={canciones.name_artist}
      />)}
    </div>
  );
}

export default BusquedaResultado;
