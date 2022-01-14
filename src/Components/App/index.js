import { useState } from "react";

import "./App.css";
import Input from "../Input";
import MovieDisplay from "../MovieDisplay";

function App() {
  const [movie, setMovie] = useState({ Ratings: [] });

  function updateMovie(newMovie) {
    setMovie(newMovie);
  }

  return (
    <div className="App">
      <Input updateMovie={updateMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
