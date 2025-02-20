import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../Redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
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
    getLatestMovies();
  }, []);
};
export default usePopularMovies;
