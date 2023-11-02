import React, {useState} from "react";
import Encabezado from "../components/registro/first page/Encabezado";
import InputGeneral from "../components/registro/first page/InputGeneral";
import "../styles/registro/first page/Registro.css";
import ButtonContinuar from "../components/registro/first page/ButtonContinuar";
import { useNavigate } from 'react-router-dom'



function Registro() {
  const [email , setEmail] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

   
    
    if( email !== ""){
      localStorage.setItem("email", email)
        navigate("/create-account");
      
      }else {
        alert("Debe ingresar un email correcto")
          
        }
  }

  const isButtonOrange = email.length > 0 ;


  return (
    <div className="registro-container">
      <form onSubmit={handleSubmit}>
        <Encabezado link={"/"} encabezado="Crear Cuenta" />
        <div className="titulo">¿Cuál es tu correo electrónico?</div>
        <label className="correo-electronico"> Corre electrónico:</label>
        <InputGeneral value={email} onChange={(event) =>{ setEmail(event.target.value)}}/>
        <div className="aclaracion"> Deberás poder confirmarlo luego.</div>
        <ButtonContinuar additionalClass={isButtonOrange ? "orange-button" : ""}></ButtonContinuar>
      </form>
    </div>
  );
}

export default Registro;
