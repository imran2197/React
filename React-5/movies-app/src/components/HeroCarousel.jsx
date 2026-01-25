import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

function HeroCarousel({ movies }) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % movies?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  if (!movies?.length) return null;

  const activeMovie = movies[activeIndex];

  return (
    <div className="relative h-[60vh] md:h-[80vh] text-white">
      {/* Background Image */}
      <img
        src={`${IMAGE_BASE}${activeMovie.backdrop_path}`}
        alt={activeMovie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-10 pt-40">
        <h1 className="text-4xl font-bold mb-4">{activeMovie.title}</h1>

        <p className="text-gray-200 mb-6 line-clamp-3">
          {activeMovie.overview}
        </p>

        <div className="flex gap-4">
          <button
            className="bg-gray-700/80 px-6 py-2 rounded-md cursor-pointer"
            onClick={() => navigate(`/popularmovies/${movies[activeIndex].id}`)}
          >
            More Info
          </button>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-[40%] md:left-[50%] flex gap-2">
        {movies?.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
