import React, { useContext, useEffect, useState } from "react";
import WatchlistCard from "../components/WatchlistCard";
import { genres } from "../constants/genres";
import WatchListContext from "../context/WatchListContext";

function WatchList() {
  const { watchList, setWatchList } = useContext(WatchListContext);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [genreTiles, setGenreTiles] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  console.log(selectedGenres);

  useEffect(() => {
    const allWatchList = JSON.parse(localStorage.getItem("watchlist"));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWatchList(allWatchList);
  }, []);

  useEffect(() => {
    const uniqueGenres = [];
    [...new Set(watchList.flatMap((movie) => movie.genre_ids))].map((id) => {
      const found = genres.find((item) => item.id == id);
      uniqueGenres.push(found.name);
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGenreTiles(uniqueGenres);
  }, [watchList]);

  const filteredData = watchList.filter((movie) => {
    // search filter
    const matchSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    // genre filter
    if (selectedGenres.length == 0) {
      return matchSearch;
    }

    const movieGenres = movie.genre_ids.map(
      (id) => genres.find((g) => g.id === id)?.name,
    );

    const matchGenre = movieGenres.some((g) => selectedGenres.includes(g));

    return matchSearch && matchGenre;
  });

  const handleSort = (e) => {
    const value = e.target.value;
    setSortBy(value);
    const sortedData = watchList.sort((a, b) => {
      if (value === "vote_average") {
        return b.vote_average - a.vote_average;
      } else if (value === "popularity") {
        return b.popularity - a.popularity;
      } else if (value === "release_date") {
        return (
          new Date(b.release_date).getFullYear() -
          new Date(a.release_date).getFullYear()
        );
      }
      return 0;
    });
    setWatchList(sortedData);
  };

  const handleGenreFilter = (genre) => {
    if (selectedGenres.includes(genre)) {
      const filteredGenre = selectedGenres.filter((item) => item != genre);
      setSelectedGenres(filteredGenre);
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const isTileSelected = (genre) => selectedGenres.includes(genre);

  return (
    <div className="min-h-screen bg-white px-4 md:px-8 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">
          My Watchlist ({watchList?.length | 0})
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-80 border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />

          {/* Sort */}
          <select
            className="border rounded-md px-3 py-2 text-sm bg-white outline-none"
            value={sortBy}
            onChange={handleSort}
          >
            <option value="" defaultValue hidden>
              Sort by:
            </option>
            <option value="vote_average">Sort by Rating</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="release_date">Sort by Release Year</option>
          </select>
        </div>
      </div>

      {/* Genre Tiles */}
      <div className="mb-2">
        {genreTiles.map((genre) => {
          const baseCss =
            "border border-[#ffa300] text-xs text-[#ffa300] font-semibold rounded-xl px-3 py-1 m-2 cursor-pointer";
          const activeCss =
            "bg-[#ffa300] border-[#ffa300] text-white font-semibold";
          return (
            <button
              className={`${baseCss} ${isTileSelected(genre) ? activeCss : ""}`}
              key={genre}
              onClick={() => handleGenreFilter(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      {watchList?.length > 0 ? (
        <div className="grid gap-6 grid-cols-2 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredData.map((movie) => (
            <WatchlistCard key={movie.id} genres={genres} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-20">
          No movies in watchlist 🎬
        </div>
      )}
    </div>
  );
}

export default WatchList;
