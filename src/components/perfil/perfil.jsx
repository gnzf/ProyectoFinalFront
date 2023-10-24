import "../../styles/perfil/perfil.css";
import FooterHome from "../home/footerHome";
import Playlists from "../playlists/Playlists";

function perfil() {
  return (
    <>
      <div className="container-profile">
        <div className="contenido-profile">
          <img
            className="img-profile"
            src="/image/perfil/Rectangle 2.svg"
            alt="img-profile"
          />
          <a className="btn-config-profile">
            <img src="/image/perfil/gear.svg" alt="img-configuration" />
          </a>

          <h1 className="name-profile">Mara Pérez</h1>
          <p className="nickname">@mara_pg</p>
        </div>

        <div className="playlist-wrapper">
          <h3 className="title-playlists">Mis Playlists</h3>
          <button className="btn-playlists">Crear Playlist</button>
        </div>

        <div className="playlist-section">
          <Playlists
            namePlaylists="Me fui de gira Mabel"
            nameUsers="LuciVaz, mara_pg"
          />
          <Playlists
            namePlaylists="Me fui de gira Mabel"
            nameUsers="LuciVaz, mara_pg"
          />
          <Playlists
            namePlaylists="Me fui de gira Mabel"
            nameUsers="LuciVaz, mara_pg"
          />
          <Playlists
            namePlaylists="Me fui de gira Mabel"
            nameUsers="LuciVaz, mara_pg"
          />
          <Playlists
            namePlaylists="Me fui de gira Mabel"
            nameUsers="LuciVaz, mara_pg"
          />
          <Playlists
            namePlaylists="Me fui de gira Mabel"
            nameUsers="LuciVaz, mara_pg"
          />
        </div>
      </div>
        <FooterHome/>
    </>
  );
}

export default perfil;
