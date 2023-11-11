import "../../styles/cupidoMusical/Match.css";

function Match({onPrev, likedImages}) {

  return (
    <div className="match">
      <div className="match-container-reset">
      <p className="match-p">Matches actuales:</p>
      <button className="btn-match" onClick={onPrev}>
        <img src="/image/cupidoMusical/recarga.svg" alt="" />
      </button>
      </div>
      <div className="liked-images">
        {likedImages.map((image, index) => (
          <img
            key={index}
            className="match-music"
            src={image.image_artist}
            alt=""
            style={{
              zIndex: likedImages.length + index,
              transform: `translateX(-${index * 50}px)` // Ajusta el espaciado horizontal
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Match;