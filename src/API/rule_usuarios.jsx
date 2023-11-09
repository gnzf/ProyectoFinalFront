import api from "./rule_API";

export const getPlaylist = async (usuarioId) => {
  let url = `/playlistUsuario?usuarioId=${usuarioId}`;
  return await api
    .get(url)
    .then((resultado) => {
      console.log(resultado);
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const getUsername = async (usuarioId) => {
  let url = `/username?usuarioId=${usuarioId}`;
  return await api
    .get(url)
    .then((resultado) => {
      console.log(resultado);
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};