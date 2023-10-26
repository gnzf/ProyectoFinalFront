import "../../styles/perfil/perfil.css";
import { useState, useEffect } from "react";
import FooterHome from "../home/footerHome";
import Playlists from "../playlists/Playlists";
import { getPlaylist, getUsername } from "../../API/rule_usuarios";

function perfil() {
  const [playlist, setPlaylist] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchPlaylist = getPlaylist();
        const fetchUser = getUsername();
        const playlistResponse = await fetchPlaylist;
        const userResponse = await fetchUser;
        console.log(playlistResponse)
        console.log(userResponse)
        setPlaylist(playlistResponse[1]);
        setUser(userResponse[2]);
      } catch (error) {
        alert("Error al obtener los datos.", error);
      }
    };



    fetchData();
  }, []);


  if(!playlist || !user){
    return <h1>Loading...</h1>
  }


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
          <h1 className="name-profile">{user.username}</h1>
          <p className="nickname">@{user.username}</p>
          </div>
    
      

        <div className="playlist-wrapper">
          <h3 className="title-playlists">Mis Playlists</h3>
          <button className="btn-playlists">Crear Playlist</button>
        </div>

        <div className="playlist-section">
        
        
          <Playlists
            namePlaylists={playlist.name_playlist}
            nameUsers={playlist.user_id}
          />
     
        </div>
      </div>
        <FooterHome/>
    </>
  );
}

export default perfil;
