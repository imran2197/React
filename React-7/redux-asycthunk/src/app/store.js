import { configureStore } from "@reduxjs/toolkit";
import popularMoviesReducer from "./features/popularmovies/popularMoviesSlice";
const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
  },
});

export default store;
