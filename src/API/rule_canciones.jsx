import api from "./rule_API";

export const getCanciones = async () => {
  let url = "/canciones";
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

export const getGeneros = async () => {
  let url = "/generos";
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
export const getActividades = async () => {
  let url = "/actividades";
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
export const getClimas = async () => {
  let url = "/climas";
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
export const getMoods = async () => {
  let url = "/estadosdeanimo";
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