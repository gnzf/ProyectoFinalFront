import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/cupidoMusical/Carrusel.css";
import Playlists from "../playlists/Playlists";
import Match from "./Match";
import { getCanciones } from "../../API/rule_canciones";

function Carrusel() {
  const [canciones, setCanciones] = useState([]);
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [currentMatches, setCurrentMatches] = useState([]);
  const [shouldResetMatches, setShouldResetMatches] = useState(false);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await getCanciones();
        console.log(resultado); // Agrega esto para verificar los datos
        setCanciones(resultado);
      } catch (error) {
        alert("Error al obtener los datos.");
      }
    };
    
    fetchData();
  }, []);
  
  const handleLikeClick = () => {
    if (canciones.length > 0) {
      const nextIndex = (currentArtistIndex + 1) % canciones.length;
      setCurrentMatches([...currentMatches, canciones[currentArtistIndex].name_artist]);
      setCurrentArtistIndex(nextIndex);
    }
  };
  
  const handlePassClick = () => {
    if (canciones.length > 0) {
      const nextIndex = (currentArtistIndex + 1) % canciones.length;
      setCurrentArtistIndex(nextIndex);
    }
  };
  
  const handleResetMatches = () => {
    setCurrentMatches([]);
    setCurrentArtistIndex(0); // Restablecer el índice a 0
  };
 
  console.log('Datos de currentMatches en Carrusel:', currentMatches);
  return (
    <>
      <div className="carrusel-container">
        <div className="top-nav-carrusel">
          <Link to={"/home"} href="" className="link-arrow-carrusel">
            <img src="/image/cupidoMusical/placeholder.svg" alt="" />
          </Link>
          <h1 className="title-carrusel">Cupido Musical</h1>
        </div>

        <div className="playlist-carrusel">
          {canciones && canciones.length > 0 && (
      <div>
        <Playlists />
          <p className="name-music">{canciones[currentArtistIndex].name_artist}</p>
      </div>
      )}

          <div className="btn-like-close">
            <button onClick={handleLikeClick}>
              <img src="/image/cupidoMusical/like.svg" alt="" />
            </button>
            <button onClick={handlePassClick}>
              <img src="/image/cupidoMusical/pass.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="matches">
          <Match matches={currentMatches} resetMatches={handleResetMatches} />
        </div>
        

        <div className="btn-create">
         <button className="btn-create-playlists">
            <Link
              to={{
               pathname: "/playlistGenerada",
              state: { currentMatches },
              }}
            >
           Crear Playlist
            </Link>
            </button>
          </div>
      </div>
    </>
  );
}

export default Carrusel;
