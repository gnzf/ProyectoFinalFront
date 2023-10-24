import React from "react";
import { useState, useEffect } from "react";
import search from "../../../public/images/Buscador/style=outline, state=inactive.svg";
import leftArrow from "../../../public/images/Buscador/position=left.svg";
import borrar from "../../../public/images/Buscador/icon-right-placeholder.svg";
import "../../styles/Buscador/Buscador.css";
import "../../styles/Buscador/Searchbar.css"
function SearchBar({
  onClickInput,
  isClicked,
  onArrowClicked,
  arrowClicked,
  setArrowClicked,
  onSearch
}) {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [arrowChanged, setArrowChanged] = useState(false);
  const [letra, setLetra] = useState("")
  
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value)
  };

  const handleInputClick = () => {
    onClickInput();
    if (!arrowChanged) {
      setIsArrowVisible(!isArrowVisible);
      setArrowChanged(true);
      onClickInput(letra);
      /*       setArrowClicked(true); */
    }
  };

  const handleClearSearch = (event) => {
    setSearchTerm("");
  };

  return (
    <div
      className={`searchbar ${isClicked ? "animate-up" : ""} ${
        arrowClicked ? "animate-up-reverse" : ""
      }`}
    >
      {/*  <img className={`imgBuscador lupaImg ${isArrowVisible ? 'animate-up' : ''}`} src={isClicked ? leftArrow : search }/> */}

      {!isArrowVisible ? (
        <img
          className={`imgBuscador lupaImg ${isClicked ? "animate-up" : ""} ${
            arrowClicked ? "animate-up-reverse" : ""
          }`}
          src={search}
        />
      ) : (
        <img
          className={`imgBuscador leftArrowImg ${
            isArrowVisible ? "animate-up" : ""
          } ${arrowClicked ? "animate-up-reverse" : ""}`}
          src={leftArrow}
          onClick={onArrowClicked}
        />
      )}
      <input
        type="text"
        value={searchTerm}
        value={letra}
        placeholder="¿Qué deseas escuchar?"
        onChange={handleSearch}
        onClick={handleInputClick}
      />
      {searchTerm.length > 0 && (
        <img
          className="cruz-borrar-buscador"
          src={borrar}
          onClick={handleClearSearch}
          alt="cruz-borrar"
        />
      )}
        onChange={(e) => setLetra(e.target.value)}
      /> 

      {/*   <img src="" alt="cruz-borrar" /> */}
    </div>
  );
}

export default SearchBar;
