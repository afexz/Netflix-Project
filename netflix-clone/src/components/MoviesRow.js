import React, { useState, useEffect } from "react";
import "./moviesrow.css";
import requests from "../resource/requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function MoviesRow({ title, url, posterLarge }) {
  const BASE_URL = `https://api.themoviedb.org/3`;
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const img_url = `https://image.tmdb.org/t/p/original/`;
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}${url}`)
      .then((response) => {
        if (!response.ok) {
          console.error("Network response error");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [url]);

  const opts = {
    height: "395",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieClick = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((error) => console.error("Error finding trailer", error));
    }
  };

  return (
    <>
      <h2 className="title">{title}</h2>
      <div className="movies-row">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              onClick={() => handleMovieClick(movie)}
              src={`${img_url}${movie.poster_path}`}
              alt={movie.name}
              className={`movie-poster ${posterLarge && "movie-poster-lg"}`}
            />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
    </>
  );
}

export default MoviesRow;
