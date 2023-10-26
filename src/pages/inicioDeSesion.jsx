import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InicioDeSesion/InicioDeSesion.css";
import TitleArrow from "../components/InicioDeSesion/TitleArrow";
import {
  FieldsetEmailUser,
  FieldSetPassword,
} from "../components/InicioDeSesion/Fieldsets";
import Button from "../components/InicioDeSesion/Button";
import {loginUsuario} from "../API/rule_auth"

function InicioDeSesion() {
  const [inputValue, setInputValue] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorInput, setErrorInput] = useState(false);
  const [bothFieldsFilled, setBothFieldsFilled] = useState(false);

  const [spinnerImage, setSpinnerImage] = useState("../../public/images/InicioDeSesión/step=1.svg");
  const [spinnerClass, setSpinnerClass] = useState([
    "spinner-custom",
    "spinner1",
  ]);
  const [showSpinner, setShowSpinner] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false);

  const spinnerImages = [
    {
      src: "../../public/images/InicioDeSesión/step=1.svg",
      className: "spinner-custom spinner1",
    },
    {
      src: "../../public/images/InicioDeSesión/step=2.svg",
      className: "spinner-custom spinner2",
    },
    {
      src: "../../public/images/InicioDeSesión/step=3.svg",
      className: "spinner-custom spinner3",
    },
    {
      src: "../../public/images/InicioDeSesión/step=4.svg",
      className: "spinner-custom spinner4",
    },
  ];

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);

    /* if (/^\S+@\S+\.\S+$/.test(event.target.value)) {
      setEmail(inputValue);
      setUserName("");
    } else {
      setUserName(inputValue);
      setEmail("");
    } */
    if (event.target.value.length === 0){
      setErrorInput(true);
    } else {
      setErrorInput(false);
    }
    handleFieldsFilled();
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    handleFieldsFilled();
  };

  const handleFieldsFilled = () => {
    if (inputValue.length > 0 && password.length > 0) {
      setBothFieldsFilled(true);
    }
  };

  const handleClickRecuperarCuenta = () => {
    navigate("/recuperar-cuenta");
  };

  const handleChangeSpinnerImage = () => {
    setShowSpinner(true);
    setShowOverlay(true);

    setTimeout(() => {
      const currentIndex = spinnerImages.findIndex(
        (spinner) => spinner.src === spinnerImage
      );

      const nextIndex = (currentIndex + 1) % spinnerImages.length;

      setSpinnerImage(spinnerImages[nextIndex].src);
      setSpinnerClass(spinnerImages[nextIndex].className);
      setTimeout(() => {
        setShowSpinner(false);
      }, 1000);
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { identifier: inputValue, password: password };
    if (!errorInput && !errorPassword) {
      await loginUsuario(user)
        .then((resultado) => {
          alert(resultado.mensaje);
          navigate("/home", { replace: true });
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Las credenciales no son correctas");
    }
  };

  return (
    <div className="login-container">
      {showOverlay && <div className="overlay-custom" />}
      <form className="form-login-wrapper" onSubmit={handleSubmit}>
        <TitleArrow title="Iniciar Sesión" />
        <FieldsetEmailUser value={inputValue} onChange={handleChangeInput} errorInput={errorInput} />
        <FieldSetPassword
          labelPasswordLi="Contraseña: "
          classNameInput={errorPassword ? "error" : ""}
          valuePsw={password}
          onChangePsw={handleChangePassword}
          errorPassword={errorPassword}
        />
        <Button
          classNameBtn="btn-login"
          fieldsFilled={bothFieldsFilled}
          onClick={handleChangeSpinnerImage}
          btnLabel="Iniciar Sesión"
        />
        {showSpinner && (
          <div className="spinner-container">
            <img
              src={spinnerImage}
              alt="spinner"
              className={`spinner-login ${spinnerClass}`}
            />
          </div>
        )}
        <p onClick={handleClickRecuperarCuenta}>¿Olvidaste tu contraseña?</p>
      </form>
    </div>
  );
}

export default InicioDeSesion;
