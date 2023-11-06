import React from "react";
import "../../styles/cupidoMusical/Match.css";

function Match({ matches, resetMatches }) {
  const handleResetClick = () => {
    resetMatches();
  };

  return (
    <>
    <p className="match-p">Matches actuales:</p>
          <button className="btn-match" onClick={handleResetClick}>
              <img src="/image/cupidoMusical/recarga.svg" alt="" />
          </button>
    <div className="match">
      <div className="match-images">
        {matches.map((match, index) => (
          <img
            key={index}
            className="match-music"
            src={`/image/playlists/Rockeando.jpg`}
            alt=""
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Match;