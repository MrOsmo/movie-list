import "./CustomOtherInputs.css"

const CustomInput = ({text, value, setData}) => {
  const firstLetter = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  }
  const handleInputLetters = (event) => {
    const inputValue = event.target.value
    setData(firstLetter(inputValue))
  }
  return (
    <input onChange={handleInputLetters} value={value} className="custom-inputs" placeholder={text}></input>
  )
}

export default CustomInput