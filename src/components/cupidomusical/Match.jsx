import "../../styles/cupidoMusical/Match.css";

function Match() {
  return (
    <div className="match">
      <p className="match-p">Matches actuales:</p>
      <button className="btn-match">
        <img src="/image/cupidoMusical/recarga.svg" alt="" />
      </button>
      <img
        className="match-music"
        src="/image/playlists/Rockeando.jpg"
        alt=""
      />
    </div>
  );
}

export default Match;