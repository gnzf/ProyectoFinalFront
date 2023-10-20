import React, {useState} from 'react'
import "../styles/musicaContextual/musicaContextual.css"
import backArrow from "../../public/images/home/leftarrowback.svg"
import GenerosMC from '../components/musicaContextual/generosMC';
import Select from '../components/Select';

function MusicaContextual() {
    const [ocasion, setOcasion] = useState('');
    const [sentimiento, setSentimiento] = useState('');
    const [clima, setClima] = useState('');


  return (
    <div className='all-musicacontextual-stats'>
        <div className='top-musicacontextual'>
            <img src={backArrow} alt='backArrow'/>
            <h4>Música Contextual</h4>
        </div>
        <div className='container-main-musicacontextual'>
            <div>
                <h2>¿Cuál es la ocasión?</h2>
                <Select 
                name="ocasion" 
                placeholder="Actividad" 
                required 
                value={ocasion}
                onClick={(e) =>setOcasion(e.option.value)}
                >
                     <option value="item 1">Item 1</option>
                     <option value="item 2">Item 2</option>
                     <option value="item 3">Item 3</option>
                </Select>
            </div>
            <div>
                <h2>Cómo te sientes?</h2>
                <Select 
                name="sentimiento" 
                placeholder="Estado de Ánimo" 
                required
                value={sentimiento}
                onChange={(e) => setSentimiento(e.target.value)}
                >
                     <option value="item 1">Item 1</option>
                     <option value="item 2">Item 2</option>
                     <option value="item 3">Item 3</option>
                </Select>
            </div>
            <div>
                <h2>¿Cómo está el clima?</h2>
                <Select 
                name="clima" 
                placeholder="Clima" 
                required
                value={clima}
                onChange={(e) => setClima(e.target.value)}
                >
                     <option value="item 1">Item 1</option>
                     <option value="item 2">Item 2</option>
                     <option value="item 3">Item 3</option>
                </Select>
            
            </div>
            <h2>Selecciona hasta 3 géneros:</h2>
            <div>
                <div><GenerosMC/></div>
            </div>
            <div className='crear-playlist-musicaContextual'>
                <p>Crear Playlist</p>
            </div>
        </div>
    
    
    </div>
  )
}

export default MusicaContextual;