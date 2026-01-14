import React from "react";

function MovieCard({movie}) {
  return (
    <div
      className="h-[50vh] w-60 bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col"
      style={{ backgroundImage: `url(${movie.url})` }}
    >
      <div className="text-white font-semibold text-center w-full text-xl p-2 bg-gray-900/70 rounded-xl">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieCard;
