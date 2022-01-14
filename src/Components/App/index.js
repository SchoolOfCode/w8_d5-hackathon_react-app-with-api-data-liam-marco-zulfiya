import "./App.css";
import Input from "../Input";

function App() {
  const [movie, setMovie] = useState({});

  function updateMovie(newMovie) {
    setMovie(newMovie);
  }

  return (
    <div className="App">
      <Input updateMovie={updateMovie} />
    </div>
  );
}

export default App;
