import tmdbApi from "../api/tmdbApi";
import { TMDB_ENDPOINTS } from "../constants/tmdb.constants";

export const tmdbService = {
  getPopularMovies(page = 1) {
    return tmdbApi.get(TMDB_ENDPOINTS.POPULAR, {
      params: { page },
    });
  },
};
