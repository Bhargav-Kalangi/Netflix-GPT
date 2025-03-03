import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addOnAirSeries } from "../Redux/moviesSlice";

const useOnAirSeries = () => {
  const dispatch = useDispatch();
  const onAirSeries = useSelector((store) => store.movies.onAirSeries);
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
    //onAirSeries is null, then only it will make an api call (memoization concept)
    !onAirSeries && getLatestMovies();
  }, []);
};
export default useOnAirSeries;
