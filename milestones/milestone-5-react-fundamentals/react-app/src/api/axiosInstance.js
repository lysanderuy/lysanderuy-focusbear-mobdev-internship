import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    Accept: "*/*",
  },
});

api.interceptors.request.use(
  (config) => {
    // Add dynamic request ID
    config.headers["X-Request-ID"] =
      `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    // Attach token from localStorage if it exists
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
