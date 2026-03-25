import axios from "axios";

const checkLocal = () => {
  let url = "https://happyshop-render.onrender.com";
  const checkUrl = "http://localhost:8000/api/status";
  fetch(checkUrl)
    .then((response) => {
      if (response.ok) {
        url = checkUrl;
      }
    })
    .catch((err) => console.log("Err", err));
  // console.log("url", url);
  return url;
};

// const url = "https://happyshop-render.onrender.com"; // http:localhost:8000

const publicRoutes = ["/auth/login", "/auth/register"];

const api = axios.create({
  baseURL: checkLocal(),
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token && !publicRoutes.includes(config.url)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
