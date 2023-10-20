import "../../styles/perfil/Configuration.css";

function Configuration() {
  return (
    <>
      <div className="config-container">
        <div className="top-nav">
          <a href="" className="link-arrow">
            <img src="/image/perfil/placeholder.svg" alt="" />
          </a>
          <h1 className="title-config">Configuración</h1>
        </div>

        <div className="btn-edit">
          <button className="btn-appearance">Editar Apariencia</button>
          <button className="btn-edit-profile">Editar Perfil</button>
        </div>

        <div className="close-session">
          <p className="version-config">Versión: V1.25.03</p>
          <a href="" className="close-config">
            Cerrar Sesión
          </a>
        </div>
      </div>
    </>
  );
}

export default Configuration;
