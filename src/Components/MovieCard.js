import React from "react";
import { IMG_URL } from "./Utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4 shadow-lg transition-all duration-700 hover:scale-110">
      <img src={IMG_URL + poster_path} alt="Movie" />
    </div>
  );
};

export default MovieCard;
