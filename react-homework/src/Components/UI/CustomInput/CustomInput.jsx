import "./CustomInput.css"

const CustomInput = ({text, value, setData}) => {
  return (
    <input onChange={(e) => setData(e.target.value)} value={value} className="custom-inputs" placeholder={text}></input>
  )
}

export default CustomInput