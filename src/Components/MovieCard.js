import React from "react";
import { IMG_URL } from "./Utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_URL + poster_path} alt="Movie" />
    </div>
  );
};

export default MovieCard;
