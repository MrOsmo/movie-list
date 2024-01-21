import "./CustomButton.css"

const CustomButton = (data) => {
  return (
    <button onClick={data.onClick} className="custom-button">{data.text}</button>
  )
}

export default CustomButton