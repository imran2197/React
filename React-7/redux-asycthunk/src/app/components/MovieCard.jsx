const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  const { title, poster_path, vote_average, release_date } = movie;

  return (
    <div className="group relative rounded-xl overflow-hidden bg-gray-200 shadow-md hover:shadow-xl transition">
      {/* Poster */}
      <img
        src={
          poster_path
            ? `${IMAGE_BASE_URL}${poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={title}
        className="w-full aspect-[2/3] object-cover"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-sm line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-2 text-xs text-gray-300">
          <span>⭐ {vote_average?.toFixed(1)}</span>
          <span>{release_date?.slice(0, 4)}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
