import Perfil from "../components/perfil/perfil";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function PerfilUsuario() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log("Token:", token);

  useEffect(() => {
      if (!token) {
          navigate("/login");
      }
  }, [])

  return (
    <div>
      <Perfil></Perfil>
    </div>
  );
}

export default PerfilUsuario;
