import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
