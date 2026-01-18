import React, { useEffect, useState } from "react";
import { tmdbService } from "../services/tmdb.service";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

function PopularMovies() {
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [watchList, setWatchList] = useState([]);
  console.log(watchList);

  const addToWatchList = (movieObj) => {
    setWatchList([...watchList, movieObj]);
  };

  const removeFromWatchList = (movieObj) => {
    const filteredData = watchList.filter((item) => {
      return item.id != movieObj.id;
    });
    setWatchList(filteredData);
  };

  useEffect(() => {
    tmdbService.getPopularMovies(pageNo).then((res) => {
      setMoviesData(res.data.results);
      setTotalPages(res.data.total_pages);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, [pageNo]);

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
        <h2>🔥 Popular Movies</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8 my-4">
        {moviesData.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              watchList={watchList}
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
            />
          );
        })}
      </div>
      {moviesData.length > 0 && (
        <Pagination
          pageNo={pageNo}
          totalPages={totalPages}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </div>
  );
}

export default PopularMovies;
