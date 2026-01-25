import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PopularMovies from "./pages/PopularMovies";
import GlobalLoader from "./components/GlobalLoader";
import WatchList from "./pages/WatchList";
import { WatchListContextWrapper } from "./context/WatchListContext";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  return (
    <>
      <GlobalLoader />
      <NavBar />
      <WatchListContextWrapper>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/popularmovies" element={<PopularMovies />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
          <Route path="/popularmovies/:id" element={<MovieDetails />} />
        </Routes>
      </WatchListContextWrapper>
    </>
  );
}
