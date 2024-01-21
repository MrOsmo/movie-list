import React, { useState } from 'react'
import "./Movies.css"
import NewMovie from '../NewMovie/NewMovie';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([])
  console.log(movies)
  return (
    <div>
      <NewMovie movies={movies} setMovies={setMovies}/>
      <MovieList movies={movies}/>
    </div>
  );
};

export default Movies;
