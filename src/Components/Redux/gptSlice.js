import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    resetingGPTMovieResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});
export const {
  toggleGptSearchView,
  addGPTMovieResults,
  resetingGPTMovieResults,
} = gptSlice.actions;
export default gptSlice.reducer;
