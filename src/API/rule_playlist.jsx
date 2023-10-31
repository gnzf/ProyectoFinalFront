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

export const addPlaylist = async () => {
    let url = "/addPlaylist";
    return await api
      .post(url)
      .then((resultado) => {
        console.log(resultado);
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };

export const addCancionesPlaylist = async () => {
    let url = "/addCancionesPlaylist";
    return await api
      .post(url)
      .then((resultado) => {
        console.log(resultado);
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };