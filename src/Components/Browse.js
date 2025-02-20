import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./CustomHooks/usePopularMovies";
import useTopRatedMovies from "./CustomHooks/useTopRatedMovies";
import useUpcomingMovies from "./CustomHooks/useUpcomingMovies";
import useOnAirSeries from "./CustomHooks/useOnAirSeries";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useOnAirSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
