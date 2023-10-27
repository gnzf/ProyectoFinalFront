import React from "react";
/* import { Link } from "react-router-dom"; */
/* import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; */
import "../../../styles/registro/first page/Encabezado.css";
import BackwardButton from "./BackwardButton";
import { Link } from "react-router-dom";

function Encabezado(props) {
  return (
    <>
      <div className="encabezado">
      <Link to={props.link}> <BackwardButton/></Link>
        <div className="crear-cuenta-container">
          <div className="crear-cuenta">{props.encabezado}</div>
        </div>
      </div>
    </>
  );
}

export default Encabezado;
