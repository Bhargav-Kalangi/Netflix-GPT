import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "./CustomHooks/useMovieTrailer";

const VideoBackGround = ({ id }) => {
  const movieKey = useSelector((store) => store?.movies?.trailerVideo?.key);
  console.log(movieKey);
  useMovieTrailer(id);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + movieKey}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
