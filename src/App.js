// src/App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

const API_KEY = "YOUR_OMDB_API_KEY";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="App">
      <Header />
      <Search searchMovies={searchMovies} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
