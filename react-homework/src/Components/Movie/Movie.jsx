import React from 'react'
import "./Movie.css"

const Movie = ({title, url, genre, description}) => {

  return (
    <div className="card-style">
      <img className="picture-style" src={url} alt={title} />
      <h1 className="heading-style">{title}</h1>
      <p className="genre-style">{genre}</p>
      <p className="description-style">{description}</p>
    </div>
  )
}

export default Movie