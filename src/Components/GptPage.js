import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GptMovies from "./GptMovies";
import { BG_URL } from "./Utils/constants";

const GptPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          className=" md:h-fit h-screen object-cover "
          alt="Netflix-bg-image"
        />
      </div>

      <div>
        <GPTSearchBar />
        <GptMovies />
      </div>
    </>
  );
};

export default GptPage;
