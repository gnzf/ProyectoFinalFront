import React, { useState, useEffect } from "react";
import "./generosMC.css";

function GenerosMC(props) {
  const [currentClass, setCurrentClass] = useState("cuadradoBlanco");

  function cambiarColor() {
    if (currentClass === "cuadradoBlanco") {
      setCurrentClass("cuadradoNegro");
    } else {
      setCurrentClass("cuadradoBlanco");
    }
  }
  return (
    <div>
      <div className="container-generosmc">
        <option value={props.value} onChange={props.onChange} className={currentClass} onClick={cambiarColor}>
          {props.generoName}
        </option>
      </div>
    </div>
  );
}

export default GenerosMC;
