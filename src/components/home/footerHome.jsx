import React from "react";
import "../../styles/home/FooterHome.css";
import homeFooter from "../../../public/image/home/perfil/home.svg";
import searchFooter from "../../../public/image/home/perfil/search.svg";
import friendsFooter from "../../../public/image/home/perfil/friends.svg";
import userFooter from "../../../public/image/home/perfil/user.svg";
import { Link } from "react-router-dom";

function FooterHome(props) {

  return (
    <div className={"container-footer-home " + props.ruta}>
      <Link to={"/home"} className="container-explorer-home">
        <img src={homeFooter} alt="home" />
        <span>Inicio</span>
      </Link>
      <Link to={"/buscador"} className="container-explorer-footer">
        <img src={searchFooter} alt="search" />
        <span>Buscador</span>
      </Link>
      <Link to={"/perfil"} className="container-explorer-profile">
        <img src={friendsFooter} alt="profile" />
        <span>Perfil</span>
      </Link>
      <a className="container-explorer-friends">
        <img src={userFooter} alt="friends" />
        <span>Amigos</span>
      </a>
    </div>
  );
}

export default FooterHome;
