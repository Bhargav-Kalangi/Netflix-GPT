import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Redux/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieTrailer = async () => {
    // console.log(id);
    let MovieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    let data = await MovieTrailer.json();
    // console.log(data.results);
    let filterData = data.results.filter((video) => video?.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    // console.log(trailer);
  };
  useEffect(() => {
    //if trailerVideo is null, then only it will make an api call (memoization concept)
    !trailerVideo && getMovieTrailer();
  }, []);
};
export default useMovieTrailer;
