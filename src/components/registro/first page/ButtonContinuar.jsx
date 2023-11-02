import React from "react";
import "../../../styles/registro/first page/ButtonContinuar.css";
function ButtonContinuar({ additionalClass }) {
  return (
    <div className="continuar">
      <button className={`button-continuar ${additionalClass}`} type="submit">Continuar</button>
    </div>
  );
}

export default ButtonContinuar;
