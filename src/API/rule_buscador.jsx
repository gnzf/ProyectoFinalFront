import api from "./rule_API";

export const getCancionesBuscador = async () => {
  let url = "/buscador";
  return await api
    .get(url)
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};