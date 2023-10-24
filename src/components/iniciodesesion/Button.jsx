import React from 'react'
import "../../styles/InicioDeSesion/Button.css"

function Button(props) {
  return (
    <button className={`btn-custom btn-login ${props.fieldsFilled ? "filled" : ""}`} type="submit" disabled={!props.bothFieldsFilled}>
        {props.btnLabel}
    </button>
  )
}

export default Button