import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <div className="relative h-[40vh] w-60 rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition duration-300 hover:scale-105">
      {/* Poster Image */}
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="h-full w-full object-cover"
      />

      {/* Adult Badge */}
      {movie.adult && (
        <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          18+
        </span>
      )}

      {/* Bottom Info */}
      <div className="absolute bottom-0 w-full bg-black/70 text-white p-3">
        <h3 className="text-sm font-semibold truncate">{movie.title}</h3>

        <div className="flex justify-between items-center text-xs mt-1">
          <span>{movie.release_date?.split("-")[0]}</span>
          <span className="flex items-center gap-1">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
          <p className="text-xs line-clamp-5">{movie.overview}</p>
        </div>

        <div className="flex justify-between text-xs">
          <span>🔥 {Math.round(movie.popularity)}</span>
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
