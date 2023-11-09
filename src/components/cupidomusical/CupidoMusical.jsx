import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import { allSongs } from "../../../API/songs_API";
import MainBtn from "../../components/Buttons/MainBtn";
import "../../styles/cupidoMusical/cupidoMusical.css";
import { cupidoMusic } from "../../../API/cupidoMusic_API";
import { useNavigate } from "react-router-dom";

function MusicalCupido() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [dataToSend, setDataToSend] = useState([]);
  const [buttonStyle, setbuttonStyle] = useState(false);
  const [imgSelected, setImgSelected] = useState(null);
  const [imgView, setImgSView] = useState([]);
  const [nextImg, setNextImg] = useState(null);

  const touchStartX = useRef(null);

  const getAllSongs = async () => {
    try {
      const allSongsDb = await allSongs();
      setSongs(allSongsDb);
    } catch (error) {
      console.error("Error al obtener todas las canciones.", error);
    }
  };

  useEffect(() => {
    getAllSongs();
    setbuttonStyle(true);
  }, []);

  useEffect(() => {
    if (songs.length > 0) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      const nextImgUrl = `/${songs[nextIndex].artist_id}.png`;
      setNextImg(nextImgUrl);
    }
  }, [songs, currentSongIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    const sensitivity = 50;

    if (deltaX > sensitivity) {
      setCurrentSongIndex((prevIndex) =>
        prevIndex === 0 ? songs.length - 1 : prevIndex - 1
      );
    } else if (deltaX < -sensitivity) {
      setCurrentSongIndex((prevIndex) =>
        prevIndex === songs.length - 1 ? 0 : prevIndex + 1
      );
    }

    touchStartX.current = null;
  };

  const styleOfButton = () => {
    if (dataToSend.length >= 3) {
      setbuttonStyle(false);
    }
  };

  const musicSelected = () => {
    const currentSongId = songs[currentSongIndex].artist_id;

    if (dataToSend.includes(currentSongId)) {
      setImgSelected(`/${currentSongId}.png`);
    } else {
      setImgSelected(`/${currentSongId}.png`);
    }

    setImgSView((imgView) => [...imgView, imgSelected]);
  };

  console.log(imgView);

  const handleLikeClickLike = () => {
    if (songs.length > 0) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);

      const songId = songs[currentSongIndex].id_song;
      setDataToSend((prevData) => [...prevData, songId]);

      const nextImgUrl = `/${songId + 1}.png`;
      setNextImg(nextImgUrl);
    }
    styleOfButton();
    musicSelected();
  };

  const token = localStorage.getItem("token");

  console.log("Liked Song:", dataToSend);

  const handleLikeClickDontLike = () => {
    if (songs.length > 0) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
      const songId = songs[currentSongIndex].id_song;
      const nextImgUrl = `/${songId + 1}.png`;
      setNextImg(nextImgUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cupidoMusic(dataToSend, token);
      navigate("/playlistCupido");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerCupido">
      <header>
        <h1 className="title-carrusel">Cupido Musical</h1>
      </header>

      <main>
        <div
          className="carouselContainer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carouselItem">
            <form onSubmit={handleSubmit} action="">
              {songs[currentSongIndex] && (
                <>
                  <div className="containerImg">
                    <img
                      className="imgSong"
                      src={`/${songs[currentSongIndex].artist_id}.png`}
                      alt=""
                    />
                    <div className="containerImgNext">
                      {nextImg && (
                        <img className="imgSongNext" src={nextImg} alt="" />
                      )}
                    </div>

                    <div className="overlay">
                      <div onClick={handleLikeClickLike} className="like">
                        <img src="/icon/like.svg" alt="" />
                      </div>
                      <div onClick={handleLikeClickDontLike} className="cross">
                        <img src="/icon/cross.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  <p>{songs[currentSongIndex].name}</p>

                  <div className="containerMatchesActuales">
                    <div className="matchesActuales">
                      <div className="matches">
                        <p>Matches actuales:</p>
                        <div className="historyImg">
                          <img src="/icon/history.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div>
                      {imgView.map((img, index) => (
                        <img
                          className="imgSelected"
                          key={index}
                          src={img}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
             <div className="btn-create">
                <button
                    text={"Crear Playlist"}
                    className={!buttonStyle ? "btnMain2" : "disbledBottom"}
                    disabled={buttonStyle}
                    type="submit"
                 ><Link to={"/playlistGenerada"}>Crear Playlist</Link></button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MusicalCupido;