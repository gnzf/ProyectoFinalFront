import React from "react";
import Encabezado from "../components/registro/first page/Encabezado";
import "../styles/registro/second page/RegistroCrearCuenta.css";
import ButtonContinuar from "../components/registro/first page/ButtonContinuar";
import InputGeneral from "../components/registro/first page/InputGeneral";

function RegistoCrearCuenta() {
  return (
    <>
      <div className="registro-crear-cuenta-container">
        <Encabezado encabezado="Crear Cuenta" />
        <div className="titulo">Ingrese un nombre de usuario y contraseña</div>
        <label className="nombre-de-usuario"> Nombre de Usuario:</label>
        <InputGeneral />
        <label className="password-label" type="password">
          Contraseña:
        </label>
        <div className="password-container">
          <input type="password" className="password-input" />
          <button>
            <img
              src="/images/registro/state=closed.svg"
              alt="eye"
              className="closed-eye"
            />
          </button>
        </div>
        <div className="aclaracion">Deberá contener al menos 8 caracteres.</div>
        <div className="terminosycondiciones-container">
          <input type="checkbox" className="checkbox" />
          <p className="terminosycondiciones">
            He leído y acepto <span className="orange-text"> Términos</span>y
            <span className="orange-text"> Condiciones</span>.
          </p>
        </div>
        <ButtonContinuar></ButtonContinuar>
      </div>
    </>
  );
}

export default RegistoCrearCuenta;
