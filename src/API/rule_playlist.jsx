import api from "./rule_API";

export const getCancionesPlaylist = async () => {
    let url = "/cancionesPlaylist";
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

export const addPlaylist = async (usuarioId) => {
    let url = "/addPlaylist";
    return await api
      .post(url, usuarioId)
      .then((resultado) => {
        console.log(resultado);
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };

export const addCancionesPlaylist = async (songsPlaylist) => {
    let url = "/addCancionesPlaylist";
    return await api
      .post(url, songsPlaylist)
      .then((resultado) => {
        console.log(resultado);
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };