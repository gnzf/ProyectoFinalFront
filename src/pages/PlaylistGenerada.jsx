import React , {useState, useEffect} from 'react'
import "../styles/home/playlistGenerada.css"
import FooterHome from '../components/home/footerHome';
import Reproducir from '../components/playlistgenerada/reproducir.jsx';
import AllSongs from '../components/playlistgenerada/AllSongs';
import CaratulaPlaylist from '../components/playlistgenerada/CaratulaPlaylist';
import { getCanciones } from '../API/rule_canciones';
import { Link } from 'react-router-dom';

function PlaylistGenerada() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [letra, setLetra] = useState("");
  const [buscar, setBuscar] = useState(false);  


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

  const filteredResultados = resultados.filter(
    (cancion) =>
      cancion.cancion_name.toLowerCase().includes(letra.toLowerCase()) ||
      cancion.name_artist.toLowerCase().includes(letra.toLowerCase())
  );

  return (
    <div className='playlist-generada-container'>
        <div className='header-playlist-content'>
            <Link to={"/musicaContextual"}><img src="/images/home/leftarrowback.svg"/></Link>
            <div className='text-playlist-header'>
                <p>Generada del Cupido Musical</p>
                <h4>Playlist Generada</h4>
            </div>
            <img src="/images/home/right-icon-placeholder.svg"/>
        </div>
        <div className='caratula-playlist-container'>
          <CaratulaPlaylist/>
        </div>
        <div className='playlist-generada-main'>
          <div></div>
          <div className='share-playlist-verified'>
            <img src="/images/playlistgenerada/logo-small.svg"/>
            <img src="/images/playlistgenerada/verified.svg"/>
            <img src="/images/playlistgenerada/share.svg"/>
            <p>duracion</p>
            <img src="/images/playlistgenerada/history.svg"/>
          </div>
          <Reproducir imagen1="/images/playlistgenerada/icon-left-placeholder.svg" imagen2="/images/playlistgenerada/shuffle.svg" imagen3="/images/playlistgenerada/play-btn.svg"></Reproducir>
          <div className='allSongs-containerall'>
          {filteredResultados.map((canciones) => (
          <AllSongs 
           title={canciones.cancion_name}
           artistName={canciones.name_artist}
           />
           ))}
          
          </div>

        </div>


        <FooterHome ruta="inicio"/>
    </div>
  )
}

export default PlaylistGenerada;