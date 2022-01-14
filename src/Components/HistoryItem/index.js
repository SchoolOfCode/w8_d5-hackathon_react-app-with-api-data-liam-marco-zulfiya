import React from "react";

function HistoryItem({ movie, index, removeMovieFromHistory }) {
  return (
    <li className="HistoryItem">
      <h6>{movie.Title}</h6>
      <img style={{ width: "50px" }} src={movie.Poster} alt="" />
      <button onClick={() => removeMovieFromHistory(index)}>X</button>
    </li>
  );
}

export default HistoryItem;
