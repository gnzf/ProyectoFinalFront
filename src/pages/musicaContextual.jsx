import React, {useState, useEffect} from 'react'
import "../styles/musicaContextual/musicaContextual.css"
import backArrow from "../../public/images/home/leftarrowback.svg"
import GenerosMC from '../components/musicaContextual/generosMC';
import { getActividades, getCanciones, getClimas, getGeneros, getMoods } from "../API/rule_canciones";
import { Link } from 'react-router-dom';

function MusicaContextual() {
    const [ocasion, setOcasion] = useState('');
    const [sentimiento, setSentimiento] = useState('');
    const [resultados, setResultados] = useState([]);
    const [clima, setClima] = useState('');
    const [letra, setLetra] = useState("");
    const [generos, setGeneros] = useState([]);
    
    



    useEffect(() => {
        const fetchData = async () => {
          try {
            
           /*  const fetchGeneros = getGeneros();
            const fetchActividades = getActividades();
            const fetchClimas = getClimas();
            const fetchMoods = getMoods();
            const generosResponse = await fetchGeneros;
            const actividadesResponse = await fetchActividades;
            const climasResponse = await fetchClimas;
            const moodsResponse = await fetchMoods; */
            
            const resultado = await getGeneros();
            setResultados(resultado);
          } catch (error) {
            alert("Error al obtener los datos.");
          }
        };
    
        fetchData();
      }, []);

      const filteredResultados = resultados.filter((generos) =>
        generos.genre_name.toLowerCase().includes(letra.toLowerCase())
  );


  return (
    <div className='all-musicacontextual-stats'>
       <div className='top-musicacontextual'>
       <Link to={"/home"}><img src={backArrow} alt='backArrow'/></Link>
            <h4>Música Contextual</h4>
        </div>
        <div className='container-main-musicacontextual'>
                <h2>¿Cuál es la ocasión?</h2>
                <select 
                name="sentimiento" 
                value={ocasion}
                onChange={(e) => setOcasion(e.target.value)}>
                     <option value="" disabled selected hidden>Ejercicio Fisico</option>
                     <option value="item 1" >Item 1</option>
                     <option value="item 2">Item 2</option>
                     <option value="item 3">Item 3</option>
                </select>
                <h2>Cómo te sientes?</h2>
                <select 
                name="sentimiento" 
                value={sentimiento}
                onChange={(e) => setSentimiento(e.target.value)}
                >
                     <option className='gris-option' value="" disabled selected hidden>Estado de animo</option>
                     <option value="item 1">Item 1</option>
                </select>
                <h2>¿Cómo está el clima?</h2>
                <select 
                name="clima" 
                placeholder="Clima" 
                required
                value={clima}
                onChange={(e) => setClima(e.target.value)}
                >
                     <option value="" disabled selected hidden>Clima</option>
                     <option value="item 1">Item 1</option>
                     <option value="item 2">Item 2</option>
                     <option value="item 3">Item 3</option>
                </select>
  
            <div className='container-generos-generate'>
            <h2>Selecciona hasta 3 géneros:</h2>
                {filteredResultados.map((generos) => (
                  <GenerosMC
                    generoName={generos.genre_name}
                  />
                ))}
            </div>
            <button className='crear-playlist-musicaContextual'>
                <p>Crear Playlist</p>
            </button>
        </div>
    
    
    </div>
  )
}

export default MusicaContextual;