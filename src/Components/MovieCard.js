import React from "react";
import { IMG_URL } from "./Utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-48 pr-4 shadow-lg transition-all duration-700 hover:scale-110 hover:shadow-md hover:shadow-gray-200">
      <img src={IMG_URL + poster_path} alt="Movie" />
    </div>
  );
};

export default MovieCard;
