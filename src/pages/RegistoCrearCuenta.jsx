import React, {useState} from "react";
import Encabezado from "../components/registro/first page/Encabezado";
import "../styles/registro/second page/RegistroCrearCuenta.css";
import ButtonContinuar from "../components/registro/first page/ButtonContinuar";
import { registrarUsuario } from "../API/rule_auth";
import { useNavigate } from 'react-router-dom';

function RegistoCrearCuenta() {
  const userEmail = localStorage.getItem("email");
  const [inputPassword, setInputPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputPassword.length > 8) {
      await registrarUsuario({ email: userEmail, password: inputPassword , username: inputUsername})
        .then((resultado) => {
          alert(resultado.mensaje);
          navigate("/home", { replace: true });
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Las credenciales no son correctas"); //esto se manda a un servidor para corroborar las credenciales
    }
}
  

  return (
    <>
      <form onSubmit={handleSubmit} className="registro-crear-cuenta-container">
        <Encabezado encabezado="Crear Cuenta" />
        <div className="titulo">Ingrese un nombre de usuario y contraseña</div>
        <label className="nombre-de-usuario"> Nombre de Usuario:</label>
        <input className="input-general" type="text" value={inputUsername} onChange={(event) =>{ setInputUsername(event.target.value)}}/>
        <label className="password-label" type="password">
          Contraseña:
        </label>
        <div className="password-container">
          <input type="password" value={inputPassword} onChange={(event) =>{ setInputPassword(event.target.value)}} className="password-input" />
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
      </form>
    </>
  );
}

export default RegistoCrearCuenta;
