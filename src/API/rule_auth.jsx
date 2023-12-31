import api from "./rule_API";

export const registrarUsuario = async (user) => {
  let url = "/auth/register";
  return await api
    .post(url, user)
    .then((resultado) => {
      localStorage.setItem("token", resultado.data.token);
      localStorage.setItem("user_id", resultado.data.user_id);
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const loginUsuario = async (user) => {
  let url = "/auth/login";
  return await api
    .post(url, user)
    .then((resultado) => {
      localStorage.setItem("token", resultado.data.token);
      localStorage.setItem("user_id", resultado.data.user_id);
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const logout = () => {
  localStorage.removeItem("token");
};