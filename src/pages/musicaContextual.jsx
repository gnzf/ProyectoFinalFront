import React, { useState, useEffect } from "react";
import "../styles/musicaContextual/musicaContextual.css";
import backArrow from "../../public/images/home/leftarrowback.svg";
import GenerosMC from "../components/musicaContextual/generosMC";
import {
  getActividades,
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
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [ocasion, setOcasion] = useState([]);
  const [sentimiento, setSentimiento] = useState([]);
  const [climas, setClimas] = useState([]);

  const [generosSeleccionados, setGenerosSeleccionados] = useState([]);
  const [generoResultados, setGeneroResultados] = useState([]);
  const [actividadResultados, setActividadResultados] = useState([]);
  const [climaResultados, setClimaResultados] = useState([]);
  const [moodsResultados, setMoodsResultados] = useState([]);
  const [cancionesResponse, setCancionesResponse] = useState([]);
  const [userID, setUserID] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    setShowOverlay(true);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
    setShowOverlay(false); 
  };

  const [stepsPopup, setStepsPopup] = useState(0);

  
  const stepsImages = [
    "/images/MusicaContextual/step=1 (1).svg",
    "/images/MusicaContextual/step=2 (1).svg",
    "/images/MusicaContextual/step=3 (1).svg",
    "/images/MusicaContextual/step=4 (1).svg",
    "/images/MusicaContextual/step=5.svg",
    "/images/MusicaContextual/step=6.svg",
    "/images/MusicaContextual/step=step7.svg",
    "/images/MusicaContextual/step=8.svg",
    "/images/MusicaContextual/step=9.svg",
  ];
  

useEffect(() => {
  const interval = setInterval(() => {
      setStepsPopup((prevIndex) => (prevIndex + 1) % stepsImages.length);
  }, 1000);

  return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  };
}, []);

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
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id"); 
    if (token && user_id) {
      setUserID(user_id);
    }
  }, []);

  const handleGeneroSelection = (generoName) => {
    // Verifica si el género ya está seleccionado
    if (generosSeleccionados.includes(generoName)) {
      // Si ya está seleccionado, lo deselecciona
      setGenerosSeleccionados(
        generosSeleccionados.filter((genero) => genero !== generoName)
      );
    } else {
      // Si no está seleccionado, lo agrega a la lista de géneros seleccionados
      setGenerosSeleccionados([...generosSeleccionados, generoName]);
    }
  };

  const handleSubmit = async () => {
    if (userID) {
      try {
        const valoresSeleccionados = {
          actividad: ocasion,
          estadodeanimo: sentimiento,
          clima: climas,
          genero: generosSeleccionados,
        };

        try {
          const resultadoFilter = await getCancionesPlaylist(
            valoresSeleccionados
          );
          localStorage.setItem(
            "cancionesFiltradas",
            JSON.stringify(resultadoFilter)
          );
          setCancionesResponse(resultadoFilter);
        } catch (error) {
          alert(error);
        }

        const userid = localStorage.getItem("user_id");
        const usuarioId = { user_id: userid };
        const playlistCreateResponse = await addPlaylist(usuarioId);

        const playlistId = playlistCreateResponse.id_playlist.id_playlist;

        const resultadoFilter = await getCancionesPlaylist(
          valoresSeleccionados
        );
        resultadoFilter.forEach(async (cancion) => {
          const songName = cancion.cancion_name;
          const songsPlaylist = {
            playlistId: playlistId,
            cancionName: songName,
          };
          await addCancionesPlaylist(songsPlaylist);
        });

        navigate("/playlistGenerada");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Debes estar autenticado para crear una playlist");
    }
  };

  const handleMatchConfirm = () => {
    return (
      ocasion.length > 0 &&
      sentimiento.length > 0 &&
      climas.length > 0 &&
      generosSeleccionados.length >= 1 &&
      generosSeleccionados.length <= 3
    );
  };

  return (
    <div className="all-musicacontextual-stats">
      {showOverlay && <div className="overlay-custom" />}
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
              onGeneroSeleccion={handleGeneroSelection}
            />
          ))}
        </div>

        {showPopup && (
          <div className="popup">
            <p>Música Contextual</p>
            <img src={stepsImages[stepsPopup]} alt="" />
            <p>
              Llena los campos y crearemos una playlist en base a
              tus respuestas.
            </p>
            <button onClick={handlePopupClose}>Entendido</button>
            <span>No volver a mostrar</span>
          </div>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          className={`crear-playlist-musicaContextual ${
            handleMatchConfirm()
              ? "enabled-buttonMatch"
              : "disabled-buttonMatch"
          }`}
          disabled={!handleMatchConfirm()}
        >
          <p>Crear Playlist</p>
        </button>
      </div>
    </div>
  );
}

export default MusicaContextual;
