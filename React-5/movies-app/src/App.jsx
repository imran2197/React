import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WatchList from "./components/WatchList";
import NavBar from "./components/NavBar";
import PopularMovies from "./pages/PopularMovies";
import GlobalLoader from "./components/GlobalLoader";

export default function App() {
  return (
    <>
      <GlobalLoader />
      <NavBar />
      <Routes>
        <Route path="/" element={<PopularMovies />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </>
  );
}
