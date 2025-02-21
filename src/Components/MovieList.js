import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  //   let poster_path = movies[0]?.poster_path;
  //   console.log(poster_path);
  return (
    <div className="px-6  ">
      <h1 className="text-2xl font-bold text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
