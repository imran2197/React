import axios from "axios";
import { ENV } from "../config/env";
import { loaderStore } from "../store/loader.store";

const tmdbApi = axios.create({
  baseURL: ENV.TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${ENV.TMDB_BEARER_TOKEN}`,
    "Content-Type": "application/json",
  },
});

tmdbApi.interceptors.request.use(
  (config) => {
    loaderStore.show();
    return config;
  },
  (error) => {
    loaderStore.hide();
    return Promise.reject(error);
  }
);

tmdbApi.interceptors.response.use(
  (response) => {
    loaderStore.hide();
    return response;
  },
  (error) => {
    loaderStore.hide();
    return Promise.reject(error);
  }
);

export default tmdbApi;
