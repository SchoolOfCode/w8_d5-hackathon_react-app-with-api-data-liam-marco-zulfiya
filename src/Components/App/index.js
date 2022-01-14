import { useState } from "react";

import "./App.css";
import Input from "../Input";
import MovieDisplay from "../MovieDisplay";

function App() {
  const [currentMovie, setCurrentMovie] = useState({ Ratings: [] });
  const [movies, setMovies] = useState([]);

  function addMovieToHistory(movie) {
    const newList = [...movies, movie];
    setMovies(newList);
  }

  function removeMovieFromHistory(index) {
    const newList = [...movies.slice(0, index), ...movies.slice(index + 1)];
    setMovies(newList);
  }

  function updateCurrentMovie(newMovie) {
    setCurrentMovie(newMovie);
  }

  return (
    <div className="App">
      <Input updateCurrentMovie={updateCurrentMovie} addMovieToHistory={addMovieToHistory} />
      <MovieDisplay movie={currentMovie} />
      {/* <SearchHistory movies={movies} /> */}
    </div>
  );
}

export default App;
