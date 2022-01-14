import { useState } from "react";

function Input({ updateMovie }) {
  const [title, setTitle] = useState("");

  const API_KEY = "92452fc4";

  async function getMovieData(title, year) {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&y=${year}`
    );
    const data = await response.json();
    return data;
  }

  function updateTitle(e) {
    const value = e.target.value;
    setTitle(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const movie = await getMovieData(title);
    updateMovie(movie);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={updateTitle} type="text" />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default Input;
