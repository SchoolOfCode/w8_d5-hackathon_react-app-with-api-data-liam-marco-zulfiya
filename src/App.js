import "./App.css";

const API_KEY = "92452fc4";

async function getMovieData(title, year) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}&y=${year}`);
  const data = await response.json();
  return data;
}

function App() {
  return <div className="App"></div>;
}

export default App;
