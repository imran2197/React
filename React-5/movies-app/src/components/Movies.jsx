import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies() {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([
    {
      url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Movie 1",
    },
    {
      url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Movie 2",
    },
    {
      url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Movie 3",
    },
    {
      url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Movie 4",
    },
    {
      url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Movie 5",
    },
    {
      url: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlmZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Movie 6",
    },
  ]);

  const handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div>
      <div className="text-2xl text-center font-bold m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8 my-4">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movies;
