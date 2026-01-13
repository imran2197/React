import { Link, Navigate, Route, Routes } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import Listing from "./components/Listing"
import PageNotFound from "./components/PageNotFound"
import "./app.css";
import Users from "./components/Users"

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/listing">Listing</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/users/:id" element={<Users isAdmin="True" />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
