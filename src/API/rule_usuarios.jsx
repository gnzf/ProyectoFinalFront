import api from "./rule_API";

export const getPlaylist = async () => {
  let url = "/playlistUsuario";
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

export const getUsername = async () => {
  let url = "/username";
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