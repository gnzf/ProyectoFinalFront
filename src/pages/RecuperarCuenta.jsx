import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/inicioDeSesion/RecuperarCuenta.css";
import planeSendReset from "../../public/images/InicioDeSesión/paper-plane.svg";
import TitleArrow from "../components/iniciodesesion/TitleArrow";
import {FieldsetEmailUser} from "../components/iniciodesesion/Fieldsets";
import Button from "../components/iniciodesesion/Button";
import { Link } from "react-router-dom";

function RecuperarCuenta() {
  const [accountReset, setAccountReset] = useState("");
  const [fieldFilled, setFieldFilled] = useState(false);
  const [errorInput, setErrorInput] = useState(false);

  const [spinnerImage, setSpinnerImage] = useState("/images/InicioDeSesión/step=1.svg");
  const [spinnerClass, setSpinnerClass] = useState([
    "spinner-custom",
    "spinner1",
  ]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  const spinnerImages = [
    { src: "/images/InicioDeSesión/step=1.svg", className: "spinner-custom spinner1" },
    { src: "/images/InicioDeSesión/step=3.svg", className: "spinner-custom spinner2" },
    { src: "/images/InicioDeSesión/step=2.svg", className: "spinner-custom spinner3" },
    { src: "/images/InicioDeSesión/step=4.svg", className: "spinner-custom spinner4" },
  ];

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setAccountReset(event.target.value);
    if(event.target.value === "") {
      setErrorInput(true)
    } else {
      setErrorInput(false)
    }
    handleFieldsFilled();
  };

  const handleClickBackLogIn = (event) => {
    navigate("/login");
  };

  const handleFieldsFilled = () => {
    if (accountReset.length > 0) {
      setFieldFilled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorInput) {
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
          setShowPopUp(true);
        }, 1000);
      }, 2000);
    }
  };
  return (
    <div className="form-reset-account-container">
      {showOverlay && <div className="overlay-custom" />}
      <form className="form-reset-wrapper">
        <TitleArrow link={"/login"} onClick={handleClickBackLogIn} title="Recuperar Cuenta" />
        <FieldsetEmailUser value={accountReset} onChange={handleChangeInput} errorInput={errorInput}>
          <span className="recuperar-cuenta">
            Deberás poder ingresar al e-mail de la cuenta para poder
            recuperarla.
          </span>
        </FieldsetEmailUser>
        <Button
          className="btn-reset-account"
          type="submit"
          fieldsFilled={fieldFilled}
          onClick={handleSubmit}
          btnLabel="Continuar"
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
        {showPopup && (
          <div className="popup">
            <p>
              Te enviamos mensaje a <span>@{accountReset }</span> con un
              link verificador.
            </p>
            <img className="poopup-reset" src={planeSendReset} alt="" />
            <p>
              Para recuperar tu cuenta debes ingresar al mismo y luego seguir
              las instrucciones.
            </p>
         <Link to={"/"}><button>Entendido</button></Link>
          </div>
      
        )}
      </form>
    </div>
  );
}

export default RecuperarCuenta;
