import React, { useEffect } from "react";
import "../styles/home/home.css";
import FooterHome from "../components/home/footerHome";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log("Token:", token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [stepsHomeCupido, setStepsHomeCupido] = useState(0);
  const [homeContextual, setHomeContextual] = useState(0);

  const homeCupidoImg = [
    "/images/home/animation-step=1.svg",
    "/images/home/animation-step=2.svg",
    "/images/home/animation-step=3.svg",
    "/images/home/animation-step=4.svg",
    "/images/home/animation-step=5.svg",
    "/images/home/animation-step=6.svg",
  ];
  const homeContextualSteps = [
    "/images/home/animation-step=1 (1).svg",
    "/images/home/animation-step=2 (1).svg",
    "/images/home/animation-step=3 (1).svg",
    "/images/home/animation-step=4 (1).svg",
    "/images/home/animation-step=5 (1).svg",
    "/images/home/animation-step=6 (1).svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStepsHomeCupido((prevIndex) => (prevIndex + 1) % homeCupidoImg.length);
    }, 1000);

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHomeContextual((prevIndex) => (prevIndex + 1) % homeCupidoImg.length);
    }, 1200);

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  return (
    <div className="all-home-stats">
      <div className="notifications-bar-home">
        <h1>Música ya</h1>
        <img src="/images/home/Vector.svg" alt="clock" />
        <img src="/images/home/bell.svg" alt="campaign" />
      </div>
      <div className="container-main-home">
        <Link to={"/tinderMusica"}>
          <div className="container-options-home">
            <div className="container-imagenhome-animation1">
              <img
                className="container-imagenhome-animation1"
                src={homeCupidoImg[stepsHomeCupido]}
                alt=""
              />
            </div>

            <div className="texto-options-home">
              <h4>Cupido Musical</h4>
              <p>
                Tus artistas favoritos nunca van a dejarte con el corazón roto.
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/musicaContextual"}>
          <div className="container-options-home">
            <div className="container-imagenhome-animation1">
              <img
                className="container-imagenhome-animation1"
                src={homeContextualSteps[homeContextual]}
                alt=""
              />
            </div>

            <div className="texto-options-home">
              <h4>Música Contextual</h4>
              <p>Creamos la playlist perfecta para cualquier situación.</p>
            </div>
          </div>
        </Link>
      </div>
      <FooterHome ruta="inicio" />
    </div>
  );
}

export default Home;
