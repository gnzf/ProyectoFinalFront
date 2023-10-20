import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InicioDeSesion/RecuperarCuenta.css";
import planeSendReset from "../../public/images/Inicio De Sesión/paper-plane.svg";
import TitleArrow from "../components/iniciodesesion/TitleArrow";
import {FieldsetEmailUser} from "../components/iniciodesesion/Fieldsets";
import Button from "../components/iniciodesesion/Button";

function RecuperarCuenta() {
  const [accountReset, setAccountReset] = useState("");
  const [errorAccountReset, setErrorAccountReset] = useState(false);
  const [fieldFilled, setFieldFilled] = useState(false);

  const [spinnerImage, setSpinnerImage] = useState("/icons/step=1.svg");
  const [spinnerClass, setSpinnerClass] = useState([
    "spinner-custom",
    "spinner1",
  ]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  const spinnerImages = [
    { src: "/icons/step=1.svg", className: "spinner-custom spinner1" },
    { src: "/icons/step=3.svg", className: "spinner-custom spinner2" },
    { src: "/icons/step=2.svg", className: "spinner-custom spinner3" },
    { src: "/icons/step=4.svg", className: "spinner-custom spinner4" },
  ];

  const handleChangeSpinnerImage = (event) => {
    event.preventDefault();
    setShowSpinner(true);
    setShowOverlay(true);

    setTimeout(() => {
      const currentIndex = spinnerImages.findIndex(
        (spinner) => spinner.src === spinnerImage
      );

      const nextIndex = (currentIndex + 1) % spinnerImages.length;

      setSpinnerImage(spinnerImages[nextIndex].src);
      setSpinnerClass(spinnerImage[nextIndex].className);
      setTimeout(() => {
        setShowSpinner(false);
        setShowPopUp(true);
      }, 1000);
    }, 2000);
  };

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setAccountReset(event.target.value);
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

  return (
    <div className="form-reset-account-container">
      {showOverlay && <div className="overlay-custom" />}
      <form className="form-reset-wrapper">
        <TitleArrow onClick={handleClickBackLogIn} title="Recuperar Cuenta" />
        <FieldsetEmailUser value={accountReset} onChange={handleChangeInput}>
          <span className="recuperar-cuenta">
            Deberás poder ingresar al e-mail de la cuenta para poder
            recuperarla.
          </span>
        </FieldsetEmailUser>

        {errorAccountReset && (
          <span style={{ color: "red" }}>Campo requerido</span>
        )}
        <Button
          className="btn-reset-account "
          fieldsFilled={fieldFilled}
          onClick={handleChangeSpinnerImage}
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
              Te enviamos mensaje a <span>mara.perez@gmail.com </span>con un
              link verificador.
            </p>
            <img src={planeSendReset} alt="" />
            <p>
              Para recuperar tu cuenta debes ingresar al mismo y luego seguir
              las instrucciones.
            </p>
            <button>Entendido</button>
          </div>
      
        )}
      </form>
    </div>
  );
}

export default RecuperarCuenta;
