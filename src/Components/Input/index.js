import { useState } from "react";
import * as config from "../../config";

const API_KEY = config.API_KEY;

async function getMovieData(title, year) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&y=${year}&type=movie`
  );
  const data = await response.json();

  console.log(data);
  return data;
}

function Input({ updateMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(0);

  function updateYear(e) {
    const value = e.target.value;
    setYear(value);
  }

  function updateTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const movie = await getMovieData(title, year);

    if (movie.Response === "False") return;
    else updateMovie(movie);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={updateTitle} type="text" />
      <input onChange={updateYear} type="number" />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default Input;
