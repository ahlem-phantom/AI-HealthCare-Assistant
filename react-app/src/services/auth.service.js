import axios from "axios";
import API_BASE_URL from "../api-config";

const API_URL = `${API_BASE_URL}/api/auth/`;

const register = (username, email, password,birthdate,firstname,lastname,phone,role) => {
  console.log("test"+username, email, password,birthdate,firstname,lastname,phone,role);
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
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
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

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  verifyUser,
  forgotPass,
  loginlinkedin, 
  loginface
};

export default AuthService;
