import "./Pictures.css"

const Pictures = (data) => {
  return (
    <img className="image-style" src={data.image} alt={data.imageHeading} />
  )
}

export default Pictures