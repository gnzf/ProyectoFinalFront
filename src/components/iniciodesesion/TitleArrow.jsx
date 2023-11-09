import React from "react";
import leftArrow from "../../../public/images/InicioDeSesión/position=left.svg"
import "../../styles/inicioDeSesion/TitleArrow.css"
import { Link } from "react-router-dom";

function TitleArrow(props) {
  return (
    <div className="title-arrow-container">
      <div className="title-arrow-wrapper">
      <Link to={props.link}><img  onClick={props.handleClickBackLogin} className="left-arrow-custom" src={leftArrow} alt="left-arrow" /></Link>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default TitleArrow;
