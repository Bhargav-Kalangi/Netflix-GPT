import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice";
import moviesReducer from "./moviesSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    movies: moviesReducer,
  },
});
export default store;
