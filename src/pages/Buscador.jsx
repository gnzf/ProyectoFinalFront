import React, { useState, useEffect } from "react";
import "../styles/Buscador/Buscador.css";
import SearchBar from "../components/Buscador/SearchBar";
import GrillaAlbum from "../components/Buscador/GrillaAlbum";
import FlowersMiley from "../../public/images/image-placeholder.svg";
import { getCanciones } from "../API/rule_canciones";
import FooterHome from "../components/home/footerHome";
import { useNavigate } from "react-router";

function Buscador() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const [canciones, setCanciones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [redirectingSearcher, setRedirectingSearcher] = useState(false);


  const handleInputClick = () => {
    setIsClicked(true);
    setRedirectingSearcher(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await getCanciones();
        setCanciones(resultado);
      } catch (error) {
        alert("Error al obtener los datos.");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (redirectingSearcher) {
      const timer = setTimeout(() => {
        navigate("/searcher");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [redirectingSearcher, navigate]);

  return (
    <>
      <div className="buscador-container">
        <div className="fixed-top">
          <div className="title-container">
            <div className="title-wrapper">
              <h1
                className={` ${isClicked ? "animate-left" : ""}`}
              >
                Buscador
              </h1>
              <SearchBar
                classNameBuscador={`buscador-searchbar`}
                onClickInput={handleInputClick}
                isClicked={isClicked}
              />
            </div>
          </div>
          <div
            className={`divider-searcher ${
              isClicked ? "animate-left-down" : ""
            }`}
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
        <div className={`grillas ${isClicked ? "animate-left" : ""}`}>
          {isLoading && <div>Cargando...</div>}
          {error && <div>Error: {error}</div>}
          {canciones && (
            <div className="grillaAlbums">
              {canciones.map((canciones) => (
                <GrillaAlbum
                  img={FlowersMiley}
                  title={canciones.cancion_name}
                  artistName={canciones.name_artist}
                />
              ))}
            </div>
          )}
        </div>
        <div
          className={`footer-buscador ${
            isClicked ? "animate-footer-down" : ""
          } `}
        >
          <FooterHome ruta="buscador" />
        </div>
      </div>
    </>
  );
}

export default Buscador;
