import React from "react";
import { IMAGE_BASE_URL } from "../constants/tmdb.constants";

function WatchlistCard({ genres = [], movie }) {
  const getGenre = () => {
    if (!genres?.length || !movie?.genre_ids?.length) return "";

    return genres
      .filter((g) => movie.genre_ids.includes(g.id))
      .map((g) => g.name)
      .join(", ");
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      {/* Poster */}
      <div className="relative h-[360px]">
        <img
          src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover"
        />

        {/* Rating */}
        <span className="absolute top-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md">
          ⭐ {movie.vote_average?.toFixed(1)}
        </span>

        {/* Remove */}
        <button className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-md hover:bg-red-700 cursor-pointer">
          Remove
        </button>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent  transition p-4 flex flex-col justify-end">
          <h3 className="text-white font-semibold text-lg mb-1">
            {movie.title}
          </h3>

          {/* Genres */}
          <div className="mb-2">
            <span className="bg-white/20 text-white text-[10px] px-2 py-1 rounded">
              {getGenre()}
            </span>
          </div>

          {/* Overview */}
          <p className="text-gray-200 text-xs line-clamp-2 mb-2">
            {movie.overview}
          </p>

          {/* Bottom Info (Visible always – mobile friendly) */}
          <div className="px-2 py-1">
            <h4 className="font-semibold text-sm truncate">{movie.title}</h4>

            <div className="flex justify-between text-xs text-gray-200 font-semibold">
              <span>Year:</span>
              <span>Language:</span>
              <span>Popularity</span>
            </div>
            <div className="flex justify-between text-xs text-gray-200">
              <span>{movie.release_date?.split("-")[0]}</span>
              <span>{movie.original_language?.toUpperCase()}</span>
              <span>❤️ {Math.round(movie.popularity)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchlistCard;
