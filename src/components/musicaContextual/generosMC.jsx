import React from 'react'
import "./generosMC.css"

function GenerosMC(props) {

    

  return (
    <div>
        <div className='container-generosmc'>
            <button>{props.generoName}</button>
        </div>
    </div>
  )
}

export default GenerosMC;