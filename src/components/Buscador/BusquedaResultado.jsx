import React, {useEffect, useState} from "react";
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
import { getCanciones } from "../../API/rule_canciones";


function BusquedaResultado(props) {
  const [resultados, setResultados] = useState([]);
  const [letra, setLetra] = useState("");
  const [buscar, setBuscar] = useState(false)

  const handleSearch = (letra) => {
    setLetra(letra);
    setBuscar(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await getCanciones();
        setResultados(resultado);
      } catch (error) {
        alert("Error al obtener los datos.");
      }
    };

    fetchData();
  }, []);


  const filteredResultados = resultados.filter((cancion) =>
    cancion.cancion_name.toLowerCase().includes(letra.toLowerCase()) ||
    cancion.name_artist.toLowerCase().includes(letra.toLowerCase())
  );


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
    </div>
  );
}

export default BusquedaResultado;
