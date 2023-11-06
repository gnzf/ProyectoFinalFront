import React, { useState, useEffect } from 'react';
import "../styles/home/playlistGenerada.css";
import FooterHome from '../components/home/footerHome';
import Reproducir from '../components/playlistgenerada/reproducir.jsx';
import AllSongs from '../components/playlistgenerada/AllSongs';
import CaratulaPlaylist from '../components/playlistgenerada/CaratulaPlaylist';
import { getCanciones } from '../API/rule_canciones';
import { Link, useLocation } from 'react-router-dom';

function PlaylistGenerada() {
  const [resultados, setResultados] = useState([]);
  const location = useLocation();
  const currentMatches = location.state?.currentMatches || [];

  console.log('Datos de currentMatches en PlaylistGenerada:', currentMatches);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await getCanciones();
        setResultados(resultado);
        console.log(`este es tu resultado${resultado}`)
      } catch (error) {
        alert("Error al obtener los datos.");
      }
    };

    fetchData();
  }, []);

  const filteredResultados = resultados.filter(canciones => currentMatches.includes(canciones.name_artist));

  console.log('filteredResultados:', filteredResultados);
  return (
    <div className='playlist-generada-container'>
      <div className='header-playlist-content'>
        <Link to={"/musicaContextual"}>
          <img src="/images/home/leftarrowback.svg" alt="Volver" />
        </Link>
        <div className='text-playlist-header'>
          <p>Generada del Cupido Musical</p>
          <h4>Playlist Generada</h4>
        </div>
        <img src="/images/home/right-icon-placeholder.svg" alt="Icono derecha" />
      </div>
      <div className='caratula-playlist-container'>
        <CaratulaPlaylist />
      </div>
      <div className='playlist-generada-main'>
        <div></div>
        <div className='share-playlist-verified'>
          <img src="/images/playlistgenerada/logo-small.svg" alt="Logo pequeño" />
          <img src="/images/playlistgenerada/verified.svg" alt="Verificado" />
          <img src="/images/playlistgenerada/share.svg" alt="Compartir" />
          <p>duracion</p>
          <img src="/images/playlistgenerada/history.svg" alt="Historial" />
        </div>
        <Reproducir imagen1="/images/playlistgenerada/icon-left-placeholder.svg" imagen2="/images/playlistgenerada/shuffle.svg" imagen3="/images/playlistgenerada/play-btn.svg" />
        <div className='allSongs-containerall'>
          {filteredResultados.map(cancion => {
  return (
    <AllSongs
      key={cancion.id}
      title={cancion.cancion_name}
      artistName={cancion.name_artist}
    />
  );
})}
        </div>
      </div>
      <FooterHome ruta="inicio" />
    </div>
  );
}

export default PlaylistGenerada;
