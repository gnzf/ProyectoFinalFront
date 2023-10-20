import React from 'react'
import "./reproducir.css"


function Reproducir(props) {
  return (
    <div className='reproducir-playlistgenerada'>
        <img src={props.imagen1}/>
        <h3>Crear Copia</h3>
        <img src={props.imagen2}/>
        <img src={props.imagen3}/>
    </div>
  )
}

export default Reproducir;