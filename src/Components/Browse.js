import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./CustomHooks/usePopularMovies";
import useTopRatedMovies from "./CustomHooks/useTopRatedMovies";
import useUpcomingMovies from "./CustomHooks/useUpcomingMovies";
import useOnAirSeries from "./CustomHooks/useOnAirSeries";
// import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";
const Browse = () => {
  const gptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  // console.log(gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useOnAirSeries();
  return (
    <div>
      <Header />

      {gptSearch ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
