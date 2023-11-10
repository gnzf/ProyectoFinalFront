import api from "./rule_API";

export const getCancionesPlaylist = async (valoresSeleccionados) => {
  // Define la URL base para la solicitud GET
  const baseUrl = '/cancionesPlaylist';

  // Convierte los parámetros en una cadena de consulta (query string)
  const queryString = Object.keys(valoresSeleccionados)
    .map(key => `${key}=${encodeURIComponent(valoresSeleccionados[key])}`)
    .join('&');

  // Combina la URL base con la cadena de consulta
  const fullUrl = `${baseUrl}?${queryString}`;

  return await api
    .get(fullUrl)
    .then((resultado) => {
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
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };
  
  export const cancionesPlaylistGenerada = async (usuarioId) => {
    let url = `/songsPlaylistGenerada?usuarioId=${usuarioId}`;
    return await api
      .get(url)
      .then((resultado) => {
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };

  
  export const totalDurationPlaylistGenerada = async (usuarioId) => {
    let url = `/songsPlaylistTotalDuration?usuarioId=${usuarioId}`;
    return await api
      .get(url)
      .then((resultado) => {
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };

  export const getArtistsSongsFilter = async (artistaName) => {
    let url = `/artistsSongs?artistName=${artistaName}`;
    return await api
      .get(url)
      .then((resultado) => {
        return resultado.data;
      })
      .catch((error) => {
        throw error.response.data.error || "Error procesando la solicitud";
      });
  };
  
  
  