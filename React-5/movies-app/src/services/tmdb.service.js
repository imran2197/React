import tmdbApi from "../api/tmdbApi";
import { TMDB_ENDPOINTS } from "../constants/tmdb.constants";

export const tmdbService = {
  getPopularMovies(page = 1) {
    return tmdbApi.get(TMDB_ENDPOINTS.POPULAR, {
      params: { page },
    });
  },

  getTrendingMovies() {
    return tmdbApi.get(TMDB_ENDPOINTS.TRENDING);
  },

  getTopRatedMovies() {
    return tmdbApi.get(TMDB_ENDPOINTS.TOP_RATED);
  },

  getUpcomingMovies() {
    return tmdbApi.get(TMDB_ENDPOINTS.UPCOMING);
  },
};
