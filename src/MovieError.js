import React from "react";

function MovieError({ movieGenre }) {
  if (movieGenre === "kdrama") {
    throw new Error("Something went wrong with this page!!!!");
  }
  return <div>{movieGenre}</div>;
}

export default MovieError;
