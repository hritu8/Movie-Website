// src/Movie.js
import React from "react";

function Movie({ movie }) {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}

export default Movie;
