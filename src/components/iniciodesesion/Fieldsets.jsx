import React from 'react'
import { useState } from 'react';
import "../../styles/InicioDeSesion/FieldSets.css"
import eyeClosed from "../../../public/images/InicioDeSesión/state=closed.svg";
import eyeOpen from "../../../public/images/InicioDeSesión/state=open.svg";

function FieldsetEmailUser(props) {
  return (
    <div className="fieldset-container-custom">
        <label htmlFor="">Nombre de Usuario o E-mail:</label>
        <input className="input-user" type="text" value={props.value} onChange={props.onChange}/>
        {props.children}
        {props.errorInput && (
            <span style={{ color: "#EA0F0F" }}>Este campo es obligatorio.</span>
          )}
    </div>

  )
}

function FieldSetPassword(props) {
    const [showPassword, setShowPassword] = useState(false);

    const passwordVisibility = () => {
        setShowPassword(!showPassword);
      };
      
    return (
        <div className="fieldset-container-custom">
            <label htmlFor="">{props.labelPasswordLi}</label>
            <div className="password-input-login-container">
                <input className={props.classNameInput} type={showPassword ? "text" : "password"} requiered="" value={props.valuePsw} onChange={props.onChangePsw} />
                <img className="eye-icon" src={showPassword ? eyeOpen : eyeClosed} alt="Mostrar contraseña" onClick={passwordVisibility} />
            </div>
            {props.errorPassword && 
            <span style={{ color: "#EA0F0F" }}>
              Debe contener al menos 8 caracteres. 
            </span>
          }
          
        </div>
    )
}

export {FieldsetEmailUser, FieldSetPassword}
