import React from "react";
import Encabezado from "../components/registro/first page/Encabezado";
import InputGeneral from "../components/registro/first page/InputGeneral";
import "../styles/registro/first page/Registro.css";
import ButtonContinuar from "../components/registro/first page/ButtonContinuar";

function Registro() {
  return (
    <>
      <div className="registro-container">
        <Encabezado encabezado="Crear Cuenta" />
        <div className="titulo">¿Cuál es tu correo electrónico?</div>
        <label className="correo-electronico"> Corre electrónico:</label>
        <InputGeneral />
        <div className="aclaracion"> Deberás poder confirmarlo luego.</div>
        <ButtonContinuar></ButtonContinuar>
      </div>
    </>
  );
}

export default Registro;
