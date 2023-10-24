import React, { useState, useEffect } from "react";
import "../styles/Buscador/Buscador.css";
import SearchBar from "../components/Buscador/SearchBar";
import GrillaAlbum from "../components/Buscador/GrillaAlbum";
import FlowersMiley from "../../public/images/image-placeholder.svg";
import KillBillSZA from "../../public/images/image-placeholder (2).svg";
import { getCanciones } from "../API/rule_canciones";
import AllSongs from "../components/playlistgenerada/AllSongs";
import FooterHome from "../components/home/footerHome";

function Buscador() {
  const [isClicked, setIsClicked] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [letra, setLetra] = useState("");

  const handleInputClick = (letra) => {
    setIsClicked(true);
    setLetra(letra);
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
    <div className="buscador-container">
      <div className="fixed-top">
        <div className="title-container">
          <div className="title-wrapper">
            <h1 className={isClicked ? "animate-left" : ""}>Buscador</h1>
            <SearchBar onClickInput={handleInputClick} isClicked={isClicked} />
            {isClicked ? (
              <div>
                {filteredResultados.map((canciones) => (
                  <AllSongs
                    title={canciones.cancion_name}
                    artistName={canciones.name_artist}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className={`divider-searcher ${isClicked ? "animate-left" : ""}`}>
          <h2>Top 20s</h2>
        </div>
      </div>
      <div className={`grillas ${isClicked ? "animate-left" : ""}`}>
          {filteredResultados.length > 0 ? (
        <div className="grillaAlbums">
              {filteredResultados.map((canciones) => (
                <GrillaAlbum
                  img={FlowersMiley}
                  title={canciones.cancion_name}
                  artistName={canciones.name_artist}
                />
              ))
            }
            </div>
          ) : null}
      </div>

      <FooterHome />
    </div>
  );
}

export default Buscador;

