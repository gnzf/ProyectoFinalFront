import React, { useState, useEffect } from "react";
import "./generosMC.css";

function GenerosMC({onGeneroSeleccion, generoName, value}) {
  const [currentClass, setCurrentClass] = useState("cuadradoBlanco");

  function cambiarColor() {
    if (currentClass === "cuadradoBlanco") {
      setCurrentClass("cuadradoNegro");
    } else {
      setCurrentClass("cuadradoBlanco");
    }
  }
  const handleOptionGenero = () => {
    cambiarColor();
    onGeneroSeleccion(generoName)
  }

  return (
    <div>
      <div className="container-generosmc">
        <option value={value}  className={currentClass} onClick={handleOptionGenero}>
          {generoName}
        </option>
      </div>
    </div>
  );
}

export default GenerosMC;
