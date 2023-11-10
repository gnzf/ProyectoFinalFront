import { Link, useNavigate } from "react-router-dom";
import "../../styles/cupidoMusical/Carrusel.css";
import Match from "./Match";
import { getArtistas } from "../../API/rule_canciones";
import { useState, useEffect } from "react";
import {
  addCancionesPlaylist,
  addPlaylist,
  getArtistsSongsFilter,
} from "../../API/rule_playlist";
import { useRef } from "react";

function Carrusel() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
      if (!token) {
          navigate("/login");
      }
  }, [])

  const [resultados, setResultados] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [likedImages, setLikedImages] = useState([]);
  const [artistFav, setArtistFav] = useState([]);
  const [artistsSongs, setArtistSongs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const carruselRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;
  let isSwiping = false;

  useEffect(() => {
    setShowPopup(true);
    setShowOverlay(true);
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
    setShowOverlay(false); 
  };


  const [matchPopUp, setMatchPopUp] = useState(0);

  const stepsMatch = [
    "/images/CupidoMusical/step=2 (2).svg",
    "/images/CupidoMusical/step=3 (2).svg",
    "/images/CupidoMusical/step=4 (2).svg",
    "/images/CupidoMusical/step=5 (1).svg",
    "/images/CupidoMusical/step=6 (1).svg",
    "/images/CupidoMusical/step=1 (2).svg",
  ];

useEffect(() => {
  const interval = setInterval(() => {
    setMatchPopUp((prevIndex) => (prevIndex + 1) % stepsMatch.length);
  }, 1000);

  return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  };
}, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultado = await getArtistas();
        setResultados(resultado);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  const handleSiguiente = () => {
    if (currentImage < resultados.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      const lastLikedImage = likedImages[likedImages.length - 1];

      // Chequea si es la primera imagen que le dio like
      const isFirstLikedImage = likedImages.length === 1;

      // Agrega la última imagen que le dio like nuevamente a resultados
      setResultados((prevResultados) => [lastLikedImage, ...prevResultados]);

      // Elimina la última imagen que le dio like de likedImages
      setLikedImages((prevLikedImages) => {
        const updatedLikedImages = [...prevLikedImages];
        updatedLikedImages.pop();
        return updatedLikedImages;
      });

      // Elimina de artistFav si es la primera imagen que le dio like
      if (isFirstLikedImage) {
        setArtistFav((prevArtistFav) => {
          const updatedArtistFav = prevArtistFav.filter(
            (name) => name !== lastLikedImage.name_artist
          );
          return updatedArtistFav;
        });
      }

      setCurrentImage(currentImage - 1);
    }
  };

  useEffect(() => {
    handleArtistPlaySong();
  }, [artistFav]);

  const handleNext = () => {
    if (currentImage < resultados.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  useEffect(() => {
    handleLike();
  }, []);

  const handleLike = () => {
    if (currentImage < resultados.length) {
      const likedImage = resultados[currentImage];
      if (!likedImages.includes(likedImage)) {
        const artistName = likedImage.name_artist;

        setLikedImages([...likedImages, likedImage]);
        setArtistFav([...artistFav, artistName]);
      }
    }
    handleNext();
  };

  const handleArtistPlaySong = async () => {
    try {
      if (Array.isArray(artistFav) && artistFav.length > 0) {
        const artistasSeleccionados = {
          artistName: artistFav, 
        };
        const artistaName = artistasSeleccionados.artistName;
        try {
          const resultArtistSongsFilter = await getArtistsSongsFilter(
            artistaName
          ); 
          setArtistSongs(resultArtistSongsFilter);
        } catch (error) {
          alert(error)
        }
      } else {
        console.log("No se encontraron los artistas.");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleArtistMatch = async () => {
    try {
      const userid = localStorage.getItem("user_id");
      const usuarioId = { user_id: userid };
      const playlistCreateResponse = await addPlaylist(usuarioId);
      const playlistId = playlistCreateResponse.id_playlist.id_playlist;

      artistsSongs.forEach(async (cancion) => {
        const songName = cancion.cancion_name;
        const songsPlaylist = {
          playlistId: playlistId,
          cancionName: songName,
        };
        await addCancionesPlaylist(songsPlaylist);
      });

      navigate("/playlistGenerada");
    } catch (error) {}
  };

  const handleMatchConfirm = () => {
    return artistFav.length >= 2;
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
    isSwiping = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    isSwiping = false;
    const deltaX = touchEndX - touchStartX;
    if (deltaX < -50) {
      handleLike();
    } else if (deltaX > 50) {
      handleSiguiente();
    }
  };

  return (
    <>
      <div className="carrusel-container">
        {showOverlay && <div className="overlay-custom" />}
        <div className="top-nav-carrusel">
          <Link to={"/home"} href="" className="link-arrow-carrusel">
            <img src="/image/cupidoMusical/placeholder.svg" alt="" />
          </Link>
          <h1 className="title-carrusel">Cupido Musical</h1>
        </div>

        <div className="playlist-carrusel">
          {resultados.length > 0 && (
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={carruselRef}
            >
              {resultados.map((resultado, index) => (
                <div
                  key={resultado.id_canciones}
                  className={`carousel-item ${
                    index === currentImage
                      ? "current-image"
                      : index === currentImage + 1
                      ? "next-image"
                      : index === currentImage + 2 
                      ? "next-next-image" 
                      : "following-image"
                  }`}
                >
                  <img className="img-playlists-carousel" src={resultado.image_artist} />
                  <p className="name-music">{resultado.name_artist}</p>
                </div>
              ))}
            </div>
          )}
          <div className="btn-like-close">
            <button className="" onClick={handleLike}>
              <img src="/image/cupidoMusical/like.svg" alt="" />
            </button>
            <button onClick={handleSiguiente}>
              <img src="/image/cupidoMusical/pass.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="matches">
          <Match onPrev={handlePrevious} likedImages={likedImages} />
        </div>

        {showPopup && (
          <div className="popup">
            <p>Cupido Musical</p>
            <img src={stepsMatch[matchPopUp]} alt="" />
            <p>
              Luego de al menos 2 me gusta, confirma tu selección y crearemos
              una playlist rápida con los artistas que fueron un match.
            </p>
            <button onClick={handlePopupClose}>Entendido</button>
            <span>No volver a mostrar</span>
          </div>
        )}

        <div className="btn-create">
          <button
            className={`btn-create-playlists ${
              handleMatchConfirm()
                ? "enabled-buttonMatch"
                : "disabled-buttonMatch"
            }`}
            onClick={handleArtistMatch}
            disabled={!handleMatchConfirm()}
          >
            Crear Playlist
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrusel;
