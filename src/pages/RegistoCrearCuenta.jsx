import React, {useState} from "react";
import Encabezado from "../components/registro/first page/Encabezado";
import "../styles/registro/second page/RegistroCrearCuenta.css";
import ButtonContinuar from "../components/registro/first page/ButtonContinuar";
import { registrarUsuario } from "../API/rule_auth";
import { useNavigate } from 'react-router-dom';
import eyeClosed from "../../public/images/registro/state=closed.svg";
import eyeOpen from "../../public/images/registro/state=open.svg";

function RegistoCrearCuenta() {
  const userEmail = localStorage.getItem("email");
  const [inputPassword, setInputPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isButtonOrange = inputUsername.length > 0 && inputPassword.length >= 8 && checkboxChecked;

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputPassword.length > 8 && isButtonOrange) {
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
        <Encabezado link={"/register"} encabezado="Crear Cuenta" />
        <div className="titulo">Ingrese un nombre de usuario y contraseña</div>
        <label className="nombre-de-usuario"> Nombre de Usuario:</label>
        <input className="input-general" type="text" value={inputUsername} onChange={(event) =>{ setInputUsername(event.target.value)}}/>
        <label className="password-label" type="password">
          Contraseña:
        </label>
        <div className="password-container">
          <input type={showPassword ? "text" : "password"} value={inputPassword} onChange={(event) =>{ setInputPassword(event.target.value)}} className="password-input" />
            <img
              alt="eye"
              className="closed-eye"
              src={showPassword ? eyeOpen : eyeClosed} onClick={passwordVisibility}
            />
        </div>
        <div className="aclaracion">Deberá contener al menos 8 caracteres.</div>
        <div className="terminosycondiciones-container">
          <input type="checkbox" className="checkbox" onChange={(event) => {
              setCheckboxChecked(event.target.checked);
            }}/>
          <p className="terminosycondiciones">
            He leído y acepto <span className="orange-text"> Términos</span>y
            <span className="orange-text"> Condiciones</span>.
          </p>
        </div>
        <ButtonContinuar additionalClass={isButtonOrange ? "orange-button" : ""}></ButtonContinuar>
      </form>
    </>
  );
}

export default RegistoCrearCuenta;
