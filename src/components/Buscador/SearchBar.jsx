import React from "react";
import { useState } from "react";
import search from "../../../public/images/Buscador/style=outline, state=inactive.svg";
import leftArrow from "../../../public/images/Buscador/position=left.svg";
import "../../styles/Buscador/Buscador.css";

function SearchBar({ onClickInput, isClicked }) {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [letra, setLetra] = useState("")
  const handleInputClick = () => {
    onClickInput(letra);
    setIsArrowVisible(!isArrowVisible);
  };

  return (
    <div className={`searchbar ${isClicked ? "animate-up" : ""}`}>
      {/*  <img className={`imgBuscador lupaImg ${isArrowVisible ? 'animate-up' : ''}`} src={isClicked ? leftArrow : search }/> */}

      {!isArrowVisible ? (
        <img
          className={`imgBuscador lupaImg ${isClicked ? "animate-up" : ""}`}
          src={search}
        />
      ) : (
        <img
          className={`imgBuscador leftArrowImg ${
            isArrowVisible ? "animate-up" : ""
          }`}
          src={leftArrow}
        />
      )}
      <input
        type="text"
        value={letra}
        placeholder="¿Qué deseas escuchar?"
        onClick={handleInputClick}
        onChange={(e) => setLetra(e.target.value)}
      /> 

      {/*   <img src="" alt="cruz-borrar" /> */}
    </div>
  );
}

export default SearchBar;