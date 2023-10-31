import React, { useState, useEffect } from "react";
import "../styles/musicaContextual/musicaContextual.css";
import backArrow from "../../public/images/home/leftarrowback.svg";
import GenerosMC from "../components/musicaContextual/generosMC";
import {
  getActividades,
  getCanciones,
  getClimas,
  getGeneros,
  getMoods,
} from "../API/rule_canciones";
import { Link, useNavigate } from "react-router-dom";
import {
  addCancionesPlaylist,
  addPlaylist,
  getCancionesPlaylist,
} from "../API/rule_playlist";

function MusicaContextual() {
  const [ocasion, setOcasion] = useState([]);
  const [sentimiento, setSentimiento] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [climas, setClimas] = useState([]);
  const [generos, setGeneros] = useState([]);

  const [generoResultados, setGeneroResultados] = useState([]);
  const [actividadResultados, setActividadResultados] = useState([]);
  const [climaResultados, setClimaResultados] = useState([]);
  const [moodsResultados, setMoodsResultados] = useState([]);

  const [userID, setUserID] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const generosResponse = await getGeneros();
        setGeneroResultados(generosResponse);

        const actividadesResponse = await getActividades();
        setActividadResultados(actividadesResponse);

        const climaResponse = await getClimas();
        setClimaResultados(climaResponse);

        const moodsResponse = await getMoods();
        setMoodsResultados(moodsResponse);

        const resultado = await getCanciones();
        setResultados(resultado);
      } catch (error) {
        alert("Error al obtener los datos.");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id"); // Obtiene el ID del usuario
    console.log(token);
    console.log(user_id);
    if (token && user_id) {
      // Actualiza el estado userID con el valor obtenido
      setUserID(user_id);
    }
  }, []);

  const handleSubmit = async () => {
    if (userID) {
      try {
        const cancionesResponse = await getCancionesPlaylist({
          actividad: ocasion,
          estadodeanimo: sentimiento,
          clima: climas,
          genero: generos,
        });

        console.log(cancionesResponse);
        const userid = localStorage.getItem("user_id");
        const usuarioId = { user_id: userid };
        const playlistCreateResponse = await addPlaylist(usuarioId);

        const playlistId = playlistCreateResponse.id_playlist.id_playlist;
        console.log("ID de la playlist creada:", playlistId);

        cancionesResponse.forEach(async (cancion) => {
          const songName = cancion.cancion_name;
          const songsPlaylist = {
            playlistId: playlistId,
            cancionName: songName,
          };
          console.log("Añadiendo canción a la playlist:", songsPlaylist);
          await addCancionesPlaylist(songsPlaylist);
        });
        navigate("/playlistGenerada")
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Debes estar autenticado para crear una playlist");
    }
  };

  return (
    <div className="all-musicacontextual-stats">
      <div className="top-musicacontextual">
        <Link to={"/home"}>
          <img src={backArrow} alt="backArrow" />
        </Link>
        <h4>Música Contextual</h4>
      </div>
      <div className="container-main-musicacontextual">
        <h2>¿Cuál es la ocasión?</h2>
        <select
          name="actividad"
          value={ocasion}
          onChange={(e) => setOcasion(e.target.value)}
        >
          <option value="" hidden>
            Actividad
          </option>
          {actividadResultados?.map((actividades) => (
            <option value={actividades.activity_name}>
              {actividades.activity_name}
            </option>
          ))}
        </select>

        <h2>Cómo te sientes?</h2>
        <select
          name="sentimiento"
          value={sentimiento}
          onChange={(e) => setSentimiento(e.target.value)}
        >
          <option className="gris-option" value="" hidden>
            Estado de Ánimo
          </option>
          {moodsResultados?.map((estadosdeanimo) => (
            <option value={estadosdeanimo.mood_name}>
              {estadosdeanimo.mood_name}
            </option>
          ))}
        </select>
        <h2>¿Cómo está el clima?</h2>

        <select
          name="clima"
          placeholder="Clima"
          required
          value={climas}
          onChange={(e) => setClimas(e.target.value)}
        >
          <option value="" hidden>
            Clima
          </option>
          {climaResultados?.map((climas) => (
            <option value={climas.climates_name}>{climas.climates_name}</option>
          ))}
        </select>

        <div className="container-generos-generate">
          <h2>Selecciona hasta 3 géneros:</h2>

          {generoResultados?.map((generos) => (
            <GenerosMC
              generoName={generos.genre_name}
              value={generos}
              onClick={(e) => setGeneros(e.target.value)}
            />
          ))}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="crear-playlist-musicaContextual"
        >
          <p>Crear Playlist</p>
        </button>
      </div>
    </div>
  );
}

export default MusicaContextual;
