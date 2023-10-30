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
import { Link } from "react-router-dom";

function MusicaContextual() {
  const [ocasion, setOcasion] = useState([]);
  const [sentimiento, setSentimiento] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [clima, setClima] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [generoResultados, setGeneroResultados] = useState([]);
  const [actividadResultados, setActividadResultados] = useState([]);
  const [climaResultados, setClimaResultados] = useState([]);
  const [moodsResultados, setMoodsResultados] = useState([]);

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
          onClick={(e) => setOcasion(e.target.value)}
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
          value={clima}
          onChange={(e) => setClima(e.target.value)}
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
              onChange={(e) => setGeneros(e.target.value)}
            />
          ))}
        </div>
        <button className="crear-playlist-musicaContextual">
          <p>Crear Playlist</p>
        </button>
      </div>
    </div>
  );
}

export default MusicaContextual;
