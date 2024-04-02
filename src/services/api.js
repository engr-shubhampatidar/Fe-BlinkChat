import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // our API base URL
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    const { token } = JSON.parse(localStorage.getItem("user")) || {};
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export the api instance
export default api;
