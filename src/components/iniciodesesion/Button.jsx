import React from "react";
import "../../styles/inicioDeSesion/Button.css";

function Button(props) {
  return (
    <button
      className={`btn-custom btn-login ${props.fieldsFilled ? "filled" : ""}`}
      type={props.type}
      disabled={!props.fieldsFilled}
      onClick={props.onClick}
    >
      {props.btnLabel}
    </button>
  );
}

export default Button;
