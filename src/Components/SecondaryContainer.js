import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  let movies = useSelector((store) => store?.movies);

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-64 relative z-30 pl-6">
          <MovieList
            title={"TV series on Airing Today"}
            movies={movies?.onAirSeries}
          />
          <MovieList
            title={"BlockBuster Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
