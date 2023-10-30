import { Link } from "react-router-dom";
import "../../styles/cupidoMusical/Carrusel.css";
import Playlists from "../playlists/Playlists";
import Match from "./Match";
function Carrusel() {
  return (
    <>
      <div className="carrusel-container">
        <div className="top-nav-carrusel">
          <Link to={"/home"} href="" className="link-arrow-carrusel">
            <img src="/image/cupidoMusical/placeholder.svg" alt="" />
          </Link>
          <h1 className="title-carrusel">Cupido Musical</h1>
        </div>

        <div className="playlist-carrusel">
          <div>
            <Playlists />
            <p className="name-music">Cuarteto de Nos</p>
          </div>

          <div className="btn-like-close">
            <button className="">
              <img src="/image/cupidoMusical/like.svg" alt="" />
            </button>
            <button>
              <img src="/image/cupidoMusical/pass.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="matches">
          <Match />
        </div>
        <div className="btn-create">
          <button className="btn-create-playlists">Crear Playlist</button>
        </div>
      </div>
    </>
  );
}

export default Carrusel;
