import React from "react";
import { IMAGE_BASE_URL } from "../constants/tmdb.constants";
import "../index.css";

function MovieRow({ title, movies }) {
  return (
    <section className="px-6 md:px-10 my-8">
      {movies.length > 0 && (
        <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
          {title}
        </h2>
      )}

      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[160px] md:min-w-[200px] h-[300px] rounded-xl">
            <img src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
