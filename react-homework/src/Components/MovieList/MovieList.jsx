import React, { useState } from 'react'
import "./MovieList.css"
import Movie from '../Movie/Movie'

const MovieList = ({movies}) => {
  const [genre, newGenre] = useState("All")

  const genreChanger = (event) => {
    newGenre(event.target.value) 
  }
  const filteredGenre = genre === "All" ? movies : movies.filter(movie => movie.genre === genre) 
  return (
    <div className="movies-list">
      <div className="movie-genre">
       <select className="genre-selecting-style" name="genre" id="genre" value={genre} onChange={genreChanger}>
        <option value="All">All</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="Mystery">Mystery</option>
        <option value="Adventure">Adventure</option>
        <option value="Sports">Sports</option>
        <option value="Historical">Historical</option>
       </select>
      </div>
      {filteredGenre.map(({title, url, genre, description, id}) => {
        return <Movie key={id} title={title} url={url} genre={genre} description={description}/>
      })}
  </div>
  )
}

export default MovieList
