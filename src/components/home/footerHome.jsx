import React from "react";
import "../../styles/home/FooterHome.css";
import homeFooter from "../../../public/image/home/perfil/home.svg";
import searchFooter from "../../../public/image/home/perfil/search.svg";
import friendsFooter from "../../../public/image/home/perfil/friends.svg";
import userFooter from "../../../public/image/home/perfil/user.svg";

function FooterHome() {
  let ruta = "perfil";

  return (
    <div className={"container-footer-home " + ruta}>
      <a className="container-explorer-home">
        <img src={homeFooter} alt="home" />
        <span>Inicio</span>
      </a>
      <a className="container-explorer-footer">
        <img src={searchFooter} alt="search" />
        <span>Buscador</span>
      </a>
      <a className="container-explorer-profile">
        <img src={friendsFooter} alt="profile" />
        <span>Perfil</span>
      </a>
      <a className="container-explorer-friends">
        <img src={userFooter} alt="friends" />
        <span>Amigos</span>
      </a>
    </div>
  );
}

export default FooterHome;
