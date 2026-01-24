import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies } from "../features/popularmovies/popularMoviesSlice";
import ShimmerGrid from "./ShimmerGrid";
import ErrorPage from "./ErrorPage";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const PopularMovies = () => {
  const { pageNo, data, isLoading, error } = useSelector(
    (state) => state.popularMovies,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies(pageNo));
  }, [pageNo]);
  console.log(data);
  return (
    <div>
      <h1 className="text-center font-bold m-4 text-3xl">Popular Movies</h1>
      {isLoading && <ShimmerGrid />}
      {error && (
        <ErrorPage
          code="500"
          title="Something went wrong"
          message="We’re having trouble loading this content. Please try again."
        />
      )}
      <div className="flex flex-wrap justify-center items-center gap-5 m-6">
        {data &&
          data.results &&
          data.results.map((movie) => (
            <div key={movie.id} className="w-62.5 ">
              <MovieCard movie={movie} />
            </div>
          ))}
      </div>

      <Pagination pageNo={pageNo} />
    </div>
  );
};

export default PopularMovies;
