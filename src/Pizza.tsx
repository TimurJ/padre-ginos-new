interface PizzaProps {
  name: string | undefined
  description: string | undefined
  image: string | undefined
}

const Pizza: React.FC<PizzaProps> = ({ name, description, image }) => {
  return (
    <div className="pizza">
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  )
}

export default Pizza
