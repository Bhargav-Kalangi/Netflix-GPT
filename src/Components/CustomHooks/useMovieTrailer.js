import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Redux/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    // console.log(id);
    let MovieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    let data = await MovieTrailer.json();
    console.log(data.results);
    let filterData = data.results.filter((video) => video?.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useMovieTrailer;
