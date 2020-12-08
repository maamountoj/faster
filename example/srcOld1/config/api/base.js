import axios from "axios";
import Cookies from "js-cookie";

/* export const BASE_URL = 'http://192.168.1.108:3006/api'
export const Public_BASE_URL = 'http://192.168.1.108:3006' */

//Prod
export const BASE_URL = "https://api.hadrezmaana.org/api";
export const Public_BASE_URL = "https://api.hadrezmaana.org";
/* 
export const BASE_URL = "https://jsonplaceholder.typicode.com";
export const Public_BASE_URL = "https://jsonplaceholder.typicode.com"; */

const api = axios.create({ baseURL: BASE_URL });

// This for the client side
api.interceptors.request.use((config) => {
  const jwt = Cookies.get("jwt");

  if (jwt) {
    config.headers.Authorization = "";
    delete config.headers.Authorization;
    config.headers.Authorization = `Bearer ${jwt}`;
  }

  return config;
});

export default api;
