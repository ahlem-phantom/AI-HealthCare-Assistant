import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password,birthdate,firstname,lastname,phone,role) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    birthdate,
    firstname,
    lastname,
    phone,
    role
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      console.log(response)
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("role", JSON.stringify(response.data.role));
      }
      return response.data;
    });
};

const loginlinkedin = (email) => {
  return axios
    .post(API_URL + "signinlinkedin", {
      email,
    })
    .then((response) => {
      console.log(response)
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("role", JSON.stringify(response.data.role));

      }
      return response.data;
    });
};

const loginface = (username) => {
  return axios
    .post(API_URL + "signinface", {
      username,
    })
    .then((response) => {
      console.log(response)
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const verifyUser = (code) => {
  return axios.get(API_URL + "confirm/" + code).then((response) => {
    return response.data;
  });
};

const forgotPass = (email) => {
  return axios
    .post(API_URL + "forgot", {
      email
    })
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  verifyUser,
  forgotPass,
  loginlinkedin, 
  loginface
};
