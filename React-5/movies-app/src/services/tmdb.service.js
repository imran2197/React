import tmdbApi from "../api/tmdbApi";
import { TMDB_ENDPOINTS } from "../constants/tmdb.constants";

export const tmdbService = {
  getMoviesGenre() {
    return tmdbApi.get(TMDB_ENDPOINTS.GENRE);
  },

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

  getMovieDetails(id) {
    return tmdbApi.get(`/movie/${id}`);
  },

  getMovieVideos(id) {
    return tmdbApi.get(`/movie/${id}/videos`);
  },

  getMovieCredits(id) {
    return tmdbApi.get(`/movie/${id}/credits`);
  },

  getMovieProviders(id) {
    return tmdbApi.get(`/movie/${id}/watch/providers`);
  },

  getSimilarMovies(id) {
    return tmdbApi.get(`/movie/${id}/similar`);
  },
};
