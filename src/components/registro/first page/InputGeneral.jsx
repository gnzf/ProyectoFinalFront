import React from "react";
import "../../../styles/registro/first page/InputGeneral.css";

function InputGeneral(props) {
  return (
    <>
      <input className="input-general" type="email" value={props.value} onChange={props.onChange}></input>
    </>
  );
}

export default InputGeneral;
