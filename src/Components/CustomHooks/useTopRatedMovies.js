import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../Redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getLatestMovies = async () => {
    let Data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    let json = await Data.json();
    dispatch(addTopRatedMovies(json.results));
    // console.log(json.results);
  };
  useEffect(() => {
    // topRatedMovies is null, then only it will make an api call (memoization concept)
    !topRatedMovies && getLatestMovies();
  }, []);
};
export default useTopRatedMovies;
