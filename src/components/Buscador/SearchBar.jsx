import React from "react";
import { useState } from "react";
import search from "../../../public/images/Buscador/style=outline, state=inactive.svg";
import leftArrow from "../../../public/images/Buscador/position=left.svg";
import borrar from "../../../public/images/Buscador/icon-right-placeholder.svg";
import "../../styles/Buscador/Buscador.css";
import "../../styles/Buscador/Searchbar.css";

function SearchBar({
  onClickInput,
  isClicked,
  onArrowClicked,
  onSearch,
  isArrow,
  resetCanciones,
  resetArtistas,
  classNameBuscador,
  classNameSearcher,
}) {

  const [searchMusic, setsearchMusic] = useState("");

  const handleSearch = (event) => {
    setsearchMusic(event.target.value);
    onSearch(event.target.value);
  };

  const handleInputClick = () => {
    onClickInput();
  };

  const handleLeftArrow = () => {
    onArrowClicked();
  }

  const handleClearSearch = () => {
    setsearchMusic("");
    resetCanciones([]);
    resetArtistas([]);
  };

  return (
    <div className={`searchbar ${classNameBuscador} ${classNameSearcher}`}>
      {isArrow ? (
        <img
          className={`imgBuscador leftArrowImg `}
          src={leftArrow}
          onClick={handleLeftArrow}
        />
      ) : (
        <img
          className={`imgBuscador lupaImg ${isClicked ? "animate-up" : ""}`}
          src={search}
        />
      )}

      <input
        type="text"
        value={searchMusic}
        placeholder="¿Qué deseas escuchar?"
        onChange={handleSearch}
        onClick={handleInputClick}
      />
      {searchMusic.length > 0 && (
        <img
          className="cruz-borrar-buscador"
          src={borrar}
          onClick={handleClearSearch}
          alt="cruz-borrar"
        />
      )}
    </div>
  );
}

export default SearchBar;
