import React from "react";
import lang from "./Utils/gptSearchLanguageSuggestion";
import { useSelector } from "react-redux";
const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);
  return (
    <div className=" pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className=" p-4 m-4 col-span-9 rounded-lg"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
