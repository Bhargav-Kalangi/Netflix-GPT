import React, { useEffect } from "react";

import { addNowPlayingMovies } from "../Redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getLatestMovies = async () => {
    let Data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    let json = await Data.json();
    dispatch(addNowPlayingMovies(json.results));
    // console.log(json.results);
  };
  useEffect(() => {
    //if nowPlayingMovies is null, then only it will make an api call (memoization concept)
    !nowPlayingMovies && getLatestMovies();
  }, []);
};

export default useNowPlayingMovies;
