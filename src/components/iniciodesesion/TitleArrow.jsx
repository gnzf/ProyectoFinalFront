import React from "react";
import leftArrow from "../../../public/images/Inicio De Sesión/position=left.svg"
import "../../styles/InicioDeSesion/TitleArrow.css"

function TitleArrow(props) {
  return (
    <div className="title-arrow-container">
      <div className="title-arrow-wrapper">
        <img onClick={props.handleClickBackLogin} className="left-arrow-custom" src={leftArrow} alt="left-arrow" />
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default TitleArrow;
