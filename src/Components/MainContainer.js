import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const firstMovieTheList = movies[0];
  const { title, overview, id } = firstMovieTheList;
  return (
    <div className="pt-[45%] md:pt-0 bg-black">
      <VideoTitle title={title} overview={overview} />
      <VideoBackGround id={id} />
    </div>
  );
};

export default MainContainer;
