import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPopularMovies = createAsyncThunk(
  "popularMovies/fetchPopularMovies",
  async (pageNo) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`,
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2MzOWM4MmYxMDY0MTcxZDNkNmVjMmJlZGI1ZmUwMCIsIm5iZiI6MTc2ODQxMTE0Ni42MzkwMDAyLCJzdWIiOiI2OTY3ZDAwYTU5MjE0Y2U2N2UyN2Q1MTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Qb24gfn-G43dCVoto74MEgjNoCLuHXajSUrgLI6uF8g",
        },
      },
    );
    const result = await response.data;
    return result;
  },
);

const initialState = {
  data: null,
  error: null,
  isLoading: false,
  pageNo: 1,
};
const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: initialState,
  reducers: {
    changePageToNext: (state) => {
      state.pageNo += 1;
    },
    changePageToPrev: (state) => {
      state.pageNo -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export { fetchPopularMovies };
export const { changePageToNext, changePageToPrev } =
  popularMoviesSlice.actions;
export default popularMoviesSlice.reducer;
