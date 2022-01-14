import React from "react";
import ListItem from "../ListItem";

function SearchHistory({ movies, removeMovieFromHistory }) {
  return (
    <ul id="SearchHistory">
      {movies.map((movie, index) => (
        <ListItem
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
