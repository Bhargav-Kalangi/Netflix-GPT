import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../Redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getLatestMovies = async () => {
    let Data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    let json = await Data.json();
    dispatch(addPopularMovies(json.results));
    // console.log(json.results);
  };
  useEffect(() => {
    //popularMovies is null, then only it will make an api call (memoization concept)
    !popularMovies && getLatestMovies();
  }, []);
};
export default usePopularMovies;
