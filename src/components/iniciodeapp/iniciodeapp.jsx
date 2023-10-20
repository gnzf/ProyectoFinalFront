import "../../styles/iniciodeapp/inicioDeApp.css";

function inicioDeApp() {
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
              <button className="btn-free">Registrarse Gratis</button>
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
            <a className="login-start" href="">
              Iniciar Sesión
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default inicioDeApp;
