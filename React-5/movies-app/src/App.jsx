import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PopularMovies from "./pages/PopularMovies";
import GlobalLoader from "./components/GlobalLoader";
import WatchList from "./pages/WatchList";

export default function App() {
  return (
    <>
      <GlobalLoader />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/popularmovies" element={<PopularMovies />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </>
  );
}
