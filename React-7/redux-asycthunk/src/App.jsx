import React from "react";
import PopularMovies from "./app/components/PopularMovies";

const App = () => {
  return (
    <div>
      <h2 className="font-black bg-amber-200 p-5 text-center text-4xl">
        Redux Async Thunk
      </h2>
      <PopularMovies />
    </div>
  );
};

export default App;
