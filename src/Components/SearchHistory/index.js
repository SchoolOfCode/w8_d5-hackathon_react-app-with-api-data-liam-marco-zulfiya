import React from "react";
import HistoryItem from "../HistoryItem";

function SearchHistory({ movies, removeMovieFromHistory }) {
  return (
    <ul id="SearchHistory">
      {movies.map((movie, index) => (
        <HistoryItem
          key={movie.Title}
          index={index}
          movie={movie}
          removeMovieFromHistory={removeMovieFromHistory}
        />
      ))}
    </ul>
  );
}

export default SearchHistory;
