import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default store;
