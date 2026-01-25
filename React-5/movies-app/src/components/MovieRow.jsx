import React, { useRef } from "react";
import { IMAGE_BASE_URL } from "../constants/tmdb.constants";
import "../index.css";
import { useNavigate } from "react-router-dom";

function MovieRow({ title, movies }) {
  const navigate = useNavigate();
  const rowRef = useRef(null);

  const scroll = (direction) => {
    const { current } = rowRef;
    const scrollAmount = 500;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!movies?.length) return null;

  return (
    <section className="px-6 md:px-10 my-8 relative">
      <h2 className="text-xl md:text-2xl font-bold text-black mb-4">{title}</h2>

      {/* Left Arrow (Desktop only) */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-[55%] z-10 cursor-pointer
                   bg-black/70 text-white w-10 h-10 rounded-full
                   items-center justify-center hover:bg-black"
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>

      {/* Movies Row */}
      <div
        ref={rowRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[200px] md:min-w-[200px]
                       h-[300px] rounded-xl overflow-hidden
                       transition-transform duration-300
                       hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/popularmovies/${movie.id}`)}
          >
            <img
              src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow (Desktop only) */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-[55%] z-10 cursor-pointer
                   bg-black/70 text-white w-10 h-10 rounded-full
                   items-center justify-center hover:bg-black"
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </section>
  );
}

export default MovieRow;
