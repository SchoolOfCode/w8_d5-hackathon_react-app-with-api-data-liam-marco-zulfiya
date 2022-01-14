import React from "react";

function MovieDisplay({ movie }) {
  const { Title, Year, Genre, Poster, Language, Runtime, Director, Plot, Actors, Ratings } = movie;

  const IMDb = Ratings[0];
  const RottenTomatoes = Ratings[1];
  const Metacritic = Ratings[2];

  return (
    <div>
      <h2>{Title}</h2>
      <h3>{Year}</h3>
      <h3>{Genre}</h3>
      <img src={Poster} alt={`Poster for ${Title}`} />
      <h5>Language: {Language}</h5>
      <h5>{Runtime}</h5>
      <h5>Directed by {Director}</h5>
      <h4>Plot</h4>
      <p>{Plot}</p>
      <h4>Starring</h4>
      <p>{Actors}</p>
      <div id="ratings">
        <h4>IMDb: {IMDb ? IMDb.Value : "Not Found"}</h4>
        <h4>Rotten Tomatoes: {RottenTomatoes ? RottenTomatoes.Value : "Not Found"}</h4>
        <h4>Metacritic: {Metacritic ? Metacritic.Value : "Not Found"}</h4>
      </div>
    </div>
  );
}

export default MovieDisplay;
