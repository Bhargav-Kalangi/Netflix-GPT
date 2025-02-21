import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GptMovies from "./GptMovies";
import { BG_URL } from "./Utils/constants";

const GptPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="Netflix-bg-image" />
      </div>
      <GPTSearchBar />
      <GptMovies />
    </div>
  );
};

export default GptPage;
