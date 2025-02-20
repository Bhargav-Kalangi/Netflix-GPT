import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addOnAirSeries } from "../Redux/moviesSlice";

const useOnAirSeries = () => {
  const dispatch = useDispatch();
  const getLatestMovies = async () => {
    let Data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );
    let json = await Data.json();
    dispatch(addOnAirSeries(json.results));
    // console.log(json.results);
  };
  useEffect(() => {
    getLatestMovies();
  }, []);
};
export default useOnAirSeries;
