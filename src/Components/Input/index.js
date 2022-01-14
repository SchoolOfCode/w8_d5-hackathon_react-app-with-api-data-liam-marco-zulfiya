import { useState } from "react";

const API_KEY = "92452fc4";

async function getMovieData(title, year) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&y=${year}&type=movie`
  );
  const data = await response.json();

  console.log(data);
  return data;
}

function Input({ updateMovie }) {
  const [title, setTitle] = useState("");

  function updateTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const movie = await getMovieData(title);

    if (movie.Response === "False") return;
    else updateMovie(movie);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={updateTitle} type="text" />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default Input;
