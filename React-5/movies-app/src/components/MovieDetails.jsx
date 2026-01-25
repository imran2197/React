import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbService } from "../services/tmdb.service";
import { IMAGE_BASE_URL } from "../constants/tmdb.constants";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [providers, setProviders] = useState([]);

  console.log(id);

  useEffect(() => {
    const fetchDetails = async () => {
      const [
        moviesResponse,
        videoResponse,
        similarResponse,
        providerResponse,
        creditsResponse,
      ] = await Promise.all([
        tmdbService.getMovieDetails(id),
        tmdbService.getMovieVideos(id),
        tmdbService.getSimilarMovies(id),
        tmdbService.getMovieProviders(id),
        tmdbService.getMovieCredits(id),
      ]);

      setMovie(moviesResponse.data);
      setSimilar(similarResponse.data.results);

      const trailer = videoResponse.data.results.find(
        (item) => item.type === "Trailer" && item.site === "YouTube",
      );
      setTrailerKey(trailer?.key);
      setProviders(providerResponse.data.results?.IN?.flatrate || []);
      setCast(creditsResponse.data.cast.slice(0, 6));
    };
    fetchDetails();

    const handleEsc = (e) => {
      if (e.key === "Escape") setShowTrailer(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [id]);

  if (!movie) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-end">
          <div className="p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-3 text-gray-200">
              {movie.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
              <span>⭐ {movie.vote_average.toFixed(1)}</span>
              <span>{movie.release_date?.split("-")[0]}</span>
              <span>{movie.runtime} min</span>
            </div>

            <p className="text-gray-300 mb-4">{movie.overview}</p>

            <div className="flex gap-3">
              {trailerKey && (
                <button
                  className="bg-[#ffa300] text-black px-5 py-2 rounded-md font-semibold cursor-pointer"
                  onClick={() => setShowTrailer(true)}
                >
                  ▶ Play Trailer
                </button>
              )}

              <button className="border px-5 py-2 rounded-md cursor-pointer font-semibold text-white">
                ❤️ Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Info */}
      <div className="px-8 py-10">
        {/* Genres */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Genres</h3>
          <div className="flex gap-2 flex-wrap">
            {movie.genres.map((g) => (
              <span
                key={g.id}
                className="px-4 py-1 bg-gray-800 rounded-full text-sm text-white"
              >
                {g.name}
              </span>
            ))}
          </div>
        </div>

        {/* Streaming Providers */}
        {providers.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Available On</h3>
            <div className="flex gap-3">
              {providers.map((p) => (
                <img
                  key={p.provider_id}
                  src={`${IMAGE_BASE_URL}/w45${p.logo_path}`}
                  alt={p.provider_name}
                  className="h-8"
                />
              ))}
            </div>
          </div>
        )}

        {/* Cast */}
        <div>
          <h3 className="text-xl font-bold mb-4">Top Cast</h3>
          <div className="flex gap-4 overflow-x-auto">
            {cast.map((c) => (
              <div key={c.id} className="w-28">
                <img
                  src={`${IMAGE_BASE_URL}/w185${c.profile_path}`}
                  alt={c.name}
                  className="rounded-lg mb-1"
                />
                <p className="text-sm">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar */}
        <section className="max-w-6xl ">
          <h2 className="text-xl font-bold mb-4">Similar Movies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {similar &&
              similar.map((m) => (
                <div key={m.id} className="cursor-pointer">
                  <img
                    className="rounded-lg bg-cover w-35 hover:scale-105 transition"
                    src={`${IMAGE_BASE_URL}/w342${m.poster_path}`}
                    alt="m.title"
                  />
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* TRAILER MODAL */}
      {showTrailer && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          onClick={() => setShowTrailer(false)}
        >
          <div
            className="relative w-[90%] md:w-200 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-red-500 transition cursor-pointer"
              aria-label="Close trailer"
              onClick={() => setShowTrailer(false)}
            >
              ✕
            </button>

            {/* Trailer */}
            <iframe
              className="w-full h-full rounder-lg"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Trailer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
