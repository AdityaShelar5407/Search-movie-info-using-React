import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <div className="container mt-4 mb-4">
      <div className="row g-3">
        {props.movies.map((movie, i) => {
          console.log(movie, i);
          return (
            <Movie
              key={i}
              viewMovieInfo={props.viewMovieInfo}
              movieId={movie.id}
              image={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
