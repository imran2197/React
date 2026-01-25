import React from "react";

const WatchTrailerModal = ({ setShowTrailer, trailerKey }) => {
  return (
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
  );
};

export default WatchTrailerModal;
