import React, { useEffect, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import { tmdbService } from "../services/tmdb.service";
import MovieRow from "../components/MovieRow";

function Home() {
  const [heroMovie, setHeroMovie] = useState(null);
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    Promise.all([
      tmdbService.getPopularMovies(1),
      tmdbService.getTrendingMovies(),
      tmdbService.getTopRatedMovies(),
      tmdbService.getUpcomingMovies(),
    ]).then(([popularRes, trendingRes, topRatedRes, upcomingRes]) => {
      setPopular(popularRes.data.results);
      setTrending(trendingRes.data.results);
      setTopRated(topRatedRes.data.results);
      setUpcoming(upcomingRes.data.results);
      setHeroMovie(popularRes.data.results.slice(0, 5));
    });
  }, []);

  return (
    <div>
      <HeroCarousel movies={heroMovie} />

      <MovieRow title="🔥 Popular Movies" movies={popular} />
      <MovieRow title="📈 Trending This Week" movies={trending} />
      <MovieRow title="⭐ Top Rated" movies={topRated} />
      <MovieRow title="🎬 Upcoming Movies" movies={upcoming} />
    </div>
  );
}

export default Home;
