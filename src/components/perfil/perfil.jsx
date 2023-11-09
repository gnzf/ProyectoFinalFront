import "../../styles/perfil/perfil.css";
import { useState, useEffect } from "react";
import FooterHome from "../home/footerHome";
import Playlists from "../playlists/Playlists";
import { getPlaylist, getUsername } from "../../API/rule_usuarios";
import { Link } from "react-router-dom";

function perfil() {
  const [playlist, setPlaylist] = useState([]);
  /*  const [user, setUser] = useState([]); */
  const [userID, setUserID] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userName, setUserName] = useState("");
  console.log("userName es: ", userName);

  console.log("userID antes del segundo useeffect:", userID);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usuarioId = localStorage.getItem("user_id");
        const fetchUser = await getUsername(usuarioId);
        setUserName(fetchUser);
        const fetchPlaylist = await getPlaylist(usuarioId);
        setUserPlaylists(fetchPlaylist);
      } catch (error) {
        alert("Error al obtener los datos.", error);
      }
    };

    fetchData();
  }, []);
/* 
    if(!userPlaylists|| !userName){
    return <h1>Loading...</h1>
  } */
  return (
    <>
      <div className="container-profile">
        <div className="contenido-profile">
          <img
            className="img-profile"
            src="/image/perfil/Rectangle 2.svg"
            alt="img-profile"
          />
          <Link to={"/configuracionPerfil"} className="btn-config-profile">
            <img src="/image/perfil/gear.svg" alt="img-configuration" />
          </Link>
          {userName.length > 0 ? (
            <>
              {userName.map((user) => (
                <div key={user.username}>
                  <h1 className="name-profile">{user.username}</h1>
                  <p className="nickname">@{user.username}</p>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className="playlist-wrapper">
          <h3 className="title-playlists">Mis Playlists</h3>
          <button className="btn-playlists">Crear Playlist</button>
        </div>

        <div className="playlist-section">
        {userPlaylists.map((playlists, index) => (
        <Playlists
          key={index} 
          namePlaylists={playlists.name_playlist}
          nameUsers={playlists.username}
        />
      ))}
     
        </div>
      </div>
      <FooterHome ruta="perfil" />
    </>
  );
}

export default perfil;
