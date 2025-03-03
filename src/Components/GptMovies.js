import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovies = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  // console.log(movienames);

  return (
    <div className="bg-black p-4 m-4 bg-opacity-80">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovies;
