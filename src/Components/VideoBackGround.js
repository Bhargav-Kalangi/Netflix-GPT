import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "./CustomHooks/useMovieTrailer";

const VideoBackGround = ({ id }) => {
  const movieKey = useSelector((store) => store?.movies?.trailerVideo?.key);
  // console.log(movieKey);
  useMovieTrailer(id);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&mute=1`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
