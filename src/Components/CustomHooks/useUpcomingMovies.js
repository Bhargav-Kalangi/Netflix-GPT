import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../Redux/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getLatestMovies = async () => {
    let Data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    let json = await Data.json();
    dispatch(addUpcomingMovies(json.results));
    // console.log(json.results);
  };
  useEffect(() => {
    getLatestMovies();
  }, []);
};
export default useUpcomingMovies;
