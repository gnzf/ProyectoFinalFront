import React, { useState, useEffect } from "react";
import "../styles/home/playlistGenerada.css";
import FooterHome from "../components/home/footerHome";
import Reproducir from "../components/playlistgenerada/reproducir.jsx";
import AllSongs from "../components/playlistgenerada/AllSongs";
import CaratulaPlaylist from "../components/playlistgenerada/CaratulaPlaylist";
import { useNavigate } from "react-router-dom";
import {
  cancionesPlaylistGenerada,
  totalDurationPlaylistGenerada,
} from "../API/rule_playlist.jsx";

function PlaylistGenerada() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
      if (!token) {
          navigate("/login");
      }
  }, [])

  const [resultados, setResultados] = useState([]);
  const [totalDuration, setTotalDuration] = useState([]);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id"); 
    if (token && user_id) {
      setUserID(user_id);
    }
  }, [userID]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuarioId = localStorage.getItem("user_id");
        const resultado = await cancionesPlaylistGenerada(usuarioId);
        setResultados(resultado);
        const totalDuration = await totalDurationPlaylistGenerada(usuarioId);
        setTotalDuration(totalDuration);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [userID]);

  const allImages = resultados.map((canciones) => canciones.cancion_imagen); 
  const firstFourImages = allImages.slice(0, 4);

  const totalDurationInMinutes = Math.floor(totalDuration / 60);
  const totalDurationInSeconds = totalDuration % 60;

  return (
    <div className="playlist-generada-container">
      <div className="header-playlist-content">
          <img src="/images/home/leftarrowback.svg" onClick={() => navigate("/home")}/>
        <div className="text-playlist-header">
          <p>Generada del Cupido Musical</p>
          <h4>Playlist Generada</h4>
        </div>
        <img src="/images/home/right-icon-placeholder.svg" />
      </div>
      {resultados.length > 0 ? (
        <div className="caratula-playlist-container">
          <CaratulaPlaylist imagenes={firstFourImages} />
        </div>
      ) : (
        <p>No hay resultados disponibles.</p>
      )}
      <div className="playlist-generada-main">
        <div></div>
        <div className="share-playlist-verified">
          <img src="/images/playlistgenerada/logo-small.svg" />
          <img src="/images/playlistgenerada/verified.svg" />
          <img src="/images/playlistgenerada/share.svg" />
          {totalDuration.length > 0 ? (
            <p>
              {totalDurationInMinutes}:{totalDurationInSeconds}{" "}
            </p>
          ) : (
            <p>No hay resultados disponibles.</p>
          )}
          <img src="/images/playlistgenerada/history.svg" />
        </div>
        <Reproducir
          imagen1="/images/playlistgenerada/icon-left-placeholder.svg"
          imagen2="/images/playlistgenerada/shuffle.svg"
          imagen3="/images/playlistgenerada/play-btn.svg"
        ></Reproducir>

        {resultados.length > 0 ? (
          <div className="allSongs-containerall">
            {resultados.map((canciones) => (
              <AllSongs
                imagenCover={canciones.cancion_imagen}
                title={canciones.cancion_name}
                artistName={canciones.name_artist}
                duration={canciones.duration}
              />
            ))}
          </div>
        ) : (
          <p>No hay resultados disponibles.</p>
        )}
      </div>

      <FooterHome ruta="inicio" />
    </div>
  );
}

export default PlaylistGenerada;

