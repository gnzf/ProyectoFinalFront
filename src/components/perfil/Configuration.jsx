import { Link } from "react-router-dom";
import "../../styles/perfil/Configuration.css";
import { logout } from "../../API/rule_auth";

function Configuration() {

  const logoutfunction = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="config-container">
        <div className="top-nav">
          <Link to={"/perfil"} href="" className="link-arrow">
            <img src="/image/perfil/placeholder.svg" alt="" />
          </Link>
          <h1 className="title-config">Configuración</h1>
        </div>

        <div className="btn-edit">
          <button className="btn-appearance">Editar Apariencia</button>
          <button className="btn-edit-profile">Editar Perfil</button>
        </div>

        <div className="close-session">
          <p className="version-config">Versión: V1.25.03</p>
          <Link onClick={logoutfunction} to={"/"} href="" className="close-config">
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </>
  );
}

export default Configuration;
