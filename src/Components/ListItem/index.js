import React from "react";

function ListItem({ movie, index, removeMovieFromHistory }) {
  return (
    <li className="ListItem">
      <h6>{movie.Title}</h6>
      <img style={{ width: "50px" }} src={movie.Poster} alt="" />
      <button onClick={() => removeMovieFromHistory(index)}>X</button>
    </li>
  );
}

export default ListItem;
