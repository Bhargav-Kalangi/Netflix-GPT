import React, { useRef } from "react";
import lang from "./Utils/gptSearchLanguageSuggestion";
import { useDispatch, useSelector } from "react-redux";
import genAI from "./Utils/geminiai";
import { API_OPTIONS } from "./Utils/constants";
import { addGPTMovieResults } from "./Redux/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  //   console.log(langKey);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&language=en-USpage=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchInput.current.value, "BhargavvvvS");
    if (!searchInput.current.value) return null;
    const searchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchInput.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    // const genAI = new GoogleGenerativeAI(GEMINIAI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(searchQuery);

    let GPTMovies = result.response.text().split(",");
    // we are getting movie suggestion list from GEminiAI
    console.log(GPTMovies);

    let promiseArray = GPTMovies?.map((movie) => searchMovieTMDB(movie));

    // map function will make api calls subsequently , since searchMovieTMDB is async function,  once all the promises are resolved then only we will get GPTSuggestedMovies details from searchMovieTMDB
    let GPTSuggestedMovies = await Promise.all(promiseArray);
    console.log(GPTSuggestedMovies);
    dispatch(
      addGPTMovieResults({
        movieNames: GPTMovies,
        movieResults: GPTSuggestedMovies,
      })
    );
  };
  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className="  p-4 m-4 text-lg  col-span-7 md:col-span-9 rounded-lg"
        />
        <button
          className=" col-span-5 md:col-span-3 m-4 py-2 px-6 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
