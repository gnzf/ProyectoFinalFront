import React, { useState, useEffect } from "react";
import "../styles/Buscador/Buscador.css";
import SearchBar from "../components/Buscador/SearchBar";
import BusquedaReciente from "../components/Buscador/BusquedaReciente";
import BusquedaResultado from "../components/Buscador/BusquedaResultado";
import { getCanciones } from "../API/rule_canciones";
import { useNavigate } from "react-router";

function Searcher() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
      if (!token) {
          navigate("/login");
      }
  }, [])

  const [arrowClicked, setArrowClicked] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [searchMusic, setsearchMusic] = useState("");
  const [foundResult, setFoundResult] = useState([]);
  const [suggestedArtist, setSuggestedArtist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [redirectingBuscador, setRedirectingBuscador] = useState(false);

  const handleArrowClick = () => {
    setArrowClicked(true);
    setRedirectingBuscador(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await getCanciones();
        setResultados(resultado);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (redirectingBuscador) {
      const timer = setTimeout(() => {
        navigate("/buscador");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [redirectingBuscador, navigate]);

  const handleSearch = (searchMusic) => {
    setsearchMusic(searchMusic);
    const filteredResultados = resultados.filter(
      (cancion) =>
        cancion.cancion_name
          .toLowerCase()
          .includes(searchMusic.toLowerCase()) ||
        cancion.name_artist.toLowerCase().includes(searchMusic.toLowerCase())
    );
    setFoundResult(filteredResultados);

    const suggestedArtist =
      filteredResultados.length > 0 ? filteredResultados[0].name_artist : null;
    setSuggestedArtist(suggestedArtist);
  };

  return (
    <>
      <div className="buscador-container">
        <div className="title-wrapper">
          <div className="searcher-searchbar-container animate-up">
            <SearchBar
              classNameSearcher={`searcher-searchbar`}
              onArrowClicked={handleArrowClick}
              arrowClicked={arrowClicked}
              setArrowClicked={setArrowClicked}
              onSearch={handleSearch}
              isArrow={true}
              resetCanciones={setFoundResult}
              resetArtistas={setSuggestedArtist}
            />
          </div>
        </div>
        <div>
          {isLoading && <div>Cargando...</div>}
          {error && <div>Error: {error}</div>}
          {searchMusic.length == 0 ? (
            <div
              className={`recent-search animate-${
                arrowClicked ? "right-reverse" : "right"
              }`}
            >
              <BusquedaReciente />
            </div>
          ) : !foundResult || !suggestedArtist ? (
            <p style={{ textAlign: "center" }}>No se encontraron resultados</p>
          ) : (
            foundResult.length > 0 &&
            suggestedArtist.length > 0 && (
              <div className={`animate-${arrowClicked ? "right-reverse" : ""}`}>
                <BusquedaResultado
                  result={foundResult}
                  suggestedArtist={suggestedArtist}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Searcher;
