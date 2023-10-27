import { Link } from "react-router-dom";
import "../../styles/iniciodeapp/inicioDeApp.css";

function InicioDeApp() {
  return (
    <>
      <div className="container-start">
        <div className="fullscreen-container">
          <div className="gradient-start"></div>
          <img
            className="gif"
            src="/image/iniciodeApp/Gif_Auden.gif"
            alt="Fondo-Mujer"
          />
          <div className="contenido-start">
            <img
              className="logo-start"
              src="/image/iniciodeApp/logo-large.svg"
              alt="logo"
            />
            <h1 className="title-start">Música a medida.</h1>

            <div className="pages-btn-start">
              <Link to={"/register"}><button className="btn-free">Registrarse Gratis</button></Link>
              <button className="btn-google-start">
                <img
                  className="logo-google-start"
                  src="/image/iniciodeApp/google-logo.svg"
                  alt="logo-google"
                />
                Continuar con Google
              </button>
              <button className="btn-apple-start">
                <img
                  className="logo-apple-start"
                  src="/image/iniciodeApp/apple-logo.svg"
                  alt="logo-apple"
                />
                Continuar con Apple
              </button>
            </div>
            <Link className="login-start" href="" to={"/login"}>
              Iniciar Sesión
           </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default InicioDeApp;
