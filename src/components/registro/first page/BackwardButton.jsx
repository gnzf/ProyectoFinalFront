import React from "react";
import "../../../styles/registro/first page/BackwardButton.css";

function BackwardButton() {
  return (
    <button className="backward-button">
      <img
        className="left-arrow"
        src="/images/registro/left-arrow.svg"
        alt=""
      />
    </button>
  );
}

export default BackwardButton;
