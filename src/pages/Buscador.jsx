import React, { useState, useEffect } from "react";
import "../styles/Buscador/Buscador.css";
import SearchBar from "../components/Buscador/SearchBar";
import GrillaAlbum from "../components/Buscador/GrillaAlbum";
import FlowersMiley from "../../public/images/image-placeholder.svg";
import KillBillSZA from "../../public/images/image-placeholder (2).svg";
import BusquedaReciente from "../components/Buscador/BusquedaReciente";
import BusquedaResultado from "../components/Buscador/BusquedaResultado";
import { getCanciones } from "../API/rule_canciones";
import AllSongs from "../components/playlistgenerada/AllSongs";
import FooterHome from "../components/home/footerHome";
import CardBusqueda from "../components/Buscador/CardBusqueda";
import "../styles/Buscador/BusquedaResultado.css"
import vengeance from "../../public/images/Buscador/image-placeholder (10).svg";

function Buscador() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [letra, setLetra] = useState("");
  const [buscar, setBuscar] = useState(false)


  const handleInputClick = () => {
    setIsClicked(true);
  };

  const handleArrowClick = () => {
    setArrowClicked(true);
  };

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
    <>
      <div className="buscador-container">
        <div className="fixed-top">
          <div className="title-container">
            <div className="title-wrapper">
              <h1
                className={` ${isClicked ? "animate-left" : ""} ${
                  arrowClicked ? "animate-left-reverse" : ""
                }`}
              >
                Buscador
              </h1>
              <SearchBar
                onClickInput={handleInputClick}
                isClicked={isClicked}
                onArrowClicked={handleArrowClick}
                arrowClicked={arrowClicked}
                setArrowClicked={setArrowClicked}
                onSearch={handleSearch}
              />
            </div>
          </div>
          <div
            className={`divider-searcher ${
              isClicked ? "animate-left-down" : ""
            } ${arrowClicked ? "animate-left-down-reverse" : ""}`}
          >
            <h2>Top 20s</h2>{" "}
            <hr
              style={{
                borderTop: "2px solid #E4E6E8",
                width: "240px",
                height: "2px",
              }}
            />
          </div>
        </div>
         {isClicked && letra == 0 ? (
          <div
            className={`recent-search animate-${
              arrowClicked ? "right-reverse" : "right"
            }`}
          >
            <BusquedaReciente />
          </div>
        ) : 
        letra.length > 0 && (
          <BusquedaResultado/>
        )}
        </div>
        {buscar ? (
              <div>
                {filteredResultados.map((canciones) => (
                  <CardBusqueda
                    imgCardAlbum={vengeance}
                    title={canciones.cancion_name}
                    artistName={canciones.name_artist}
                  />
                ))}
              </div>
            ) : null}
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
    </>
  );
}
     
export default Buscador;

