import React, { useState } from 'react'
import CustomButton from '../UI/CustomButton/CustomButton'
import CustomInput from '../UI/CustomInput/CustomInput'
import CustomOtherInputs from "../UI/CustomOtherInputs/CustomOtherInputs"
import "./NewMovie.css"

const NewMovie = ({setMovies}) => {
  const [movieName, setMovieName] = useState("")
  const [movieURL, setMovieURL] = useState("")
  const [movieGenre, setMovieGenre] = useState("")
  const [movieDescription, setMovieDescription] = useState("")

  const handleAddMovie = () => {
    if(movieDescription ==="" || movieURL === "" || movieName === "" || movieGenre ==="") {
  console.log("Please fill in all the gaps!") 
    } else {
      console.log("Adding...")
      const newMovieObject = {
      title: movieName,
      url: movieURL,
      genre: movieGenre,
      description: movieDescription,
      id: Math.random()
    }


    setMovies((prevMovies) =>[...prevMovies, newMovieObject])
    setMovieName("")
    setMovieURL("")
    setMovieGenre("")
    setMovieDescription("")
  }

  }

  return (
    <form 
    className="form-style"
    onSubmit={(event) => {
    event.preventDefault()
    handleAddMovie()
    }}>
    <CustomOtherInputs text="Enter the movie name" value={movieName} setData={setMovieName}/>
    <CustomInput text="Enter the URL of the movie" value={movieURL} setData={setMovieURL}/>
    <CustomOtherInputs text="Enter the genre" value={movieGenre} setData={setMovieGenre}/>
    <CustomInput text="Enter the description (copy from internet)" value={movieDescription} setData={setMovieDescription}/>
    <CustomButton text="Add movie" />
     </form>
  )
}

export default NewMovie