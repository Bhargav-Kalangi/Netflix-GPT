import React, { useEffect } from "react";

import { addNowPlayingMovies } from "../Redux/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getLatestMovies = async () => {
    let Data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    let json = await Data.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log(json.results);
  };
  useEffect(() => {
    getLatestMovies();
  }, []);
};

export default useNowPlayingMovies;
