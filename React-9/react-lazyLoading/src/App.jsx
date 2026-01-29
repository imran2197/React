import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Link, Route, Routes } from "react-router";

const HomePage = lazy(() => import("./components/Home"));
const ProductPage = lazy(() => import("./components/Product"));
const AboutPage = lazy(() => import("./components/About"));

const App = () => {
  return (
    <div>
      <h1>React Lazy Loading</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loadin...</p>}>
              <HomePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <Suspense fallback={<p>Loadin...</p>}>
              <ProductPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Suspense fallback={<p>Loadin...</p>}>
              <AboutPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
